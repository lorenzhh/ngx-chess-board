/**
 * @fileoverview added by tsickle
 * Generated from: lib/piece-decorator/available-move-decorator.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { PieceAbstractDecorator } from './piece-abstract-decorator';
import { MoveUtils } from '../utils/move-utils';
export class AvailableMoveDecorator extends PieceAbstractDecorator {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXZhaWxhYmxlLW1vdmUtZGVjb3JhdG9yLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNoZXNzLWJvYXJkLyIsInNvdXJjZXMiOlsibGliL3BpZWNlLWRlY29yYXRvci9hdmFpbGFibGUtbW92ZS1kZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUMsc0JBQXNCLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUdsRSxPQUFPLEVBQUMsU0FBUyxFQUFDLE1BQU0scUJBQXFCLENBQUM7QUFLOUMsTUFBTSxPQUFPLHNCQUF1QixTQUFRLHNCQUFzQjs7Ozs7OztJQU1oRSxZQUFZLEtBQW9CLEVBQUUsWUFBbUIsRUFBRSxLQUFZLEVBQUUsS0FBWTtRQUMvRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztJQUNyQixDQUFDOzs7O0lBRUQsbUJBQW1CO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxtQkFBbUIsRUFBRTthQUNwQyxNQUFNOzs7O1FBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztJQUNoSixDQUFDOzs7O0lBRUQsZ0JBQWdCO1FBQ2QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLGdCQUFnQixFQUFFO2FBQ2pDLE1BQU07Ozs7UUFBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBQyxDQUFDO0lBQ2hKLENBQUM7Q0FDRjs7Ozs7O0lBcEJDLDhDQUE0Qjs7Ozs7SUFDNUIsdUNBQXFCOzs7OztJQUNyQix1Q0FBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BpZWNlQWJzdHJhY3REZWNvcmF0b3J9IGZyb20gJy4vcGllY2UtYWJzdHJhY3QtZGVjb3JhdG9yJztcclxuaW1wb3J0IHtQb2ludH0gZnJvbSAnLi4vbW9kZWxzL3BpZWNlcy9wb2ludCc7XHJcbmltcG9ydCB7QWJzdHJhY3RQaWVjZX0gZnJvbSAnLi9hYnN0cmFjdC1waWVjZSc7XHJcbmltcG9ydCB7TW92ZVV0aWxzfSBmcm9tICcuLi91dGlscy9tb3ZlLXV0aWxzJztcclxuaW1wb3J0IHtDb2xvcn0gZnJvbSAnLi4vbW9kZWxzL3BpZWNlcy9jb2xvcic7XHJcbmltcG9ydCB7Tmd4Q2hlc3NCb2FyZENvbXBvbmVudH0gZnJvbSAnLi4vbmd4LWNoZXNzLWJvYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Qm9hcmR9IGZyb20gJy4uL21vZGVscy9ib2FyZCc7XHJcblxyXG5leHBvcnQgY2xhc3MgQXZhaWxhYmxlTW92ZURlY29yYXRvciBleHRlbmRzIFBpZWNlQWJzdHJhY3REZWNvcmF0b3Ige1xyXG5cclxuICBwcml2YXRlIHBvaW50Q2xpY2tlZDogUG9pbnQ7XHJcbiAgcHJpdmF0ZSBjb2xvcjogQ29sb3I7XHJcbiAgcHJpdmF0ZSBib2FyZDogQm9hcmQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBpZWNlOiBBYnN0cmFjdFBpZWNlLCBwb2ludENsaWNrZWQ6IFBvaW50LCBjb2xvcjogQ29sb3IsIGJvYXJkOiBCb2FyZCkge1xyXG4gICAgc3VwZXIocGllY2UpO1xyXG4gICAgdGhpcy5wb2ludENsaWNrZWQgPSBwb2ludENsaWNrZWQ7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgfVxyXG5cclxuICBnZXRQb3NzaWJsZUNhcHR1cmVzKCk6IFBvaW50W10ge1xyXG4gICAgcmV0dXJuIHRoaXMucGllY2UuZ2V0UG9zc2libGVDYXB0dXJlcygpXHJcbiAgICAgIC5maWx0ZXIocG9pbnQgPT4gIU1vdmVVdGlscy53aWxsTW92ZUNhdXNlQ2hlY2sodGhpcy5jb2xvciwgdGhpcy5wb2ludENsaWNrZWQucm93LCB0aGlzLnBvaW50Q2xpY2tlZC5jb2wsIHBvaW50LnJvdywgcG9pbnQuY29sLCB0aGlzLmJvYXJkKSk7XHJcbiAgfVxyXG5cclxuICBnZXRQb3NzaWJsZU1vdmVzKCk6IFBvaW50W10ge1xyXG4gICAgcmV0dXJuIHRoaXMucGllY2UuZ2V0UG9zc2libGVNb3ZlcygpXHJcbiAgICAgIC5maWx0ZXIocG9pbnQgPT4gIU1vdmVVdGlscy53aWxsTW92ZUNhdXNlQ2hlY2sodGhpcy5jb2xvciwgdGhpcy5wb2ludENsaWNrZWQucm93LCB0aGlzLnBvaW50Q2xpY2tlZC5jb2wsIHBvaW50LnJvdywgcG9pbnQuY29sLCB0aGlzLmJvYXJkKSk7XHJcbiAgfVxyXG59XHJcbiJdfQ==