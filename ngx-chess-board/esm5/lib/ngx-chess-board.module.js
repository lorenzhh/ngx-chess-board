/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-chess-board.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxChessBoardComponent } from './ngx-chess-board.component';
import { NgxChessBoardService } from './service/ngx-chess-board.service';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PiecePromotionModalComponent } from './piece-promotion-modal/piece-promotion-modal.component';
var NgxChessBoardModule = /** @class */ (function () {
    function NgxChessBoardModule() {
    }
    /**
     * @return {?}
     */
    NgxChessBoardModule.forRoot = /**
     * @return {?}
     */
    function () {
        return {
            ngModule: NgxChessBoardModule,
            providers: [NgxChessBoardService]
        };
    };
    NgxChessBoardModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [NgxChessBoardComponent, PiecePromotionModalComponent],
                    imports: [
                        CommonModule,
                        DragDropModule,
                    ],
                    exports: [NgxChessBoardComponent]
                },] }
    ];
    return NgxChessBoardModule;
}());
export { NgxChessBoardModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNoZXNzLWJvYXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGVzcy1ib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtY2hlc3MtYm9hcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQUVyRztJQUFBO0lBaUJBLENBQUM7Ozs7SUFQUSwyQkFBTzs7O0lBQWQ7UUFDRSxPQUFPO1lBQ0wsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixTQUFTLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQztTQUNsQyxDQUFDO0lBQ0osQ0FBQzs7Z0JBZkYsUUFBUSxTQUFDO29CQUNSLFlBQVksRUFBRSxDQUFDLHNCQUFzQixFQUFFLDRCQUE0QixDQUFDO29CQUNwRSxPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixjQUFjO3FCQUNmO29CQUNELE9BQU8sRUFBRSxDQUFDLHNCQUFzQixDQUFDO2lCQUNsQzs7SUFVRCwwQkFBQztDQUFBLEFBakJELElBaUJDO1NBVFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Q29tbW9uTW9kdWxlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQge05neENoZXNzQm9hcmRDb21wb25lbnR9IGZyb20gJy4vbmd4LWNoZXNzLWJvYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7Tmd4Q2hlc3NCb2FyZFNlcnZpY2V9IGZyb20gJy4vc2VydmljZS9uZ3gtY2hlc3MtYm9hcmQuc2VydmljZSc7XHJcbmltcG9ydCB7IERyYWdEcm9wTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcbmltcG9ydCB7UGllY2VQcm9tb3Rpb25Nb2RhbENvbXBvbmVudH0gZnJvbSAnLi9waWVjZS1wcm9tb3Rpb24tbW9kYWwvcGllY2UtcHJvbW90aW9uLW1vZGFsLmNvbXBvbmVudCc7XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGRlY2xhcmF0aW9uczogW05neENoZXNzQm9hcmRDb21wb25lbnQsIFBpZWNlUHJvbW90aW9uTW9kYWxDb21wb25lbnRdLFxyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIERyYWdEcm9wTW9kdWxlLFxyXG4gIF0sXHJcbiAgZXhwb3J0czogW05neENoZXNzQm9hcmRDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ3hDaGVzc0JvYXJkTW9kdWxlIHtcclxuXHJcbiAgc3RhdGljIGZvclJvb3QoKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBuZ01vZHVsZTogTmd4Q2hlc3NCb2FyZE1vZHVsZSxcclxuICAgICAgcHJvdmlkZXJzOiBbTmd4Q2hlc3NCb2FyZFNlcnZpY2VdXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbn1cclxuIl19