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
var Board = /** @class */ (function () {
    function Board() {
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
    Board.prototype.isXYInPossibleMoves = /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    function (row, col) {
        return this.possibleMoves.some((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.row === row && e.col === col; }));
    };
    /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    Board.prototype.isXYInPossibleCaptures = /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    function (row, col) {
        return this.possibleCaptures.some((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.row === row && e.col === col; }));
    };
    /**
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    Board.prototype.isXYInSourceMove = /**
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    function (i, j) {
        return this.lastMoveSrc && this.lastMoveSrc.row === i && this.lastMoveSrc.col === j;
    };
    /**
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    Board.prototype.isXYInDestMove = /**
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    function (i, j) {
        return this.lastMoveDest && this.lastMoveDest.row === i && this.lastMoveDest.col === j;
    };
    /**
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    Board.prototype.isXYInActiveMove = /**
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    function (i, j) {
        return this.activePiece && this.activePiece.point.row === i && this.activePiece.point.col === j;
    };
    /**
     * @param {?} point
     * @return {?}
     */
    Board.prototype.isPointInPossibleMoves = /**
     * @param {?} point
     * @return {?}
     */
    function (point) {
        return this.possibleMoves.some((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.row === point.row && e.col === point.col; }));
    };
    /**
     * @param {?} point
     * @return {?}
     */
    Board.prototype.isPointInPossibleCaptures = /**
     * @param {?} point
     * @return {?}
     */
    function (point) {
        return this.possibleCaptures.some((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.row === point.row && e.col === point.col; }));
    };
    /**
     * @return {?}
     */
    Board.prototype.reset = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    Board.prototype.reverse = /**
     * @return {?}
     */
    function () {
        this.reverted = !this.reverted;
        this.activePiece = null;
        this.possibleMoves = [];
        this.possibleCaptures = [];
        for (var i = 0; i < this.pieces.length; ++i) {
            this.reversePoint(this.pieces[i].point);
        }
        this.reversePoint(this.lastMoveSrc);
        if (this.enPassantPoint && this.enPassantPiece) {
            this.reversePoint(this.enPassantPoint);
        }
    };
    /**
     * @private
     * @param {?} point
     * @return {?}
     */
    Board.prototype.reversePoint = /**
     * @private
     * @param {?} point
     * @return {?}
     */
    function (point) {
        if (point) {
            point.row = Math.abs(point.row - 7);
            point.col = Math.abs(point.col - 7);
        }
    };
    /**
     * @return {?}
     */
    Board.prototype.clone = /**
     * @return {?}
     */
    function () {
        return cloneDeep(this);
    };
    /**
     * @param {?} row
     * @param {?} col
     * @param {?} enemyColor
     * @return {?}
     */
    Board.prototype.isFieldTakenByEnemy = /**
     * @param {?} row
     * @param {?} col
     * @param {?} enemyColor
     * @return {?}
     */
    function (row, col, enemyColor) {
        if (row > 7 || row < 0 || col > 7 || col < 0) {
            return false;
        }
        return this.pieces.some((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.point.col === col && e.point.row === row && e.color === enemyColor; }));
    };
    /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    Board.prototype.isFieldEmpty = /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    function (row, col) {
        if (row > 7 || row < 0 || col > 7 || col < 0) {
            return false;
        }
        return !this.pieces.some((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.point.col === col && e.point.row === row; }));
    };
    /**
     * @param {?} row
     * @param {?} col
     * @param {?} color
     * @return {?}
     */
    Board.prototype.isFieldUnderAttack = /**
     * @param {?} row
     * @param {?} col
     * @param {?} color
     * @return {?}
     */
    function (row, col, color) {
        /** @type {?} */
        var found = false;
        return this.pieces.filter((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.color === color; })).some((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.getCoveredFields().some((/**
         * @param {?} f
         * @return {?}
         */
        function (f) { return f.col === col && f.row === row; })); }));
    };
    /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    Board.prototype.getPieceByField = /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    function (row, col) {
        if (this.isFieldEmpty(row, col)) {
            //   throw new Error('Piece not found');
            return undefined;
        }
        return this.pieces.find((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.point.col === col && e.point.row === row; }));
    };
    /**
     * @param {?} color
     * @param {?} piece
     * @return {?}
     */
    Board.prototype.isKingInCheck = /**
     * @param {?} color
     * @param {?} piece
     * @return {?}
     */
    function (color, piece) {
        /** @type {?} */
        var king = piece
            .find((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.color === color && e instanceof King; }));
        if (king) {
            return piece.some((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e.getPossibleCaptures().some((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e.col === king.point.col && e.row === king.point.row; })) && e.color !== color; }));
        }
        return false;
    };
    /**
     * @param {?} color
     * @return {?}
     */
    Board.prototype.getKingByColor = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        return (/** @type {?} */ (this.pieces.find((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return (e instanceof King) && e.color === color; }))));
    };
    /**
     * @param {?} color
     * @return {?}
     */
    Board.prototype.getCastleFENString = /**
     * @param {?} color
     * @return {?}
     */
    function (color) {
        /** @type {?} */
        var king = this.getKingByColor(color);
        if (king.isMovedAlready) {
            return '';
        }
        /** @type {?} */
        var fen = '';
        /** @type {?} */
        var leftRook = this.getPieceByField(king.point.row, 0);
        /** @type {?} */
        var rightRook = this.getPieceByField(king.point.row, 7);
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
    };
    /**
     * @return {?}
     */
    Board.prototype.getEnPassantFENString = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    Board.prototype.calculateFEN = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var fen = '';
        var _loop_1 = function (i) {
            /** @type {?} */
            var emptyFields = 0;
            var _loop_2 = function (j) {
                /** @type {?} */
                var piece = this_1.pieces.find((/**
                 * @param {?} e
                 * @return {?}
                 */
                function (e) { return e.point.col === j && e.point.row === i; }));
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
            };
            for (var j = 0; j < 8; ++j) {
                _loop_2(j);
            }
            if (emptyFields > 0) {
                fen += emptyFields;
            }
            fen += '/';
        };
        var this_1 = this;
        for (var i = 0; i < 8; ++i) {
            _loop_1(i);
        }
        fen = fen.substr(0, fen.length - 1);
        if (this.reverted) {
            fen = fen.split('').reverse().join('');
        }
        fen += (' ' + (this.currentWhitePlayer ? 'w' : 'b'));
        /** @type {?} */
        var whiteEnPassant = this.getCastleFENString(Color.WHITE);
        /** @type {?} */
        var blackEnPassant = this.getCastleFENString(Color.BLACK);
        /** @type {?} */
        var concatedEnPassant = whiteEnPassant + blackEnPassant;
        if (!concatedEnPassant) {
            concatedEnPassant = '-';
        }
        fen += (' ' + concatedEnPassant);
        fen += (' ' + (this.getEnPassantFENString()));
        fen += ' ' + 0;
        fen += ' ' + this.fullMoveCount;
        this.fen = fen;
    };
    /**
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    Board.prototype.isXYInPointSelection = /**
     * @param {?} i
     * @param {?} j
     * @return {?}
     */
    function (i, j) {
        return false;
    };
    return Board;
}());
export { Board };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2hlc3MtYm9hcmQvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL2JvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFbkMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLFFBQVEsQ0FBQztBQUNqQyxPQUFPLEVBQUMsSUFBSSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQ25DLE9BQU8sRUFBQyxNQUFNLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQztBQUN2QyxPQUFPLEVBQUMsTUFBTSxFQUFDLE1BQU0saUJBQWlCLENBQUM7QUFDdkMsT0FBTyxFQUFDLEtBQUssRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBQ3JDLE9BQU8sRUFBQyxJQUFJLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFbkM7SUFxQkU7UUFsQkEsV0FBTSxHQUFZLEVBQUUsQ0FBQztRQUVyQixtQkFBYyxHQUFVLElBQUksQ0FBQztRQUM3QixtQkFBYyxHQUFVLElBQUksQ0FBQztRQUM3QixnQkFBVyxHQUFVLElBQUksQ0FBQztRQUMxQixpQkFBWSxHQUFVLElBQUksQ0FBQztRQUkzQixxQkFBZ0IsR0FBVSxFQUFFLENBQUM7UUFDN0Isa0JBQWEsR0FBWSxFQUFFLENBQUM7UUFHNUIsdUJBQWtCLEdBQUcsSUFBSSxDQUFDO1FBQzFCLGFBQVEsR0FBWSxLQUFLLENBQUM7UUFDMUIsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFLeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRTtZQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNuQixLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFO2dCQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUN0QjtTQUNGO0lBQ0gsQ0FBQzs7Ozs7O0lBRUQsbUNBQW1COzs7OztJQUFuQixVQUFvQixHQUFXLEVBQUUsR0FBVztRQUMxQyxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQTlCLENBQThCLEVBQUMsQ0FBQztJQUN0RSxDQUFDOzs7Ozs7SUFFRCxzQ0FBc0I7Ozs7O0lBQXRCLFVBQXVCLEdBQVcsRUFBRSxHQUFXO1FBQzdDLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUE5QixDQUE4QixFQUFDLENBQUM7SUFDekUsQ0FBQzs7Ozs7O0lBRUQsZ0NBQWdCOzs7OztJQUFoQixVQUFpQixDQUFTLEVBQUUsQ0FBUztRQUNuQyxPQUFPLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUN0RixDQUFDOzs7Ozs7SUFFRCw4QkFBYzs7Ozs7SUFBZCxVQUFlLENBQVMsRUFBRSxDQUFTO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDO0lBQ3pGLENBQUM7Ozs7OztJQUVELGdDQUFnQjs7Ozs7SUFBaEIsVUFBaUIsQ0FBUyxFQUFFLENBQVM7UUFDbkMsT0FBTyxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLENBQUMsQ0FBQztJQUNsRyxDQUFDOzs7OztJQUVELHNDQUFzQjs7OztJQUF0QixVQUF1QixLQUFZO1FBQ2pDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxFQUExQyxDQUEwQyxFQUFDLENBQUM7SUFDbEYsQ0FBQzs7Ozs7SUFFRCx5Q0FBeUI7Ozs7SUFBekIsVUFBMEIsS0FBWTtRQUNwQyxPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsR0FBRyxLQUFLLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxLQUFLLENBQUMsR0FBRyxFQUExQyxDQUEwQyxFQUFDLENBQUM7SUFDckYsQ0FBQzs7OztJQUVELHFCQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBQ3pCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDOUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUM7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDdkIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7Ozs7SUFFRCx1QkFBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUMvQixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBQzNCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxFQUFFLENBQUMsRUFBRTtZQUMzQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekM7UUFFRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUVwQyxJQUFJLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUM5QyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7Ozs7OztJQUVPLDRCQUFZOzs7OztJQUFwQixVQUFxQixLQUFZO1FBQy9CLElBQUksS0FBSyxFQUFFO1lBQ1QsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDcEMsS0FBSyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDckM7SUFDSCxDQUFDOzs7O0lBRUQscUJBQUs7OztJQUFMO1FBQ0UsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDekIsQ0FBQzs7Ozs7OztJQUVELG1DQUFtQjs7Ozs7O0lBQW5CLFVBQW9CLEdBQVcsRUFBRSxHQUFXLEVBQUUsVUFBaUI7UUFDN0QsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQzVDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLFVBQVUsRUFBcEUsQ0FBb0UsRUFBQyxDQUFDO0lBQ3JHLENBQUM7Ozs7OztJQUVELDRCQUFZOzs7OztJQUFaLFVBQWEsR0FBVyxFQUFFLEdBQVc7UUFDbkMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO1lBQzVDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssR0FBRyxFQUExQyxDQUEwQyxFQUFDLENBQUM7SUFDNUUsQ0FBQzs7Ozs7OztJQUVELGtDQUFrQjs7Ozs7O0lBQWxCLFVBQW1CLEdBQVcsRUFBRSxHQUFXLEVBQUUsS0FBWTs7WUFDbkQsS0FBSyxHQUFHLEtBQUs7UUFDakIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU07Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFqQixDQUFpQixFQUFDLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQTlCLENBQThCLEVBQUMsRUFBOUQsQ0FBOEQsRUFBQyxDQUFDO0lBQzlILENBQUM7Ozs7OztJQUVELCtCQUFlOzs7OztJQUFmLFVBQWdCLEdBQVcsRUFBRSxHQUFXO1FBQ3RDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUU7WUFDL0Isd0NBQXdDO1lBQ3hDLE9BQU8sU0FBUyxDQUFDO1NBQ2xCO1FBRUQsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQTFDLENBQTBDLEVBQUMsQ0FBQztJQUMzRSxDQUFDOzs7Ozs7SUFFRCw2QkFBYTs7Ozs7SUFBYixVQUFjLEtBQVksRUFBRSxLQUFjOztZQUNwQyxJQUFJLEdBQUcsS0FBSzthQUNiLElBQUk7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxLQUFLLEtBQUssS0FBSyxJQUFJLENBQUMsWUFBWSxJQUFJLEVBQXRDLENBQXNDLEVBQUM7UUFFcEQsSUFBSSxJQUFJLEVBQUU7WUFDUixPQUFPLEtBQUssQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxJQUFJOzs7O1lBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQXBELENBQW9ELEVBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBNUcsQ0FBNEcsRUFBQyxDQUFDO1NBQ3RJO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDOzs7OztJQUVELDhCQUFjOzs7O0lBQWQsVUFBZSxLQUFZO1FBQ3pCLE9BQU8sbUJBQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJOzs7O1FBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBeEMsQ0FBd0MsRUFBQyxFQUFBLENBQUM7SUFDaEYsQ0FBQzs7Ozs7SUFFRCxrQ0FBa0I7Ozs7SUFBbEIsVUFBbUIsS0FBWTs7WUFDekIsSUFBSSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDO1FBRXJDLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixPQUFPLEVBQUUsQ0FBQztTQUNYOztZQUVHLEdBQUcsR0FBRyxFQUFFOztZQUNSLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzs7WUFDbEQsU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO1FBRXZELElBQUksU0FBUyxZQUFZLElBQUksSUFBSSxTQUFTLENBQUMsS0FBSyxLQUFLLEtBQUssRUFBRTtZQUMxRCxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRTtnQkFDN0IsR0FBRyxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDO2FBQ2xDO1NBQ0Y7UUFFRCxJQUFJLFFBQVEsWUFBWSxJQUFJLElBQUksUUFBUSxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7WUFDeEQsSUFBSSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUU7Z0JBQzVCLEdBQUcsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQzthQUNsQztTQUNGO1FBRUQsR0FBRyxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BDLE9BQU8sS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pELENBQUM7Ozs7SUFFRCxxQ0FBcUI7OztJQUFyQjtRQUNFLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtZQUN2QixJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7Z0JBQ2pCLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQzNGO2lCQUFNO2dCQUNMLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDeEc7U0FDRjthQUFNO1lBQ0wsT0FBTyxHQUFHLENBQUM7U0FDWjtJQUNILENBQUM7Ozs7SUFHRCw0QkFBWTs7O0lBQVo7O1lBQ00sR0FBRyxHQUFHLEVBQUU7Z0NBQ0gsQ0FBQzs7Z0JBQ0osV0FBVyxHQUFHLENBQUM7b0NBQ1YsQ0FBQzs7b0JBQ0osS0FBSyxHQUFHLE9BQUssTUFBTSxDQUFDLElBQUk7Ozs7Z0JBQUMsVUFBQSxDQUFDLElBQUksT0FBQSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEtBQUssQ0FBQyxFQUF0QyxDQUFzQyxFQUFDO2dCQUN6RSxJQUFJLEtBQUssRUFBRTtvQkFDVCxJQUFJLFdBQVcsR0FBRyxDQUFDLEVBQUU7d0JBQ25CLEdBQUcsSUFBSSxXQUFXLENBQUM7d0JBQ25CLFdBQVcsR0FBRyxDQUFDLENBQUM7cUJBQ2pCO29CQUVELElBQUksS0FBSyxZQUFZLElBQUksRUFBRTt3QkFDekIsR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7cUJBQ2hEO3lCQUFNLElBQUksS0FBSyxZQUFZLE1BQU0sRUFBRTt3QkFDbEMsR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7cUJBQ2hEO3lCQUFNLElBQUksS0FBSyxZQUFZLE1BQU0sRUFBRTt3QkFDbEMsR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7cUJBQ2hEO3lCQUFNLElBQUksS0FBSyxZQUFZLEtBQUssRUFBRTt3QkFDakMsR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7cUJBQ2hEO3lCQUFNLElBQUksS0FBSyxZQUFZLElBQUksRUFBRTt3QkFDaEMsR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7cUJBQ2hEO3lCQUFNLElBQUksS0FBSyxZQUFZLElBQUksRUFBRTt3QkFDaEMsR0FBRyxJQUFJLEtBQUssQ0FBQyxLQUFLLEtBQUssS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUM7cUJBQ2hEO2lCQUNGO3FCQUFNO29CQUNMLEVBQUUsV0FBVyxDQUFDO2lCQUNmOztZQXZCSCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQzt3QkFBakIsQ0FBQzthQXdCVDtZQUVELElBQUksV0FBVyxHQUFHLENBQUMsRUFBRTtnQkFDbkIsR0FBRyxJQUFJLFdBQVcsQ0FBQzthQUNwQjtZQUVELEdBQUcsSUFBSSxHQUFHLENBQUM7OztRQWhDYixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQztvQkFBakIsQ0FBQztTQWlDVDtRQUVELEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBRXBDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixHQUFHLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7U0FDeEM7UUFFRCxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzs7WUFDakQsY0FBYyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDOztZQUNyRCxjQUFjLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7O1lBQ3JELGlCQUFpQixHQUFHLGNBQWMsR0FBRyxjQUFjO1FBQ3ZELElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN0QixpQkFBaUIsR0FBRyxHQUFHLENBQUM7U0FDekI7UUFFRCxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQWlCLENBQUMsQ0FBQztRQUNqQyxHQUFHLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUMsR0FBRyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDZixHQUFHLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7SUFDakIsQ0FBQzs7Ozs7O0lBRUQsb0NBQW9COzs7OztJQUFwQixVQUFxQixDQUFTLEVBQUUsQ0FBUztRQUN2QyxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQXRQRCxJQXNQQzs7OztJQXBQQyxzQkFBa0I7O0lBQ2xCLHVCQUFxQjs7SUFFckIsK0JBQTZCOztJQUM3QiwrQkFBNkI7O0lBQzdCLDRCQUEwQjs7SUFDMUIsNkJBQTJCOztJQUMzQiw0QkFBbUI7O0lBRW5CLGlDQUEwQjs7SUFDMUIsaUNBQTZCOztJQUM3Qiw4QkFBNEI7O0lBQzVCLGlDQUEwQjs7SUFFMUIsbUNBQTBCOztJQUMxQix5QkFBMEI7O0lBQzFCLDhCQUEwQjs7SUFDMUIsb0JBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BvaW50fSBmcm9tICcuL3BpZWNlcy9wb2ludCc7XHJcbmltcG9ydCB7Q29sb3J9IGZyb20gJy4vcGllY2VzL2NvbG9yJztcclxuaW1wb3J0IHtLaW5nfSBmcm9tICcuL3BpZWNlcy9raW5nJztcclxuaW1wb3J0IHtQaWVjZX0gZnJvbSAnLi9waWVjZXMvcGllY2UnO1xyXG5pbXBvcnQge2Nsb25lRGVlcH0gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IHtSb29rfSBmcm9tICcuL3BpZWNlcy9yb29rJztcclxuaW1wb3J0IHtLbmlnaHR9IGZyb20gJy4vcGllY2VzL2tuaWdodCc7XHJcbmltcG9ydCB7QmlzaG9wfSBmcm9tICcuL3BpZWNlcy9iaXNob3AnO1xyXG5pbXBvcnQge1F1ZWVufSBmcm9tICcuL3BpZWNlcy9xdWVlbic7XHJcbmltcG9ydCB7UGF3bn0gZnJvbSAnLi9waWVjZXMvcGF3bic7XHJcblxyXG5leHBvcnQgY2xhc3MgQm9hcmQge1xyXG5cclxuICBib2FyZDogbnVtYmVyW11bXTtcclxuICBwaWVjZXM6IFBpZWNlW10gPSBbXTtcclxuXHJcbiAgZW5QYXNzYW50UG9pbnQ6IFBvaW50ID0gbnVsbDtcclxuICBlblBhc3NhbnRQaWVjZTogUGllY2UgPSBudWxsO1xyXG4gIGxhc3RNb3ZlU3JjOiBQb2ludCA9IG51bGw7XHJcbiAgbGFzdE1vdmVEZXN0OiBQb2ludCA9IG51bGw7XHJcbiAgYWN0aXZlUGllY2U6IFBpZWNlO1xyXG5cclxuICBibGFja0tpbmdDaGVja2VkOiBib29sZWFuO1xyXG4gIHBvc3NpYmxlQ2FwdHVyZXM6IGFueVtdID0gW107XHJcbiAgcG9zc2libGVNb3ZlczogUG9pbnRbXSA9IFtdO1xyXG4gIHdoaXRlS2luZ0NoZWNrZWQ6IGJvb2xlYW47XHJcblxyXG4gIGN1cnJlbnRXaGl0ZVBsYXllciA9IHRydWU7XHJcbiAgcmV2ZXJ0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBmdWxsTW92ZUNvdW50OiBudW1iZXIgPSAxO1xyXG4gIGZlbjogc3RyaW5nO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgICB0aGlzLmJvYXJkID0gW107XHJcbiAgICBmb3IgKHZhciBpOiBudW1iZXIgPSAwOyBpIDwgODsgKytpKSB7XHJcbiAgICAgIHRoaXMuYm9hcmRbaV0gPSBbXTtcclxuICAgICAgZm9yICh2YXIgajogbnVtYmVyID0gMDsgaiA8IDg7ICsraikge1xyXG4gICAgICAgIHRoaXMuYm9hcmRbaV1bal0gPSAwO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc1hZSW5Qb3NzaWJsZU1vdmVzKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHRoaXMucG9zc2libGVNb3Zlcy5zb21lKGUgPT4gZS5yb3cgPT09IHJvdyAmJiBlLmNvbCA9PT0gY29sKTtcclxuICB9XHJcblxyXG4gIGlzWFlJblBvc3NpYmxlQ2FwdHVyZXMocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wb3NzaWJsZUNhcHR1cmVzLnNvbWUoZSA9PiBlLnJvdyA9PT0gcm93ICYmIGUuY29sID09PSBjb2wpO1xyXG4gIH1cclxuXHJcbiAgaXNYWUluU291cmNlTW92ZShpOiBudW1iZXIsIGo6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHRoaXMubGFzdE1vdmVTcmMgJiYgdGhpcy5sYXN0TW92ZVNyYy5yb3cgPT09IGkgJiYgdGhpcy5sYXN0TW92ZVNyYy5jb2wgPT09IGo7XHJcbiAgfVxyXG5cclxuICBpc1hZSW5EZXN0TW92ZShpOiBudW1iZXIsIGo6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIHRoaXMubGFzdE1vdmVEZXN0ICYmIHRoaXMubGFzdE1vdmVEZXN0LnJvdyA9PT0gaSAmJiB0aGlzLmxhc3RNb3ZlRGVzdC5jb2wgPT09IGo7XHJcbiAgfVxyXG5cclxuICBpc1hZSW5BY3RpdmVNb3ZlKGk6IG51bWJlciwgajogbnVtYmVyKSB7XHJcbiAgICByZXR1cm4gdGhpcy5hY3RpdmVQaWVjZSAmJiB0aGlzLmFjdGl2ZVBpZWNlLnBvaW50LnJvdyA9PT0gaSAmJiB0aGlzLmFjdGl2ZVBpZWNlLnBvaW50LmNvbCA9PT0gajtcclxuICB9XHJcblxyXG4gIGlzUG9pbnRJblBvc3NpYmxlTW92ZXMocG9pbnQ6IFBvaW50KTogYm9vbGVhbiB7XHJcbiAgICByZXR1cm4gdGhpcy5wb3NzaWJsZU1vdmVzLnNvbWUoZSA9PiBlLnJvdyA9PT0gcG9pbnQucm93ICYmIGUuY29sID09PSBwb2ludC5jb2wpO1xyXG4gIH1cclxuXHJcbiAgaXNQb2ludEluUG9zc2libGVDYXB0dXJlcyhwb2ludDogUG9pbnQpOiBib29sZWFuIHtcclxuICAgIHJldHVybiB0aGlzLnBvc3NpYmxlQ2FwdHVyZXMuc29tZShlID0+IGUucm93ID09PSBwb2ludC5yb3cgJiYgZS5jb2wgPT09IHBvaW50LmNvbCk7XHJcbiAgfVxyXG5cclxuICByZXNldCgpIHtcclxuICAgIHRoaXMubGFzdE1vdmVEZXN0ID0gbnVsbDtcclxuICAgIHRoaXMubGFzdE1vdmVTcmMgPSBudWxsO1xyXG4gICAgdGhpcy53aGl0ZUtpbmdDaGVja2VkID0gZmFsc2U7XHJcbiAgICB0aGlzLmJsYWNrS2luZ0NoZWNrZWQgPSBmYWxzZTtcclxuICAgIHRoaXMucG9zc2libGVDYXB0dXJlcyA9IFtdO1xyXG4gICAgdGhpcy5wb3NzaWJsZU1vdmVzID0gW107XHJcbiAgICB0aGlzLmFjdGl2ZVBpZWNlID0gbnVsbDtcclxuICAgIHRoaXMucmV2ZXJ0ZWQgPSBmYWxzZTtcclxuICAgIHRoaXMuY3VycmVudFdoaXRlUGxheWVyID0gdHJ1ZTtcclxuICAgIHRoaXMuZW5QYXNzYW50UG9pbnQgPSBudWxsO1xyXG4gICAgdGhpcy5lblBhc3NhbnRQaWVjZSA9IG51bGw7XHJcbiAgICB0aGlzLmZ1bGxNb3ZlQ291bnQgPSAxO1xyXG4gICAgdGhpcy5jYWxjdWxhdGVGRU4oKTtcclxuICB9XHJcblxyXG4gIHJldmVyc2UoKSB7XHJcbiAgICB0aGlzLnJldmVydGVkID0gIXRoaXMucmV2ZXJ0ZWQ7XHJcbiAgICB0aGlzLmFjdGl2ZVBpZWNlID0gbnVsbDtcclxuICAgIHRoaXMucG9zc2libGVNb3ZlcyA9IFtdO1xyXG4gICAgdGhpcy5wb3NzaWJsZUNhcHR1cmVzID0gW107XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGllY2VzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgIHRoaXMucmV2ZXJzZVBvaW50KHRoaXMucGllY2VzW2ldLnBvaW50KTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJldmVyc2VQb2ludCh0aGlzLmxhc3RNb3ZlU3JjKTtcclxuXHJcbiAgICBpZiAodGhpcy5lblBhc3NhbnRQb2ludCAmJiB0aGlzLmVuUGFzc2FudFBpZWNlKSB7XHJcbiAgICAgIHRoaXMucmV2ZXJzZVBvaW50KHRoaXMuZW5QYXNzYW50UG9pbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSByZXZlcnNlUG9pbnQocG9pbnQ6IFBvaW50KSB7XHJcbiAgICBpZiAocG9pbnQpIHtcclxuICAgICAgcG9pbnQucm93ID0gTWF0aC5hYnMocG9pbnQucm93IC0gNyk7XHJcbiAgICAgIHBvaW50LmNvbCA9IE1hdGguYWJzKHBvaW50LmNvbCAtIDcpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xvbmUoKTogQm9hcmQge1xyXG4gICAgcmV0dXJuIGNsb25lRGVlcCh0aGlzKTtcclxuICB9XHJcblxyXG4gIGlzRmllbGRUYWtlbkJ5RW5lbXkocm93OiBudW1iZXIsIGNvbDogbnVtYmVyLCBlbmVteUNvbG9yOiBDb2xvcik6IGJvb2xlYW4ge1xyXG4gICAgaWYgKHJvdyA+IDcgfHwgcm93IDwgMCB8fCBjb2wgPiA3IHx8IGNvbCA8IDApIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRoaXMucGllY2VzLnNvbWUoZSA9PiBlLnBvaW50LmNvbCA9PT0gY29sICYmIGUucG9pbnQucm93ID09PSByb3cgJiYgZS5jb2xvciA9PT0gZW5lbXlDb2xvcik7XHJcbiAgfVxyXG5cclxuICBpc0ZpZWxkRW1wdHkocm93OiBudW1iZXIsIGNvbDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICBpZiAocm93ID4gNyB8fCByb3cgPCAwIHx8IGNvbCA+IDcgfHwgY29sIDwgMCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gIXRoaXMucGllY2VzLnNvbWUoZSA9PiBlLnBvaW50LmNvbCA9PT0gY29sICYmIGUucG9pbnQucm93ID09PSByb3cpO1xyXG4gIH1cclxuXHJcbiAgaXNGaWVsZFVuZGVyQXR0YWNrKHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgY29sb3I6IENvbG9yKSB7XHJcbiAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgIHJldHVybiB0aGlzLnBpZWNlcy5maWx0ZXIoZSA9PiBlLmNvbG9yID09PSBjb2xvcikuc29tZShlID0+IGUuZ2V0Q292ZXJlZEZpZWxkcygpLnNvbWUoZiA9PiBmLmNvbCA9PT0gY29sICYmIGYucm93ID09PSByb3cpKTtcclxuICB9XHJcblxyXG4gIGdldFBpZWNlQnlGaWVsZChyb3c6IG51bWJlciwgY29sOiBudW1iZXIpOiBQaWVjZSB7XHJcbiAgICBpZiAodGhpcy5pc0ZpZWxkRW1wdHkocm93LCBjb2wpKSB7XHJcbiAgICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKCdQaWVjZSBub3QgZm91bmQnKTtcclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gdGhpcy5waWVjZXMuZmluZChlID0+IGUucG9pbnQuY29sID09PSBjb2wgJiYgZS5wb2ludC5yb3cgPT09IHJvdyk7XHJcbiAgfVxyXG5cclxuICBpc0tpbmdJbkNoZWNrKGNvbG9yOiBDb2xvciwgcGllY2U6IFBpZWNlW10pOiBib29sZWFuIHtcclxuICAgIGxldCBraW5nID0gcGllY2VcclxuICAgICAgLmZpbmQoZSA9PiBlLmNvbG9yID09PSBjb2xvciAmJiBlIGluc3RhbmNlb2YgS2luZyk7XHJcblxyXG4gICAgaWYgKGtpbmcpIHtcclxuICAgICAgcmV0dXJuIHBpZWNlLnNvbWUoZSA9PiBlLmdldFBvc3NpYmxlQ2FwdHVyZXMoKS5zb21lKGUgPT4gZS5jb2wgPT09IGtpbmcucG9pbnQuY29sICYmIGUucm93ID09PSBraW5nLnBvaW50LnJvdykgJiYgZS5jb2xvciAhPT0gY29sb3IpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgZ2V0S2luZ0J5Q29sb3IoY29sb3I6IENvbG9yKTogS2luZyB7XHJcbiAgICByZXR1cm4gPEtpbmc+IHRoaXMucGllY2VzLmZpbmQoZSA9PiAoZSBpbnN0YW5jZW9mIEtpbmcpICYmIGUuY29sb3IgPT09IGNvbG9yKTtcclxuICB9XHJcblxyXG4gIGdldENhc3RsZUZFTlN0cmluZyhjb2xvcjogQ29sb3IpIHtcclxuICAgIGxldCBraW5nID0gdGhpcy5nZXRLaW5nQnlDb2xvcihjb2xvcik7XHJcblxyXG4gICAgaWYgKGtpbmcuaXNNb3ZlZEFscmVhZHkpIHtcclxuICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBmZW4gPSAnJztcclxuICAgIGxldCBsZWZ0Um9vayA9IHRoaXMuZ2V0UGllY2VCeUZpZWxkKGtpbmcucG9pbnQucm93LCAwKTtcclxuICAgIGxldCByaWdodFJvb2sgPSB0aGlzLmdldFBpZWNlQnlGaWVsZChraW5nLnBvaW50LnJvdywgNyk7XHJcblxyXG4gICAgaWYgKHJpZ2h0Um9vayBpbnN0YW5jZW9mIFJvb2sgJiYgcmlnaHRSb29rLmNvbG9yID09PSBjb2xvcikge1xyXG4gICAgICBpZiAoIXJpZ2h0Um9vay5pc01vdmVkQWxyZWFkeSkge1xyXG4gICAgICAgIGZlbiArPSB0aGlzLnJldmVydGVkID8gJ3EnIDogJ2snO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGxlZnRSb29rIGluc3RhbmNlb2YgUm9vayAmJiBsZWZ0Um9vay5jb2xvciA9PT0gY29sb3IpIHtcclxuICAgICAgaWYgKCFsZWZ0Um9vay5pc01vdmVkQWxyZWFkeSkge1xyXG4gICAgICAgIGZlbiArPSB0aGlzLnJldmVydGVkID8gJ2snIDogJ3EnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmVuID0gZmVuLnNwbGl0KCcnKS5zb3J0KCkuam9pbihcIlwiKTtcclxuICAgIHJldHVybiBjb2xvciA9PT0gQ29sb3IuQkxBQ0sgPyBmZW4gOiBmZW4udG9VcHBlckNhc2UoKTtcclxuICB9XHJcblxyXG4gIGdldEVuUGFzc2FudEZFTlN0cmluZygpIHtcclxuICAgIGlmICh0aGlzLmVuUGFzc2FudFBvaW50KSB7XHJcbiAgICAgIGlmICh0aGlzLnJldmVydGVkKSB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoMTA0IC0gdGhpcy5lblBhc3NhbnRQb2ludC5jb2wpICsgKHRoaXMuZW5QYXNzYW50UG9pbnQucm93ICsgMSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoOTcgKyB0aGlzLmVuUGFzc2FudFBvaW50LmNvbCkgKyAoTWF0aC5hYnModGhpcy5lblBhc3NhbnRQb2ludC5yb3cgLSA3KSArIDEpO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJy0nO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG4gIGNhbGN1bGF0ZUZFTigpIHtcclxuICAgIGxldCBmZW4gPSAnJztcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgODsgKytpKSB7XHJcbiAgICAgIGxldCBlbXB0eUZpZWxkcyA9IDA7XHJcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgODsgKytqKSB7XHJcbiAgICAgICAgbGV0IHBpZWNlID0gdGhpcy5waWVjZXMuZmluZChlID0+IGUucG9pbnQuY29sID09PSBqICYmIGUucG9pbnQucm93ID09PSBpKTtcclxuICAgICAgICBpZiAocGllY2UpIHtcclxuICAgICAgICAgIGlmIChlbXB0eUZpZWxkcyA+IDApIHtcclxuICAgICAgICAgICAgZmVuICs9IGVtcHR5RmllbGRzO1xyXG4gICAgICAgICAgICBlbXB0eUZpZWxkcyA9IDA7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYgKHBpZWNlIGluc3RhbmNlb2YgUm9vaykge1xyXG4gICAgICAgICAgICBmZW4gKz0gcGllY2UuY29sb3IgPT09IENvbG9yLkJMQUNLID8gJ3InIDogJ1InO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChwaWVjZSBpbnN0YW5jZW9mIEtuaWdodCkge1xyXG4gICAgICAgICAgICBmZW4gKz0gcGllY2UuY29sb3IgPT09IENvbG9yLkJMQUNLID8gJ24nIDogJ04nO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChwaWVjZSBpbnN0YW5jZW9mIEJpc2hvcCkge1xyXG4gICAgICAgICAgICBmZW4gKz0gcGllY2UuY29sb3IgPT09IENvbG9yLkJMQUNLID8gJ2InIDogJ0InO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChwaWVjZSBpbnN0YW5jZW9mIFF1ZWVuKSB7XHJcbiAgICAgICAgICAgIGZlbiArPSBwaWVjZS5jb2xvciA9PT0gQ29sb3IuQkxBQ0sgPyAncScgOiAnUSc7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHBpZWNlIGluc3RhbmNlb2YgS2luZykge1xyXG4gICAgICAgICAgICBmZW4gKz0gcGllY2UuY29sb3IgPT09IENvbG9yLkJMQUNLID8gJ2snIDogJ0snO1xyXG4gICAgICAgICAgfSBlbHNlIGlmIChwaWVjZSBpbnN0YW5jZW9mIFBhd24pIHtcclxuICAgICAgICAgICAgZmVuICs9IHBpZWNlLmNvbG9yID09PSBDb2xvci5CTEFDSyA/ICdwJyA6ICdQJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgKytlbXB0eUZpZWxkcztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChlbXB0eUZpZWxkcyA+IDApIHtcclxuICAgICAgICBmZW4gKz0gZW1wdHlGaWVsZHM7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZlbiArPSAnLyc7XHJcbiAgICB9XHJcblxyXG4gICAgZmVuID0gZmVuLnN1YnN0cigwLCBmZW4ubGVuZ3RoIC0gMSk7XHJcblxyXG4gICAgaWYgKHRoaXMucmV2ZXJ0ZWQpIHtcclxuICAgICAgZmVuID0gZmVuLnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZmVuICs9ICgnICcgKyAodGhpcy5jdXJyZW50V2hpdGVQbGF5ZXIgPyAndycgOiAnYicpKTtcclxuICAgIGxldCB3aGl0ZUVuUGFzc2FudCA9IHRoaXMuZ2V0Q2FzdGxlRkVOU3RyaW5nKENvbG9yLldISVRFKTtcclxuICAgIGxldCBibGFja0VuUGFzc2FudCA9IHRoaXMuZ2V0Q2FzdGxlRkVOU3RyaW5nKENvbG9yLkJMQUNLKTtcclxuICAgIGxldCBjb25jYXRlZEVuUGFzc2FudCA9IHdoaXRlRW5QYXNzYW50ICsgYmxhY2tFblBhc3NhbnQ7XHJcbiAgICBpZiAoIWNvbmNhdGVkRW5QYXNzYW50KSB7XHJcbiAgICAgIGNvbmNhdGVkRW5QYXNzYW50ID0gJy0nO1xyXG4gICAgfVxyXG5cclxuICAgIGZlbiArPSAoJyAnICsgY29uY2F0ZWRFblBhc3NhbnQpO1xyXG4gICAgZmVuICs9ICgnICcgKyAodGhpcy5nZXRFblBhc3NhbnRGRU5TdHJpbmcoKSkpO1xyXG4gICAgZmVuICs9ICcgJyArIDA7XHJcbiAgICBmZW4gKz0gJyAnICsgdGhpcy5mdWxsTW92ZUNvdW50O1xyXG4gICAgdGhpcy5mZW4gPSBmZW47XHJcbiAgfVxyXG5cclxuICBpc1hZSW5Qb2ludFNlbGVjdGlvbihpOiBudW1iZXIsIGo6IG51bWJlcikge1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufVxyXG4iXX0=