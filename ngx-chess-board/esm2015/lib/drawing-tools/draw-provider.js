/**
 * @fileoverview added by tsickle
 * Generated from: lib/drawing-tools/draw-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class DrawProvider {
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
if (false) {
    /**
     * @type {?}
     * @private
     */
    DrawProvider.prototype._circles;
    /**
     * @type {?}
     * @private
     */
    DrawProvider.prototype._arrows;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGVzcy1ib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9kcmF3aW5nLXRvb2xzL2RyYXctcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQSxNQUFNLE9BQU8sWUFBWTtJQU12QjtRQUNFLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Ozs7O0lBRUQsU0FBUyxDQUFDLE1BQWM7UUFDdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsS0FBWTtRQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUMxQixDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxJQUFJLE1BQU07UUFDUixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7SUFDdEIsQ0FBQzs7Ozs7SUFFRCxjQUFjLENBQUMsTUFBYztRQUMzQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTs7OztRQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRUQsYUFBYSxDQUFDLEtBQVk7UUFDeEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7Ozs7UUFBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsS0FBSztRQUNILElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO0lBQ3JCLENBQUM7Q0FFRjs7Ozs7O0lBdENDLGdDQUEyQjs7Ozs7SUFDM0IsK0JBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDaXJjbGV9IGZyb20gJy4vY2lyY2xlJztcclxuaW1wb3J0IHtBcnJvd30gZnJvbSAnLi9hcnJvdyc7XHJcblxyXG5leHBvcnQgY2xhc3MgRHJhd1Byb3ZpZGVyIHtcclxuXHJcbiAgcHJpdmF0ZSBfY2lyY2xlczogQ2lyY2xlW107XHJcbiAgcHJpdmF0ZSBfYXJyb3dzOiBBcnJvd1tdO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLl9hcnJvd3MgPSBbXTtcclxuICAgIHRoaXMuX2NpcmNsZXMgPSBbXTtcclxuICB9XHJcblxyXG4gIGFkZENpcmNsZShjaXJjbGU6IENpcmNsZSkge1xyXG4gICAgdGhpcy5jaXJjbGVzLnB1c2goY2lyY2xlKTtcclxuICB9XHJcblxyXG4gIGFkZEFycm93KGFycm93OiBBcnJvdykge1xyXG4gICAgdGhpcy5hcnJvd3MucHVzaChhcnJvdyk7XHJcbiAgfVxyXG5cclxuICBnZXQgY2lyY2xlcygpOiBDaXJjbGVbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fY2lyY2xlcztcclxuICB9XHJcblxyXG4gIGdldCBhcnJvd3MoKTogQXJyb3dbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5fYXJyb3dzO1xyXG4gIH1cclxuXHJcbiAgY29udGFpbnNDaXJjbGUoY2lyY2xlOiBDaXJjbGUpIHtcclxuICAgIHJldHVybiB0aGlzLmNpcmNsZXMuc29tZShlID0+IGUuaXNFcXVhbChjaXJjbGUpKTtcclxuICB9XHJcblxyXG4gIGNvbnRhaW5zQXJyb3coYXJyb3c6IEFycm93KSB7XHJcbiAgICByZXR1cm4gdGhpcy5hcnJvd3Muc29tZShlID0+IGUuaXNFcXVhbChhcnJvdykpO1xyXG4gIH1cclxuXHJcbiAgY2xlYXIoKSB7XHJcbiAgICB0aGlzLl9hcnJvd3MgPSBbXTtcclxuICAgIHRoaXMuX2NpcmNsZXMgPSBbXTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==