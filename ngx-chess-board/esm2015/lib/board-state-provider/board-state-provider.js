/**
 * @fileoverview added by tsickle
 * Generated from: lib/board-state-provider/board-state-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class BoardStateProvider {
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
if (false) {
    /** @type {?} */
    BoardStateProvider.prototype.moves;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQtc3RhdGUtcHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2hlc3MtYm9hcmQvIiwic291cmNlcyI6WyJsaWIvYm9hcmQtc3RhdGUtcHJvdmlkZXIvYm9hcmQtc3RhdGUtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQSxNQUFNLE9BQU8sa0JBQWtCO0lBSTdCO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxPQUFPLENBQUMsV0FBdUI7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQzs7OztJQUVELEdBQUc7UUFDRCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7OztJQUVELE9BQU87UUFDTCxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLENBQUM7Q0FFRjs7O0lBMUJDLG1DQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Qm9hcmRTdGF0ZX0gZnJvbSAnLi9ib2FyZC1zdGF0ZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgQm9hcmRTdGF0ZVByb3ZpZGVyIHtcclxuXHJcbiAgbW92ZXM6IEJvYXJkU3RhdGVbXTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLm1vdmVzID0gW107XHJcbiAgfVxyXG5cclxuICBhZGRNb3ZlKG1vdmVIaXN0b3J5OiBCb2FyZFN0YXRlKSB7XHJcbiAgICB0aGlzLm1vdmVzLnB1c2gobW92ZUhpc3RvcnkpO1xyXG4gIH1cclxuXHJcbiAgZ2V0TW92ZXMoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tb3ZlcztcclxuICB9XHJcblxyXG4gIHBvcCgpIHtcclxuICAgIHJldHVybiB0aGlzLm1vdmVzLnBvcCgpO1xyXG4gIH1cclxuXHJcbiAgaXNFbXB0eSgpIHtcclxuICAgIHJldHVybiB0aGlzLm1vdmVzLmxlbmd0aCA9PT0gMDtcclxuICB9XHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5tb3ZlcyA9IFtdO1xyXG4gIH1cclxuXHJcbn1cclxuIl19