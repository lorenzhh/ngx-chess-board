/**
 * @fileoverview added by tsickle
 * Generated from: lib/board-state-provider/board-state-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var BoardStateProvider = /** @class */ (function () {
    function BoardStateProvider() {
        this.moves = [];
    }
    /**
     * @param {?} moveHistory
     * @return {?}
     */
    BoardStateProvider.prototype.addMove = /**
     * @param {?} moveHistory
     * @return {?}
     */
    function (moveHistory) {
        this.moves.push(moveHistory);
    };
    /**
     * @return {?}
     */
    BoardStateProvider.prototype.getMoves = /**
     * @return {?}
     */
    function () {
        return this.moves;
    };
    /**
     * @return {?}
     */
    BoardStateProvider.prototype.pop = /**
     * @return {?}
     */
    function () {
        return this.moves.pop();
    };
    /**
     * @return {?}
     */
    BoardStateProvider.prototype.isEmpty = /**
     * @return {?}
     */
    function () {
        return this.moves.length === 0;
    };
    /**
     * @return {?}
     */
    BoardStateProvider.prototype.clear = /**
     * @return {?}
     */
    function () {
        this.moves = [];
    };
    return BoardStateProvider;
}());
export { BoardStateProvider };
if (false) {
    /** @type {?} */
    BoardStateProvider.prototype.moves;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYm9hcmQtc3RhdGUtcHJvdmlkZXIuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2hlc3MtYm9hcmQvIiwic291cmNlcyI6WyJsaWIvYm9hcmQtc3RhdGUtcHJvdmlkZXIvYm9hcmQtc3RhdGUtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFFQTtJQUlFO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQzs7Ozs7SUFFRCxvQ0FBTzs7OztJQUFQLFVBQVEsV0FBdUI7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDL0IsQ0FBQzs7OztJQUVELHFDQUFROzs7SUFBUjtRQUNFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztJQUNwQixDQUFDOzs7O0lBRUQsZ0NBQUc7OztJQUFIO1FBQ0UsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQzFCLENBQUM7Ozs7SUFFRCxvQ0FBTzs7O0lBQVA7UUFDRSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQztJQUNqQyxDQUFDOzs7O0lBRUQsa0NBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7SUFDbEIsQ0FBQztJQUVILHlCQUFDO0FBQUQsQ0FBQyxBQTVCRCxJQTRCQzs7OztJQTFCQyxtQ0FBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0JvYXJkU3RhdGV9IGZyb20gJy4vYm9hcmQtc3RhdGUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJvYXJkU3RhdGVQcm92aWRlciB7XHJcblxyXG4gIG1vdmVzOiBCb2FyZFN0YXRlW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5tb3ZlcyA9IFtdO1xyXG4gIH1cclxuXHJcbiAgYWRkTW92ZShtb3ZlSGlzdG9yeTogQm9hcmRTdGF0ZSkge1xyXG4gICAgdGhpcy5tb3Zlcy5wdXNoKG1vdmVIaXN0b3J5KTtcclxuICB9XHJcblxyXG4gIGdldE1vdmVzKCkge1xyXG4gICAgcmV0dXJuIHRoaXMubW92ZXM7XHJcbiAgfVxyXG5cclxuICBwb3AoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tb3Zlcy5wb3AoKTtcclxuICB9XHJcblxyXG4gIGlzRW1wdHkoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5tb3Zlcy5sZW5ndGggPT09IDA7XHJcbiAgfVxyXG5cclxuICBjbGVhcigpIHtcclxuICAgIHRoaXMubW92ZXMgPSBbXTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==