/**
 * @fileoverview added by tsickle
 * Generated from: lib/piece-promotion-modal/piece-promotion-modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
var PiecePromotionModalComponent = /** @class */ (function () {
    function PiecePromotionModalComponent() {
        this.selectedIndex = 1;
    }
    /**
     * @param {?} closeCallback
     * @return {?}
     */
    PiecePromotionModalComponent.prototype.open = /**
     * @param {?} closeCallback
     * @return {?}
     */
    function (closeCallback) {
        this.onCloseCallback = closeCallback;
        this.modal.nativeElement.style.display = 'block';
    };
    /**
     * @return {?}
     */
    PiecePromotionModalComponent.prototype.close = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.onCloseCallback(this.selectedIndex);
                this.modal.nativeElement.style.display = 'none';
                return [2 /*return*/];
            });
        });
    };
    /**
     * @param {?} index
     * @return {?}
     */
    PiecePromotionModalComponent.prototype.changeSelection = /**
     * @param {?} index
     * @return {?}
     */
    function (index) {
        this.selectedIndex = index;
    };
    PiecePromotionModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-piece-promotion-modal',
                    template: "<div #myModal class=\"container\">\r\n  <div class=\"wrapper\">\r\n    <div class=\"content\">\r\n      <div class=\"piece-wrapper\">\r\n        <div class=\"piece\" (click)=\"changeSelection(1)\" [class.selected]=\"selectedIndex===1\">&#x265B;</div>\r\n        <div class=\"piece\" (click)=\"changeSelection(2)\" [class.selected]=\"selectedIndex===2\">&#x265C;</div>\r\n        <div class=\"piece\" (click)=\"changeSelection(3)\" [class.selected]=\"selectedIndex===3\">&#x265D;</div>\r\n        <div class=\"piece\" (click)=\"changeSelection(4)\" [class.selected]=\"selectedIndex===4\">&#x265E;</div>\r\n      </div>\r\n      <div style=\"text-align: center; margin-top: 5px\">\r\n        <button (click)=\"close()\" id=\"close-button\">Promote!</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n",
                    styles: [".container{display:none;position:absolute;z-index:1;top:0;color:#000;width:100%;height:100%;overflow:auto;background-color:rgba(0,0,0,.4)}.wrapper{position:relative;height:100%;width:100%}.content{background-color:#fefefe;margin:auto;position:relative;top:30%;font-size:100%;height:40%;padding:10px;border:1px solid #888;width:90%}.piece{font-size:5rem;height:100%;width:25%;cursor:pointer;display:inline-block}.piece-wrapper{height:80%;width:100%}#close-button{border-radius:4px;background-color:#4caf50;border:none;color:#fff;padding-left:5px;padding-right:5px;text-align:center;text-decoration:none;display:inline-block}.selected{border:2px solid #00b919;border-radius:4px;box-sizing:border-box}"]
                }] }
    ];
    PiecePromotionModalComponent.propDecorators = {
        modal: [{ type: ViewChild, args: ['myModal', { static: false },] }]
    };
    return PiecePromotionModalComponent;
}());
export { PiecePromotionModalComponent };
if (false) {
    /** @type {?} */
    PiecePromotionModalComponent.prototype.modal;
    /** @type {?} */
    PiecePromotionModalComponent.prototype.selectedIndex;
    /**
     * @type {?}
     * @private
     */
    PiecePromotionModalComponent.prototype.onCloseCallback;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllY2UtcHJvbW90aW9uLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGVzcy1ib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9waWVjZS1wcm9tb3Rpb24tbW9kYWwvcGllY2UtcHJvbW90aW9uLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFJdkU7SUFBQTtRQVNFLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO0lBaUI1QixDQUFDOzs7OztJQWRDLDJDQUFJOzs7O0lBQUosVUFBSyxhQUFzQztRQUN6QyxJQUFJLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUssNENBQUs7OztJQUFYOzs7Z0JBQ0UsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7Z0JBQ3pDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsTUFBTSxDQUFDOzs7O0tBQ2pEOzs7OztJQUVELHNEQUFlOzs7O0lBQWYsVUFBZ0IsS0FBYTtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDOztnQkF4QkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSwyQkFBMkI7b0JBQ3JDLHV6QkFBcUQ7O2lCQUV0RDs7O3dCQUdFLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOztJQW1CdkMsbUNBQUM7Q0FBQSxBQTFCRCxJQTBCQztTQXJCWSw0QkFBNEI7OztJQUV2Qyw2Q0FBeUQ7O0lBRXpELHFEQUEwQjs7Ozs7SUFDMUIsdURBQWlEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHtQaWVjZX0gZnJvbSAnLi4vbW9kZWxzL3BpZWNlcy9waWVjZSc7XHJcbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1waWVjZS1wcm9tb3Rpb24tbW9kYWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9waWVjZS1wcm9tb3Rpb24tbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL3BpZWNlLXByb21vdGlvbi1tb2RhbC5jb21wb25lbnQuc2NzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBQaWVjZVByb21vdGlvbk1vZGFsQ29tcG9uZW50IHtcclxuXHJcbiAgQFZpZXdDaGlsZCgnbXlNb2RhbCcsIHtzdGF0aWM6IGZhbHNlfSkgbW9kYWw6IEVsZW1lbnRSZWY7XHJcblxyXG4gIHNlbGVjdGVkSW5kZXg6IG51bWJlciA9IDE7XHJcbiAgcHJpdmF0ZSBvbkNsb3NlQ2FsbGJhY2s6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkO1xyXG5cclxuICBvcGVuKGNsb3NlQ2FsbGJhY2s6IChpbmRleDogbnVtYmVyKSA9PiB2b2lkKSB7XHJcbiAgICB0aGlzLm9uQ2xvc2VDYWxsYmFjayA9IGNsb3NlQ2FsbGJhY2s7XHJcbiAgICB0aGlzLm1vZGFsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgfVxyXG5cclxuICBhc3luYyBjbG9zZSgpIHtcclxuICAgIHRoaXMub25DbG9zZUNhbGxiYWNrKHRoaXMuc2VsZWN0ZWRJbmRleCk7XHJcbiAgICB0aGlzLm1vZGFsLm5hdGl2ZUVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICB9XHJcblxyXG4gIGNoYW5nZVNlbGVjdGlvbihpbmRleDogbnVtYmVyKXtcclxuICAgIHRoaXMuc2VsZWN0ZWRJbmRleCA9IGluZGV4O1xyXG4gIH1cclxuXHJcbn1cclxuIl19