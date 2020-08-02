(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./dist/ngx-chess-board/fesm2015/ngx-chess-board.js":
/*!**********************************************************!*\
  !*** ./dist/ngx-chess-board/fesm2015/ngx-chess-board.js ***!
  \**********************************************************/
/*! exports provided: NgxChessBoardModule, NgxChessBoardService, ɵa, ɵb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChessBoardModule", function() { return NgxChessBoardModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxChessBoardService", function() { return NgxChessBoardService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵa", function() { return NgxChessBoardComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ɵb", function() { return PiecePromotionModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");







/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pieces/color.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @enum {number} */
const Color = {
    WHITE: 0,
    BLACK: 1,
};
Color[Color.WHITE] = 'WHITE';
Color[Color.BLACK] = 'BLACK';

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pieces/piece.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class Piece {
    /**
     * @param {?} point
     * @param {?} color
     * @param {?} image
     * @param {?} relValue
     * @param {?} board
     */
    constructor(point, color, image, relValue, board) {
        this.checkPoints = [];
        this.color = color;
        this.image = image;
        this.point = point;
        this.relValue = relValue;
        this.board = board;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pieces/point.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Point {
    /**
     * @param {?} row
     * @param {?} col
     */
    constructor(row, col) {
        this.row = row;
        this.col = col;
    }
    /**
     * @param {?} that
     * @return {?}
     */
    isEqual(that) {
        return that && this.row === that.row && this.col === that.col;
    }
    /**
     * @param {?} row
     * @param {?} col
     * @return {?}
     */
    hasCoordsEqual(row, col) {
        return row && col && this.row === row && this.col === col;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pieces/rook.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Rook extends Piece {
    /**
     * @param {?} point
     * @param {?} color
     * @param {?} image
     * @param {?} board
     */
    constructor(point, color, image, board) {
        super(point, color, image, 5, board);
        this.isMovedAlready = false;
    }
    /**
     * @return {?}
     */
    getPossibleMoves() {
        /** @type {?} */
        let possiblePoints = [];
        /** @type {?} */
        let row = this.point.row;
        /** @type {?} */
        let col = this.point.col;
        for (let i = row + 1; i < 8; ++i) { // dol
            if (this.board.isFieldEmpty(i, col)) {
                possiblePoints.push(new Point(i, col));
            }
            else {
                break;
            }
        }
        for (let i = row - 1; i >= 0; --i) { // gora
            if (this.board.isFieldEmpty(i, col)) {
                possiblePoints.push(new Point(i, col));
            }
            else {
                break;
            }
        }
        for (let j = col - 1; j >= 0; --j) { // lewo
            if (this.board.isFieldEmpty(row, j)) {
                possiblePoints.push(new Point(row, j));
            }
            else {
                break;
            }
        }
        for (let j = col + 1; j < 8; ++j) { // prawo
            if (this.board.isFieldEmpty(row, j)) {
                possiblePoints.push(new Point(row, j));
            }
            else {
                break;
            }
        }
        return possiblePoints;
    }
    /**
     * @return {?}
     */
    getPossibleCaptures() {
        /** @type {?} */
        let possiblePoints = [];
        /** @type {?} */
        let row = this.point.row;
        /** @type {?} */
        let col = this.point.col;
        for (let i = row + 1; i < 8; ++i) { // dol
            if (this.board.isFieldTakenByEnemy(i, col, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(i, col));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(i, col)) {
                    break;
                }
            }
        }
        for (let i = row - 1; i >= 0; --i) { // gora
            if (this.board.isFieldTakenByEnemy(i, col, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(i, col));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(i, col)) {
                    break;
                }
            }
        }
        for (let j = col - 1; j >= 0; --j) { // lewo
            if (this.board.isFieldTakenByEnemy(row, j, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(row, j));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(row, j)) {
                    break;
                }
            }
        }
        for (let j = col + 1; j < 8; ++j) { // prawo
            if (this.board.isFieldTakenByEnemy(row, j, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(row, j));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(row, j)) {
                    break;
                }
            }
        }
        return possiblePoints;
    }
    /**
     * @return {?}
     */
    getCoveredFields() {
        /** @type {?} */
        let possiblePoints = [];
        /** @type {?} */
        let row = this.point.row;
        /** @type {?} */
        let col = this.point.col;
        for (let i = row + 1; i < 8; ++i) { // dol
            if (this.board.isFieldEmpty(i, col)) {
                possiblePoints.push(new Point(i, col));
            }
            else {
                if (!(this.board.getPieceByField instanceof King)) {
                    possiblePoints.push(new Point(i, col));
                    break;
                }
            }
        }
        for (let i = row - 1; i >= 0; --i) { // gora
            if (this.board.isFieldEmpty(i, col)) {
                possiblePoints.push(new Point(i, col));
            }
            else {
                if (!(this.board.getPieceByField instanceof King)) {
                    possiblePoints.push(new Point(i, col));
                    break;
                }
            }
        }
        for (let j = col - 1; j >= 0; --j) { // lewo
            if (this.board.isFieldEmpty(row, j)) {
                possiblePoints.push(new Point(row, j));
            }
            else {
                if (!(this.board.getPieceByField instanceof King)) {
                    possiblePoints.push(new Point(row, j));
                    break;
                }
            }
        }
        for (let j = col + 1; j < 8; ++j) { // prawo
            if (this.board.isFieldEmpty(row, j)) {
                possiblePoints.push(new Point(row, j));
            }
            else {
                if (!(this.board.getPieceByField instanceof King)) {
                    possiblePoints.push(new Point(row, j));
                    break;
                }
            }
        }
        return possiblePoints;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pieces/king.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class King extends Piece {
    /**
     * @param {?} point
     * @param {?} color
     * @param {?} image
     * @param {?} board
     */
    constructor(point, color, image, board) {
        super(point, color, image, 0, board);
        this.castledAlready = false;
        this.shortCastled = false;
        this.longCastled = false;
        this.isCastling = false;
    }
    /**
     * @return {?}
     */
    getPossibleMoves() {
        /** @type {?} */
        let possiblePoints = [];
        /** @type {?} */
        let row = this.point.row;
        /** @type {?} */
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
        if (!this.isMovedAlready) {
            /** @type {?} */
            let longCastlePossible = true;
            for (let i = col - 1; i > 0; --i) {
                if (!this.board.isFieldEmpty(row, i) || this.board.isFieldUnderAttack(row, i, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                    longCastlePossible = false;
                    break;
                }
            }
            if (longCastlePossible && this.board.getPieceByField(row, 0)) {
                /** @type {?} */
                let leftRook = this.board.getPieceByField(row, 0);
                if (leftRook instanceof Rook) {
                    if (!leftRook.isMovedAlready) {
                        possiblePoints.push(new Point(row, col - 2));
                    }
                }
            }
            /** @type {?} */
            let shortCastlePossible = true;
            for (let i = col + 1; i < 7; ++i) {
                if (!this.board.isFieldEmpty(row, i) || this.board.isFieldUnderAttack(row, i, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                    shortCastlePossible = false;
                    break;
                }
            }
            if (shortCastlePossible && this.board.getPieceByField(row, 7)) {
                /** @type {?} */
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
    /**
     * @return {?}
     */
    getPossibleCaptures() {
        /** @type {?} */
        let possiblePoints = [];
        /** @type {?} */
        let row = this.point.row;
        /** @type {?} */
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
    /**
     * @return {?}
     */
    getCoveredFields() {
        /** @type {?} */
        let possiblePoints = [];
        /** @type {?} */
        let row = this.point.row;
        /** @type {?} */
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
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/unicode-constants.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class UnicodeConstants {
}
UnicodeConstants.WHITE_KING = '&#x2654;';
UnicodeConstants.WHITE_QUEEN = '&#x2655;';
UnicodeConstants.WHITE_KNIGHT = '&#x2658;';
UnicodeConstants.WHITE_ROOK = '&#x2656;';
UnicodeConstants.WHITE_PAWN = '&#x2659;';
UnicodeConstants.WHITE_BISHOP = '&#x2657;';
UnicodeConstants.BLACK_KING = '&#x265A;';
UnicodeConstants.BLACK_QUEEN = '&#x265B;';
UnicodeConstants.BLACK_KNIGHT = '&#x265E;';
UnicodeConstants.BLACK_ROOK = '&#x265C;';
UnicodeConstants.BLACK_PAWN = '&#x265F;';
UnicodeConstants.BLACK_BISHOP = '&#x265D;';
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pieces/queen.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Queen extends Piece {
    /**
     * @param {?} point
     * @param {?} color
     * @param {?} image
     * @param {?} board
     */
    constructor(point, color, image, board) {
        super(point, color, image, 9, board);
    }
    /**
     * @return {?}
     */
    getPossibleMoves() {
        /** @type {?} */
        let possiblePoints = [];
        /** @type {?} */
        let row = this.point.row;
        /** @type {?} */
        let col = this.point.col;
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) { // lewa gorna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                break;
            }
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < 8; --i, ++j) { // prawa gorna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                break;
            }
        }
        for (let i = row + 1, j = col - 1; i < 8 && j >= 0; ++i, --j) { // lewa dolna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                break;
            }
        }
        for (let i = row + 1, j = col + 1; i < 8 && j < 8; ++i, ++j) { // prawa dolna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                break;
            }
        }
        for (let i = row + 1; i < 8; ++i) { // dol
            if (this.board.isFieldEmpty(i, col)) {
                possiblePoints.push(new Point(i, col));
            }
            else {
                break;
            }
        }
        for (let i = row - 1; i >= 0; --i) { // gora
            if (this.board.isFieldEmpty(i, col)) {
                possiblePoints.push(new Point(i, col));
            }
            else {
                break;
            }
        }
        for (let j = col - 1; j >= 0; --j) { // lewo
            if (this.board.isFieldEmpty(row, j)) {
                possiblePoints.push(new Point(row, j));
            }
            else {
                break;
            }
        }
        for (let j = col + 1; j < 8; ++j) { // prawo
            if (this.board.isFieldEmpty(row, j)) {
                possiblePoints.push(new Point(row, j));
            }
            else {
                break;
            }
        }
        return possiblePoints;
    }
    /**
     * @return {?}
     */
    getPossibleCaptures() {
        /** @type {?} */
        let possiblePoints = [];
        /** @type {?} */
        let row = this.point.row;
        /** @type {?} */
        let col = this.point.col;
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) { // lewa gorna przekatna
            if (this.board.isFieldTakenByEnemy(i, j, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(i, j));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(i, j)) {
                    break;
                }
            }
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < 8; --i, ++j) { // prawa gorna przekatna
            if (this.board.isFieldTakenByEnemy(i, j, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(i, j));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(i, j)) {
                    break;
                }
            }
        }
        for (let i = row + 1, j = col - 1; i < 8 && j >= 0; ++i, --j) { // lewa dolna przekatna
            if (this.board.isFieldTakenByEnemy(i, j, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(i, j));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(i, j)) {
                    break;
                }
            }
        }
        for (let i = row + 1, j = col + 1; i < 8 && j < 8; ++i, ++j) { // prawa dolna przekatna
            if (this.board.isFieldTakenByEnemy(i, j, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(i, j));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(i, j)) {
                    break;
                }
            }
        }
        for (let i = row + 1; i < 8; ++i) { // dol
            if (this.board.isFieldTakenByEnemy(i, col, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(i, col));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(i, col)) {
                    break;
                }
            }
        }
        for (let i = row - 1; i >= 0; --i) { // gora
            if (this.board.isFieldTakenByEnemy(i, col, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(i, col));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(i, col)) {
                    break;
                }
            }
        }
        for (let j = col - 1; j >= 0; --j) { // lewo
            if (this.board.isFieldTakenByEnemy(row, j, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(row, j));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(row, j)) {
                    break;
                }
            }
        }
        for (let j = col + 1; j < 8; ++j) { // prawo
            if (this.board.isFieldTakenByEnemy(row, j, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(row, j));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(row, j)) {
                    break;
                }
            }
        }
        return possiblePoints;
    }
    /**
     * @return {?}
     */
    getCoveredFields() {
        /** @type {?} */
        let possiblePoints = [];
        /** @type {?} */
        let row = this.point.row;
        /** @type {?} */
        let col = this.point.col;
        for (let i = row + 1; i < 8; ++i) { // dol
            if (this.board.isFieldEmpty(i, col)) {
                possiblePoints.push(new Point(i, col));
            }
            else {
                if (!(this.board.getPieceByField(i, col) instanceof King)) {
                    possiblePoints.push(new Point(i, col));
                    break;
                }
            }
        }
        for (let i = row - 1; i >= 0; --i) { // gora
            if (this.board.isFieldEmpty(i, col)) {
                possiblePoints.push(new Point(i, col));
            }
            else {
                if (!(this.board.getPieceByField(i, col) instanceof King)) {
                    possiblePoints.push(new Point(i, col));
                    break;
                }
            }
        }
        for (let j = col - 1; j >= 0; --j) { // lewo
            if (this.board.isFieldEmpty(row, j)) {
                possiblePoints.push(new Point(row, j));
            }
            else {
                if (!(this.board.getPieceByField(row, j) instanceof King)) {
                    possiblePoints.push(new Point(row, j));
                    break;
                }
            }
        }
        for (let j = col + 1; j < 8; ++j) { // prawo
            if (this.board.isFieldEmpty(row, j)) {
                possiblePoints.push(new Point(row, j));
            }
            else {
                if (!(this.board.getPieceByField(row, j) instanceof King)) {
                    possiblePoints.push(new Point(row, j));
                    break;
                }
            }
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) { // lewa gorna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                if (!(this.board.getPieceByField(i, j) instanceof King)) {
                    possiblePoints.push(new Point(i, j));
                    break;
                }
            }
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < 8; --i, ++j) { // prawa gorna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                if (!(this.board.getPieceByField(i, j) instanceof King)) {
                    possiblePoints.push(new Point(i, j));
                    break;
                }
            }
        }
        for (let i = row + 1, j = col - 1; i < 8 && j >= 0; ++i, --j) { // lewa dolna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                if (!(this.board.getPieceByField(i, j) instanceof King)) {
                    possiblePoints.push(new Point(i, j));
                    break;
                }
            }
        }
        for (let i = row + 1, j = col + 1; i < 8 && j < 8; ++i, ++j) { // prawa dolna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                if (!(this.board.getPieceByField(i, j) instanceof King)) {
                    possiblePoints.push(new Point(i, j));
                    break;
                }
            }
        }
        return possiblePoints;
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pieces/pawn.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Pawn extends Piece {
    /**
     * @param {?} point
     * @param {?} color
     * @param {?} image
     * @param {?} board
     */
    constructor(point, color, image, board) {
        super(point, color, image, 1, board);
        this.isMovedAlready = false;
    }
    /**
     * @return {?}
     */
    getPossibleMoves() {
        /** @type {?} */
        let possiblePoints = [];
        /** @type {?} */
        let row = this.point.row;
        /** @type {?} */
        let col = this.point.col;
        if ((!this.board.reverted && this.color === Color.WHITE) || (this.board.reverted && this.color === Color.BLACK)) {
            if (this.board.isFieldEmpty(row - 1, col)) {
                possiblePoints.push(new Point(row - 1, col));
                if (!this.isMovedAlready && this.board.isFieldEmpty(row - 2, col)) {
                    possiblePoints.push(new Point(row - 2, col));
                }
            }
        }
        else {
            if ( /*!board.isFieldTakenByEnemy(row + 1, col, Color.WHITE) &&*/this.board.isFieldEmpty(row + 1, col)) {
                possiblePoints.push(new Point(row + 1, col));
                if (!this.isMovedAlready && this.board.isFieldEmpty(row + 2, col)) {
                    possiblePoints.push(new Point(row + 2, col));
                }
            }
        }
        return possiblePoints;
    }
    /**
     * @return {?}
     */
    getPossibleCaptures() {
        /** @type {?} */
        let possiblePoints = [];
        /** @type {?} */
        let row = this.point.row;
        /** @type {?} */
        let col = this.point.col;
        if ((!this.board.reverted && this.color === Color.WHITE) || (this.board.reverted && this.color === Color.BLACK)) {
            if (this.board.isFieldTakenByEnemy(row - 1, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(row - 1, col - 1));
            }
            if (this.board.isFieldTakenByEnemy(row - 1, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(row - 1, col + 1));
            }
        }
        else {
            if (this.board.isFieldTakenByEnemy(row + 1, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(row + 1, col - 1));
            }
            if (this.board.isFieldTakenByEnemy(row + 1, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(row + 1, col + 1));
            }
        }
        if (this.board.enPassantPoint && this.board.enPassantPiece.color === (this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            if (row === this.board.enPassantPiece.point.row && Math.abs(this.board.enPassantPiece.point.col - col) === 1) {
                possiblePoints.push(this.board.enPassantPoint);
            }
        }
        return possiblePoints;
    }
    /**
     * @return {?}
     */
    getCoveredFields() {
        /** @type {?} */
        let possiblePoints = [];
        /** @type {?} */
        let row = this.point.row;
        /** @type {?} */
        let col = this.point.col;
        if ((!this.board.reverted && this.color === Color.WHITE) || (this.board.reverted && this.color === Color.BLACK)) {
            possiblePoints.push(new Point(row - 1, col - 1));
            possiblePoints.push(new Point(row - 1, col + 1));
        }
        else {
            possiblePoints.push(new Point(row + 1, col - 1));
            possiblePoints.push(new Point(row + 1, col + 1));
        }
        return possiblePoints;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pieces/knight.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Knight extends Piece {
    /**
     * @param {?} point
     * @param {?} color
     * @param {?} image
     * @param {?} board
     */
    constructor(point, color, image, board) {
        super(point, color, image, 3, board);
        this.isMovedAlready = false;
    }
    /**
     * @return {?}
     */
    getPossibleMoves() {
        /** @type {?} */
        let possiblePoints = [];
        /** @type {?} */
        let row = this.point.row;
        /** @type {?} */
        let col = this.point.col;
        // gora -> lewo
        if (this.board.isFieldEmpty(row - 2, col - 1)) {
            possiblePoints.push(new Point(row - 2, col - 1));
        }
        // gora -> prawo
        if (this.board.isFieldEmpty(row - 2, col + 1)) {
            possiblePoints.push(new Point(row - 2, col + 1));
        }
        // lewo -> gora
        if (this.board.isFieldEmpty(row - 1, col - 2)) {
            possiblePoints.push(new Point(row - 1, col - 2));
        }
        // prawo -> gora
        if (this.board.isFieldEmpty(row - 1, col + 2)) {
            possiblePoints.push(new Point(row - 1, col + 2));
        }
        // lewo -> dol
        if (this.board.isFieldEmpty(row + 1, col - 2)) {
            possiblePoints.push(new Point(row + 1, col - 2));
        }
        // prawo -> dol
        if (this.board.isFieldEmpty(row + 1, col + 2)) {
            possiblePoints.push(new Point(row + 1, col + 2));
        }
        // dol -> lewo
        if (this.board.isFieldEmpty(row + 2, col - 1)) {
            possiblePoints.push(new Point(row + 2, col - 1));
        }
        // dol -> prawo
        if (this.board.isFieldEmpty(row + 2, col + 1)) {
            possiblePoints.push(new Point(row + 2, col + 1));
        }
        return possiblePoints;
    }
    /**
     * @return {?}
     */
    getPossibleCaptures() {
        /** @type {?} */
        let possiblePoints = [];
        /** @type {?} */
        let row = this.point.row;
        /** @type {?} */
        let col = this.point.col;
        // gora -> lewo
        if (this.board.isFieldTakenByEnemy(row - 2, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row - 2, col - 1));
        }
        // gora -> prawo
        if (this.board.isFieldTakenByEnemy(row - 2, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row - 2, col + 1));
        }
        // lewo -> gora
        if (this.board.isFieldTakenByEnemy(row - 1, col - 2, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row - 1, col - 2));
        }
        // prawo -> gora
        if (this.board.isFieldTakenByEnemy(row - 1, col + 2, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row - 1, col + 2));
        }
        // lewo -> dol
        if (this.board.isFieldTakenByEnemy(row + 1, col - 2, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row + 1, col - 2));
        }
        // prawo -> dol
        if (this.board.isFieldTakenByEnemy(row + 1, col + 2, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row + 1, col + 2));
        }
        // dol -> lewo
        if (this.board.isFieldTakenByEnemy(row + 2, col - 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row + 2, col - 1));
        }
        // dol -> prawo
        if (this.board.isFieldTakenByEnemy(row + 2, col + 1, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
            possiblePoints.push(new Point(row + 2, col + 1));
        }
        return possiblePoints;
    }
    /**
     * @return {?}
     */
    getCoveredFields() {
        /** @type {?} */
        let possiblePoints = [];
        /** @type {?} */
        let row = this.point.row;
        /** @type {?} */
        let col = this.point.col;
        // gora -> lewo
        possiblePoints.push(new Point(row - 2, col - 1));
        // gora -> prawo
        possiblePoints.push(new Point(row - 2, col + 1));
        // lewo -> gora
        possiblePoints.push(new Point(row - 1, col - 2));
        // prawo -> gora
        possiblePoints.push(new Point(row - 1, col + 2));
        // lewo -> dol
        possiblePoints.push(new Point(row + 1, col - 2));
        // prawo -> dol
        possiblePoints.push(new Point(row + 1, col + 2));
        // dol -> lewo
        possiblePoints.push(new Point(row + 2, col - 1));
        // dol -> prawo
        possiblePoints.push(new Point(row + 2, col + 1));
        return possiblePoints;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pieces/bishop.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Bishop extends Piece {
    /**
     * @param {?} point
     * @param {?} color
     * @param {?} image
     * @param {?} board
     */
    constructor(point, color, image, board) {
        super(point, color, image, 3, board);
    }
    /**
     * @return {?}
     */
    getPossibleMoves() {
        /** @type {?} */
        let possiblePoints = [];
        /** @type {?} */
        let row = this.point.row;
        /** @type {?} */
        let col = this.point.col;
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) { // lewa gorna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            } //else if (board.getPieceByField(i, j) instanceof King && (board.getPieceByField(i, j).color !== this.color)){
            // for( let a = row - 1, b = col - 1; a > i && j >= col; --a, --b){
            //   possiblePoints.push(new Point(i, j));
            //   }
            // }
            else {
                break;
            }
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < 8; --i, ++j) { // prawa gorna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                break;
            }
        }
        for (let i = row + 1, j = col - 1; i < 8 && j >= 0; ++i, --j) { // lewa dolna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                break;
            }
        }
        for (let i = row + 1, j = col + 1; i < 8 && j < 8; ++i, ++j) { // prawa dolna przekatna
            if (this.board.isFieldEmpty(i, j)) {
                possiblePoints.push(new Point(i, j));
            }
            else {
                break;
            }
        }
        return possiblePoints;
    }
    /**
     * @return {?}
     */
    getPossibleCaptures() {
        /** @type {?} */
        let possiblePoints = [];
        /** @type {?} */
        let row = this.point.row;
        /** @type {?} */
        let col = this.point.col;
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) { // lewa gorna przekatna
            if (this.board.isFieldTakenByEnemy(i, j, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(i, j));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(i, j)) {
                    break;
                }
            }
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < 8; --i, ++j) { // prawa gorna przekatna
            if (this.board.isFieldTakenByEnemy(i, j, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(i, j));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(i, j)) {
                    break;
                }
            }
        }
        for (let i = row + 1, j = col - 1; i < 8 && j >= 0; ++i, --j) { // lewa dolna przekatna
            if (this.board.isFieldTakenByEnemy(i, j, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(i, j));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(i, j)) {
                    break;
                }
            }
        }
        for (let i = row + 1, j = col + 1; i < 8 && j < 8; ++i, ++j) { // prawa dolna przekatna
            if (this.board.isFieldTakenByEnemy(i, j, this.color === Color.WHITE ? Color.BLACK : Color.WHITE)) {
                possiblePoints.push(new Point(i, j));
                break;
            }
            else {
                if (!this.board.isFieldEmpty(i, j)) {
                    break;
                }
            }
        }
        return possiblePoints;
    }
    /**
     * @return {?}
     */
    getCoveredFields() {
        /** @type {?} */
        let possiblePoints = [];
        /** @type {?} */
        let row = this.point.row;
        /** @type {?} */
        let col = this.point.col;
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; --i, --j) { // lewa gorna przekatna
            if (this.board.isFieldEmpty(i, j))
                possiblePoints.push(new Point(i, j));
            else {
                if (!(this.board.getPieceByField(i, j) instanceof King)) {
                    possiblePoints.push(new Point(i, j));
                    break;
                }
            }
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < 8; --i, ++j) { // prawa gorna przekatna
            if (this.board.isFieldEmpty(i, j))
                possiblePoints.push(new Point(i, j));
            else {
                if (!(this.board.getPieceByField(i, j) instanceof King)) {
                    possiblePoints.push(new Point(i, j));
                    break;
                }
            }
        }
        for (let i = row + 1, j = col - 1; i < 8 && j >= 0; ++i, --j) { // lewa dolna przekatna
            if (this.board.isFieldEmpty(i, j))
                possiblePoints.push(new Point(i, j));
            else {
                if (!(this.board.getPieceByField(i, j) instanceof King)) {
                    possiblePoints.push(new Point(i, j));
                    break;
                }
            }
        }
        for (let i = row + 1, j = col + 1; i < 8 && j < 8; ++i, ++j) { // prawa dolna przekatna
            if (this.board.isFieldEmpty(i, j))
                possiblePoints.push(new Point(i, j));
            else {
                if (!(this.board.getPieceByField(i, j) instanceof King)) {
                    possiblePoints.push(new Point(i, j));
                    break;
                }
            }
        }
        return possiblePoints;
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/board.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Board {
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
        return Object(lodash__WEBPACK_IMPORTED_MODULE_3__["cloneDeep"])(this);
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
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/move-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class MoveUtils {
    /**
     * @param {?} currentColor
     * @param {?} row
     * @param {?} col
     * @param {?} destRow
     * @param {?} destCol
     * @param {?} board
     * @return {?}
     */
    static willMoveCauseCheck(currentColor, row, col, destRow, destCol, board) {
        /** @type {?} */
        let srcPiece = board.getPieceByField(row, col);
        /** @type {?} */
        let destPiece = board.getPieceByField(destRow, destCol);
        if (srcPiece) {
            srcPiece.point.row = destRow;
            srcPiece.point.col = destCol;
        }
        if (destPiece) {
            board.pieces = board.pieces.filter((/**
             * @param {?} e
             * @return {?}
             */
            e => e !== destPiece));
        }
        /** @type {?} */
        let isBound = board.isKingInCheck(currentColor, board.pieces);
        if (srcPiece) {
            srcPiece.point.col = col;
            srcPiece.point.row = row;
        }
        if (destPiece) {
            board.pieces.push(destPiece);
        }
        return isBound;
    }
    /**
     * @param {?} sourcePoint
     * @param {?} destPoint
     * @param {?} reverted
     * @return {?}
     */
    static format(sourcePoint, destPoint, reverted) {
        if (reverted) {
            /** @type {?} */
            let sourceX = 104 - sourcePoint.col;
            /** @type {?} */
            let destX = 104 - destPoint.col;
            return String.fromCharCode(sourceX) + (sourcePoint.row + 1)
                + String.fromCharCode(destX) + (destPoint.row + 1);
        }
        else {
            /** @type {?} */
            let incrementX = 97;
            return String.fromCharCode(sourcePoint.col + incrementX) + (Math.abs(sourcePoint.row - 7) + 1)
                + String.fromCharCode(destPoint.col + incrementX) + (Math.abs(destPoint.row - 7) + 1);
        }
    }
}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/service/ngx-chess-board.service.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxChessBoardService {
    constructor() {
        this.componentMethodCallSource = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.componentMethodCalled$ = this.componentMethodCallSource.asObservable();
    }
    /**
     * @return {?}
     */
    reset() {
        this.componentMethodCallSource.next();
    }
}
NgxChessBoardService.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"], args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */ NgxChessBoardService.ngInjectableDef = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({ factory: function NgxChessBoardService_Factory() { return new NgxChessBoardService(); }, token: NgxChessBoardService, providedIn: "root" });
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/piece-decorator/piece-abstract-decorator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
class PieceAbstractDecorator {
    /**
     * @protected
     * @param {?} piece
     */
    constructor(piece) {
        this.piece = piece;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/piece-decorator/available-move-decorator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class AvailableMoveDecorator extends PieceAbstractDecorator {
    /**
     * @param {?} piece
     * @param {?} pointClicked
     * @param {?} color
     * @param {?} board
     */
    constructor(piece, pointClicked, color, board) {
        super(piece);
        this.pointClicked = pointClicked;
        this.color = color;
        this.board = board;
    }
    /**
     * @return {?}
     */
    getPossibleCaptures() {
        return this.piece.getPossibleCaptures()
            .filter((/**
         * @param {?} point
         * @return {?}
         */
        point => !MoveUtils.willMoveCauseCheck(this.color, this.pointClicked.row, this.pointClicked.col, point.row, point.col, this.board)));
    }
    /**
     * @return {?}
     */
    getPossibleMoves() {
        return this.piece.getPossibleMoves()
            .filter((/**
         * @param {?} point
         * @return {?}
         */
        point => !MoveUtils.willMoveCauseCheck(this.color, this.pointClicked.row, this.pointClicked.col, point.row, point.col, this.board)));
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/board-state-provider/board-state-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BoardStateProvider {
    constructor() {
        this.moves = [];
    }
    /**
     * @param {?} moveHistory
     * @return {?}
     */
    addMove(moveHistory) {
        this.moves.push(moveHistory);
    }
    /**
     * @return {?}
     */
    getMoves() {
        return this.moves;
    }
    /**
     * @return {?}
     */
    pop() {
        return this.moves.pop();
    }
    /**
     * @return {?}
     */
    isEmpty() {
        return this.moves.length === 0;
    }
    /**
     * @return {?}
     */
    clear() {
        this.moves = [];
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/board-state-provider/board-state.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BoardState {
    /**
     * @param {?} board
     */
    constructor(board) {
        this.board = board;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/history-move-provider/history-move.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HistoryMove {
    /**
     * @param {?} move
     * @param {?} piece
     * @param {?} color
     */
    constructor(move, piece, color) {
        this.move = move;
        this.piece = piece;
        this.color = color;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/history-move-provider/history-move-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class HistoryMoveProvider {
    constructor() {
        this.historyMoves = [];
    }
    /**
     * @param {?} historyMove
     * @return {?}
     */
    addMove(historyMove) {
        this.historyMoves.push(historyMove);
    }
    /**
     * @return {?}
     */
    pop() {
        return this.historyMoves.pop();
    }
    /**
     * @return {?}
     */
    getAll() {
        return this.historyMoves;
    }
    /**
     * @return {?}
     */
    clear() {
        this.historyMoves = [];
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/constants.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Constants {
}
Constants.DEFAULT_DARK_TILE_COLOR = 'rgb(97, 84, 61)';
Constants.DEFAULT_LIGHT_TILE_COLOR = '#BAA378';
Constants.DEFAULT_SIZE = 400;
Constants.MIN_BOARD_SIZE = 100;
Constants.MAX_BOARD_SIZE = 4000;
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/coords/coords-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class CoordsProvider {
    constructor() {
        this._xCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        this._yCoords = [8, 7, 6, 5, 4, 3, 2, 1];
    }
    /**
     * @return {?}
     */
    reverse() {
        this._xCoords = this._xCoords.reverse();
        this._yCoords = this._yCoords.reverse();
    }
    /**
     * @return {?}
     */
    get xCoords() {
        return this._xCoords;
    }
    /**
     * @return {?}
     */
    get yCoords() {
        return this._yCoords;
    }
    /**
     * @return {?}
     */
    reset() {
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        this._xCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        this._yCoords = [8, 7, 6, 5, 4, 3, 2, 1];
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/board-state-provider/board-loader.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class BoardLoader {
    /**
     * @param {?} board
     */
    constructor(board) {
        this.board = board;
    }
    /**
     * @return {?}
     */
    addPieces() {
        this.board.pieces = [];
        // piony czarne
        for (let i = 0; i < 8; ++i) {
            this.board.pieces.push(new Pawn(new Point(1, i), Color.BLACK, UnicodeConstants.BLACK_PAWN, this.board));
        }
        this.board.pieces.push(new Rook(new Point(0, 0), Color.BLACK, UnicodeConstants.BLACK_ROOK, this.board));
        this.board.pieces.push(new Knight(new Point(0, 1), Color.BLACK, UnicodeConstants.BLACK_KNIGHT, this.board));
        this.board.pieces.push(new Bishop(new Point(0, 2), Color.BLACK, UnicodeConstants.BLACK_BISHOP, this.board));
        this.board.pieces.push(new Queen(new Point(0, 3), Color.BLACK, UnicodeConstants.BLACK_QUEEN, this.board));
        this.board.pieces.push(new King(new Point(0, 4), Color.BLACK, UnicodeConstants.BLACK_KING, this.board));
        this.board.pieces.push(new Bishop(new Point(0, 5), Color.BLACK, UnicodeConstants.BLACK_BISHOP, this.board));
        this.board.pieces.push(new Knight(new Point(0, 6), Color.BLACK, UnicodeConstants.BLACK_KNIGHT, this.board));
        this.board.pieces.push(new Rook(new Point(0, 7), Color.BLACK, UnicodeConstants.BLACK_ROOK, this.board));
        // piony biale
        for (let i = 0; i < 8; ++i) {
            this.board.pieces.push(new Pawn(new Point(6, i), Color.WHITE, UnicodeConstants.WHITE_PAWN, this.board));
        }
        this.board.pieces.push(new Rook(new Point(7, 0), Color.WHITE, UnicodeConstants.WHITE_ROOK, this.board));
        this.board.pieces.push(new Knight(new Point(7, 1), Color.WHITE, UnicodeConstants.WHITE_KNIGHT, this.board));
        this.board.pieces.push(new Bishop(new Point(7, 2), Color.WHITE, UnicodeConstants.WHITE_BISHOP, this.board));
        this.board.pieces.push(new Queen(new Point(7, 3), Color.WHITE, UnicodeConstants.WHITE_QUEEN, this.board));
        this.board.pieces.push(new King(new Point(7, 4), Color.WHITE, UnicodeConstants.WHITE_KING, this.board));
        this.board.pieces.push(new Bishop(new Point(7, 5), Color.WHITE, UnicodeConstants.WHITE_BISHOP, this.board));
        this.board.pieces.push(new Knight(new Point(7, 6), Color.WHITE, UnicodeConstants.WHITE_KNIGHT, this.board));
        this.board.pieces.push(new Rook(new Point(7, 7), Color.WHITE, UnicodeConstants.WHITE_ROOK, this.board));
        this.board.calculateFEN();
    }
    /**
     * @param {?} fen
     * @return {?}
     */
    loadFEN(fen) {
        if (fen) {
            this.board.reverted = false;
            this.board.pieces = [];
            /** @type {?} */
            let split = fen.split('/');
            for (let i = 0; i < 8; ++i) {
                /** @type {?} */
                let pointer = 0;
                for (let j = 0; j < 8; ++j) {
                    /** @type {?} */
                    let chunk = split[i].charAt(j);
                    if (chunk.match(/[0-9]/)) {
                        pointer += Number(chunk);
                    }
                    else {
                        switch (chunk) {
                            case 'r':
                                this.board.pieces.push(new Rook(new Point(i, pointer), Color.BLACK, UnicodeConstants.BLACK_ROOK, this.board));
                                break;
                            case 'n':
                                this.board.pieces.push(new Knight(new Point(i, pointer), Color.BLACK, UnicodeConstants.BLACK_KNIGHT, this.board));
                                break;
                            case 'b':
                                this.board.pieces.push(new Bishop(new Point(i, pointer), Color.BLACK, UnicodeConstants.BLACK_BISHOP, this.board));
                                break;
                            case 'q':
                                this.board.pieces.push(new Queen(new Point(i, pointer), Color.BLACK, UnicodeConstants.BLACK_QUEEN, this.board));
                                break;
                            case 'k':
                                this.board.pieces.push(new King(new Point(i, pointer), Color.BLACK, UnicodeConstants.BLACK_KING, this.board));
                                break;
                            case 'p': {
                                /** @type {?} */
                                let pawn = new Pawn(new Point(i, pointer), Color.BLACK, UnicodeConstants.BLACK_PAWN, this.board);
                                if ((pawn.color === Color.BLACK && pawn.point.row !== 1) || (pawn.color === Color.WHITE && pawn.point.row !== 6)) {
                                    pawn.isMovedAlready = true;
                                }
                                this.board.pieces.push(pawn);
                                break;
                            }
                            case 'R':
                                this.board.pieces.push(new Rook(new Point(i, pointer), Color.WHITE, UnicodeConstants.WHITE_ROOK, this.board));
                                break;
                            case 'N':
                                this.board.pieces.push(new Knight(new Point(i, pointer), Color.WHITE, UnicodeConstants.WHITE_KNIGHT, this.board));
                                break;
                            case 'B':
                                this.board.pieces.push(new Bishop(new Point(i, pointer), Color.WHITE, UnicodeConstants.WHITE_BISHOP, this.board));
                                break;
                            case 'Q':
                                this.board.pieces.push(new Queen(new Point(i, pointer), Color.WHITE, UnicodeConstants.WHITE_QUEEN, this.board));
                                break;
                            case 'K':
                                this.board.pieces.push(new King(new Point(i, pointer), Color.WHITE, UnicodeConstants.WHITE_KING, this.board));
                                break;
                            case 'P': {
                                /** @type {?} */
                                let pawn = new Pawn(new Point(i, pointer), Color.WHITE, UnicodeConstants.WHITE_PAWN, this.board);
                                if ((pawn.color === Color.BLACK && pawn.point.row !== 1) || (pawn.color === Color.WHITE && pawn.point.row !== 6)) {
                                    pawn.isMovedAlready = true;
                                }
                                this.board.pieces.push(pawn);
                                break;
                            }
                        }
                        ++pointer;
                    }
                }
            }
            this.setCurrentPlayer(fen);
            this.setCastles(fen);
            this.setEnPassant(fen);
            this.setFullMoveCount(fen);
        }
        else {
            throw Error('Incorrect FEN provided');
        }
    }
    /**
     * @private
     * @param {?} fen
     * @return {?}
     */
    setCurrentPlayer(fen) {
        if (fen) {
            /** @type {?} */
            let split = fen.split(' ');
            this.board.currentWhitePlayer = split[1] === 'w';
        }
    }
    /**
     * @param {?} board
     * @return {?}
     */
    setBoard(board) {
        this.board = board;
    }
    /**
     * @private
     * @param {?} fen
     * @return {?}
     */
    setCastles(fen) {
        if (fen) {
            /** @type {?} */
            let split = fen.split(' ');
            /** @type {?} */
            let castleChunk = split[2];
            if (!castleChunk.includes('K')) {
                this.setRookAlreadyMoved(Color.WHITE, 7);
            }
            if (!castleChunk.includes('Q')) {
                this.setRookAlreadyMoved(Color.WHITE, 0);
            }
            if (!castleChunk.includes('k')) {
                this.setRookAlreadyMoved(Color.BLACK, 7);
            }
            if (!castleChunk.includes('q')) {
                this.setRookAlreadyMoved(Color.BLACK, 0);
            }
        }
    }
    /**
     * @private
     * @param {?} fen
     * @return {?}
     */
    setFullMoveCount(fen) {
    }
    /**
     * @private
     * @param {?} fen
     * @return {?}
     */
    setEnPassant(fen) {
        if (fen) {
            /** @type {?} */
            let split = fen.split(' ');
            /** @type {?} */
            let enPassantPoint = split[3];
            if (enPassantPoint === '-') {
                return;
            }
            // if()
        }
    }
    /**
     * @private
     * @param {?} color
     * @param {?} col
     * @return {?}
     */
    setRookAlreadyMoved(color, col) {
        /** @type {?} */
        let rook = (/** @type {?} */ (this.board.pieces.find((/**
         * @param {?} e
         * @return {?}
         */
        e => e.color === color && e instanceof Rook && e.point.col === col))));
        rook.isMovedAlready = true;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/piece-promotion-modal/piece-promotion-modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class PiecePromotionModalComponent {
    constructor() {
        this.selectedIndex = 1;
    }
    /**
     * @param {?} closeCallback
     * @return {?}
     */
    open(closeCallback) {
        this.onCloseCallback = closeCallback;
        this.modal.nativeElement.style.display = 'block';
    }
    /**
     * @return {?}
     */
    close() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
            this.onCloseCallback(this.selectedIndex);
            this.modal.nativeElement.style.display = 'none';
        });
    }
    /**
     * @param {?} index
     * @return {?}
     */
    changeSelection(index) {
        this.selectedIndex = index;
    }
}
PiecePromotionModalComponent.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                selector: 'app-piece-promotion-modal',
                template: "<div #myModal class=\"container\">\r\n  <div class=\"wrapper\">\r\n    <div class=\"content\">\r\n      <div class=\"piece-wrapper\">\r\n        <div class=\"piece\" (click)=\"changeSelection(1)\" [class.selected]=\"selectedIndex===1\">&#x265B;</div>\r\n        <div class=\"piece\" (click)=\"changeSelection(2)\" [class.selected]=\"selectedIndex===2\">&#x265C;</div>\r\n        <div class=\"piece\" (click)=\"changeSelection(3)\" [class.selected]=\"selectedIndex===3\">&#x265D;</div>\r\n        <div class=\"piece\" (click)=\"changeSelection(4)\" [class.selected]=\"selectedIndex===4\">&#x265E;</div>\r\n      </div>\r\n      <div style=\"text-align: center; margin-top: 5px\">\r\n        <button (click)=\"close()\" id=\"close-button\">Promote!</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                styles: [".container{display:none;position:absolute;z-index:1;top:0;color:#000;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.4)}.wrapper{position:relative;height:100%;width:100%}.content{background-color:#fefefe;margin:auto;position:relative;top:30%;font-size:100%;height:40%;padding:10px;border:1px solid #888;width:90%}.piece{font-size:5rem;height:100%;width:25%;cursor:pointer;display:inline-block}.piece-wrapper{height:80%;width:100%}#close-button{border-radius:4px;background-color:#4caf50;border:none;color:#fff;padding-left:5px;padding-right:5px;text-align:center;text-decoration:none;display:inline-block}.selected{border:2px solid #00b919;border-radius:4px;box-sizing:border-box}"]
            }] }
];
PiecePromotionModalComponent.propDecorators = {
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['myModal', { static: false },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/drawing-tools/arrow.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Arrow {
    /**
     * @param {?} arrow
     * @return {?}
     */
    isEqual(arrow) {
        return arrow && this.start.isEqual(arrow.start) && this.end.isEqual(arrow.end);
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/drawing-tools/draw-point.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DrawPoint {
    /**
     * @param {?} x
     * @param {?} y
     */
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    /**
     * @param {?} that
     * @return {?}
     */
    isEqual(that) {
        return that && that.x === this.x && this.y === that.y;
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/drawing-tools/circle.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class Circle {
    /**
     * @param {?} circle
     * @return {?}
     */
    isEqual(circle) {
        return circle && this.drawPoint.isEqual(circle.drawPoint);
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/drawing-tools/draw-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class DrawProvider {
    constructor() {
        this._arrows = [];
        this._circles = [];
    }
    /**
     * @param {?} circle
     * @return {?}
     */
    addCircle(circle) {
        this.circles.push(circle);
    }
    /**
     * @param {?} arrow
     * @return {?}
     */
    addArrow(arrow) {
        this.arrows.push(arrow);
    }
    /**
     * @return {?}
     */
    get circles() {
        return this._circles;
    }
    /**
     * @return {?}
     */
    get arrows() {
        return this._arrows;
    }
    /**
     * @param {?} circle
     * @return {?}
     */
    containsCircle(circle) {
        return this.circles.some((/**
         * @param {?} e
         * @return {?}
         */
        e => e.isEqual(circle)));
    }
    /**
     * @param {?} arrow
     * @return {?}
     */
    containsArrow(arrow) {
        return this.arrows.some((/**
         * @param {?} e
         * @return {?}
         */
        e => e.isEqual(arrow)));
    }
    /**
     * @return {?}
     */
    clear() {
        this._arrows = [];
        this._circles = [];
    }
}
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-chess-board.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxChessBoardComponent {
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
        this.onMove = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
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
        return Object(tslib__WEBPACK_IMPORTED_MODULE_2__["__awaiter"])(this, void 0, void 0, function* () {
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
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
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
    size: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['size',] }],
    onRightClick: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"], args: ['contextmenu', ['$event'],] }],
    darkTileColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['darkTileColor',] }],
    lightTileColor: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['lightTileColor',] }],
    showCoords: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['showCoords',] }],
    dragDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['dragDisabled',] }],
    drawDisabled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"], args: ['drawDisabled',] }],
    onMove: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"] }],
    boardRef: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['boardRef', { static: false },] }],
    modal: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"], args: ['modal', { static: false },] }]
};
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-chess-board.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
class NgxChessBoardModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: NgxChessBoardModule,
            providers: [NgxChessBoardService]
        };
    }
}
NgxChessBoardModule.decorators = [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"], args: [{
                declarations: [NgxChessBoardComponent, PiecePromotionModalComponent],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["DragDropModule"],
                ],
                exports: [NgxChessBoardComponent]
            },] }
];

/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-chess-board-view.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @record
 */
function NgxChessBoardView() { }
if (false) {}

/**
 * @fileoverview added by tsickle
 * Generated from: public-api.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * Generated from: ngx-chess-board.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */


//# sourceMappingURL=ngx-chess-board.js.map


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"width:400px; margin-left: auto; margin-right: auto\">\r\n  <h2 style=\"text-align: center\">ngx-chess-board example</h2>\r\n  <ngx-chess-board #board [size]=\"size\" [lightTileColor]=\"lightTileColor\" (onMove)=\"moveCallback()\"\r\n                   [dragDisabled]=\"dragDisabled\"\r\n                   [drawDisabled]=\"drawDisabled\"\r\n                   [darkTileColor]=\"darkTileColor\"></ngx-chess-board>\r\n  <!--<ngx-chess-board></ngx-chess-board> You can also use it like this  -->\r\n  <hr>\r\n  <label for=\"lightTile\">Light tile color:</label>\r\n  <div class=\"input-group\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\" id=\"basic-addon3\" [style.background-color]=\"lightTileColor\"></span>\r\n    </div>\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"blue\" [(ngModel)]=\"lightTileColor\" id=\"lightTile\"\r\n           aria-describedby=\"basic-addon3\">\r\n  </div>\r\n  <br>\r\n  <label for=\"darkTile\">Dark tile color:</label>\r\n  <div class=\"input-group\">\r\n    <div class=\"input-group-prepend\">\r\n      <span class=\"input-group-text\" id=\"darkTileSpan\" [style.background-color]=\"darkTileColor\"></span>\r\n    </div>\r\n    <input type=\"text\" class=\"form-control\" placeholder=\"blue\" [(ngModel)]=\"darkTileColor\" id=\"darkTile\"\r\n           aria-describedby=\"basic-addon3\">\r\n  </div>\r\n\r\n  <br>\r\n  <label for=\"size\">Size:</label>\r\n  <div class=\"input-group\">\r\n    <input type=\"number\" class=\"form-control\" placeholder=\"Between 100 and 4000\" [(ngModel)]=\"size\" id=\"size\"\r\n           aria-describedby=\"basic-addon3\">\r\n    <div class=\"input-group-append\">\r\n      <span class=\"input-group-text\">px</span>\r\n    </div>\r\n  </div>\r\n  <br>\r\n\r\n  <div style=\"display:flex;\">\r\n    <button type=\"button\" class=\"btn btn-primary\"\r\n            style=\"margin-left:auto; margin-right: 10px\" (click)=\"reset()\">Reset\r\n    </button>\r\n\r\n    <button type=\"button\" class=\"btn btn-warning\"\r\n            style=\"margin-right: 10px\" (click)=\"reverse()\">Reverse\r\n    </button>\r\n\r\n    <button type=\"button\" class=\"btn btn-info\"\r\n            style=\"margin-right: 10px\" (click)=\"undo()\">Undo\r\n    </button>\r\n\r\n    <button type=\"button\" class=\"btn btn-success\"\r\n            style=\"margin-right:auto\" (click)=\"showMoveHistory()\">Display moves\r\n    </button>\r\n  </div>\r\n\r\n  <label class=\"switch mt-3\">\r\n    <input type=\"checkbox\" checked (click)=\"switchDrag()\">\r\n    <span class=\"slider round\"></span>\r\n  </label>\r\n  Piece dragging is {{ dragDisabled ? 'OFF' : 'ON'}}\r\n  <br>\r\n  <label class=\"switch mt-3\">\r\n    <input type=\"checkbox\" checked (click)=\"switchDraw()\">\r\n    <span class=\"slider round\"></span>\r\n  </label>\r\n  Drawing with right mouse button is {{ drawDisabled ? 'OFF' : 'ON'}}\r\n  <hr style=\"border-color: gray\">\r\n\r\n  <div class=\"form-group input-group-sm\">\r\n    <label for=\"fen\">FEN</label>\r\n    <input type=\"text\" class=\"form-control  form-control-lg\" id=\"fen\" aria-describedby=\"fen\" [(ngModel)]=\"fen\"\r\n           placeholder=\"FEN\">\r\n  </div>\r\n\r\n  <div style=\"display:flex;\">\r\n    <button type=\"button\" class=\"btn btn-success\"\r\n            style=\"margin-left:auto; margin-right: 10px\" (click)=\"setFen()\">Set FEN\r\n    </button>\r\n\r\n    <button type=\"button\" class=\"btn btn-info\"\r\n            style=\"margin-right:auto\" (click)=\"getFEN()\">Show FEN\r\n    </button>\r\n  </div>\r\n\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".switch {\n  position: relative;\n  display: inline-block;\n  width: 50px;\n  height: 24px;\n}\n\n/* Hide default HTML checkbox */\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n/* The slider */\n\n.slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 16px;\n  width: 16px;\n  left: 6px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n\ninput:checked + .slider {\n  background-color: #2196F3;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n\ninput:checked + .slider:before {\n  transform: translateX(26px);\n}\n\n/* Rounded sliders */\n\n.slider.round {\n  border-radius: 34px;\n}\n\n.slider.round:before {\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxLb21wdXRlclxcRGVza3RvcFxcTm93eSBmb2xkZXJcXGNoZXNzLWJvYXJkL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBLCtCQUFBOztBQUNBO0VBQ0UsVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FDQ0Y7O0FERUEsZUFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtFQUVBLGdCQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFFQSxnQkFBQTtBQ0NGOztBREVBO0VBQ0UseUJBQUE7QUNDRjs7QURFQTtFQUNFLDJCQUFBO0FDQ0Y7O0FERUE7RUFHRSwyQkFBQTtBQ0NGOztBREVBLG9CQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3dpdGNoIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogMjRweDtcclxufVxyXG5cclxuLyogSGlkZSBkZWZhdWx0IEhUTUwgY2hlY2tib3ggKi9cclxuLnN3aXRjaCBpbnB1dCB7XHJcbiAgb3BhY2l0eTogMDtcclxuICB3aWR0aDogMDtcclxuICBoZWlnaHQ6IDA7XHJcbn1cclxuXHJcbi8qIFRoZSBzbGlkZXIgKi9cclxuLnNsaWRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICByaWdodDogMDtcclxuICBib3R0b206IDA7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcclxuICAtd2Via2l0LXRyYW5zaXRpb246IC40cztcclxuICB0cmFuc2l0aW9uOiAuNHM7XHJcbn1cclxuXHJcbi5zbGlkZXI6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBoZWlnaHQ6IDE2cHg7XHJcbiAgd2lkdGg6IDE2cHg7XHJcbiAgbGVmdDogNnB4O1xyXG4gIGJvdHRvbTogNHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogLjRzO1xyXG4gIHRyYW5zaXRpb246IC40cztcclxufVxyXG5cclxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMyMTk2RjM7XHJcbn1cclxuXHJcbmlucHV0OmZvY3VzICsgLnNsaWRlciB7XHJcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xyXG59XHJcblxyXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xyXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG4gIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xyXG59XHJcblxyXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cclxuLnNsaWRlci5yb3VuZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcclxufVxyXG5cclxuLnNsaWRlci5yb3VuZDpiZWZvcmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4iLCIuc3dpdGNoIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDI0cHg7XG59XG5cbi8qIEhpZGUgZGVmYXVsdCBIVE1MIGNoZWNrYm94ICovXG4uc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cblxuLyogVGhlIHNsaWRlciAqL1xuLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIC13ZWJraXQtdHJhbnNpdGlvbjogMC40cztcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cblxuLnNsaWRlcjpiZWZvcmUge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIGhlaWdodDogMTZweDtcbiAgd2lkdGg6IDE2cHg7XG4gIGxlZnQ6IDZweDtcbiAgYm90dG9tOiA0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbmlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbn1cblxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcbiAgYm94LXNoYWRvdzogMCAwIDFweCAjMjE5NkYzO1xufVxuXG5pbnB1dDpjaGVja2VkICsgLnNsaWRlcjpiZWZvcmUge1xuICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgLW1zLXRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xufVxuXG4vKiBSb3VuZGVkIHNsaWRlcnMgKi9cbi5zbGlkZXIucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuXG4uc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_chess_board__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-chess-board */ "./dist/ngx-chess-board/fesm2015/ngx-chess-board.js");



let AppComponent = class AppComponent {
    constructor(ngxService) {
        this.ngxService = ngxService;
        this.title = 'ngx-chess-board demo';
        this.darkTileColor = 'rgb(97, 84, 61)';
        this.lightTileColor = '#BAA378';
        this.size = 400;
        this.fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
        this.dragDisabled = false;
        this.drawDisabled = false;
    }
    reset() {
        alert('Resetting game');
        this.board.reset();
        this.fen = this.board.getFEN();
    }
    reverse() {
        alert('Reverting board');
        this.board.reverse();
    }
    undo() {
        this.board.undo();
        this.fen = this.board.getFEN();
    }
    showMoveHistory() {
        alert(this.board.getMoveHistory());
    }
    setFen() {
        alert('Setting FEN');
        this.board.setFEN(this.fen);
    }
    getFEN() {
        let fen = this.board.getFEN();
        alert(fen);
    }
    moveCallback() {
        this.fen = this.board.getFEN();
    }
    switchDrag() {
        this.dragDisabled = !this.dragDisabled;
    }
    switchDraw() {
        this.drawDisabled = !this.drawDisabled;
    }
};
AppComponent.ctorParameters = () => [
    { type: ngx_chess_board__WEBPACK_IMPORTED_MODULE_2__["NgxChessBoardService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('board', { static: false })
], AppComponent.prototype, "board", void 0);
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_chess_board__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-chess-board */ "./dist/ngx-chess-board/fesm2015/ngx-chess-board.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            ngx_chess_board__WEBPACK_IMPORTED_MODULE_4__["NgxChessBoardModule"].forRoot()
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Komputer\Desktop\Nowy folder\chess-board\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map