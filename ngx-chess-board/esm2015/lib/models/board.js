/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/board.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Color } from './pieces/color';
import { King } from './pieces/king';
import { cloneDeep } from 'lodash';
import { Rook } from './pieces/rook';
import { Knight } from './pieces/knight';
import { Bishop } from './pieces/bishop';
import { Queen } from './pieces/queen';
import { Pawn } from './pieces/pawn';
export class Board {
    constructor() {
        this.pieces = [];
        this.enPassantPoint = null;
        this.enPassantPiece = null;
        this.lastMoveSrc = null;
        this.lastMoveDest = null;
        this.possibleCaptures = [];
        this.possibleMoves = [];
        this.currentWhitePlayer = true;
        this.reverted = false;
        this.fullMoveCount = 1;
        this.board = [];
        for (var i = 0; i < 8; ++i) {
            this.board[i] = [];
            for (var j = 0; j < 8; ++j) {
                this.board[i][j] = 0;
            }
        }
    }
    /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    isXYInPossibleMoves(row, col) {
        return this.possibleMoves.some((/**
         * @param {?} e
         * @return {?}
         */
        e => e.row === row && e.col === col));
    }
    /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    isXYInPossibleCaptures(row, col) {
        return this.possibleCaptures.some((/**
         * @param {?} e
         * @return {?}
         */
        e => e.row === row && e.col === col));
    }
    /**
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    isXYInSourceMove(i, j) {
        return this.lastMoveSrc && this.lastMoveSrc.row === i && this.lastMoveSrc.col === j;
    }
    /**
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    isXYInDestMove(i, j) {
        return this.lastMoveDest && this.lastMoveDest.row === i && this.lastMoveDest.col === j;
    }
    /**
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    isXYInActiveMove(i, j) {
        return this.activePiece && this.activePiece.point.row === i && this.activePiece.point.col === j;
    }
    /**
     * @param {?} point
     * @return {?}
     */
    isPointInPossibleMoves(point) {
        return this.possibleMoves.some((/**
         * @param {?} e
         * @return {?}
         */
        e => e.row === point.row && e.col === point.col));
    }
    /**
     * @param {?} point
     * @return {?}
     */
    isPointInPossibleCaptures(point) {
        return this.possibleCaptures.some((/**
         * @param {?} e
         * @return {?}
         */
        e => e.row === point.row && e.col === point.col));
    }
    /**
     * @return {?}
     */
    reset() {
        this.lastMoveDest = null;
        this.lastMoveSrc = null;
        this.whiteKingChecked = false;
        this.blackKingChecked = false;
        this.possibleCaptures = [];
        this.possibleMoves = [];
        this.activePiece = null;
        this.reverted = false;
        this.currentWhitePlayer = true;
        this.enPassantPoint = null;
        this.enPassantPiece = null;
        this.fullMoveCount = 1;
        this.calculateFEN();
    }
    /**
     * @return {?}
     */
    reverse() {
        this.reverted = !this.reverted;
        this.activePiece = null;
        this.possibleMoves = [];
        this.possibleCaptures = [];
        for (let i = 0; i < this.pieces.length; ++i) {
            this.reversePoint(this.pieces[i].point);
        }
        this.reversePoint(this.lastMoveSrc);
        if (this.enPassantPoint && this.enPassantPiece) {
            this.reversePoint(this.enPassantPoint);
        }
    }
    /**
     * @private
     * @param {?} point
     * @return {?}
     */
    reversePoint(point) {
        if (point) {
            point.row = Math.abs(point.row - 7);
            point.col = Math.abs(point.col - 7);
        }
    }
    /**
     * @return {?}
     */
    clone() {
        return cloneDeep(this);
    }
    /**
     * @param {?} row
     * @param {?} col
     * @param {?} enemyColor
     * @return {?}
     */
    isFieldTakenByEnemy(row, col, enemyColor) {
        if (row > 7 || row < 0 || col > 7 || col < 0) {
            return false;
        }
        return this.pieces.some((/**
         * @param {?} e
         * @return {?}
         */
        e => e.point.col === col && e.point.row === row && e.color === enemyColor));
    }
    /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    isFieldEmpty(row, col) {
        if (row > 7 || row < 0 || col > 7 || col < 0) {
            return false;
        }
        return !this.pieces.some((/**
         * @param {?} e
         * @return {?}
         */
        e => e.point.col === col && e.point.row === row));
    }
    /**
     * @param {?} row
     * @param {?} col
     * @param {?} color
     * @return {?}
     */
    isFieldUnderAttack(row, col, color) {
        /** @type {?} */
        let found = false;
        return this.pieces.filter((/**
         * @param {?} e
         * @return {?}
         */
        e => e.color === color)).some((/**
         * @param {?} e
         * @return {?}
         */
        e => e.getCoveredFields().some((/**
         * @param {?} f
         * @return {?}
         */
        f => f.col === col && f.row === row))));
    }
    /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    getPieceByField(row, col) {
        if (this.isFieldEmpty(row, col)) {
            //   throw new Error('Piece not found');
            return undefined;
        }
        return this.pieces.find((/**
         * @param {?} e
         * @return {?}
         */
        e => e.point.col === col && e.point.row === row));
    }
    /**
     * @param {?} color
     * @param {?} piece
     * @return {?}
     */
    isKingInCheck(color, piece) {
        /** @type {?} */
        let king = piece
            .find((/**
         * @param {?} e
         * @return {?}
         */
        e => e.color === color && e instanceof King));
        if (king) {
            return piece.some((/**
             * @param {?} e
             * @return {?}
             */
            e => e.getPossibleCaptures().some((/**
             * @param {?} e
             * @return {?}
             */
            e => e.col === king.point.col && e.row === king.point.row)) && e.color !== color));
        }
        return false;
    }
    /**
     * @param {?} color
     * @return {?}
     */
    getKingByColor(color) {
        return (/** @type {?} */ (this.pieces.find((/**
         * @param {?} e
         * @return {?}
         */
        e => (e instanceof King) && e.color === color))));
    }
    /**
     * @param {?} color
     * @return {?}
     */
    getCastleFENString(color) {
        /** @type {?} */
        let king = this.getKingByColor(color);
        if (king.isMovedAlready) {
            return '';
        }
        /** @type {?} */
        let fen = '';
        /** @type {?} */
        let leftRook = this.getPieceByField(king.point.row, 0);
        /** @type {?} */
        let rightRook = this.getPieceByField(king.point.row, 7);
        if (rightRook instanceof Rook && rightRook.color === color) {
            if (!rightRook.isMovedAlready) {
                fen += this.reverted ? 'q' : 'k';
            }
        }
        if (leftRook instanceof Rook && leftRook.color === color) {
            if (!leftRook.isMovedAlready) {
                fen += this.reverted ? 'k' : 'q';
            }
        }
        fen = fen.split('').sort().join("");
        return color === Color.BLACK ? fen : fen.toUpperCase();
    }
    /**
     * @return {?}
     */
    getEnPassantFENString() {
        if (this.enPassantPoint) {
            if (this.reverted) {
                return String.fromCharCode(104 - this.enPassantPoint.col) + (this.enPassantPoint.row + 1);
            }
            else {
                return String.fromCharCode(97 + this.enPassantPoint.col) + (Math.abs(this.enPassantPoint.row - 7) + 1);
            }
        }
        else {
            return '-';
        }
    }
    /**
     * @return {?}
     */
    calculateFEN() {
        /** @type {?} */
        let fen = '';
        for (let i = 0; i < 8; ++i) {
            /** @type {?} */
            let emptyFields = 0;
            for (let j = 0; j < 8; ++j) {
                /** @type {?} */
                let piece = this.pieces.find((/**
                 * @param {?} e
                 * @return {?}
                 */
                e => e.point.col === j && e.point.row === i));
                if (piece) {
                    if (emptyFields > 0) {
                        fen += emptyFields;
                        emptyFields = 0;
                    }
                    if (piece instanceof Rook) {
                        fen += piece.color === Color.BLACK ? 'r' : 'R';
                    }
                    else if (piece instanceof Knight) {
                        fen += piece.color === Color.BLACK ? 'n' : 'N';
                    }
                    else if (piece instanceof Bishop) {
                        fen += piece.color === Color.BLACK ? 'b' : 'B';
                    }
                    else if (piece instanceof Queen) {
                        fen += piece.color === Color.BLACK ? 'q' : 'Q';
                    }
                    else if (piece instanceof King) {
                        fen += piece.color === Color.BLACK ? 'k' : 'K';
                    }
                    else if (piece instanceof Pawn) {
                        fen += piece.color === Color.BLACK ? 'p' : 'P';
                    }
                }
                else {
                    ++emptyFields;
                }
            }
            if (emptyFields > 0) {
                fen += emptyFields;
            }
            fen += '/';
        }
        fen = fen.substr(0, fen.length - 1);
        if (this.reverted) {
            fen = fen.split('').reverse().join('');
        }
        fen += (' ' + (this.currentWhitePlayer ? 'w' : 'b'));
        /** @type {?} */
        let whiteEnPassant = this.getCastleFENString(Color.WHITE);
        /** @type {?} */
        let blackEnPassant = this.getCastleFENString(Color.BLACK);
        /** @type {?} */
        let concatedEnPassant = whiteEnPassant + blackEnPassant;
        if (!concatedEnPassant) {
            concatedEnPassant = '-';
        }
        fen += (' ' + concatedEnPassant);
        fen += (' ' + (this.getEnPassantFENString()));
        fen += ' ' + 0;
        fen += ' ' + this.fullMoveCount;
        this.fen = fen;
    }
    /**
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    isXYInPointSelection(i, j) {
        return false;
    }
}
if (false) {
    /** @type {?} */
    Board.prototype.board;
    /** @type {?} */
    Board.prototype.pieces;
    /** @type {?} */
    Board.prototype.enPassantPoint;
    /** @type {?} */
    Board.prototype.enPassantPiece;
    /** @type {?} */
    Board.prototype.lastMoveSrc;
    /** @type {?} */
    Board.prototype.lastMoveDest;
    /** @type {?} */
    Board.prototype.activePiece;
    /** @type {?} */
    Board.prototype.blackKingChecked;
    /** @type {?} */
    Board.prototype.possibleCaptures;
    /** @type {?} */
    Board.prototype.possibleMoves;
    /** @type {?} */
    Board.prototype.whiteKingChecked;
    /** @type {?} */
    Board.prototype.currentWhitePlayer;
    /** @type {?} */
    Board.prototype.reverted;
    /** @type {?} */
    Board.prototype.fullMoveCount;
    /** @type {?} */
    Board.prototype.fen;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2hlc3MtYm9hcmQvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2JvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFbkMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25DLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFbkMsTUFBTSxPQUFPLEtBQUs7SUFxQmhCO1FBbEJBLFdBQU0sR0FBWSxFQUFFLENBQUM7UUFFckIsbUJBQWMsR0FBVSxJQUFJLENBQUM7UUFDN0IsbUJBQWMsR0FBVSxJQUFJLENBQUM7UUFDN0IsZ0JBQVcsR0FBVSxJQUFJLENBQUM7UUFDMUIsaUJBQVksR0FBVSxJQUFJLENBQUM7UUFJM0IscUJBQWdCLEdBQVUsRUFBRSxDQUFDO1FBQzdCLGtCQUFhLEdBQVksRUFBRSxDQUFDO1FBRzVCLHVCQUFrQixHQUFHLElBQUksQ0FBQztRQUMxQixhQUFRLEdBQVksS0FBSyxDQUFDO1FBQzFCLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBS3hCLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLEtBQUssSUFBSSxDQUFDLEdBQVcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUU7WUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFD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QUFDO0lBQ2pCLENBQUM7Ozs7OztJQUVELG9CQUFvQixDQUFDLENBQVMsRUFBRSxDQUFTO1FBQ3ZDLE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztDQUNGOzs7SUFwUEMsc0JBQWtCOztJQUNsQix1QkFBcUI7O0lBRXJCLCtCQUE2Qjs7SUFDN0IsK0JBQTZCOztJQUM3Qiw0QkFBMEI7O0lBQzFCLDZCQUEyQjs7SUFDM0IsNEJBQW1COztJQUVuQixpQ0FBMEI7O0lBQzFCLGlDQUE2Qjs7SUFDN0IsOEJBQTRCOztJQUM1QixpQ0FBMEI7O0lBRTFCLG1DQUEwQjs7SUFDMUIseUJBQTBCOztJQUMxQiw4QkFBMEI7O0lBQzFCLG9CQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQb2ludH0gZnJvbSAnLi9waWVjZXMvcG9pbnQnO1xyXG5pbXBvcnQge0NvbG9yfSBmcm9tICcuL3BpZWNlcy9jb2xvcic7XHJcbmltcG9ydCB7S2luZ30gZnJvbSAnLi9waWVjZXMva2luZyc7XHJcbmltcG9ydCB7UGllY2V9IGZyb20gJy4vcGllY2VzL3BpZWNlJztcclxuaW1wb3J0IHtjbG9uZURlZXB9IGZyb20gJ2xvZGFzaCc7XHJcbmltcG9ydCB7Um9va30gZnJvbSAnLi9waWVjZXMvcm9vayc7XHJcbmltcG9ydCB7S25pZ2h0fSBmcm9tICcuL3BpZWNlcy9rbmlnaHQnO1xyXG5pbXBvcnQge0Jpc2hvcH0gZnJvbSAnLi9waWVjZXMvYmlzaG9wJztcclxuaW1wb3J0IHtRdWVlbn0gZnJvbSAnLi9waWVjZXMvcXVlZW4nO1xyXG5pbXBvcnQge1Bhd259IGZyb20gJy4vcGllY2VzL3Bhd24nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvYXJkIHtcclxuXHJcbiAgYm9hcmQ6IG51bWJlcltdW107XHJcbiAgcGllY2VzOiBQaWVjZVtdID0gW107XHJcblxyXG4gIGVuUGFzc2FudFBvaW50OiBQb2ludCA9IG51bGw7XHJcbiAgZW5QYXNzYW50UGllY2U6IFBpZWNlID0gbnVsbDtcclxuICBsYXN0TW92ZVNyYzogUG9pbnQgPSBudWxsO1xyXG4gIGxhc3RNb3ZlRGVzdDogUG9pbnQgPSBudWxsO1xyXG4gIGFjdGl2ZVBpZWNlOiBQaWVjZTtcclxuXHJcbiAgYmxhY2tLaW5nQ2hlY2tlZDogYm9vbGVhbjtcclxuICBwb3NzaWJsZUNhcHR1cmVzOiBhbnlbXSA9IFtdO1xyXG4gIHBvc3NpYmxlTW92ZXM6IFBvaW50W10gPSBbXTtcclxuICB3aGl0ZUtpbmdDaGVja2VkOiBib29sZWFuO1xyXG5cclxuICBjdXJyZW50V2hpdGVQbGF5ZXIgPSB0cnVlO1xyXG4gIHJldmVydGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgZnVsbE1vdmVDb3VudDogbnVtYmVyID0gMTtcclxuICBmZW46IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgdGhpcy5ib2FyZCA9IFtdO1xyXG4gICAgZm9yICh2YXIgaTogbnVtYmVyID0gMDsgaSA8IDg7ICsraSkge1xyXG4gICAgICB0aGlzLmJvYXJkW2ldID0gW107XHJcbiAgICAgIGZvciAodmFyIGo6IG51bWJlciA9IDA7IGogPCA4OyArK2opIHtcclxuICAgICAgICB0aGlzLmJvYXJkW2ldW2pdID0gMDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNYWUluUG9zc2libGVNb3Zlcyhyb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnBvc3NpYmxlTW92ZXMuc29tZShlID0+IGUucm93ID09PSByb3cgJiYgZS5jb2wgPT09IGNvbCk7XHJcbiAgfVxyXG5cclxuICBpc1hZSW5Qb3NzaWJsZUNhcHR1cmVzKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucG9zc2libGVDYXB0dXJlcy5zb21lKGUgPT4gZS5yb3cgPT09IHJvdyAmJiBlLmNvbCA9PT0gY29sKTtcclxuICB9XHJcblxyXG4gIGlzWFlJblNvdXJjZU1vdmUoaTogbnVtYmVyLCBqOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmxhc3RNb3ZlU3JjICYmIHRoaXMubGFzdE1vdmVTcmMucm93ID09PSBpICYmIHRoaXMubGFzdE1vdmVTcmMuY29sID09PSBqO1xyXG4gIH1cclxuXHJcbiAgaXNYWUluRGVzdE1vdmUoaTogbnVtYmVyLCBqOiBudW1iZXIpIHtcclxuICAgIHJldHVybiB0aGlzLmxhc3RNb3ZlRGVzdCAmJiB0aGlzLmxhc3RNb3ZlRGVzdC5yb3cgPT09IGkgJiYgdGhpcy5sYXN0TW92ZURlc3QuY29sID09PSBqO1xyXG4gIH1cclxuXHJcbiAgaXNYWUluQWN0aXZlTW92ZShpOiBudW1iZXIsIGo6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHRoaXMuYWN0aXZlUGllY2UgJiYgdGhpcy5hY3RpdmVQaWVjZS5wb2ludC5yb3cgPT09IGkgJiYgdGhpcy5hY3RpdmVQaWVjZS5wb2ludC5jb2wgPT09IGo7XHJcbiAgfVxyXG5cclxuICBpc1BvaW50SW5Qb3NzaWJsZU1vdmVzKHBvaW50OiBQb2ludCk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucG9zc2libGVNb3Zlcy5zb21lKGUgPT4gZS5yb3cgPT09IHBvaW50LnJvdyAmJiBlLmNvbCA9PT0gcG9pbnQuY29sKTtcclxuICB9XHJcblxyXG4gIGlzUG9pbnRJblBvc3NpYmxlQ2FwdHVyZXMocG9pbnQ6IFBvaW50KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wb3NzaWJsZUNhcHR1cmVzLnNvbWUoZSA9PiBlLnJvdyA9PT0gcG9pbnQucm93ICYmIGUuY29sID09PSBwb2ludC5jb2wpO1xyXG4gIH1cclxuXHJcbiAgcmVzZXQoKSB7XHJcbiAgICB0aGlzLmxhc3RNb3ZlRGVzdCA9IG51bGw7XHJcbiAgICB0aGlzLmxhc3RNb3ZlU3JjID0gbnVsbDtcclxuICAgIHRoaXMud2hpdGVLaW5nQ2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgdGhpcy5ibGFja0tpbmdDaGVja2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLnBvc3NpYmxlQ2FwdHVyZXMgPSBbXTtcclxuICAgIHRoaXMucG9zc2libGVNb3ZlcyA9IFtdO1xyXG4gICAgdGhpcy5hY3RpdmVQaWVjZSA9IG51bGw7XHJcbiAgICB0aGlzLnJldmVydGVkID0gZmFsc2U7XHJcbiAgICB0aGlzLmN1cnJlbnRXaGl0ZVBsYXllciA9IHRydWU7XHJcbiAgICB0aGlzLmVuUGFzc2FudFBvaW50ID0gbnVsbDtcclxuICAgIHRoaXMuZW5QYXNzYW50UGllY2UgPSBudWxsO1xyXG4gICAgdGhpcy5mdWxsTW92ZUNvdW50ID0gMTtcclxuICAgIHRoaXMuY2FsY3VsYXRlRkVOKCk7XHJcbiAgfVxyXG5cclxuICByZXZlcnNlKCkge1xyXG4gICAgdGhpcy5yZXZlcnRlZCA9ICF0aGlzLnJldmVydGVkO1xyXG4gICAgdGhpcy5hY3RpdmVQaWVjZSA9IG51bGw7XHJcbiAgICB0aGlzLnBvc3NpYmxlTW92ZXMgPSBbXTtcclxuICAgIHRoaXMucG9zc2libGVDYXB0dXJlcyA9IFtdO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBpZWNlcy5sZW5ndGg7ICsraSkge1xyXG4gICAgICB0aGlzLnJldmVyc2VQb2ludCh0aGlzLnBpZWNlc1tpXS5wb2ludCk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZXZlcnNlUG9pbnQodGhpcy5sYXN0TW92ZVNyYyk7XHJcblxyXG4gICAgaWYgKHRoaXMuZW5QYXNzYW50UG9pbnQgJiYgdGhpcy5lblBhc3NhbnRQaWVjZSkge1xyXG4gICAgICB0aGlzLnJldmVyc2VQb2ludCh0aGlzLmVuUGFzc2FudFBvaW50KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgcmV2ZXJzZVBvaW50KHBvaW50OiBQb2ludCkge1xyXG4gICAgaWYgKHBvaW50KSB7XHJcbiAgICAgIHBvaW50LnJvdyA9IE1hdGguYWJzKHBvaW50LnJvdyAtIDcpO1xyXG4gICAgICBwb2ludC5jb2wgPSBNYXRoLmFicyhwb2ludC5jb2wgLSA3KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNsb25lKCk6IEJvYXJkIHtcclxuICAgIHJldHVybiBjbG9uZURlZXAodGhpcyk7XHJcbiAgfVxyXG5cclxuICBpc0ZpZWxkVGFrZW5CeUVuZW15KHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgZW5lbXlDb2xvcjogQ29sb3IpOiBib29sZWFuIHtcclxuICAgIGlmIChyb3cgPiA3IHx8IHJvdyA8IDAgfHwgY29sID4gNyB8fCBjb2wgPCAwKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0aGlzLnBpZWNlcy5zb21lKGUgPT4gZS5wb2ludC5jb2wgPT09IGNvbCAmJiBlLnBvaW50LnJvdyA9PT0gcm93ICYmIGUuY29sb3IgPT09IGVuZW15Q29sb3IpO1xyXG4gIH1cclxuXHJcbiAgaXNGaWVsZEVtcHR5KHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHJvdyA+IDcgfHwgcm93IDwgMCB8fCBjb2wgPiA3IHx8IGNvbCA8IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuICF0aGlzLnBpZWNlcy5zb21lKGUgPT4gZS5wb2ludC5jb2wgPT09IGNvbCAmJiBlLnBvaW50LnJvdyA9PT0gcm93KTtcclxuICB9XHJcblxyXG4gIGlzRmllbGRVbmRlckF0dGFjayhyb3c6IG51bWJlciwgY29sOiBudW1iZXIsIGNvbG9yOiBDb2xvcikge1xyXG4gICAgbGV0IGZvdW5kID0gZmFsc2U7XHJcbiAgICByZXR1cm4gdGhpcy5waWVjZXMuZmlsdGVyKGUgPT4gZS5jb2xvciA9PT0gY29sb3IpLnNvbWUoZSA9PiBlLmdldENvdmVyZWRGaWVsZHMoKS5zb21lKGYgPT4gZi5jb2wgPT09IGNvbCAmJiBmLnJvdyA9PT0gcm93KSk7XHJcbiAgfVxyXG5cclxuICBnZXRQaWVjZUJ5RmllbGQocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogUGllY2Uge1xyXG4gICAgaWYgKHRoaXMuaXNGaWVsZEVtcHR5KHJvdywgY29sKSkge1xyXG4gICAgICAvLyAgIHRocm93IG5ldyBFcnJvcignUGllY2Ugbm90IGZvdW5kJyk7XHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRoaXMucGllY2VzLmZpbmQoZSA9PiBlLnBvaW50LmNvbCA9PT0gY29sICYmIGUucG9pbnQucm93ID09PSByb3cpO1xyXG4gIH1cclxuXHJcbiAgaXNLaW5nSW5DaGVjayhjb2xvcjogQ29sb3IsIHBpZWNlOiBQaWVjZVtdKTogYm9vbGVhbiB7XHJcbiAgICBsZXQga2luZyA9IHBpZWNlXHJcbiAgICAgIC5maW5kKGUgPT4gZS5jb2xvciA9PT0gY29sb3IgJiYgZSBpbnN0YW5jZW9mIEtpbmcpO1xyXG5cclxuICAgIGlmIChraW5nKSB7XHJcbiAgICAgIHJldHVybiBwaWVjZS5zb21lKGUgPT4gZS5nZXRQb3NzaWJsZUNhcHR1cmVzKCkuc29tZShlID0+IGUuY29sID09PSBraW5nLnBvaW50LmNvbCAmJiBlLnJvdyA9PT0ga2luZy5wb2ludC5yb3cpICYmIGUuY29sb3IgIT09IGNvbG9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGdldEtpbmdCeUNvbG9yKGNvbG9yOiBDb2xvcik6IEtpbmcge1xyXG4gICAgcmV0dXJuIDxLaW5nPiB0aGlzLnBpZWNlcy5maW5kKGUgPT4gKGUgaW5zdGFuY2VvZiBLaW5nKSAmJiBlLmNvbG9yID09PSBjb2xvcik7XHJcbiAgfVxyXG5cclxuICBnZXRDYXN0bGVGRU5TdHJpbmcoY29sb3I6IENvbG9yKSB7XHJcbiAgICBsZXQga2luZyA9IHRoaXMuZ2V0S2luZ0J5Q29sb3IoY29sb3IpO1xyXG5cclxuICAgIGlmIChraW5nLmlzTW92ZWRBbHJlYWR5KSB7XHJcbiAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICBsZXQgZmVuID0gJyc7XHJcbiAgICBsZXQgbGVmdFJvb2sgPSB0aGlzLmdldFBpZWNlQnlGaWVsZChraW5nLnBvaW50LnJvdywgMCk7XHJcbiAgICBsZXQgcmlnaHRSb29rID0gdGhpcy5nZXRQaWVjZUJ5RmllbGQoa2luZy5wb2ludC5yb3csIDcpO1xyXG5cclxuICAgIGlmIChyaWdodFJvb2sgaW5zdGFuY2VvZiBSb29rICYmIHJpZ2h0Um9vay5jb2xvciA9PT0gY29sb3IpIHtcclxuICAgICAgaWYgKCFyaWdodFJvb2suaXNNb3ZlZEFscmVhZHkpIHtcclxuICAgICAgICBmZW4gKz0gdGhpcy5yZXZlcnRlZCA/ICdxJyA6ICdrJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChsZWZ0Um9vayBpbnN0YW5jZW9mIFJvb2sgJiYgbGVmdFJvb2suY29sb3IgPT09IGNvbG9yKSB7XHJcbiAgICAgIGlmICghbGVmdFJvb2suaXNNb3ZlZEFscmVhZHkpIHtcclxuICAgICAgICBmZW4gKz0gdGhpcy5yZXZlcnRlZCA/ICdrJyA6ICdxJztcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZlbiA9IGZlbi5zcGxpdCgnJykuc29ydCgpLmpvaW4oXCJcIik7XHJcbiAgICByZXR1cm4gY29sb3IgPT09IENvbG9yLkJMQUNLID8gZmVuIDogZmVuLnRvVXBwZXJDYXNlKCk7XHJcbiAgfVxyXG5cclxuICBnZXRFblBhc3NhbnRGRU5TdHJpbmcoKSB7XHJcbiAgICBpZiAodGhpcy5lblBhc3NhbnRQb2ludCkge1xyXG4gICAgICBpZiAodGhpcy5yZXZlcnRlZCkge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDEwNCAtIHRoaXMuZW5QYXNzYW50UG9pbnQuY29sKSArICh0aGlzLmVuUGFzc2FudFBvaW50LnJvdyArIDEpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKDk3ICsgdGhpcy5lblBhc3NhbnRQb2ludC5jb2wpICsgKE1hdGguYWJzKHRoaXMuZW5QYXNzYW50UG9pbnQucm93IC0gNykgKyAxKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuICctJztcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBjYWxjdWxhdGVGRU4oKSB7XHJcbiAgICBsZXQgZmVuID0gJyc7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDg7ICsraSkge1xyXG4gICAgICBsZXQgZW1wdHlGaWVsZHMgPSAwO1xyXG4gICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDg7ICsraikge1xyXG4gICAgICAgIGxldCBwaWVjZSA9IHRoaXMucGllY2VzLmZpbmQoZSA9PiBlLnBvaW50LmNvbCA9PT0gaiAmJiBlLnBvaW50LnJvdyA9PT0gaSk7XHJcbiAgICAgICAgaWYgKHBpZWNlKSB7XHJcbiAgICAgICAgICBpZiAoZW1wdHlGaWVsZHMgPiAwKSB7XHJcbiAgICAgICAgICAgIGZlbiArPSBlbXB0eUZpZWxkcztcclxuICAgICAgICAgICAgZW1wdHlGaWVsZHMgPSAwO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIGlmIChwaWVjZSBpbnN0YW5jZW9mIFJvb2spIHtcclxuICAgICAgICAgICAgZmVuICs9IHBpZWNlLmNvbG9yID09PSBDb2xvci5CTEFDSyA/ICdyJyA6ICdSJztcclxuICAgICAgICAgIH0gZWxzZSBpZiAocGllY2UgaW5zdGFuY2VvZiBLbmlnaHQpIHtcclxuICAgICAgICAgICAgZmVuICs9IHBpZWNlLmNvbG9yID09PSBDb2xvci5CTEFDSyA/ICduJyA6ICdOJztcclxuICAgICAgICAgIH0gZWxzZSBpZiAocGllY2UgaW5zdGFuY2VvZiBCaXNob3ApIHtcclxuICAgICAgICAgICAgZmVuICs9IHBpZWNlLmNvbG9yID09PSBDb2xvci5CTEFDSyA/ICdiJyA6ICdCJztcclxuICAgICAgICAgIH0gZWxzZSBpZiAocGllY2UgaW5zdGFuY2VvZiBRdWVlbikge1xyXG4gICAgICAgICAgICBmZW4gKz0gcGllY2UuY29sb3IgPT09IENvbG9yLkJMQUNLID8gJ3EnIDogJ1EnO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChwaWVjZSBpbnN0YW5jZW9mIEtpbmcpIHtcclxuICAgICAgICAgICAgZmVuICs9IHBpZWNlLmNvbG9yID09PSBDb2xvci5CTEFDSyA/ICdrJyA6ICdLJztcclxuICAgICAgICAgIH0gZWxzZSBpZiAocGllY2UgaW5zdGFuY2VvZiBQYXduKSB7XHJcbiAgICAgICAgICAgIGZlbiArPSBwaWVjZS5jb2xvciA9PT0gQ29sb3IuQkxBQ0sgPyAncCcgOiAnUCc7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICsrZW1wdHlGaWVsZHM7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZW1wdHlGaWVsZHMgPiAwKSB7XHJcbiAgICAgICAgZmVuICs9IGVtcHR5RmllbGRzO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBmZW4gKz0gJy8nO1xyXG4gICAgfVxyXG5cclxuICAgIGZlbiA9IGZlbi5zdWJzdHIoMCwgZmVuLmxlbmd0aCAtIDEpO1xyXG5cclxuICAgIGlmICh0aGlzLnJldmVydGVkKSB7XHJcbiAgICAgIGZlbiA9IGZlbi5zcGxpdCgnJykucmV2ZXJzZSgpLmpvaW4oJycpO1xyXG4gICAgfVxyXG5cclxuICAgIGZlbiArPSAoJyAnICsgKHRoaXMuY3VycmVudFdoaXRlUGxheWVyID8gJ3cnIDogJ2InKSk7XHJcbiAgICBsZXQgd2hpdGVFblBhc3NhbnQgPSB0aGlzLmdldENhc3RsZUZFTlN0cmluZyhDb2xvci5XSElURSk7XHJcbiAgICBsZXQgYmxhY2tFblBhc3NhbnQgPSB0aGlzLmdldENhc3RsZUZFTlN0cmluZyhDb2xvci5CTEFDSyk7XHJcbiAgICBsZXQgY29uY2F0ZWRFblBhc3NhbnQgPSB3aGl0ZUVuUGFzc2FudCArIGJsYWNrRW5QYXNzYW50O1xyXG4gICAgaWYgKCFjb25jYXRlZEVuUGFzc2FudCkge1xyXG4gICAgICBjb25jYXRlZEVuUGFzc2FudCA9ICctJztcclxuICAgIH1cclxuXHJcbiAgICBmZW4gKz0gKCcgJyArIGNvbmNhdGVkRW5QYXNzYW50KTtcclxuICAgIGZlbiArPSAoJyAnICsgKHRoaXMuZ2V0RW5QYXNzYW50RkVOU3RyaW5nKCkpKTtcclxuICAgIGZlbiArPSAnICcgKyAwO1xyXG4gICAgZmVuICs9ICcgJyArIHRoaXMuZnVsbE1vdmVDb3VudDtcclxuICAgIHRoaXMuZmVuID0gZmVuO1xyXG4gIH1cclxuXHJcbiAgaXNYWUluUG9pbnRTZWxlY3Rpb24oaTogbnVtYmVyLCBqOiBudW1iZXIpIHtcclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcbn1cclxuIl19