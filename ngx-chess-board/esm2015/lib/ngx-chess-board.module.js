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
export class NgxChessBoardModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: NgxChessBoardModule,
            providers: [NgxChessBoardService]
        };
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNoZXNzLWJvYXJkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGVzcy1ib2FyZC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtY2hlc3MtYm9hcmQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUFzQixRQUFRLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFDNUQsT0FBTyxFQUFDLFlBQVksRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzdDLE9BQU8sRUFBQyxzQkFBc0IsRUFBQyxNQUFNLDZCQUE2QixDQUFDO0FBQ25FLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLG1DQUFtQyxDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN4RCxPQUFPLEVBQUMsNEJBQTRCLEVBQUMsTUFBTSx5REFBeUQsQ0FBQztBQVVyRyxNQUFNLE9BQU8sbUJBQW1COzs7O0lBRTlCLE1BQU0sQ0FBQyxPQUFPO1FBQ1osT0FBTztZQUNMLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsU0FBUyxFQUFFLENBQUMsb0JBQW9CLENBQUM7U0FDbEMsQ0FBQztJQUNKLENBQUM7OztZQWZGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUUsQ0FBQyxzQkFBc0IsRUFBRSw0QkFBNEIsQ0FBQztnQkFDcEUsT0FBTyxFQUFFO29CQUNQLFlBQVk7b0JBQ1osY0FBYztpQkFDZjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQzthQUNsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0NvbW1vbk1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHtOZ3hDaGVzc0JvYXJkQ29tcG9uZW50fSBmcm9tICcuL25neC1jaGVzcy1ib2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQge05neENoZXNzQm9hcmRTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2Uvbmd4LWNoZXNzLWJvYXJkLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBEcmFnRHJvcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9kcmFnLWRyb3AnO1xyXG5pbXBvcnQge1BpZWNlUHJvbW90aW9uTW9kYWxDb21wb25lbnR9IGZyb20gJy4vcGllY2UtcHJvbW90aW9uLW1vZGFsL3BpZWNlLXByb21vdGlvbi1tb2RhbC5jb21wb25lbnQnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBkZWNsYXJhdGlvbnM6IFtOZ3hDaGVzc0JvYXJkQ29tcG9uZW50LCBQaWVjZVByb21vdGlvbk1vZGFsQ29tcG9uZW50XSxcclxuICBpbXBvcnRzOiBbXHJcbiAgICBDb21tb25Nb2R1bGUsXHJcbiAgICBEcmFnRHJvcE1vZHVsZSxcclxuICBdLFxyXG4gIGV4cG9ydHM6IFtOZ3hDaGVzc0JvYXJkQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTmd4Q2hlc3NCb2FyZE1vZHVsZSB7XHJcblxyXG4gIHN0YXRpYyBmb3JSb290KCk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbmdNb2R1bGU6IE5neENoZXNzQm9hcmRNb2R1bGUsXHJcbiAgICAgIHByb3ZpZGVyczogW05neENoZXNzQm9hcmRTZXJ2aWNlXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==