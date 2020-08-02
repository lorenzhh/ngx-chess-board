/**
 * @fileoverview added by tsickle
 * Generated from: lib/piece-promotion-modal/piece-promotion-modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, ViewChild } from '@angular/core';
export class PiecePromotionModalComponent {
    constructor() {
        this.selectedIndex = 1;
    }
    /**
     * @param {?} closeCallback
     * @return {?}
     */
    open(closeCallback) {
        this.onCloseCallback = closeCallback;
        this.modal.nativeElement.style.display = 'block';
    }
    /**
     * @return {?}
     */
    close() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            this.onCloseCallback(this.selectedIndex);
            this.modal.nativeElement.style.display = 'none';
        });
    }
    /**
     * @param {?} index
     * @return {?}
     */
    changeSelection(index) {
        this.selectedIndex = index;
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGllY2UtcHJvbW90aW9uLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGVzcy1ib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9waWVjZS1wcm9tb3Rpb24tbW9kYWwvcGllY2UtcHJvbW90aW9uLW1vZGFsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLFVBQVUsRUFBVSxTQUFTLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFTdkUsTUFBTSxPQUFPLDRCQUE0QjtJQUx6QztRQVNFLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO0lBaUI1QixDQUFDOzs7OztJQWRDLElBQUksQ0FBQyxhQUFzQztRQUN6QyxJQUFJLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQztRQUNyQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztJQUNuRCxDQUFDOzs7O0lBRUssS0FBSzs7WUFDVCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztZQUN6QyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLE1BQU0sQ0FBQztRQUNsRCxDQUFDO0tBQUE7Ozs7O0lBRUQsZUFBZSxDQUFDLEtBQWE7UUFDM0IsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7O1lBeEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMkJBQTJCO2dCQUNyQyx1ekJBQXFEOzthQUV0RDs7O29CQUdFLFNBQVMsU0FBQyxTQUFTLEVBQUUsRUFBQyxNQUFNLEVBQUUsS0FBSyxFQUFDOzs7O0lBQXJDLDZDQUF5RDs7SUFFekQscURBQTBCOzs7OztJQUMxQix1REFBaUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge1BpZWNlfSBmcm9tICcuLi9tb2RlbHMvcGllY2VzL3BpZWNlJztcclxuaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdyeGpzJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLXBpZWNlLXByb21vdGlvbi1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3BpZWNlLXByb21vdGlvbi1tb2RhbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vcGllY2UtcHJvbW90aW9uLW1vZGFsLmNvbXBvbmVudC5zY3NzJ11cclxufSlcclxuZXhwb3J0IGNsYXNzIFBpZWNlUHJvbW90aW9uTW9kYWxDb21wb25lbnQge1xyXG5cclxuICBAVmlld0NoaWxkKCdteU1vZGFsJywge3N0YXRpYzogZmFsc2V9KSBtb2RhbDogRWxlbWVudFJlZjtcclxuXHJcbiAgc2VsZWN0ZWRJbmRleDogbnVtYmVyID0gMTtcclxuICBwcml2YXRlIG9uQ2xvc2VDYWxsYmFjazogKGluZGV4OiBudW1iZXIpID0+IHZvaWQ7XHJcblxyXG4gIG9wZW4oY2xvc2VDYWxsYmFjazogKGluZGV4OiBudW1iZXIpID0+IHZvaWQpIHtcclxuICAgIHRoaXMub25DbG9zZUNhbGxiYWNrID0gY2xvc2VDYWxsYmFjaztcclxuICAgIHRoaXMubW9kYWwubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9XHJcblxyXG4gIGFzeW5jIGNsb3NlKCkge1xyXG4gICAgdGhpcy5vbkNsb3NlQ2FsbGJhY2sodGhpcy5zZWxlY3RlZEluZGV4KTtcclxuICAgIHRoaXMubW9kYWwubmF0aXZlRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuXHJcbiAgY2hhbmdlU2VsZWN0aW9uKGluZGV4OiBudW1iZXIpe1xyXG4gICAgdGhpcy5zZWxlY3RlZEluZGV4ID0gaW5kZXg7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=