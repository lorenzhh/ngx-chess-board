/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-chess-board.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, HostListener, Input, Output, ViewChild } from '@angular/core';
import { Color } from './models/pieces/color';
import { King } from './models/pieces/king';
import { UnicodeConstants } from './utils/unicode-constants';
import { Point } from './models/pieces/point';
import { Rook } from './models/pieces/rook';
import { Queen } from './models/pieces/queen';
import { Pawn } from './models/pieces/pawn';
import { Board } from './models/board';
import { MoveUtils } from './utils/move-utils';
import { NgxChessBoardService } from './service/ngx-chess-board.service';
import { AvailableMoveDecorator } from './piece-decorator/available-move-decorator';
import { BoardStateProvider } from './board-state-provider/board-state-provider';
import { BoardState } from './board-state-provider/board-state';
import { HistoryMove } from './history-move-provider/history-move';
import { HistoryMoveProvider } from './history-move-provider/history-move-provider';
import { Constants } from './utils/constants';
import { CoordsProvider } from './coords/coords-provider';
import { BoardLoader } from './board-state-provider/board-loader';
import { PiecePromotionModalComponent } from './piece-promotion-modal/piece-promotion-modal.component';
import { Bishop } from './models/pieces/bishop';
import { Knight } from './models/pieces/knight';
import { Arrow } from './drawing-tools/arrow';
import { DrawPoint } from './drawing-tools/draw-point';
import { Circle } from './drawing-tools/circle';
import { DrawProvider } from './drawing-tools/draw-provider';
export class NgxChessBoardComponent {
    /**
     * @param {?} ngxChessBoardService
     */
    constructor(ngxChessBoardService) {
        this.ngxChessBoardService = ngxChessBoardService;
        this._size = Constants.DEFAULT_SIZE;
        this.darkTileColor = Constants.DEFAULT_DARK_TILE_COLOR;
        this.lightTileColor = Constants.DEFAULT_LIGHT_TILE_COLOR;
        this.showCoords = true;
        this.dragDisabled = false;
        this.drawDisabled = false;
        this.onMove = new EventEmitter();
        this.selected = false;
        this.coords = new CoordsProvider();
        this.disabling = false;
        this.board = new Board();
        this.boardLoader = new BoardLoader(this.board);
        this.boardLoader.addPieces();
        this.boardStateProvider = new BoardStateProvider();
        this.moveHistoryProvider = new HistoryMoveProvider();
        this.drawProvider = new DrawProvider();
    }
    /**
     * @param {?} size
     * @return {?}
     */
    set size(size) {
        if (size && size >= Constants.MIN_BOARD_SIZE && size <= Constants.MAX_BOARD_SIZE) {
            this._size = size;
        }
        else {
            this._size = Constants.DEFAULT_SIZE;
        }
        this.drawProvider.clear();
        this.calculatePieceSize();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onRightClick(event) {
        event.preventDefault();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.ngxChessBoardService.componentMethodCalled$.subscribe((/**
         * @return {?}
         */
        () => {
            this.board.reset();
        }));
        this.calculatePieceSize();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseUp(event) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (event.which !== 1 && !this.drawDisabled) {
                this.addDrawPoint(event.x, event.y);
                return;
            }
            this.drawProvider.clear();
            if (this.dragDisabled) {
                return;
            }
            /** @type {?} */
            let pointClicked = this.getClickPoint(event);
            if (this.board.activePiece && pointClicked.isEqual(this.board.activePiece.point) && this.disabling) {
                this.disableSelection();
                this.disabling = false;
                return;
            }
            if (this.selected) {
                this.handleClickEvent(pointClicked);
                //   this.possibleMoves = activePiece.getPossibleMoves();
            }
            else {
                /** @type {?} */
                let pieceClicked = this.getPieceByPoint(pointClicked.row, pointClicked.col);
                if (pieceClicked) {
                    if ((this.board.currentWhitePlayer && pieceClicked.color === Color.BLACK) || (!this.board.currentWhitePlayer && pieceClicked.color === Color.WHITE)) {
                        return;
                    }
                    this.prepareActivePiece(pieceClicked, pointClicked);
                }
            }
        });
    }
    /**
     * @return {?}
     */
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
    /**
     * @return {?}
     */
    disableSelection() {
        this.selected = false;
        this.board.possibleCaptures = [];
        this.board.activePiece = null;
        this.board.possibleMoves = [];
    }
    /**
     * @param {?} pieceClicked
     * @param {?} pointClicked
     * @return {?}
     */
    prepareActivePiece(pieceClicked, pointClicked) {
        this.board.activePiece = pieceClicked;
        this.selected = true;
        this.board.possibleCaptures = new AvailableMoveDecorator(pieceClicked, pointClicked, this.board.currentWhitePlayer ? Color.WHITE : Color.BLACK, this.board).getPossibleCaptures();
        this.board.possibleMoves = new AvailableMoveDecorator(pieceClicked, pointClicked, this.board.currentWhitePlayer ? Color.WHITE : Color.BLACK, this.board).getPossibleMoves();
    }
    /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    getPieceByPoint(row, col) {
        row = Math.floor(row);
        col = Math.floor(col);
        return this.board.pieces.find((/**
         * @param {?} e
         * @return {?}
         */
        e => e.point.col === col && e.point.row === row));
    }
    /**
     * @param {?} piece
     * @return {?}
     */
    isKingChecked(piece) {
        if (piece instanceof King) {
            return piece.color === Color.WHITE ? this.board.whiteKingChecked : this.board.blackKingChecked;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    getClickPoint(event) {
        return new Point(Math.floor((event.y - this.boardRef.nativeElement.getBoundingClientRect().top) / (this.boardRef.nativeElement.getBoundingClientRect().height / 8)), Math.floor((event.x - this.boardRef.nativeElement.getBoundingClientRect().left) / (this.boardRef.nativeElement.getBoundingClientRect().width / 8)));
    }
    /**
     * @param {?} piece
     * @param {?} newPoint
     * @return {?}
     */
    movePiece(piece, newPoint) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.moveHistoryProvider.addMove(new HistoryMove(MoveUtils.format(piece.point, newPoint, this.board.reverted), piece.constructor.name, piece.color === Color.WHITE ? 'white' : 'black'));
            /** @type {?} */
            let destPiece = this.board.pieces.find((/**
             * @param {?} e
             * @return {?}
             */
            e => e.point.col === newPoint.col && e.point.row === newPoint.row));
            if (destPiece && piece.color != destPiece.color) {
                this.board.pieces = this.board.pieces.filter((/**
                 * @param {?} e
                 * @return {?}
                 */
                e => e !== destPiece));
            }
            else if (destPiece && piece.color === destPiece.color) {
                return;
            }
            if (piece instanceof King) {
                /** @type {?} */
                let squaresMoved = Math.abs(newPoint.col - piece.point.col);
                if (squaresMoved > 1) {
                    if (newPoint.col < 3) {
                        /** @type {?} */
                        let leftRook = this.board.getPieceByField(piece.point.row, 0);
                        leftRook.point.col = 3;
                    }
                    else {
                        /** @type {?} */
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
        });
    }
    /**
     * @param {?} piece
     * @return {?}
     */
    checkIfPawnFirstMove(piece) {
        if (piece instanceof Pawn) {
            ((/** @type {?} */ (piece))).isMovedAlready = true;
        }
    }
    /**
     * @private
     * @param {?} piece
     * @return {?}
     */
    checkIfRookMoved(piece) {
        if (piece instanceof Rook) {
            piece.isMovedAlready = true;
        }
    }
    /**
     * @private
     * @param {?} piece
     * @return {?}
     */
    checkIfKingMoved(piece) {
        if (piece instanceof King) {
            piece.isMovedAlready = true;
        }
    }
    /**
     * @param {?} piece
     * @return {?}
     */
    checkForPawnPromote(piece) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (!(piece instanceof Pawn)) {
                return;
            }
            if (piece.point.row === 0 || piece.point.row === 7) {
                this.board.pieces = this.board.pieces.filter((/**
                 * @param {?} e
                 * @return {?}
                 */
                e => e !== piece));
                this.openPromoteDialog(piece);
            }
        });
    }
    /**
     * @param {?} piece
     * @return {?}
     */
    openPromoteDialog(piece) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.modal.open((/**
             * @param {?} index
             * @return {?}
             */
            (index) => {
                /** @type {?} */
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
            }));
        });
    }
    /**
     * @private
     * @param {?} color
     * @param {?} text
     * @return {?}
     */
    checkForPossibleMoves(color, text) {
        if (!this.board.pieces.filter((/**
         * @param {?} e
         * @return {?}
         */
        e => e.color === color))
            .some((/**
         * @param {?} e
         * @return {?}
         */
        e => e.getPossibleMoves().some((/**
         * @param {?} f
         * @return {?}
         */
        f => !MoveUtils.willMoveCauseCheck(color, e.point.row, e.point.col, f.row, f.col, this.board)))
            || e.getPossibleCaptures().some((/**
             * @param {?} f
             * @return {?}
             */
            f => !MoveUtils.willMoveCauseCheck(color, e.point.row, e.point.col, f.row, f.col, this.board)))))) {
            alert(text);
        }
    }
    /**
     * @private
     * @param {?} color
     * @return {?}
     */
    checkForPat(color) {
        if (color === Color.WHITE && !this.board.whiteKingChecked) {
            this.checkForPossibleMoves(color, 'Stalemate!');
        }
        else if (color === Color.BLACK && !this.board.blackKingChecked) {
            this.checkForPossibleMoves(color, 'Stalemate!');
        }
    }
    /**
     * @private
     * @param {?} piece
     * @param {?} newPoint
     * @return {?}
     */
    checkIfPawnEnpassanted(piece, newPoint) {
        if (Math.abs(piece.point.row - newPoint.row) > 1) {
            this.board.enPassantPiece = piece;
            this.board.enPassantPoint = new Point((piece.point.row + newPoint.row) / 2, piece.point.col);
        }
        else {
            this.board.enPassantPoint = null;
            this.board.enPassantPiece = null;
        }
    }
    /**
     * @private
     * @param {?} newPoint
     * @return {?}
     */
    checkIfPawnTakesEnPassant(newPoint) {
        if (newPoint.isEqual(this.board.enPassantPoint)) {
            this.board.pieces = this.board.pieces
                .filter((/**
             * @param {?} piece
             * @return {?}
             */
            piece => piece !== this.board.enPassantPiece));
            this.board.enPassantPoint = null;
            this.board.enPassantPiece = null;
        }
    }
    /**
     * @return {?}
     */
    reset() {
        this.boardStateProvider.clear();
        this.moveHistoryProvider.clear();
        this.boardLoader.addPieces();
        this.board.reset();
        this.coords.reset();
        this.drawProvider.clear();
    }
    /**
     * @return {?}
     */
    reverse() {
        this.selected = false;
        this.board.reverse();
        this.coords.reverse();
    }
    /**
     * @private
     * @return {?}
     */
    saveClone() {
        /** @type {?} */
        let clone = this.board.clone();
        if (this.board.reverted) {
            clone.reverse();
        }
        this.boardStateProvider.addMove(new BoardState(clone));
    }
    /**
     * @return {?}
     */
    undo() {
        if (!this.boardStateProvider.isEmpty()) {
            /** @type {?} */
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
    /**
     * @return {?}
     */
    getMoveHistory() {
        return JSON.stringify(this.moveHistoryProvider.getAll());
    }
    /**
     * @private
     * @return {?}
     */
    calculatePieceSize() {
        this.pieceSize = this._size / 10;
    }
    /**
     * @param {?} fen
     * @return {?}
     */
    setFEN(fen) {
        try {
            this.boardLoader.loadFEN(fen);
        }
        catch (e) {
            this.boardLoader.addPieces();
        }
    }
    /**
     * @return {?}
     */
    getFEN() {
        return this.board.fen;
    }
    /**
     * @private
     * @return {?}
     */
    increaseFullMoveCount() {
        if (!this.board.currentWhitePlayer) {
            ++this.board.fullMoveCount;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragEnded(event) {
        event.source.reset();
        event.source.element.nativeElement.style.zIndex = '0';
        event.source.element.nativeElement.style.pointerEvents = 'auto';
        event.source.element.nativeElement.style.touchAction = 'auto';
    }
    /**
     * @param {?} event
     * @return {?}
     */
    dragStart(event) {
        /** @type {?} */
        let style = event.source.element.nativeElement.style;
        style.position = 'relative';
        style.zIndex = '1000';
        style.touchAction = 'none';
        style.pointerEvents = 'none';
    }
    /**
     * @private
     * @param {?} pointClicked
     * @return {?}
     */
    handleClickEvent(pointClicked) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.board.isPointInPossibleMoves(pointClicked) || this.board.isPointInPossibleCaptures(pointClicked)) {
                this.saveClone();
                this.board.lastMoveSrc = new Point(this.board.activePiece.point.row, this.board.activePiece.point.col);
                this.board.lastMoveDest = pointClicked;
                yield this.movePiece(this.board.activePiece, pointClicked);
                this.afterMoveActions();
                this.onMove.emit();
            }
            this.disableSelection();
            /** @type {?} */
            let pieceClicked = this.getPieceByPoint(pointClicked.row, pointClicked.col);
            if (pieceClicked) {
                if ((this.board.currentWhitePlayer && pieceClicked.color === Color.BLACK) || (!this.board.currentWhitePlayer && pieceClicked.color === Color.WHITE)) {
                    return;
                }
                this.prepareActivePiece(pieceClicked, pointClicked);
            }
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMouseDown(event) {
        if (event.which !== 1) {
            this.drawPoint = this.getDrawingPoint(event.x, event.y);
            return;
        }
        /** @type {?} */
        let pointClicked = this.getClickPoint(event);
        this.drawProvider.clear();
        if (this.board.activePiece && pointClicked.isEqual(this.board.activePiece.point)) {
            this.disabling = true;
            return;
        }
        if (this.selected) {
            this.handleClickEvent(pointClicked);
            //   this.possibleMoves = activePiece.getPossibleMoves();
        }
        else {
            /** @type {?} */
            let pieceClicked = this.getPieceByPoint(pointClicked.row, pointClicked.col);
            if (pieceClicked) {
                if ((this.board.currentWhitePlayer && pieceClicked.color === Color.BLACK) || (!this.board.currentWhitePlayer && pieceClicked.color === Color.WHITE)) {
                    return;
                }
                this.prepareActivePiece(pieceClicked, pointClicked);
            }
        }
    }
    /**
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    getDrawingPoint(x, y) {
        /** @type {?} */
        let squareSize = this._size / 8;
        /** @type {?} */
        let xx = Math.floor((x - this.boardRef.nativeElement.getBoundingClientRect().left) / squareSize);
        /** @type {?} */
        let yy = Math.floor((y - this.boardRef.nativeElement.getBoundingClientRect().top) / squareSize);
        return new DrawPoint(Math.floor(xx * squareSize + squareSize / 2), Math.floor(yy * squareSize + squareSize / 2));
    }
    /**
     * @private
     * @param {?} x
     * @param {?} y
     * @return {?}
     */
    addDrawPoint(x, y) {
        /** @type {?} */
        let upPoint = this.getDrawingPoint(x, y);
        if (this.drawPoint.isEqual(upPoint)) {
            /** @type {?} */
            let circle = new Circle();
            circle.drawPoint = upPoint;
            if (!this.drawProvider.containsCircle(circle)) {
                this.drawProvider.addCircle(circle);
            }
        }
        else {
            /** @type {?} */
            let arrow = new Arrow();
            arrow.start = this.drawPoint;
            arrow.end = upPoint;
            if (!this.drawProvider.containsArrow(arrow)) {
                this.drawProvider.addArrow(arrow);
            }
        }
    }
}
NgxChessBoardComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-chess-board',
                template: "<div id=\"board\" [style.height.px]=\"_size\" [style.width.px]=\"_size\" #boardRef (pointerdown)=\"onMouseDown($event)\"\r\n     (pointerup)=\"onMouseUp($event)\">\r\n  <div id=\"drag\">\r\n    <div *ngFor=\"let row of board.board; let i = index\" class=\"board-row\">\r\n      <div *ngFor=\"let col of row; let j = index\" class=\"board-col\"\r\n           [style.background-color]=\"((i + j) %2 === 0 ) ?  lightTileColor : darkTileColor\"\r\n           [ngClass]=\"[board.isXYInPointSelection(i,j) ? 'point-circle':'',board.isXYInActiveMove(i,j) ? 'current-selection':'' ,board.isXYInPossibleMoves(i,j) ? 'possible-point' : '', board.isXYInPossibleCaptures(i,j) ? 'possible-capture' : '',  isKingChecked(getPieceByPoint(i,j)) ? 'king-check' : '', board.isXYInSourceMove(i,j)?'source-move':'',board.isXYInDestMove(i,j)?'dest-move':'']\">\r\n        <span *ngIf=\"showCoords && j === 7\" class=\"yCoord\" [style.color]=\"(i % 2 === 0)? lightTileColor : darkTileColor\"\r\n              [style.font-size.px]=\"pieceSize / 4\">{{coords.yCoords[i]}}</span>\r\n        <span *ngIf=\"showCoords && i === 7\" class=\"xCoord\" [style.color]=\"(j % 2 === 0)? lightTileColor : darkTileColor\"\r\n              [style.font-size.px]=\"pieceSize / 4\">{{coords.xCoords[j]}}</span>\r\n        <div *ngIf=\"getPieceByPoint(i, j)\" style=\"height:100%; width:100%\">\r\n          <div cdkDrag\r\n               (cdkDragStarted)=\"dragStart($event)\"\r\n               (cdkDragEnded)=\"dragEnded($event)\"\r\n               [cdkDragDisabled]=\"dragDisabled\"\r\n               class=\"piece\" [style.font-size]=\"pieceSize + 'px'\" [innerHTML]=\"getPieceByPoint(i,j).image\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <svg [attr.width]=\"_size\" [attr.height]=\"_size\" style=\"position:absolute;top:0; pointer-events: none\">\r\n\r\n    <defs>\r\n      <marker id=\"markerArrow\" style=\"marker-offset: 20px\" markerWidth=\"13\" markerHeight=\"13\" refX=\"10\" refY=\"6\"\r\n              orient=\"auto\">\r\n        <path d=\"M2,2 L2,11 L10,6 L2,2\" style=\"fill: #00ea0c;\"/>\r\n      </marker>\r\n    </defs>\r\n    <line [attr.x1]=\"arrow.start.x\" [attr.y1]=\"arrow.start.y\" [attr.x2]=\"arrow.end.x\" [attr.y2]=\"arrow.end.y\"\r\n          class=\"arrow\" *ngFor=\"let arrow of drawProvider.arrows\"/>\r\n\r\n    <circle [attr.cx]=\"circle.drawPoint.x\" [attr.cy]=\"circle.drawPoint.y\" [attr.r]=\"_size/18\" stroke=\"blueviolet\"\r\n            stroke-width=\"0.8\" fill-opacity=\"0.0\" *ngFor=\"let circle of drawProvider.circles\"/>\r\n  </svg>\r\n  <app-piece-promotion-modal #modal></app-piece-promotion-modal>\r\n\r\n</div>\r\n",
                styles: ["@charset \"UTF-8\";#board{font-family:\"Courier New\",serif;position:relative}.board-row{display:block;width:100%;height:12.5%;position:relative}.board-col{position:relative;display:inline-block;width:12.5%;vertical-align:top;cursor:default;height:100%}.piece{height:100%;cursor:-webkit-grab;cursor:grab;width:100%;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;background-size:cover;justify-content:center;text-align:center;color:#000!important}.piece::after{content:\"\u200B\"}#drag{height:100%;width:100%}.possible-point{border:3px solid #000;position:static;box-sizing:border-box}.possible-capture:hover,.possible-point:hover{opacity:.4}.possible-capture{border:3px solid #00ff2a;box-sizing:border-box}.king-check{border:3px solid red;box-sizing:border-box}.source-move{background-color:rgba(146,111,26,.79)!important}.dest-move{background-color:#b28e1a!important}.current-selection{background-color:#d3a91e!important}.yCoord{position:absolute;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;cursor:pointer;right:.2em;font-family:\"Lucida Console\",Courier,monospace;box-sizing:border-box}.xCoord{position:absolute;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-user-select:none;cursor:pointer;left:.2em;bottom:0;font-family:\"Lucida Console\",Courier,monospace;box-sizing:border-box}.hovering{background-color:red!important}.arrow{stroke:#00ea0c;stroke-width:2;marker-end:url(#markerArrow)}svg{-webkit-filter:drop-shadow(1px 1px 0 #111) drop-shadow(-1px 1px 0 #111) drop-shadow(1px -1px 0 #111) drop-shadow(-1px -1px 0 #111);filter:drop-shadow(1px 1px 0 #111) drop-shadow(-1px 1px 0 #111) drop-shadow(1px -1px 0 #111) drop-shadow(-1px -1px 0 #111)}"]
            }] }
];
/** @nocollapse */
NgxChessBoardComponent.ctorParameters = () => [
    { type: NgxChessBoardService }
];
NgxChessBoardComponent.propDecorators = {
    size: [{ type: Input, args: ['size',] }],
    onRightClick: [{ type: HostListener, args: ['contextmenu', ['$event'],] }],
    darkTileColor: [{ type: Input, args: ['darkTileColor',] }],
    lightTileColor: [{ type: Input, args: ['lightTileColor',] }],
    showCoords: [{ type: Input, args: ['showCoords',] }],
    dragDisabled: [{ type: Input, args: ['dragDisabled',] }],
    drawDisabled: [{ type: Input, args: ['drawDisabled',] }],
    onMove: [{ type: Output }],
    boardRef: [{ type: ViewChild, args: ['boardRef', { static: false },] }],
    modal: [{ type: ViewChild, args: ['modal', { static: false },] }]
};
if (false) {
    /** @type {?} */
    NgxChessBoardComponent.prototype._size;
    /** @type {?} */
    NgxChessBoardComponent.prototype.darkTileColor;
    /** @type {?} */
    NgxChessBoardComponent.prototype.lightTileColor;
    /** @type {?} */
    NgxChessBoardComponent.prototype.showCoords;
    /** @type {?} */
    NgxChessBoardComponent.prototype.dragDisabled;
    /** @type {?} */
    NgxChessBoardComponent.prototype.drawDisabled;
    /** @type {?} */
    NgxChessBoardComponent.prototype.onMove;
    /** @type {?} */
    NgxChessBoardComponent.prototype.pieceSize;
    /** @type {?} */
    NgxChessBoardComponent.prototype.selected;
    /** @type {?} */
    NgxChessBoardComponent.prototype.boardRef;
    /** @type {?} */
    NgxChessBoardComponent.prototype.modal;
    /** @type {?} */
    NgxChessBoardComponent.prototype.board;
    /** @type {?} */
    NgxChessBoardComponent.prototype.boardStateProvider;
    /** @type {?} */
    NgxChessBoardComponent.prototype.moveHistoryProvider;
    /** @type {?} */
    NgxChessBoardComponent.prototype.boardLoader;
    /** @type {?} */
    NgxChessBoardComponent.prototype.coords;
    /** @type {?} */
    NgxChessBoardComponent.prototype.disabling;
    /** @type {?} */
    NgxChessBoardComponent.prototype.drawProvider;
    /** @type {?} */
    NgxChessBoardComponent.prototype.drawPoint;
    /**
     * @type {?}
     * @private
     */
    NgxChessBoardComponent.prototype.ngxChessBoardService;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNoZXNzLWJvYXJkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGVzcy1ib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtY2hlc3MtYm9hcmQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBQyxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsS0FBSyxFQUFVLE1BQU0sRUFBRSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFbEgsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLHVCQUF1QixDQUFDO0FBQzVDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxzQkFBc0IsQ0FBQztBQUMxQyxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSwyQkFBMkIsQ0FBQztBQUMzRCxPQUFPLEVBQUMsS0FBSyxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDNUMsT0FBTyxFQUFDLElBQUksRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQzFDLE9BQU8sRUFBQyxLQUFLLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUM1QyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDMUMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQUM3QyxPQUFPLEVBQUMsb0JBQW9CLEVBQUMsTUFBTSxtQ0FBbUMsQ0FBQztBQUV2RSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw0Q0FBNEMsQ0FBQztBQUNsRixPQUFPLEVBQUMsa0JBQWtCLEVBQUMsTUFBTSw2Q0FBNkMsQ0FBQztBQUMvRSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sb0NBQW9DLENBQUM7QUFDOUQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHNDQUFzQyxDQUFDO0FBQ2pFLE9BQU8sRUFBQyxtQkFBbUIsRUFB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OENBQzhCOztJQUU5Qix3Q0FDb0Q7O0lBRXBELDJDQUFrQjs7SUFDbEIsMENBQWlCOztJQUVqQiwwQ0FDcUI7O0lBRXJCLHVDQUF5RTs7SUFFekUsdUNBQWE7O0lBQ2Isb0RBQXVDOztJQUN2QyxxREFBeUM7O0lBQ3pDLDZDQUF5Qjs7SUFDekIsd0NBQThDOztJQUM5QywyQ0FBa0I7O0lBQ2xCLDhDQUEyQjs7SUFDM0IsMkNBQXFCOzs7OztJQUVULHNEQUFrRCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1BpZWNlfSBmcm9tICcuL21vZGVscy9waWVjZXMvcGllY2UnO1xyXG5pbXBvcnQge0NvbG9yfSBmcm9tICcuL21vZGVscy9waWVjZXMvY29sb3InO1xyXG5pbXBvcnQge0tpbmd9IGZyb20gJy4vbW9kZWxzL3BpZWNlcy9raW5nJztcclxuaW1wb3J0IHtVbmljb2RlQ29uc3RhbnRzfSBmcm9tICcuL3V0aWxzL3VuaWNvZGUtY29uc3RhbnRzJztcclxuaW1wb3J0IHtQb2ludH0gZnJvbSAnLi9tb2RlbHMvcGllY2VzL3BvaW50JztcclxuaW1wb3J0IHtSb29rfSBmcm9tICcuL21vZGVscy9waWVjZXMvcm9vayc7XHJcbmltcG9ydCB7UXVlZW59IGZyb20gJy4vbW9kZWxzL3BpZWNlcy9xdWVlbic7XHJcbmltcG9ydCB7UGF3bn0gZnJvbSAnLi9tb2RlbHMvcGllY2VzL3Bhd24nO1xyXG5pbXBvcnQge0JvYXJkfSBmcm9tICcuL21vZGVscy9ib2FyZCc7XHJcbmltcG9ydCB7TW92ZVV0aWxzfSBmcm9tICcuL3V0aWxzL21vdmUtdXRpbHMnO1xyXG5pbXBvcnQge05neENoZXNzQm9hcmRTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2Uvbmd4LWNoZXNzLWJvYXJkLnNlcnZpY2UnO1xyXG5pbXBvcnQge05neENoZXNzQm9hcmRWaWV3fSBmcm9tICcuL25neC1jaGVzcy1ib2FyZC12aWV3JztcclxuaW1wb3J0IHtBdmFpbGFibGVNb3ZlRGVjb3JhdG9yfSBmcm9tICcuL3BpZWNlLWRlY29yYXRvci9hdmFpbGFibGUtbW92ZS1kZWNvcmF0b3InO1xyXG5pbXBvcnQge0JvYXJkU3RhdGVQcm92aWRlcn0gZnJvbSAnLi9ib2FyZC1zdGF0ZS1wcm92aWRlci9ib2FyZC1zdGF0ZS1wcm92aWRlcic7XHJcbmltcG9ydCB7Qm9hcmRTdGF0ZX0gZnJvbSAnLi9ib2FyZC1zdGF0ZS1wcm92aWRlci9ib2FyZC1zdGF0ZSc7XHJcbmltcG9ydCB7SGlzdG9yeU1vdmV9IGZyb20gJy4vaGlzdG9yeS1tb3ZlLXByb3ZpZGVyL2hpc3RvcnktbW92ZSc7XHJcbmltcG9ydCB7SGlzdG9yeU1vdmVQcm92aWRlcn0gZnJvbSAnLi9oaXN0b3J5LW1vdmUtcHJvdmlkZXIvaGlzdG9yeS1tb3ZlLXByb3ZpZGVyJztcclxuaW1wb3J0IHtDb25zdGFudHN9IGZyb20gJy4vdXRpbHMvY29uc3RhbnRzJztcclxuaW1wb3J0IHtDb29yZHNQcm92aWRlcn0gZnJvbSAnLi9jb29yZHMvY29vcmRzLXByb3ZpZGVyJztcclxuaW1wb3J0IHtCb2FyZExvYWRlcn0gZnJvbSAnLi9ib2FyZC1zdGF0ZS1wcm92aWRlci9ib2FyZC1sb2FkZXInO1xyXG5pbXBvcnQge0Nka0RyYWdFbmQsIENka0RyYWdTdGFydH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcbmltcG9ydCB7UGllY2VQcm9tb3Rpb25Nb2RhbENvbXBvbmVudH0gZnJvbSAnLi9waWVjZS1wcm9tb3Rpb24tbW9kYWwvcGllY2UtcHJvbW90aW9uLW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7QmlzaG9wfSBmcm9tICcuL21vZGVscy9waWVjZXMvYmlzaG9wJztcclxuaW1wb3J0IHtLbmlnaHR9IGZyb20gJy4vbW9kZWxzL3BpZWNlcy9rbmlnaHQnO1xyXG5pbXBvcnQge0Fycm93fSBmcm9tICcuL2RyYXdpbmctdG9vbHMvYXJyb3cnO1xyXG5pbXBvcnQge0RyYXdQb2ludH0gZnJvbSAnLi9kcmF3aW5nLXRvb2xzL2RyYXctcG9pbnQnO1xyXG5pbXBvcnQge0NpcmNsZX0gZnJvbSAnLi9kcmF3aW5nLXRvb2xzL2NpcmNsZSc7XHJcbmltcG9ydCB7RHJhd1Byb3ZpZGVyfSBmcm9tICcuL2RyYXdpbmctdG9vbHMvZHJhdy1wcm92aWRlcic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ25neC1jaGVzcy1ib2FyZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL25neC1jaGVzcy1ib2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vbmd4LWNoZXNzLWJvYXJkLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIE5neENoZXNzQm9hcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE5neENoZXNzQm9hcmRWaWV3IHtcclxuXHJcbiAgQElucHV0KCdzaXplJylcclxuICBwdWJsaWMgc2V0IHNpemUoc2l6ZTogbnVtYmVyKSB7XHJcbiAgICBpZiAoc2l6ZSAmJiBzaXplID49IENvbnN0YW50cy5NSU5fQk9BUkRfU0laRSAmJiBzaXplIDw9IENvbnN0YW50cy5NQVhfQk9BUkRfU0laRSkge1xyXG4gICAgICB0aGlzLl9zaXplID0gc2l6ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX3NpemUgPSBDb25zdGFudHMuREVGQVVMVF9TSVpFO1xyXG4gICAgfVxyXG4gICAgdGhpcy5kcmF3UHJvdmlkZXIuY2xlYXIoKTtcclxuICAgIHRoaXMuY2FsY3VsYXRlUGllY2VTaXplKCk7XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdjb250ZXh0bWVudScsIFsnJGV2ZW50J10pXHJcbiAgb25SaWdodENsaWNrKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gIH1cclxuXHJcbiAgX3NpemU6IG51bWJlciA9IENvbnN0YW50cy5ERUZBVUxUX1NJWkU7XHJcblxyXG4gIEBJbnB1dCgnZGFya1RpbGVDb2xvcicpXHJcbiAgZGFya1RpbGVDb2xvcjogc3RyaW5nID0gQ29uc3RhbnRzLkRFRkFVTFRfREFSS19USUxFX0NPTE9SO1xyXG5cclxuICBASW5wdXQoJ2xpZ2h0VGlsZUNvbG9yJylcclxuICBsaWdodFRpbGVDb2xvcjogc3RyaW5nID0gQ29uc3RhbnRzLkRFRkFVTFRfTElHSFRfVElMRV9DT0xPUjtcclxuXHJcbiAgQElucHV0KCdzaG93Q29vcmRzJylcclxuICBzaG93Q29vcmRzOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgQElucHV0KCdkcmFnRGlzYWJsZWQnKVxyXG4gIGRyYWdEaXNhYmxlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBASW5wdXQoJ2RyYXdEaXNhYmxlZCcpXHJcbiAgZHJhd0Rpc2FibGVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKVxyXG4gIG9uTW92ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgcGllY2VTaXplOiBudW1iZXI7XHJcbiAgc2VsZWN0ZWQgPSBmYWxzZTtcclxuXHJcbiAgQFZpZXdDaGlsZCgnYm9hcmRSZWYnLCB7c3RhdGljOiBmYWxzZX0pXHJcbiAgYm9hcmRSZWY6IEVsZW1lbnRSZWY7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ21vZGFsJywge3N0YXRpYzogZmFsc2V9KSBtb2RhbDogUGllY2VQcm9tb3Rpb25Nb2RhbENvbXBvbmVudDtcclxuXHJcbiAgYm9hcmQ6IEJvYXJkO1xyXG4gIGJvYXJkU3RhdGVQcm92aWRlcjogQm9hcmRTdGF0ZVByb3ZpZGVyO1xyXG4gIG1vdmVIaXN0b3J5UHJvdmlkZXI6IEhpc3RvcnlNb3ZlUHJvdmlkZXI7XHJcbiAgYm9hcmRMb2FkZXI6IEJvYXJkTG9hZGVyO1xyXG4gIGNvb3JkczogQ29vcmRzUHJvdmlkZXIgPSBuZXcgQ29vcmRzUHJvdmlkZXIoKTtcclxuICBkaXNhYmxpbmcgPSBmYWxzZTtcclxuICBkcmF3UHJvdmlkZXI6IERyYXdQcm92aWRlcjtcclxuICBkcmF3UG9pbnQ6IERyYXdQb2ludDtcclxuXHJcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBuZ3hDaGVzc0JvYXJkU2VydmljZTogTmd4Q2hlc3NCb2FyZFNlcnZpY2UpIHtcclxuICAgIHRoaXMuYm9hcmQgPSBuZXcgQm9hcmQoKTtcclxuICAgIHRoaXMuYm9hcmRMb2FkZXIgPSBuZXcgQm9hcmRMb2FkZXIodGhpcy5ib2FyZCk7XHJcbiAgICB0aGlzLmJvYXJkTG9hZGVyLmFkZFBpZWNlcygpO1xyXG4gICAgdGhpcy5ib2FyZFN0YXRlUHJvdmlkZXIgPSBuZXcgQm9hcmRTdGF0ZVByb3ZpZGVyKCk7XHJcbiAgICB0aGlzLm1vdmVIaXN0b3J5UHJvdmlkZXIgPSBuZXcgSGlzdG9yeU1vdmVQcm92aWRlcigpO1xyXG4gICAgdGhpcy5kcmF3UHJvdmlkZXIgPSBuZXcgRHJhd1Byb3ZpZGVyKCk7XHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMubmd4Q2hlc3NCb2FyZFNlcnZpY2UuY29tcG9uZW50TWV0aG9kQ2FsbGVkJC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICB0aGlzLmJvYXJkLnJlc2V0KCk7XHJcbiAgICB9KTtcclxuICAgIHRoaXMuY2FsY3VsYXRlUGllY2VTaXplKCk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBvbk1vdXNlVXAoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC53aGljaCAhPT0gMSAmJiAhdGhpcy5kcmF3RGlzYWJsZWQpIHtcclxuICAgICAgdGhpcy5hZGREcmF3UG9pbnQoZXZlbnQueCwgZXZlbnQueSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRyYXdQcm92aWRlci5jbGVhcigpO1xyXG5cclxuICAgIGlmICh0aGlzLmRyYWdEaXNhYmxlZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgcG9pbnRDbGlja2VkID0gdGhpcy5nZXRDbGlja1BvaW50KGV2ZW50KTtcclxuXHJcbiAgICBpZiAodGhpcy5ib2FyZC5hY3RpdmVQaWVjZSAmJiBwb2ludENsaWNrZWQuaXNFcXVhbCh0aGlzLmJvYXJkLmFjdGl2ZVBpZWNlLnBvaW50KSAmJiB0aGlzLmRpc2FibGluZykge1xyXG4gICAgICB0aGlzLmRpc2FibGVTZWxlY3Rpb24oKTtcclxuICAgICAgdGhpcy5kaXNhYmxpbmcgPSBmYWxzZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWQpIHtcclxuICAgICAgdGhpcy5oYW5kbGVDbGlja0V2ZW50KHBvaW50Q2xpY2tlZCk7XHJcbiAgICAgIC8vICAgdGhpcy5wb3NzaWJsZU1vdmVzID0gYWN0aXZlUGllY2UuZ2V0UG9zc2libGVNb3ZlcygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbGV0IHBpZWNlQ2xpY2tlZCA9IHRoaXMuZ2V0UGllY2VCeVBvaW50KHBvaW50Q2xpY2tlZC5yb3csIHBvaW50Q2xpY2tlZC5jb2wpO1xyXG4gICAgICBpZiAocGllY2VDbGlja2VkKSB7XHJcblxyXG4gICAgICAgIGlmICgodGhpcy5ib2FyZC5jdXJyZW50V2hpdGVQbGF5ZXIgJiYgcGllY2VDbGlja2VkLmNvbG9yID09PSBDb2xvci5CTEFDSykgfHwgKCF0aGlzLmJvYXJkLmN1cnJlbnRXaGl0ZVBsYXllciAmJiBwaWVjZUNsaWNrZWQuY29sb3IgPT09IENvbG9yLldISVRFKSkge1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5wcmVwYXJlQWN0aXZlUGllY2UocGllY2VDbGlja2VkLCBwb2ludENsaWNrZWQpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhZnRlck1vdmVBY3Rpb25zKCkge1xyXG4gICAgdGhpcy5jaGVja0lmUGF3bkZpcnN0TW92ZSh0aGlzLmJvYXJkLmFjdGl2ZVBpZWNlKTtcclxuICAgIHRoaXMuY2hlY2tJZlJvb2tNb3ZlZCh0aGlzLmJvYXJkLmFjdGl2ZVBpZWNlKTtcclxuICAgIHRoaXMuY2hlY2tJZktpbmdNb3ZlZCh0aGlzLmJvYXJkLmFjdGl2ZVBpZWNlKTtcclxuXHJcbiAgICB0aGlzLmJvYXJkLmJsYWNrS2luZ0NoZWNrZWQgPSB0aGlzLmJvYXJkLmlzS2luZ0luQ2hlY2soQ29sb3IuQkxBQ0ssIHRoaXMuYm9hcmQucGllY2VzKTtcclxuICAgIHRoaXMuYm9hcmQud2hpdGVLaW5nQ2hlY2tlZCA9IHRoaXMuYm9hcmQuaXNLaW5nSW5DaGVjayhDb2xvci5XSElURSwgdGhpcy5ib2FyZC5waWVjZXMpO1xyXG5cclxuICAgIHRoaXMuY2hlY2tGb3JQb3NzaWJsZU1vdmVzKENvbG9yLkJMQUNLLCAnQ2hlY2ttYXRlIScpO1xyXG4gICAgdGhpcy5jaGVja0ZvclBvc3NpYmxlTW92ZXMoQ29sb3IuV0hJVEUsICdDaGVja21hdGUhJyk7XHJcblxyXG4gICAgdGhpcy5ib2FyZC5jYWxjdWxhdGVGRU4oKTtcclxuICAgIHRoaXMuY2hlY2tGb3JQYXQoQ29sb3IuQkxBQ0spO1xyXG4gICAgdGhpcy5jaGVja0ZvclBhdChDb2xvci5XSElURSk7XHJcbiAgICB0aGlzLmRpc2FibGluZyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZVNlbGVjdGlvbigpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuYm9hcmQucG9zc2libGVDYXB0dXJlcyA9IFtdO1xyXG4gICAgdGhpcy5ib2FyZC5hY3RpdmVQaWVjZSA9IG51bGw7XHJcbiAgICB0aGlzLmJvYXJkLnBvc3NpYmxlTW92ZXMgPSBbXTtcclxuICB9XHJcblxyXG4gIHByZXBhcmVBY3RpdmVQaWVjZShwaWVjZUNsaWNrZWQ6IFBpZWNlLCBwb2ludENsaWNrZWQ6IFBvaW50KSB7XHJcbiAgICB0aGlzLmJvYXJkLmFjdGl2ZVBpZWNlID0gcGllY2VDbGlja2VkO1xyXG4gICAgdGhpcy5zZWxlY3RlZCA9IHRydWU7XHJcbiAgICB0aGlzLmJvYXJkLnBvc3NpYmxlQ2FwdHVyZXMgPSBuZXcgQXZhaWxhYmxlTW92ZURlY29yYXRvcihwaWVjZUNsaWNrZWQsIHBvaW50Q2xpY2tlZCwgdGhpcy5ib2FyZC5jdXJyZW50V2hpdGVQbGF5ZXIgPyBDb2xvci5XSElURSA6IENvbG9yLkJMQUNLLCB0aGlzLmJvYXJkKS5nZXRQb3NzaWJsZUNhcHR1cmVzKCk7XHJcbiAgICB0aGlzLmJvYXJkLnBvc3NpYmxlTW92ZXMgPSBuZXcgQXZhaWxhYmxlTW92ZURlY29yYXRvcihwaWVjZUNsaWNrZWQsIHBvaW50Q2xpY2tlZCwgdGhpcy5ib2FyZC5jdXJyZW50V2hpdGVQbGF5ZXIgPyBDb2xvci5XSElURSA6IENvbG9yLkJMQUNLLCB0aGlzLmJvYXJkKS5nZXRQb3NzaWJsZU1vdmVzKCk7XHJcbiAgfVxyXG5cclxuICBnZXRQaWVjZUJ5UG9pbnQocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogUGllY2Uge1xyXG4gICAgcm93ID0gTWF0aC5mbG9vcihyb3cpO1xyXG4gICAgY29sID0gTWF0aC5mbG9vcihjb2wpO1xyXG4gICAgcmV0dXJuIHRoaXMuYm9hcmQucGllY2VzLmZpbmQoZSA9PiBlLnBvaW50LmNvbCA9PT0gY29sICYmIGUucG9pbnQucm93ID09PSByb3cpO1xyXG4gIH1cclxuXHJcbiAgaXNLaW5nQ2hlY2tlZChwaWVjZTogUGllY2UpIHtcclxuICAgIGlmIChwaWVjZSBpbnN0YW5jZW9mIEtpbmcpIHtcclxuICAgICAgcmV0dXJuIHBpZWNlLmNvbG9yID09PSBDb2xvci5XSElURSA/IHRoaXMuYm9hcmQud2hpdGVLaW5nQ2hlY2tlZCA6IHRoaXMuYm9hcmQuYmxhY2tLaW5nQ2hlY2tlZDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldENsaWNrUG9pbnQoZXZlbnQpIHtcclxuICAgIHJldHVybiBuZXcgUG9pbnQoXHJcbiAgICAgIE1hdGguZmxvb3IoKGV2ZW50LnkgLSB0aGlzLmJvYXJkUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKSAvICh0aGlzLmJvYXJkUmVmLm5hdGl2ZUVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0IC8gOCkpLFxyXG4gICAgICBNYXRoLmZsb29yKChldmVudC54IC0gdGhpcy5ib2FyZFJlZi5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQpIC8gKHRoaXMuYm9hcmRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aCAvIDgpKSk7XHJcbiAgfVxyXG5cclxuICBhc3luYyBtb3ZlUGllY2UocGllY2U6IFBpZWNlLCBuZXdQb2ludDogUG9pbnQpIHtcclxuICAgIHRoaXMubW92ZUhpc3RvcnlQcm92aWRlci5hZGRNb3ZlKG5ldyBIaXN0b3J5TW92ZShNb3ZlVXRpbHMuZm9ybWF0KHBpZWNlLnBvaW50LCBuZXdQb2ludCwgdGhpcy5ib2FyZC5yZXZlcnRlZCksIHBpZWNlLmNvbnN0cnVjdG9yLm5hbWUsIHBpZWNlLmNvbG9yID09PSBDb2xvci5XSElURSA/ICd3aGl0ZScgOiAnYmxhY2snKSk7XHJcbiAgICBsZXQgZGVzdFBpZWNlID0gdGhpcy5ib2FyZC5waWVjZXMuZmluZChlID0+IGUucG9pbnQuY29sID09PSBuZXdQb2ludC5jb2wgJiYgZS5wb2ludC5yb3cgPT09IG5ld1BvaW50LnJvdyk7XHJcblxyXG4gICAgaWYgKGRlc3RQaWVjZSAmJiBwaWVjZS5jb2xvciAhPSBkZXN0UGllY2UuY29sb3IpIHtcclxuICAgICAgdGhpcy5ib2FyZC5waWVjZXMgPSB0aGlzLmJvYXJkLnBpZWNlcy5maWx0ZXIoZSA9PiBlICE9PSBkZXN0UGllY2UpO1xyXG4gICAgfSBlbHNlIGlmIChkZXN0UGllY2UgJiYgcGllY2UuY29sb3IgPT09IGRlc3RQaWVjZS5jb2xvcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBpZiAocGllY2UgaW5zdGFuY2VvZiBLaW5nKSB7XHJcbiAgICAgIGxldCBzcXVhcmVzTW92ZWQgPSBNYXRoLmFicyhuZXdQb2ludC5jb2wgLSBwaWVjZS5wb2ludC5jb2wpO1xyXG4gICAgICBpZiAoc3F1YXJlc01vdmVkID4gMSkge1xyXG4gICAgICAgIGlmIChuZXdQb2ludC5jb2wgPCAzKSB7XHJcbiAgICAgICAgICBsZXQgbGVmdFJvb2sgPSB0aGlzLmJvYXJkLmdldFBpZWNlQnlGaWVsZChwaWVjZS5wb2ludC5yb3csIDApO1xyXG4gICAgICAgICAgbGVmdFJvb2sucG9pbnQuY29sID0gMztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbGV0IHJpZ2h0Um9vayA9IHRoaXMuYm9hcmQuZ2V0UGllY2VCeUZpZWxkKHBpZWNlLnBvaW50LnJvdywgNyk7XHJcbiAgICAgICAgICByaWdodFJvb2sucG9pbnQuY29sID0gNTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpZiAocGllY2UgaW5zdGFuY2VvZiBQYXduKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tJZlBhd25UYWtlc0VuUGFzc2FudChuZXdQb2ludCk7XHJcbiAgICAgIHRoaXMuY2hlY2tJZlBhd25FbnBhc3NhbnRlZChwaWVjZSwgbmV3UG9pbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHBpZWNlLnBvaW50ID0gbmV3UG9pbnQ7XHJcbiAgICB0aGlzLmluY3JlYXNlRnVsbE1vdmVDb3VudCgpO1xyXG4gICAgdGhpcy5ib2FyZC5jdXJyZW50V2hpdGVQbGF5ZXIgPSAhdGhpcy5ib2FyZC5jdXJyZW50V2hpdGVQbGF5ZXI7XHJcbiAgICByZXR1cm4gdGhpcy5jaGVja0ZvclBhd25Qcm9tb3RlKHBpZWNlKTtcclxuICB9XHJcblxyXG4gIGNoZWNrSWZQYXduRmlyc3RNb3ZlKHBpZWNlOiBQaWVjZSkge1xyXG4gICAgaWYgKHBpZWNlIGluc3RhbmNlb2YgUGF3bikge1xyXG4gICAgICAocGllY2UgYXMgUGF3bikuaXNNb3ZlZEFscmVhZHkgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja0lmUm9va01vdmVkKHBpZWNlOiBQaWVjZSkge1xyXG4gICAgaWYgKHBpZWNlIGluc3RhbmNlb2YgUm9vaykge1xyXG4gICAgICBwaWVjZS5pc01vdmVkQWxyZWFkeSA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNoZWNrSWZLaW5nTW92ZWQocGllY2U6IFBpZWNlKSB7XHJcbiAgICBpZiAocGllY2UgaW5zdGFuY2VvZiBLaW5nKSB7XHJcbiAgICAgIHBpZWNlLmlzTW92ZWRBbHJlYWR5ID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGFzeW5jIGNoZWNrRm9yUGF3blByb21vdGUocGllY2U6IFBpZWNlKSB7XHJcbiAgICBpZiAoIShwaWVjZSBpbnN0YW5jZW9mIFBhd24pKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocGllY2UucG9pbnQucm93ID09PSAwIHx8IHBpZWNlLnBvaW50LnJvdyA9PT0gNykge1xyXG4gICAgICB0aGlzLmJvYXJkLnBpZWNlcyA9IHRoaXMuYm9hcmQucGllY2VzLmZpbHRlcihlID0+IGUgIT09IHBpZWNlKTtcclxuICAgICAgdGhpcy5vcGVuUHJvbW90ZURpYWxvZyhwaWVjZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBhc3luYyBvcGVuUHJvbW90ZURpYWxvZyhwaWVjZTogUGllY2UpIHtcclxuICAgIHRoaXMubW9kYWwub3BlbigoaW5kZXgpID0+IHtcclxuICAgICAgbGV0IGlzV2hpdGUgPSBwaWVjZS5jb2xvciA9PT0gQ29sb3IuV0hJVEU7XHJcbiAgICAgIHN3aXRjaCAoaW5kZXgpIHtcclxuICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICB0aGlzLmJvYXJkLnBpZWNlcy5wdXNoKG5ldyBRdWVlbihwaWVjZS5wb2ludCwgcGllY2UuY29sb3IsIGlzV2hpdGUgPyBVbmljb2RlQ29uc3RhbnRzLldISVRFX1FVRUVOIDogVW5pY29kZUNvbnN0YW50cy5CTEFDS19RVUVFTiwgdGhpcy5ib2FyZCkpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAyOlxyXG4gICAgICAgICAgdGhpcy5ib2FyZC5waWVjZXMucHVzaChuZXcgUm9vayhwaWVjZS5wb2ludCwgcGllY2UuY29sb3IsIGlzV2hpdGUgPyBVbmljb2RlQ29uc3RhbnRzLldISVRFX1JPT0sgOiBVbmljb2RlQ29uc3RhbnRzLkJMQUNLX1JPT0ssIHRoaXMuYm9hcmQpKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgIHRoaXMuYm9hcmQucGllY2VzLnB1c2gobmV3IEJpc2hvcChwaWVjZS5wb2ludCwgcGllY2UuY29sb3IsIGlzV2hpdGUgPyBVbmljb2RlQ29uc3RhbnRzLldISVRFX0JJU0hPUCA6IFVuaWNvZGVDb25zdGFudHMuQkxBQ0tfQklTSE9QLCB0aGlzLmJvYXJkKSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICB0aGlzLmJvYXJkLnBpZWNlcy5wdXNoKG5ldyBLbmlnaHQocGllY2UucG9pbnQsIHBpZWNlLmNvbG9yLCBpc1doaXRlID8gVW5pY29kZUNvbnN0YW50cy5XSElURV9LTklHSFQgOiBVbmljb2RlQ29uc3RhbnRzLkJMQUNLX0tOSUdIVCwgdGhpcy5ib2FyZCkpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIHRoaXMuYm9hcmQucGllY2VzLnB1c2gobmV3IFF1ZWVuKHBpZWNlLnBvaW50LCBwaWVjZS5jb2xvciwgaXNXaGl0ZSA/IFVuaWNvZGVDb25zdGFudHMuV0hJVEVfUVVFRU4gOiBVbmljb2RlQ29uc3RhbnRzLkJMQUNLX1FVRUVOLCB0aGlzLmJvYXJkKSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmFmdGVyTW92ZUFjdGlvbnMoKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja0ZvclBvc3NpYmxlTW92ZXMoY29sb3I6IENvbG9yLCB0ZXh0OiBzdHJpbmcpIHtcclxuICAgIGlmICghdGhpcy5ib2FyZC5waWVjZXMuZmlsdGVyKGUgPT4gZS5jb2xvciA9PT0gY29sb3IpXHJcbiAgICAgIC5zb21lKGUgPT4gZS5nZXRQb3NzaWJsZU1vdmVzKCkuc29tZShmID0+ICFNb3ZlVXRpbHMud2lsbE1vdmVDYXVzZUNoZWNrKGNvbG9yLCBlLnBvaW50LnJvdywgZS5wb2ludC5jb2wsIGYucm93LCBmLmNvbCwgdGhpcy5ib2FyZCkpXHJcbiAgICAgICAgfHwgZS5nZXRQb3NzaWJsZUNhcHR1cmVzKCkuc29tZShmID0+ICFNb3ZlVXRpbHMud2lsbE1vdmVDYXVzZUNoZWNrKGNvbG9yLCBlLnBvaW50LnJvdywgZS5wb2ludC5jb2wsIGYucm93LCBmLmNvbCwgdGhpcy5ib2FyZCkpKSkge1xyXG4gICAgICBhbGVydCh0ZXh0KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgY2hlY2tGb3JQYXQoY29sb3I6IENvbG9yKSB7XHJcbiAgICBpZiAoY29sb3IgPT09IENvbG9yLldISVRFICYmICF0aGlzLmJvYXJkLndoaXRlS2luZ0NoZWNrZWQpIHtcclxuICAgICAgdGhpcy5jaGVja0ZvclBvc3NpYmxlTW92ZXMoY29sb3IsICdTdGFsZW1hdGUhJyk7XHJcbiAgICB9IGVsc2UgaWYgKGNvbG9yID09PSBDb2xvci5CTEFDSyAmJiAhdGhpcy5ib2FyZC5ibGFja0tpbmdDaGVja2VkKSB7XHJcbiAgICAgIHRoaXMuY2hlY2tGb3JQb3NzaWJsZU1vdmVzKGNvbG9yLCAnU3RhbGVtYXRlIScpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja0lmUGF3bkVucGFzc2FudGVkKHBpZWNlOiBQYXduLCBuZXdQb2ludDogUG9pbnQpIHtcclxuICAgIGlmIChNYXRoLmFicyhwaWVjZS5wb2ludC5yb3cgLSBuZXdQb2ludC5yb3cpID4gMSkge1xyXG4gICAgICB0aGlzLmJvYXJkLmVuUGFzc2FudFBpZWNlID0gcGllY2U7XHJcbiAgICAgIHRoaXMuYm9hcmQuZW5QYXNzYW50UG9pbnQgPSBuZXcgUG9pbnQoKHBpZWNlLnBvaW50LnJvdyArIG5ld1BvaW50LnJvdykgLyAyLCBwaWVjZS5wb2ludC5jb2wpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ib2FyZC5lblBhc3NhbnRQb2ludCA9IG51bGw7XHJcbiAgICAgIHRoaXMuYm9hcmQuZW5QYXNzYW50UGllY2UgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBjaGVja0lmUGF3blRha2VzRW5QYXNzYW50KG5ld1BvaW50OiBQb2ludCkge1xyXG4gICAgaWYgKG5ld1BvaW50LmlzRXF1YWwodGhpcy5ib2FyZC5lblBhc3NhbnRQb2ludCkpIHtcclxuICAgICAgdGhpcy5ib2FyZC5waWVjZXMgPSB0aGlzLmJvYXJkLnBpZWNlc1xyXG4gICAgICAgIC5maWx0ZXIocGllY2UgPT4gcGllY2UgIT09IHRoaXMuYm9hcmQuZW5QYXNzYW50UGllY2UpO1xyXG4gICAgICB0aGlzLmJvYXJkLmVuUGFzc2FudFBvaW50ID0gbnVsbDtcclxuICAgICAgdGhpcy5ib2FyZC5lblBhc3NhbnRQaWVjZSA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMuYm9hcmRTdGF0ZVByb3ZpZGVyLmNsZWFyKCk7XHJcbiAgICB0aGlzLm1vdmVIaXN0b3J5UHJvdmlkZXIuY2xlYXIoKTtcclxuICAgIHRoaXMuYm9hcmRMb2FkZXIuYWRkUGllY2VzKCk7XHJcbiAgICB0aGlzLmJvYXJkLnJlc2V0KCk7XHJcbiAgICB0aGlzLmNvb3Jkcy5yZXNldCgpO1xyXG4gICAgdGhpcy5kcmF3UHJvdmlkZXIuY2xlYXIoKTtcclxuICB9XHJcblxyXG4gIHJldmVyc2UoKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmJvYXJkLnJldmVyc2UoKTtcclxuICAgIHRoaXMuY29vcmRzLnJldmVyc2UoKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgc2F2ZUNsb25lKCkge1xyXG4gICAgbGV0IGNsb25lID0gdGhpcy5ib2FyZC5jbG9uZSgpO1xyXG5cclxuICAgIGlmICh0aGlzLmJvYXJkLnJldmVydGVkKSB7XHJcbiAgICAgIGNsb25lLnJldmVyc2UoKTtcclxuICAgIH1cclxuICAgIHRoaXMuYm9hcmRTdGF0ZVByb3ZpZGVyLmFkZE1vdmUobmV3IEJvYXJkU3RhdGUoY2xvbmUpKTtcclxuICB9XHJcblxyXG4gIHVuZG8oKSB7XHJcbiAgICBpZiAoIXRoaXMuYm9hcmRTdGF0ZVByb3ZpZGVyLmlzRW1wdHkoKSkge1xyXG4gICAgICBsZXQgbGFzdEJvYXJkID0gdGhpcy5ib2FyZFN0YXRlUHJvdmlkZXIucG9wKCkuYm9hcmQ7XHJcbiAgICAgIGlmICh0aGlzLmJvYXJkLnJldmVydGVkKSB7XHJcbiAgICAgICAgbGFzdEJvYXJkLnJldmVyc2UoKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmJvYXJkID0gbGFzdEJvYXJkO1xyXG4gICAgICB0aGlzLmJvYXJkTG9hZGVyLnNldEJvYXJkKHRoaXMuYm9hcmQpO1xyXG4gICAgICB0aGlzLmJvYXJkLnBvc3NpYmxlQ2FwdHVyZXMgPSBbXTtcclxuICAgICAgdGhpcy5ib2FyZC5wb3NzaWJsZU1vdmVzID0gW107XHJcbiAgICAgIHRoaXMubW92ZUhpc3RvcnlQcm92aWRlci5wb3AoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldE1vdmVIaXN0b3J5KCkge1xyXG4gICAgcmV0dXJuIEpTT04uc3RyaW5naWZ5KHRoaXMubW92ZUhpc3RvcnlQcm92aWRlci5nZXRBbGwoKSk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNhbGN1bGF0ZVBpZWNlU2l6ZSgpIHtcclxuICAgIHRoaXMucGllY2VTaXplID0gdGhpcy5fc2l6ZSAvIDEwO1xyXG4gIH1cclxuXHJcbiAgc2V0RkVOKGZlbjogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICB0aGlzLmJvYXJkTG9hZGVyLmxvYWRGRU4oZmVuKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgdGhpcy5ib2FyZExvYWRlci5hZGRQaWVjZXMoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldEZFTigpIHtcclxuICAgIHJldHVybiB0aGlzLmJvYXJkLmZlbjtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5jcmVhc2VGdWxsTW92ZUNvdW50KCkge1xyXG4gICAgaWYgKCF0aGlzLmJvYXJkLmN1cnJlbnRXaGl0ZVBsYXllcikge1xyXG4gICAgICArK3RoaXMuYm9hcmQuZnVsbE1vdmVDb3VudDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRyYWdFbmRlZChldmVudDogQ2RrRHJhZ0VuZCkge1xyXG4gICAgZXZlbnQuc291cmNlLnJlc2V0KCk7XHJcbiAgICBldmVudC5zb3VyY2UuZWxlbWVudC5uYXRpdmVFbGVtZW50LnN0eWxlLnpJbmRleCA9ICcwJztcclxuICAgIGV2ZW50LnNvdXJjZS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdhdXRvJztcclxuICAgIGV2ZW50LnNvdXJjZS5lbGVtZW50Lm5hdGl2ZUVsZW1lbnQuc3R5bGUudG91Y2hBY3Rpb24gPSAnYXV0byc7XHJcbiAgfVxyXG5cclxuICBkcmFnU3RhcnQoZXZlbnQ6IENka0RyYWdTdGFydCkge1xyXG4gICAgbGV0IHN0eWxlID0gZXZlbnQuc291cmNlLmVsZW1lbnQubmF0aXZlRWxlbWVudC5zdHlsZTtcclxuICAgIHN0eWxlLnBvc2l0aW9uID0gJ3JlbGF0aXZlJztcclxuICAgIHN0eWxlLnpJbmRleCA9ICcxMDAwJztcclxuICAgIHN0eWxlLnRvdWNoQWN0aW9uID0gJ25vbmUnO1xyXG4gICAgc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYXN5bmMgaGFuZGxlQ2xpY2tFdmVudChwb2ludENsaWNrZWQ6IFBvaW50KSB7XHJcbiAgICBpZiAodGhpcy5ib2FyZC5pc1BvaW50SW5Qb3NzaWJsZU1vdmVzKHBvaW50Q2xpY2tlZCkgfHwgdGhpcy5ib2FyZC5pc1BvaW50SW5Qb3NzaWJsZUNhcHR1cmVzKHBvaW50Q2xpY2tlZCkpIHtcclxuICAgICAgdGhpcy5zYXZlQ2xvbmUoKTtcclxuICAgICAgdGhpcy5ib2FyZC5sYXN0TW92ZVNyYyA9IG5ldyBQb2ludCh0aGlzLmJvYXJkLmFjdGl2ZVBpZWNlLnBvaW50LnJvdywgdGhpcy5ib2FyZC5hY3RpdmVQaWVjZS5wb2ludC5jb2wpO1xyXG4gICAgICB0aGlzLmJvYXJkLmxhc3RNb3ZlRGVzdCA9IHBvaW50Q2xpY2tlZDtcclxuICAgICAgYXdhaXQgdGhpcy5tb3ZlUGllY2UodGhpcy5ib2FyZC5hY3RpdmVQaWVjZSwgcG9pbnRDbGlja2VkKTtcclxuICAgICAgdGhpcy5hZnRlck1vdmVBY3Rpb25zKCk7XHJcbiAgICAgIHRoaXMub25Nb3ZlLmVtaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRpc2FibGVTZWxlY3Rpb24oKTtcclxuICAgIGxldCBwaWVjZUNsaWNrZWQgPSB0aGlzLmdldFBpZWNlQnlQb2ludChwb2ludENsaWNrZWQucm93LCBwb2ludENsaWNrZWQuY29sKTtcclxuICAgIGlmIChwaWVjZUNsaWNrZWQpIHtcclxuXHJcbiAgICAgIGlmICgodGhpcy5ib2FyZC5jdXJyZW50V2hpdGVQbGF5ZXIgJiYgcGllY2VDbGlja2VkLmNvbG9yID09PSBDb2xvci5CTEFDSykgfHwgKCF0aGlzLmJvYXJkLmN1cnJlbnRXaGl0ZVBsYXllciAmJiBwaWVjZUNsaWNrZWQuY29sb3IgPT09IENvbG9yLldISVRFKSkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5wcmVwYXJlQWN0aXZlUGllY2UocGllY2VDbGlja2VkLCBwb2ludENsaWNrZWQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25Nb3VzZURvd24oZXZlbnQ6IGFueSkge1xyXG5cclxuICAgIGlmIChldmVudC53aGljaCAhPT0gMSkge1xyXG4gICAgICB0aGlzLmRyYXdQb2ludCA9IHRoaXMuZ2V0RHJhd2luZ1BvaW50KGV2ZW50LngsIGV2ZW50LnkpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBsZXQgcG9pbnRDbGlja2VkID0gdGhpcy5nZXRDbGlja1BvaW50KGV2ZW50KTtcclxuXHJcbiAgICB0aGlzLmRyYXdQcm92aWRlci5jbGVhcigpO1xyXG5cclxuICAgIGlmICh0aGlzLmJvYXJkLmFjdGl2ZVBpZWNlICYmIHBvaW50Q2xpY2tlZC5pc0VxdWFsKHRoaXMuYm9hcmQuYWN0aXZlUGllY2UucG9pbnQpKSB7XHJcbiAgICAgIHRoaXMuZGlzYWJsaW5nID0gdHJ1ZTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnNlbGVjdGVkKSB7XHJcbiAgICAgIHRoaXMuaGFuZGxlQ2xpY2tFdmVudChwb2ludENsaWNrZWQpO1xyXG4gICAgICAvLyAgIHRoaXMucG9zc2libGVNb3ZlcyA9IGFjdGl2ZVBpZWNlLmdldFBvc3NpYmxlTW92ZXMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBwaWVjZUNsaWNrZWQgPSB0aGlzLmdldFBpZWNlQnlQb2ludChwb2ludENsaWNrZWQucm93LCBwb2ludENsaWNrZWQuY29sKTtcclxuICAgICAgaWYgKHBpZWNlQ2xpY2tlZCkge1xyXG5cclxuICAgICAgICBpZiAoKHRoaXMuYm9hcmQuY3VycmVudFdoaXRlUGxheWVyICYmIHBpZWNlQ2xpY2tlZC5jb2xvciA9PT0gQ29sb3IuQkxBQ0spIHx8ICghdGhpcy5ib2FyZC5jdXJyZW50V2hpdGVQbGF5ZXIgJiYgcGllY2VDbGlja2VkLmNvbG9yID09PSBDb2xvci5XSElURSkpIHtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucHJlcGFyZUFjdGl2ZVBpZWNlKHBpZWNlQ2xpY2tlZCwgcG9pbnRDbGlja2VkKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0RHJhd2luZ1BvaW50KHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICBsZXQgc3F1YXJlU2l6ZSA9IHRoaXMuX3NpemUgLyA4O1xyXG4gICAgbGV0IHh4ID0gTWF0aC5mbG9vcigoeCAtIHRoaXMuYm9hcmRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0KSAvIHNxdWFyZVNpemUpO1xyXG4gICAgbGV0IHl5ID0gTWF0aC5mbG9vcigoeSAtIHRoaXMuYm9hcmRSZWYubmF0aXZlRWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApIC8gc3F1YXJlU2l6ZSk7XHJcbiAgICByZXR1cm4gbmV3IERyYXdQb2ludChcclxuICAgICAgTWF0aC5mbG9vcih4eCAqIHNxdWFyZVNpemUgKyBzcXVhcmVTaXplIC8gMiksXHJcbiAgICAgIE1hdGguZmxvb3IoeXkgKiBzcXVhcmVTaXplICsgc3F1YXJlU2l6ZSAvIDIpLFxyXG4gICAgKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgYWRkRHJhd1BvaW50KHg6IGFueSwgeTogYW55KSB7XHJcbiAgICBsZXQgdXBQb2ludCA9IHRoaXMuZ2V0RHJhd2luZ1BvaW50KHgsIHkpO1xyXG4gICAgaWYgKHRoaXMuZHJhd1BvaW50LmlzRXF1YWwodXBQb2ludCkpIHtcclxuICAgICAgbGV0IGNpcmNsZSA9IG5ldyBDaXJjbGUoKTtcclxuICAgICAgY2lyY2xlLmRyYXdQb2ludCA9IHVwUG9pbnQ7XHJcbiAgICAgIGlmICghdGhpcy5kcmF3UHJvdmlkZXIuY29udGFpbnNDaXJjbGUoY2lyY2xlKSkge1xyXG4gICAgICAgIHRoaXMuZHJhd1Byb3ZpZGVyLmFkZENpcmNsZShjaXJjbGUpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBsZXQgYXJyb3cgPSBuZXcgQXJyb3coKTtcclxuICAgICAgYXJyb3cuc3RhcnQgPSB0aGlzLmRyYXdQb2ludDtcclxuICAgICAgYXJyb3cuZW5kID0gdXBQb2ludDtcclxuXHJcbiAgICAgIGlmICghdGhpcy5kcmF3UHJvdmlkZXIuY29udGFpbnNBcnJvdyhhcnJvdykpIHtcclxuICAgICAgICB0aGlzLmRyYXdQcm92aWRlci5hZGRBcnJvdyhhcnJvdyk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ==