/**
 * @fileoverview added by tsickle
 * Generated from: lib/coords/coords-provider.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class CoordsProvider {
    constructor() {
        this._xCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        this._yCoords = [8, 7, 6, 5, 4, 3, 2, 1];
    }
    /**
     * @return {?}
     */
    reverse() {
        this._xCoords = this._xCoords.reverse();
        this._yCoords = this._yCoords.reverse();
    }
    /**
     * @return {?}
     */
    get xCoords() {
        return this._xCoords;
    }
    /**
     * @return {?}
     */
    get yCoords() {
        return this._yCoords;
    }
    /**
     * @return {?}
     */
    reset() {
        this.init();
    }
    /**
     * @private
     * @return {?}
     */
    init() {
        this._xCoords = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
        this._yCoords = [8, 7, 6, 5, 4, 3, 2, 1];
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29vcmRzLXByb3ZpZGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LWNoZXNzLWJvYXJkLyIsInNvdXJjZXMiOlsibGliL2Nvb3Jkcy9jb29yZHMtcHJvdmlkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxNQUFNLE9BQU8sY0FBYztJQUEzQjtRQUVVLGFBQVEsR0FBYSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUM5RCxhQUFRLEdBQWEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUF1QnhELENBQUM7Ozs7SUFyQkMsT0FBTztRQUNMLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUN4QyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDMUMsQ0FBQzs7OztJQUVELElBQUksT0FBTztRQUNULE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDOzs7O0lBRUQsSUFBSSxPQUFPO1FBQ1QsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO0lBQ3ZCLENBQUM7Ozs7SUFFRCxLQUFLO1FBQ0gsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2QsQ0FBQzs7Ozs7SUFFTyxJQUFJO1FBQ1YsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7Q0FDRjs7Ozs7O0lBeEJDLGtDQUFzRTs7Ozs7SUFDdEUsa0NBQXNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIENvb3Jkc1Byb3ZpZGVyIHtcclxuXHJcbiAgcHJpdmF0ZSBfeENvb3Jkczogc3RyaW5nW10gPSBbJ2EnLCAnYicsICdjJywgJ2QnLCAnZScsICdmJywgJ2cnLCAnaCddO1xyXG4gIHByaXZhdGUgX3lDb29yZHM6IG51bWJlcltdID0gWzgsIDcsIDYsIDUsIDQsIDMsIDIsIDFdO1xyXG5cclxuICByZXZlcnNlKCkge1xyXG4gICAgdGhpcy5feENvb3JkcyA9IHRoaXMuX3hDb29yZHMucmV2ZXJzZSgpO1xyXG4gICAgdGhpcy5feUNvb3JkcyA9IHRoaXMuX3lDb29yZHMucmV2ZXJzZSgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHhDb29yZHMoKTogc3RyaW5nW10ge1xyXG4gICAgcmV0dXJuIHRoaXMuX3hDb29yZHM7XHJcbiAgfVxyXG5cclxuICBnZXQgeUNvb3JkcygpOiBudW1iZXJbXSB7XHJcbiAgICByZXR1cm4gdGhpcy5feUNvb3JkcztcclxuICB9XHJcblxyXG4gIHJlc2V0KCkge1xyXG4gICAgdGhpcy5pbml0KCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGluaXQoKSB7XHJcbiAgICB0aGlzLl94Q29vcmRzID0gWydhJywgJ2InLCAnYycsICdkJywgJ2UnLCAnZicsICdnJywgJ2gnXTtcclxuICAgIHRoaXMuX3lDb29yZHMgPSBbOCwgNywgNiwgNSwgNCwgMywgMiwgMV07XHJcbiAgfVxyXG59XHJcbiJdfQ==