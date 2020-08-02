/**
 * @fileoverview added by tsickle
 * Generated from: lib/models/pieces/piece.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/**
 * @abstract
 */
var /**
 * @abstract
 */
Piece = /** @class */ (function () {
    function Piece(point, color, image, relValue, board) {
        this.checkPoints = [];
        this.color = color;
        this.image = image;
        this.point = point;
        this.relValue = relValue;
        this.board = board;
    }
    return Piece;
}());
/**
 * @abstract
 */
export { Piece };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtY2hlc3MtYm9hcmQvIiwic291cmNlcyI6WyJsaWIvbW9kZWxzL3BpZWNlcy9waWVjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUtBOzs7O0lBUUUsZUFBWSxLQUFZLEVBQUUsS0FBWSxFQUFFLEtBQWEsRUFBRSxRQUFnQixFQUFFLEtBQVk7UUFKckYsZ0JBQVcsR0FBWSxFQUFFLENBQUM7UUFLeEIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7UUFDekIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQVFILFlBQUM7QUFBRCxDQUFDLEFBdEJELElBc0JDOzs7Ozs7O0lBckJDLHNCQUFhOztJQUNiLHNCQUFhOztJQUNiLHNCQUFjOztJQUNkLDRCQUEwQjs7SUFDMUIseUJBQWlCOztJQUNqQixzQkFBYTs7Ozs7SUFVYixtREFBcUM7Ozs7O0lBRXJDLHNEQUF3Qzs7Ozs7SUFFeEMsbURBQXFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQb2ludH0gZnJvbSAnLi9wb2ludCc7XHJcbmltcG9ydCB7Q29sb3J9IGZyb20gJy4vY29sb3InO1xyXG5pbXBvcnQge0Fic3RyYWN0UGllY2V9IGZyb20gJy4uLy4uL3BpZWNlLWRlY29yYXRvci9hYnN0cmFjdC1waWVjZSc7XHJcbmltcG9ydCB7Qm9hcmR9IGZyb20gJy4uL2JvYXJkJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBQaWVjZSBpbXBsZW1lbnRzIEFic3RyYWN0UGllY2Uge1xyXG4gIHBvaW50OiBQb2ludDtcclxuICBjb2xvcjogQ29sb3I7XHJcbiAgaW1hZ2U6IHN0cmluZztcclxuICBjaGVja1BvaW50czogUG9pbnRbXSA9IFtdO1xyXG4gIHJlbFZhbHVlOiBudW1iZXI7XHJcbiAgYm9hcmQ6IEJvYXJkO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwb2ludDogUG9pbnQsIGNvbG9yOiBDb2xvciwgaW1hZ2U6IHN0cmluZywgcmVsVmFsdWU6IG51bWJlciwgYm9hcmQ6IEJvYXJkKSB7XHJcbiAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICB0aGlzLnBvaW50ID0gcG9pbnQ7XHJcbiAgICB0aGlzLnJlbFZhbHVlID0gcmVsVmFsdWU7XHJcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XHJcbiAgfVxyXG5cclxuICBhYnN0cmFjdCBnZXRQb3NzaWJsZU1vdmVzKCk6IFBvaW50W107XHJcblxyXG4gIGFic3RyYWN0IGdldFBvc3NpYmxlQ2FwdHVyZXMoKTogUG9pbnRbXTtcclxuXHJcbiAgYWJzdHJhY3QgZ2V0Q292ZXJlZEZpZWxkcygpOiBQb2ludFtdOyAvLyB6d3JhY2EgbGlzdGUgcHVua3RvdyBrdG9yZSBzYSBwdXN0ZSBsdWIgaXN0bmllamUgbmEgbmljaCBwaW9uZWsgdGVnbyBzYW1lZ28ga29sb3J1XHJcblxyXG59XHJcbiJdfQ==