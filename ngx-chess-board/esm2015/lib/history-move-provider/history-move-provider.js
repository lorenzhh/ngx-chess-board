/**
 * @fileoverview added by tsickle
 * Generated from: lib/history-move-provider/history-move-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class HistoryMoveProvider {
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
if (false) {
    /** @type {?} */
    HistoryMoveProvider.prototype.historyMoves;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGlzdG9yeS1tb3ZlLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNoZXNzLWJvYXJkLyIsInNvdXJjZXMiOlsibGliL2hpc3RvcnktbW92ZS1wcm92aWRlci9oaXN0b3J5LW1vdmUtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLE9BQU8sbUJBQW1CO0lBSTlCO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7SUFDekIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsV0FBd0I7UUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEMsQ0FBQzs7OztJQUVELEdBQUc7UUFDRCxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDakMsQ0FBQzs7OztJQUVELE1BQU07UUFDSixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7SUFDM0IsQ0FBQzs7OztJQUVELEtBQUs7UUFDSCxJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztJQUN6QixDQUFDO0NBRUY7OztJQXRCQywyQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0hpc3RvcnlNb3ZlfSBmcm9tICcuL2hpc3RvcnktbW92ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgSGlzdG9yeU1vdmVQcm92aWRlciB7XHJcblxyXG4gIGhpc3RvcnlNb3ZlczogSGlzdG9yeU1vdmVbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLmhpc3RvcnlNb3ZlcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgYWRkTW92ZShoaXN0b3J5TW92ZTogSGlzdG9yeU1vdmUpIHtcclxuICAgIHRoaXMuaGlzdG9yeU1vdmVzLnB1c2goaGlzdG9yeU1vdmUpO1xyXG4gIH1cclxuXHJcbiAgcG9wKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGlzdG9yeU1vdmVzLnBvcCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0QWxsKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuaGlzdG9yeU1vdmVzO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLmhpc3RvcnlNb3ZlcyA9IFtdO1xyXG4gIH1cclxuXHJcbn1cclxuIl19