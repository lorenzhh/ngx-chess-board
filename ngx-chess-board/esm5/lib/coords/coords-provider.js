/**
 * @fileoverview added by tsickle
 * Generated from: lib/coords/coords-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var CoordsProvider = /** @class */ (function () {
    function CoordsProvider() {
        this._xCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        this._yCoords = [8, 7, 6, 5, 4, 3, 2, 1];
    }
    /**
     * @return {?}
     */
    CoordsProvider.prototype.reverse = /**
     * @return {?}
     */
    function () {
        this._xCoords = this._xCoords.reverse();
        this._yCoords = this._yCoords.reverse();
    };
    Object.defineProperty(CoordsProvider.prototype, "xCoords", {
        get: /**
         * @return {?}
         */
        function () {
            return this._xCoords;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CoordsProvider.prototype, "yCoords", {
        get: /**
         * @return {?}
         */
        function () {
            return this._yCoords;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CoordsProvider.prototype.reset = /**
     * @return {?}
     */
    function () {
        this.init();
    };
    /**
     * @private
     * @return {?}
     */
    CoordsProvider.prototype.init = /**
     * @private
     * @return {?}
     */
    function () {
        this._xCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        this._yCoords = [8, 7, 6, 5, 4, 3, 2, 1];
    };
    return CoordsProvider;
}());
export { CoordsProvider };
if (false) {
    /**
     * @type {?}
     * @private
     */
    CoordsProvider.prototype._xCoords;
    /**
     * @type {?}
     * @private
     */
    CoordsProvider.prototype._yCoords;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vcmRzLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNoZXNzLWJvYXJkLyIsInNvdXJjZXMiOlsibGliL2Nvb3Jkcy9jb29yZHMtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTtJQUFBO1FBRVUsYUFBUSxHQUFhLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQzlELGFBQVEsR0FBYSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQXVCeEQsQ0FBQzs7OztJQXJCQyxnQ0FBTzs7O0lBQVA7UUFDRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCxzQkFBSSxtQ0FBTzs7OztRQUFYO1lBQ0UsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbUNBQU87Ozs7UUFBWDtZQUNFLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN2QixDQUFDOzs7T0FBQTs7OztJQUVELDhCQUFLOzs7SUFBTDtRQUNFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUNkLENBQUM7Ozs7O0lBRU8sNkJBQUk7Ozs7SUFBWjtRQUNFLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDekQsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBQ0gscUJBQUM7QUFBRCxDQUFDLEFBMUJELElBMEJDOzs7Ozs7O0lBeEJDLGtDQUFzRTs7Ozs7SUFDdEUsa0NBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvb3Jkc1Byb3ZpZGVyIHtcclxuXHJcbiAgcHJpdmF0ZSBfeENvb3Jkczogc3RyaW5nW10gPSBbJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCddO1xyXG4gIHByaXZhdGUgX3lDb29yZHM6IG51bWJlcltdID0gWzgsIDcsIDYsIDUsIDQsIDMsIDIsIDFdO1xyXG5cclxuICByZXZlcnNlKCkge1xyXG4gICAgdGhpcy5feENvb3JkcyA9IHRoaXMuX3hDb29yZHMucmV2ZXJzZSgpO1xyXG4gICAgdGhpcy5feUNvb3JkcyA9IHRoaXMuX3lDb29yZHMucmV2ZXJzZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHhDb29yZHMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3hDb29yZHM7XHJcbiAgfVxyXG5cclxuICBnZXQgeUNvb3JkcygpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5feUNvb3JkcztcclxuICB9XHJcblxyXG4gIHJlc2V0KCkge1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXQoKSB7XHJcbiAgICB0aGlzLl94Q29vcmRzID0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJywgJ2gnXTtcclxuICAgIHRoaXMuX3lDb29yZHMgPSBbOCwgNywgNiwgNSwgNCwgMywgMiwgMV07XHJcbiAgfVxyXG59XHJcbiJdfQ==