import { ElementRef } from '@angular/core';
export declare class PiecePromotionModalComponent {
    modal: ElementRef;
    selectedIndex: number;
    private onCloseCallback;
    open(closeCallback: (index: number) => void): void;
    close(): Promise<void>;
    changeSelection(index: number): void;
}
