/**
 * @fileoverview added by tsickle
 * Generated from: lib/drawing-tools/draw-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var DrawProvider = /** @class */ (function () {
    function DrawProvider() {
        this._arrows = [];
        this._circles = [];
    }
    /**
     * @param {?} circle
     * @return {?}
     */
    DrawProvider.prototype.addCircle = /**
     * @param {?} circle
     * @return {?}
     */
    function (circle) {
        this.circles.push(circle);
    };
    /**
     * @param {?} arrow
     * @return {?}
     */
    DrawProvider.prototype.addArrow = /**
     * @param {?} arrow
     * @return {?}
     */
    function (arrow) {
        this.arrows.push(arrow);
    };
    Object.defineProperty(DrawProvider.prototype, "circles", {
        get: /**
         * @return {?}
         */
        function () {
            return this._circles;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DrawProvider.prototype, "arrows", {
        get: /**
         * @return {?}
         */
        function () {
            return this._arrows;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} circle
     * @return {?}
     */
    DrawProvider.prototype.containsCircle = /**
     * @param {?} circle
     * @return {?}
     */
    function (circle) {
        return this.circles.some((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.isEqual(circle); }));
    };
    /**
     * @param {?} arrow
     * @return {?}
     */
    DrawProvider.prototype.containsArrow = /**
     * @param {?} arrow
     * @return {?}
     */
    function (arrow) {
        return this.arrows.some((/**
         * @param {?} e
         * @return {?}
         */
        function (e) { return e.isEqual(arrow); }));
    };
    /**
     * @return {?}
     */
    DrawProvider.prototype.clear = /**
     * @return {?}
     */
    function () {
        this._arrows = [];
        this._circles = [];
    };
    return DrawProvider;
}());
export { DrawProvider };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhdy1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGVzcy1ib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9kcmF3aW5nLXRvb2xzL2RyYXctcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFHQTtJQU1FO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQzs7Ozs7SUFFRCxnQ0FBUzs7OztJQUFULFVBQVUsTUFBYztRQUN0QixJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUM1QixDQUFDOzs7OztJQUVELCtCQUFROzs7O0lBQVIsVUFBUyxLQUFZO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFCLENBQUM7SUFFRCxzQkFBSSxpQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksZ0NBQU07Ozs7UUFBVjtZQUNFLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQztRQUN0QixDQUFDOzs7T0FBQTs7Ozs7SUFFRCxxQ0FBYzs7OztJQUFkLFVBQWUsTUFBYztRQUMzQixPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSTs7OztRQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsRUFBakIsQ0FBaUIsRUFBQyxDQUFDO0lBQ25ELENBQUM7Ozs7O0lBRUQsb0NBQWE7Ozs7SUFBYixVQUFjLEtBQVk7UUFDeEIsT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUk7Ozs7UUFBQyxVQUFBLENBQUMsSUFBSSxPQUFBLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQWhCLENBQWdCLEVBQUMsQ0FBQztJQUNqRCxDQUFDOzs7O0lBRUQsNEJBQUs7OztJQUFMO1FBQ0UsSUFBSSxDQUFDLE9BQU8sR0FBRyxFQUFFLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVILG1CQUFDO0FBQUQsQ0FBQyxBQXhDRCxJQXdDQzs7Ozs7OztJQXRDQyxnQ0FBMkI7Ozs7O0lBQzNCLCtCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2lyY2xlfSBmcm9tICcuL2NpcmNsZSc7XHJcbmltcG9ydCB7QXJyb3d9IGZyb20gJy4vYXJyb3cnO1xyXG5cclxuZXhwb3J0IGNsYXNzIERyYXdQcm92aWRlciB7XHJcblxyXG4gIHByaXZhdGUgX2NpcmNsZXM6IENpcmNsZVtdO1xyXG4gIHByaXZhdGUgX2Fycm93czogQXJyb3dbXTtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy5fYXJyb3dzID0gW107XHJcbiAgICB0aGlzLl9jaXJjbGVzID0gW107XHJcbiAgfVxyXG5cclxuICBhZGRDaXJjbGUoY2lyY2xlOiBDaXJjbGUpIHtcclxuICAgIHRoaXMuY2lyY2xlcy5wdXNoKGNpcmNsZSk7XHJcbiAgfVxyXG5cclxuICBhZGRBcnJvdyhhcnJvdzogQXJyb3cpIHtcclxuICAgIHRoaXMuYXJyb3dzLnB1c2goYXJyb3cpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGNpcmNsZXMoKTogQ2lyY2xlW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2NpcmNsZXM7XHJcbiAgfVxyXG5cclxuICBnZXQgYXJyb3dzKCk6IEFycm93W10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX2Fycm93cztcclxuICB9XHJcblxyXG4gIGNvbnRhaW5zQ2lyY2xlKGNpcmNsZTogQ2lyY2xlKSB7XHJcbiAgICByZXR1cm4gdGhpcy5jaXJjbGVzLnNvbWUoZSA9PiBlLmlzRXF1YWwoY2lyY2xlKSk7XHJcbiAgfVxyXG5cclxuICBjb250YWluc0Fycm93KGFycm93OiBBcnJvdykge1xyXG4gICAgcmV0dXJuIHRoaXMuYXJyb3dzLnNvbWUoZSA9PiBlLmlzRXF1YWwoYXJyb3cpKTtcclxuICB9XHJcblxyXG4gIGNsZWFyKCkge1xyXG4gICAgdGhpcy5fYXJyb3dzID0gW107XHJcbiAgICB0aGlzLl9jaXJjbGVzID0gW107XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=