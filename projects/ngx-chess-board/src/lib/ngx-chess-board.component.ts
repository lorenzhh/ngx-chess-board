import {Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Piece} from './models/pieces/piece';
import {Color} from './models/pieces/color';
import {King} from './models/pieces/king';
import {UnicodeConstants} from './utils/unicode-constants';
import {Point} from './models/pieces/point';
import {Rook} from './models/pieces/rook';
import {Queen} from './models/pieces/queen';
import {Pawn} from './models/pieces/pawn';
import {Board} from './models/board';
import {MoveUtils} from './utils/move-utils';
import {NgxChessBoardService} from './service/ngx-chess-board.service';
import {NgxChessBoardView} from './ngx-chess-board-view';
import {AvailableMoveDecorator} from './piece-decorator/available-move-decorator';
import {BoardStateProvider} from './board-state-provider/board-state-provider';
import {BoardState} from './board-state-provider/board-state';
import {HistoryMove} from './history-move-provider/history-move';
import {HistoryMoveProvider} from './history-move-provider/history-move-provider';
import {Constants} from './utils/constants';
import {CoordsProvider} from './coords/coords-provider';
import {BoardLoader} from './board-state-provider/board-loader';
import {CdkDragEnd, CdkDragStart} from '@angular/cdk/drag-drop';
import {PiecePromotionModalComponent} from './piece-promotion-modal/piece-promotion-modal.component';
import {Bishop} from './models/pieces/bishop';
import {Knight} from './models/pieces/knight';
import {Arrow} from './drawing-tools/arrow';
import {DrawPoint} from './drawing-tools/draw-point';
import {Circle} from './drawing-tools/circle';
import {DrawProvider} from './drawing-tools/draw-provider';

@Component({
  selector: 'ngx-chess-board',
  templateUrl: './ngx-chess-board.component.html',
  styleUrls: ['./ngx-chess-board.component.scss']
})
export class NgxChessBoardComponent implements OnInit, NgxChessBoardView {

  @Input('size')
  public set size(size: number) {
    if (size && size >= Constants.MIN_BOARD_SIZE && size <= Constants.MAX_BOARD_SIZE) {
      this._size = size;
    } else {
      this._size = Constants.DEFAULT_SIZE;
    }
    this.drawProvider.clear();
    this.calculatePieceSize();
  }

  @HostListener('contextmenu', ['$event'])
  onRightClick(event) {
    event.preventDefault();
  }

  _size: number = Constants.DEFAULT_SIZE;

  @Input('darkTileColor')
  darkTileColor: string = Constants.DEFAULT_DARK_TILE_COLOR;

  @Input('lightTileColor')
  lightTileColor: string = Constants.DEFAULT_LIGHT_TILE_COLOR;

  @Input('showCoords')
  showCoords: boolean = true;

  @Input('dragDisabled')
  dragDisabled: boolean = false;

  @Input('drawDisabled')
  drawDisabled: boolean = false;

  @Output()
  onMove: EventEmitter<any> = new EventEmitter<any>();

  pieceSize: number;
  selected = false;

  @ViewChild('boardRef', {static: false})
  boardRef: ElementRef;

  @ViewChild('modal', {static: false}) modal: PiecePromotionModalComponent;

  board: Board;
  boardStateProvider: BoardStateProvider;
  moveHistoryProvider: HistoryMoveProvider;
  boardLoader: BoardLoader;
  coords: CoordsProvider = new CoordsProvider();
  disabling = false;
  drawProvider: DrawProvider;
  drawPoint: DrawPoint;

  constructor(private ngxChessBoardService: NgxChessBoardService) {
    this.board = new Board();
    this.boardLoader = new BoardLoader(this.board);
    this.boardLoader.addPieces();
    this.boardStateProvider = new BoardStateProvider();
    this.moveHistoryProvider = new HistoryMoveProvider();
    this.drawProvider = new DrawProvider();
  }

  ngOnInit() {
    this.ngxChessBoardService.componentMethodCalled$.subscribe(() => {
      this.board.reset();
    });
    this.calculatePieceSize();
  }

  async onMouseUp(event) {
    if (event.which !== 1 && !this.drawDisabled) {
      this.addDrawPoint(event.x, event.y);
      return;
    }

    this.drawProvider.clear();

    if (this.dragDisabled) {
      return;
    }
    let pointClicked = this.getClickPoint(event);

    if (this.board.activePiece && pointClicked.isEqual(this.board.activePiece.point) && this.disabling) {
      this.disableSelection();
      this.disabling = false;
      return;
    }
    if (this.selected) {
      this.handleClickEvent(pointClicked);
      //   this.possibleMoves = activePiece.getPossibleMoves();
    } else {
      let pieceClicked = this.getPieceByPoint(pointClicked.row, pointClicked.col);
      if (pieceClicked) {

        if ((this.board.currentWhitePlayer && pieceClicked.color === Color.BLACK) || (!this.board.currentWhitePlayer && pieceClicked.color === Color.WHITE)) {
          return;
        }

        this.prepareActivePiece(pieceClicked, pointClicked);
      }
    }
  }

  afterMoveActions() {
    this.checkIfPawnFirstMove(this.board.activePiece);
    this.checkIfRookMoved(this.board.activePiece);
    this.checkIfKingMoved(this.board.activePiece);

    this.board.blackKingChecked = this.board.isKingInCheck(Color.BLACK, this.board.pieces);
    this.board.whiteKingChecked = this.board.isKingInCheck(Color.WHITE, this.board.pieces);

    this.checkForPossibleMoves(Color.BLACK, 'Checkmate!');
    this.checkForPossibleMoves(Color.WHITE, 'Checkmate!');

    this.board.calculateFEN();
    this.checkForPat(Color.BLACK);
    this.checkForPat(Color.WHITE);
    this.disabling = false;
  }

  disableSelection() {
    this.selected = false;
    this.board.possibleCaptures = [];
    this.board.activePiece = null;
    this.board.possibleMoves = [];
  }

  prepareActivePiece(pieceClicked: Piece, pointClicked: Point) {
    this.board.activePiece = pieceClicked;
    this.selected = true;
    this.board.possibleCaptures = new AvailableMoveDecorator(pieceClicked, pointClicked, this.board.currentWhitePlayer ? Color.WHITE : Color.BLACK, this.board).getPossibleCaptures();
    this.board.possibleMoves = new AvailableMoveDecorator(pieceClicked, pointClicked, this.board.currentWhitePlayer ? Color.WHITE : Color.BLACK, this.board).getPossibleMoves();
  }

  getPieceByPoint(row: number, col: number): Piece {
    row = Math.floor(row);
    col = Math.floor(col);
    return this.board.pieces.find(e => e.point.col === col && e.point.row === row);
  }

  isKingChecked(piece: Piece) {
    if (piece instanceof King) {
      return piece.color === Color.WHITE ? this.board.whiteKingChecked : this.board.blackKingChecked;
    }
  }

  getClickPoint(event) {
    return new Point(
      Math.floor((event.y - this.boardRef.nativeElement.getBoundingClientRect().top) / (this.boardRef.nativeElement.getBoundingClientRect().height / 8)),
      Math.floor((event.x - this.boardRef.nativeElement.getBoundingClientRect().left) / (this.boardRef.nativeElement.getBoundingClientRect().width / 8)));
  }

  async movePiece(piece: Piece, newPoint: Point) {
    this.moveHistoryProvider.addMove(new HistoryMove(MoveUtils.format(piece.point, newPoint, this.board.reverted), piece.constructor.name, piece.color === Color.WHITE ? 'white' : 'black'));
    let destPiece = this.board.pieces.find(e => e.point.col === newPoint.col && e.point.row === newPoint.row);

    if (destPiece && piece.color != destPiece.color) {
      this.board.pieces = this.board.pieces.filter(e => e !== destPiece);
    } else if (destPiece && piece.color === destPiece.color) {
      return;
    }
    if (piece instanceof King) {
      let squaresMoved = Math.abs(newPoint.col - piece.point.col);
      if (squaresMoved > 1) {
        if (newPoint.col < 3) {
          let leftRook = this.board.getPieceByField(piece.point.row, 0);
          leftRook.point.col = 3;
        } else {
          let rightRook = this.board.getPieceByField(piece.point.row, 7);
          rightRook.point.col = 5;
        }
      }
    }

    if (piece instanceof Pawn) {
      this.checkIfPawnTakesEnPassant(newPoint);
      this.checkIfPawnEnpassanted(piece, newPoint);
    }

    piece.point = newPoint;
    this.increaseFullMoveCount();
    this.board.currentWhitePlayer = !this.board.currentWhitePlayer;
    return this.checkForPawnPromote(piece);
  }

  checkIfPawnFirstMove(piece: Piece) {
    if (piece instanceof Pawn) {
      (piece as Pawn).isMovedAlready = true;
    }
  }

  private checkIfRookMoved(piece: Piece) {
    if (piece instanceof Rook) {
      piece.isMovedAlready = true;
    }
  }

  private checkIfKingMoved(piece: Piece) {
    if (piece instanceof King) {
      piece.isMovedAlready = true;
    }
  }

  async checkForPawnPromote(piece: Piece) {
    if (!(piece instanceof Pawn)) {
      return;
    }

    if (piece.point.row === 0 || piece.point.row === 7) {
      this.board.pieces = this.board.pieces.filter(e => e !== piece);
      this.openPromoteDialog(piece);
    }
  }

  async openPromoteDialog(piece: Piece) {
    this.modal.open((index) => {
      let isWhite = piece.color === Color.WHITE;
      switch (index) {
        case 1:
          this.board.pieces.push(new Queen(piece.point, piece.color, isWhite ? UnicodeConstants.WHITE_QUEEN : UnicodeConstants.BLACK_QUEEN, this.board));
          break;
        case 2:
          this.board.pieces.push(new Rook(piece.point, piece.color, isWhite ? UnicodeConstants.WHITE_ROOK : UnicodeConstants.BLACK_ROOK, this.board));
          break;
        case 3:
          this.board.pieces.push(new Bishop(piece.point, piece.color, isWhite ? UnicodeConstants.WHITE_BISHOP : UnicodeConstants.BLACK_BISHOP, this.board));
          break;
        case 4:
          this.board.pieces.push(new Knight(piece.point, piece.color, isWhite ? UnicodeConstants.WHITE_KNIGHT : UnicodeConstants.BLACK_KNIGHT, this.board));
          break;
        default:
          this.board.pieces.push(new Queen(piece.point, piece.color, isWhite ? UnicodeConstants.WHITE_QUEEN : UnicodeConstants.BLACK_QUEEN, this.board));
          break;
      }
      this.afterMoveActions();
    });
  }

  private checkForPossibleMoves(color: Color, text: string) {
    if (!this.board.pieces.filter(e => e.color === color)
      .some(e => e.getPossibleMoves().some(f => !MoveUtils.willMoveCauseCheck(color, e.point.row, e.point.col, f.row, f.col, this.board))
        || e.getPossibleCaptures().some(f => !MoveUtils.willMoveCauseCheck(color, e.point.row, e.point.col, f.row, f.col, this.board)))) {
      alert(text);
    }
  }

  private checkForPat(color: Color) {
    if (color === Color.WHITE && !this.board.whiteKingChecked) {
      this.checkForPossibleMoves(color, 'Stalemate!');
    } else if (color === Color.BLACK && !this.board.blackKingChecked) {
      this.checkForPossibleMoves(color, 'Stalemate!');
    }
  }

  private checkIfPawnEnpassanted(piece: Pawn, newPoint: Point) {
    if (Math.abs(piece.point.row - newPoint.row) > 1) {
      this.board.enPassantPiece = piece;
      this.board.enPassantPoint = new Point((piece.point.row + newPoint.row) / 2, piece.point.col);
    } else {
      this.board.enPassantPoint = null;
      this.board.enPassantPiece = null;
    }
  }

  private checkIfPawnTakesEnPassant(newPoint: Point) {
    if (newPoint.isEqual(this.board.enPassantPoint)) {
      this.board.pieces = this.board.pieces
        .filter(piece => piece !== this.board.enPassantPiece);
      this.board.enPassantPoint = null;
      this.board.enPassantPiece = null;
    }
  }

  reset() {
    this.boardStateProvider.clear();
    this.moveHistoryProvider.clear();
    this.boardLoader.addPieces();
    this.board.reset();
    this.coords.reset();
    this.drawProvider.clear();
  }

  reverse() {
    this.selected = false;
    this.board.reverse();
    this.coords.reverse();
  }

  private saveClone() {
    let clone = this.board.clone();

    if (this.board.reverted) {
      clone.reverse();
    }
    this.boardStateProvider.addMove(new BoardState(clone));
  }

  undo() {
    if (!this.boardStateProvider.isEmpty()) {
      let lastBoard = this.boardStateProvider.pop().board;
      if (this.board.reverted) {
        lastBoard.reverse();
      }
      this.board = lastBoard;
      this.boardLoader.setBoard(this.board);
      this.board.possibleCaptures = [];
      this.board.possibleMoves = [];
      this.moveHistoryProvider.pop();
    }
  }

  getMoveHistory() {
    return JSON.stringify(this.moveHistoryProvider.getAll());
  }

  private calculatePieceSize() {
    this.pieceSize = this._size / 10;
  }

  setFEN(fen: string) {
    try {
      this.boardLoader.loadFEN(fen);
    } catch (e) {
      this.boardLoader.addPieces();
    }
  }

  getFEN() {
    return this.board.fen;
  }

  private increaseFullMoveCount() {
    if (!this.board.currentWhitePlayer) {
      ++this.board.fullMoveCount;
    }
  }

  dragEnded(event: CdkDragEnd) {
    event.source.reset();
    event.source.element.nativeElement.style.zIndex = '0';
    event.source.element.nativeElement.style.pointerEvents = 'auto';
    event.source.element.nativeElement.style.touchAction = 'auto';
  }

  dragStart(event: CdkDragStart) {
    let style = event.source.element.nativeElement.style;
    style.position = 'relative';
    style.zIndex = '1000';
    style.touchAction = 'none';
    style.pointerEvents = 'none';
  }

  private async handleClickEvent(pointClicked: Point) {
    if (this.board.isPointInPossibleMoves(pointClicked) || this.board.isPointInPossibleCaptures(pointClicked)) {
      this.saveClone();
      this.board.lastMoveSrc = new Point(this.board.activePiece.point.row, this.board.activePiece.point.col);
      this.board.lastMoveDest = pointClicked;
      await this.movePiece(this.board.activePiece, pointClicked);
      this.afterMoveActions();
      this.onMove.emit();
    }

    this.disableSelection();
    let pieceClicked = this.getPieceByPoint(pointClicked.row, pointClicked.col);
    if (pieceClicked) {

      if ((this.board.currentWhitePlayer && pieceClicked.color === Color.BLACK) || (!this.board.currentWhitePlayer && pieceClicked.color === Color.WHITE)) {
        return;
      }

      this.prepareActivePiece(pieceClicked, pointClicked);
    }
  }

  onMouseDown(event: any) {

    if (event.which !== 1) {
      this.drawPoint = this.getDrawingPoint(event.x, event.y);
      return;
    }
    let pointClicked = this.getClickPoint(event);

    this.drawProvider.clear();

    if (this.board.activePiece && pointClicked.isEqual(this.board.activePiece.point)) {
      this.disabling = true;
      return;
    }

    if (this.selected) {
      this.handleClickEvent(pointClicked);
      //   this.possibleMoves = activePiece.getPossibleMoves();
    } else {
      let pieceClicked = this.getPieceByPoint(pointClicked.row, pointClicked.col);
      if (pieceClicked) {

        if ((this.board.currentWhitePlayer && pieceClicked.color === Color.BLACK) || (!this.board.currentWhitePlayer && pieceClicked.color === Color.WHITE)) {
          return;
        }

        this.prepareActivePiece(pieceClicked, pointClicked);
      }
    }
  }

  getDrawingPoint(x: number, y: number) {
    let squareSize = this._size / 8;
    let xx = Math.floor((x - this.boardRef.nativeElement.getBoundingClientRect().left) / squareSize);
    let yy = Math.floor((y - this.boardRef.nativeElement.getBoundingClientRect().top) / squareSize);
    return new DrawPoint(
      Math.floor(xx * squareSize + squareSize / 2),
      Math.floor(yy * squareSize + squareSize / 2),
    );
  }

  private addDrawPoint(x: any, y: any) {
    let upPoint = this.getDrawingPoint(x, y);
    if (this.drawPoint.isEqual(upPoint)) {
      let circle = new Circle();
      circle.drawPoint = upPoint;
      if (!this.drawProvider.containsCircle(circle)) {
        this.drawProvider.addCircle(circle);
      }
    } else {
      let arrow = new Arrow();
      arrow.start = this.drawPoint;
      arrow.end = upPoint;

      if (!this.drawProvider.containsArrow(arrow)) {
        this.drawProvider.addArrow(arrow);
      }
    }
  }

}
