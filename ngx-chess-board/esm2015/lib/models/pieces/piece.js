/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pieces/piece.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
export class Piece {
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
if (false) {
    /** @type {?} */
    Piece.prototype.point;
    /** @type {?} */
    Piece.prototype.color;
    /** @type {?} */
    Piece.prototype.image;
    /** @type {?} */
    Piece.prototype.checkPoints;
    /** @type {?} */
    Piece.prototype.relValue;
    /** @type {?} */
    Piece.prototype.board;
    /**
     * @abstract
     * @return {?}
     */
    Piece.prototype.getPossibleMoves = function () { };
    /**
     * @abstract
     * @return {?}
     */
    Piece.prototype.getPossibleCaptures = function () { };
    /**
     * @abstract
     * @return {?}
     */
    Piece.prototype.getCoveredFields = function () { };
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2hlc3MtYm9hcmQvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL3BpZWNlcy9waWVjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUtBLE1BQU0sT0FBZ0IsS0FBSzs7Ozs7Ozs7SUFRekIsWUFBWSxLQUFZLEVBQUUsS0FBWSxFQUFFLEtBQWEsRUFBRSxRQUFnQixFQUFFLEtBQVk7UUFKckYsZ0JBQVcsR0FBWSxFQUFFLENBQUM7UUFLeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztDQVFGOzs7SUFyQkMsc0JBQWE7O0lBQ2Isc0JBQWE7O0lBQ2Isc0JBQWM7O0lBQ2QsNEJBQTBCOztJQUMxQix5QkFBaUI7O0lBQ2pCLHNCQUFhOzs7OztJQVViLG1EQUFxQzs7Ozs7SUFFckMsc0RBQXdDOzs7OztJQUV4QyxtREFBcUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1BvaW50fSBmcm9tICcuL3BvaW50JztcclxuaW1wb3J0IHtDb2xvcn0gZnJvbSAnLi9jb2xvcic7XHJcbmltcG9ydCB7QWJzdHJhY3RQaWVjZX0gZnJvbSAnLi4vLi4vcGllY2UtZGVjb3JhdG9yL2Fic3RyYWN0LXBpZWNlJztcclxuaW1wb3J0IHtCb2FyZH0gZnJvbSAnLi4vYm9hcmQnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFBpZWNlIGltcGxlbWVudHMgQWJzdHJhY3RQaWVjZSB7XHJcbiAgcG9pbnQ6IFBvaW50O1xyXG4gIGNvbG9yOiBDb2xvcjtcclxuICBpbWFnZTogc3RyaW5nO1xyXG4gIGNoZWNrUG9pbnRzOiBQb2ludFtdID0gW107XHJcbiAgcmVsVmFsdWU6IG51bWJlcjtcclxuICBib2FyZDogQm9hcmQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHBvaW50OiBQb2ludCwgY29sb3I6IENvbG9yLCBpbWFnZTogc3RyaW5nLCByZWxWYWx1ZTogbnVtYmVyLCBib2FyZDogQm9hcmQpIHtcclxuICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuICAgIHRoaXMucG9pbnQgPSBwb2ludDtcclxuICAgIHRoaXMucmVsVmFsdWUgPSByZWxWYWx1ZTtcclxuICAgIHRoaXMuYm9hcmQgPSBib2FyZDtcclxuICB9XHJcblxyXG4gIGFic3RyYWN0IGdldFBvc3NpYmxlTW92ZXMoKTogUG9pbnRbXTtcclxuXHJcbiAgYWJzdHJhY3QgZ2V0UG9zc2libGVDYXB0dXJlcygpOiBQb2ludFtdO1xyXG5cclxuICBhYnN0cmFjdCBnZXRDb3ZlcmVkRmllbGRzKCk6IFBvaW50W107IC8vIHp3cmFjYSBsaXN0ZSBwdW5rdG93IGt0b3JlIHNhIHB1c3RlIGx1YiBpc3RuaWVqZSBuYSBuaWNoIHBpb25layB0ZWdvIHNhbWVnbyBrb2xvcnVcclxuXHJcbn1cclxuIl19