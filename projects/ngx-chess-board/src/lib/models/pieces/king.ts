import {Piece} from './piece';
import {Color} from './color';
import {Point} from './point';
import {Rook} from "./rook";
import {Board} from '../board';

export class King extends Piece {

  castledAlready = false;
  shortCastled = false;
  longCastled = false;
  isMovedAlready;
  isCastling = false;

  constructor(point: Point, color: Color, image: string, board: Board) {
    super(point, color, image, 0, board);
  }

  getPossibleMoves(): Point[] {
    let possiblePoints = [];

    let row = this.point.row;
    let col = this.point.col;
    // lewo
    if (this.board.isFieldEmpty(row, col - 1) && !this.board.isFieldUnderAttack(row, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
      possiblePoints.push(new Point(row, col - 1));
    }

    // prawo
    if (this.board.isFieldEmpty(row, col + 1) && !this.board.isFieldUnderAttack(row, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
      possiblePoints.push(new Point(row, col + 1));
    }

    // dol
    if (this.board.isFieldEmpty(row + 1, col) && !this.board.isFieldUnderAttack(row + 1, col, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
      possiblePoints.push(new Point(row + 1, col));
    }

    // gora
    if (this.board.isFieldEmpty(row - 1, col) && !this.board.isFieldUnderAttack(row - 1, col, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
      possiblePoints.push(new Point(row - 1, col));
    }

    // lewo gora
    if (this.board.isFieldEmpty(row - 1, col - 1) && !this.board.isFieldUnderAttack(row - 1, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
      possiblePoints.push(new Point(row - 1, col - 1));
    }
    // prawo gora
    if (this.board.isFieldEmpty(row - 1, col + 1) && !this.board.isFieldUnderAttack(row - 1, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
      possiblePoints.push(new Point(row - 1, col + 1));
    }

    // lewo dol
    if (this.board.isFieldEmpty(row + 1, col - 1) && !this.board.isFieldUnderAttack(row + 1, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
      possiblePoints.push(new Point(row + 1, col - 1));
    }
    // prawo dol
    if (this.board.isFieldEmpty(row + 1, col + 1) && !this.board.isFieldUnderAttack(row + 1, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
      possiblePoints.push(new Point(row + 1, col + 1));
    }

    if(!this.isMovedAlready){
      let longCastlePossible = true;
      for (let i = col - 1; i > 0; --i) {
        if (!this.board.isFieldEmpty(row, i) || this.board.isFieldUnderAttack(row, i, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
          longCastlePossible = false;
          break;
        }
      }

      if (longCastlePossible && this.board.getPieceByField(row, 0)) {
        let leftRook = this.board.getPieceByField(row, 0);
        if (leftRook instanceof Rook) {
          if (!leftRook.isMovedAlready) {
            possiblePoints.push(new Point(row, col - 2));
          }
        }
      }

      let shortCastlePossible = true;
      for (let i = col + 1; i < 7; ++i) {
        if (!this.board.isFieldEmpty(row, i) || this.board.isFieldUnderAttack(row, i, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
          shortCastlePossible = false;
          break;
        }
      }

      if (shortCastlePossible && this.board.getPieceByField(row, 7)) {
        let rightRook = this.board.getPieceByField(row, 7);
        if (rightRook instanceof Rook) {
          if (!rightRook.isMovedAlready) {
            possiblePoints.push(new Point(row, col + 2));
          }
        }
      }
    }

    return possiblePoints;
  }

  getPossibleCaptures(): Point[] {
    let possiblePoints = [];

    let row = this.point.row;
    let col = this.point.col;

    // lewo
    if (this.board.isFieldTakenByEnemy(row, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE) && !this.board.isFieldUnderAttack(row, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
      possiblePoints.push(new Point(row, col - 1));
    }

    // prawo
    if (this.board.isFieldTakenByEnemy(row, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE) && !this.board.isFieldUnderAttack(row, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
      possiblePoints.push(new Point(row, col + 1));
    }

    // dol
    if (this.board.isFieldTakenByEnemy(row + 1, col, this.color === Color.WHITE ? Color.BLACK : Color.WHITE) && !this.board.isFieldUnderAttack(row + 1, col, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
      possiblePoints.push(new Point(row + 1, col));
    }

    // gora
    if (this.board.isFieldTakenByEnemy(row - 1, col, this.color === Color.WHITE ? Color.BLACK : Color.WHITE) && !this.board.isFieldUnderAttack(row - 1, col, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
      possiblePoints.push(new Point(row - 1, col));
    }

    // lewo gora
    if (this.board.isFieldTakenByEnemy(row - 1, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE) && !this.board.isFieldUnderAttack(row - 1, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
      possiblePoints.push(new Point(row - 1, col - 1));
    }
    // prawo gora
    if (this.board.isFieldTakenByEnemy(row - 1, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE) && !this.board.isFieldUnderAttack(row - 1, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
      possiblePoints.push(new Point(row - 1, col + 1));
    }

    // lewo dol
    if (this.board.isFieldTakenByEnemy(row + 1, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE) && !this.board.isFieldUnderAttack(row + 1, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
      possiblePoints.push(new Point(row + 1, col - 1));
    }
    // prawo dol
    if (this.board.isFieldTakenByEnemy(row + 1, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE) && !this.board.isFieldUnderAttack(row + 1, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
      possiblePoints.push(new Point(row + 1, col + 1));
    }

    return possiblePoints;
  }

  getCoveredFields(): Point[] {
    let possiblePoints = [];

    let row = this.point.row;
    let col = this.point.col;

    // lewo
    if (this.board.isFieldTakenByEnemy(row, col - 1, this.color)) {
      possiblePoints.push(new Point(row, col - 1));
    }

    // prawo
    if (this.board.isFieldTakenByEnemy(row, col + 1, this.color)) {
      possiblePoints.push(new Point(row, col + 1));
    }

    // dol
    if (this.board.isFieldTakenByEnemy(row + 1, col, this.color)) {
      possiblePoints.push(new Point(row + 1, col));
    }

    // gora
    if (this.board.isFieldTakenByEnemy(row - 1, col, this.color)) {
      possiblePoints.push(new Point(row - 1, col));
    }

    // lewo gora
    if (this.board.isFieldTakenByEnemy(row - 1, col - 1, this.color)) {
      possiblePoints.push(new Point(row - 1, col - 1));
    }
    // prawo gora
    if (this.board.isFieldTakenByEnemy(row - 1, col + 1, this.color)) {
      possiblePoints.push(new Point(row - 1, col + 1));
    }

    // lewo dol
    if (this.board.isFieldTakenByEnemy(row + 1, col - 1, this.color)) {
      possiblePoints.push(new Point(row + 1, col - 1));
    }
    // prawo dol
    if (this.board.isFieldTakenByEnemy(row + 1, col + 1, this.color)) {
      possiblePoints.push(new Point(row + 1, col + 1));
    }

    return possiblePoints;
  }
}
