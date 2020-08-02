/**
 * @fileoverview added by tsickle
 * Generated from: lib/piece-decorator/available-move-decorator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { PieceAbstractDecorator } from './piece-abstract-decorator';
import { MoveUtils } from '../utils/move-utils';
var AvailableMoveDecorator = /** @class */ (function (_super) {
    tslib_1.__extends(AvailableMoveDecorator, _super);
    function AvailableMoveDecorator(piece, pointClicked, color, board) {
        var _this = _super.call(this, piece) || this;
        _this.pointClicked = pointClicked;
        _this.color = color;
        _this.board = board;
        return _this;
    }
    /**
     * @return {?}
     */
    AvailableMoveDecorator.prototype.getPossibleCaptures = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.piece.getPossibleCaptures()
            .filter((/**
         * @param {?} point
         * @return {?}
         */
        function (point) { return !MoveUtils.willMoveCauseCheck(_this.color, _this.pointClicked.row, _this.pointClicked.col, point.row, point.col, _this.board); }));
    };
    /**
     * @return {?}
     */
    AvailableMoveDecorator.prototype.getPossibleMoves = /**
     * @return {?}
     */
    function () {
        var _this = this;
        return this.piece.getPossibleMoves()
            .filter((/**
         * @param {?} point
         * @return {?}
         */
        function (point) { return !MoveUtils.willMoveCauseCheck(_this.color, _this.pointClicked.row, _this.pointClicked.col, point.row, point.col, _this.board); }));
    };
    return AvailableMoveDecorator;
}(PieceAbstractDecorator));
export { AvailableMoveDecorator };
if (false) {
    /**
     * @type {?}
     * @private
     */
    AvailableMoveDecorator.prototype.pointClicked;
    /**
     * @type {?}
     * @private
     */
    AvailableMoveDecorator.prototype.color;
    /**
     * @type {?}
     * @private
     */
    AvailableMoveDecorator.prototype.board;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhaWxhYmxlLW1vdmUtZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNoZXNzLWJvYXJkLyIsInNvdXJjZXMiOlsibGliL3BpZWNlLWRlY29yYXRvci9hdmFpbGFibGUtbW92ZS1kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFDLHNCQUFzQixFQUFDLE1BQU0sNEJBQTRCLENBQUM7QUFHbEUsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBSzlDO0lBQTRDLGtEQUFzQjtJQU1oRSxnQ0FBWSxLQUFvQixFQUFFLFlBQW1CLEVBQUUsS0FBWSxFQUFFLEtBQVk7UUFBakYsWUFDRSxrQkFBTSxLQUFLLENBQUMsU0FJYjtRQUhDLEtBQUksQ0FBQyxZQUFZLEdBQUcsWUFBWSxDQUFDO1FBQ2pDLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLEtBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDOztJQUNyQixDQUFDOzs7O0lBRUQsb0RBQW1COzs7SUFBbkI7UUFBQSxpQkFHQztRQUZDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRTthQUNwQyxNQUFNOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQXpILENBQXlILEVBQUMsQ0FBQztJQUNoSixDQUFDOzs7O0lBRUQsaURBQWdCOzs7SUFBaEI7UUFBQSxpQkFHQztRQUZDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsRUFBRTthQUNqQyxNQUFNOzs7O1FBQUMsVUFBQSxLQUFLLElBQUksT0FBQSxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxLQUFJLENBQUMsS0FBSyxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEtBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLEVBQXpILENBQXlILEVBQUMsQ0FBQztJQUNoSixDQUFDO0lBQ0gsNkJBQUM7QUFBRCxDQUFDLEFBdEJELENBQTRDLHNCQUFzQixHQXNCakU7Ozs7Ozs7SUFwQkMsOENBQTRCOzs7OztJQUM1Qix1Q0FBcUI7Ozs7O0lBQ3JCLHVDQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7UGllY2VBYnN0cmFjdERlY29yYXRvcn0gZnJvbSAnLi9waWVjZS1hYnN0cmFjdC1kZWNvcmF0b3InO1xyXG5pbXBvcnQge1BvaW50fSBmcm9tICcuLi9tb2RlbHMvcGllY2VzL3BvaW50JztcclxuaW1wb3J0IHtBYnN0cmFjdFBpZWNlfSBmcm9tICcuL2Fic3RyYWN0LXBpZWNlJztcclxuaW1wb3J0IHtNb3ZlVXRpbHN9IGZyb20gJy4uL3V0aWxzL21vdmUtdXRpbHMnO1xyXG5pbXBvcnQge0NvbG9yfSBmcm9tICcuLi9tb2RlbHMvcGllY2VzL2NvbG9yJztcclxuaW1wb3J0IHtOZ3hDaGVzc0JvYXJkQ29tcG9uZW50fSBmcm9tICcuLi9uZ3gtY2hlc3MtYm9hcmQuY29tcG9uZW50JztcclxuaW1wb3J0IHtCb2FyZH0gZnJvbSAnLi4vbW9kZWxzL2JvYXJkJztcclxuXHJcbmV4cG9ydCBjbGFzcyBBdmFpbGFibGVNb3ZlRGVjb3JhdG9yIGV4dGVuZHMgUGllY2VBYnN0cmFjdERlY29yYXRvciB7XHJcblxyXG4gIHByaXZhdGUgcG9pbnRDbGlja2VkOiBQb2ludDtcclxuICBwcml2YXRlIGNvbG9yOiBDb2xvcjtcclxuICBwcml2YXRlIGJvYXJkOiBCb2FyZDtcclxuXHJcbiAgY29uc3RydWN0b3IocGllY2U6IEFic3RyYWN0UGllY2UsIHBvaW50Q2xpY2tlZDogUG9pbnQsIGNvbG9yOiBDb2xvciwgYm9hcmQ6IEJvYXJkKSB7XHJcbiAgICBzdXBlcihwaWVjZSk7XHJcbiAgICB0aGlzLnBvaW50Q2xpY2tlZCA9IHBvaW50Q2xpY2tlZDtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuICB9XHJcblxyXG4gIGdldFBvc3NpYmxlQ2FwdHVyZXMoKTogUG9pbnRbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5waWVjZS5nZXRQb3NzaWJsZUNhcHR1cmVzKClcclxuICAgICAgLmZpbHRlcihwb2ludCA9PiAhTW92ZVV0aWxzLndpbGxNb3ZlQ2F1c2VDaGVjayh0aGlzLmNvbG9yLCB0aGlzLnBvaW50Q2xpY2tlZC5yb3csIHRoaXMucG9pbnRDbGlja2VkLmNvbCwgcG9pbnQucm93LCBwb2ludC5jb2wsIHRoaXMuYm9hcmQpKTtcclxuICB9XHJcblxyXG4gIGdldFBvc3NpYmxlTW92ZXMoKTogUG9pbnRbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5waWVjZS5nZXRQb3NzaWJsZU1vdmVzKClcclxuICAgICAgLmZpbHRlcihwb2ludCA9PiAhTW92ZVV0aWxzLndpbGxNb3ZlQ2F1c2VDaGVjayh0aGlzLmNvbG9yLCB0aGlzLnBvaW50Q2xpY2tlZC5yb3csIHRoaXMucG9pbnRDbGlja2VkLmNvbCwgcG9pbnQucm93LCBwb2ludC5jb2wsIHRoaXMuYm9hcmQpKTtcclxuICB9XHJcbn1cclxuIl19