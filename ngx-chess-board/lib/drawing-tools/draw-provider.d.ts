import { Circle } from './circle';
import { Arrow } from './arrow';
export declare class DrawProvider {
    private _circles;
    private _arrows;
    constructor();
    addCircle(circle: Circle): void;
    addArrow(arrow: Arrow): void;
    readonly circles: Circle[];
    readonly arrows: Arrow[];
    containsCircle(circle: Circle): boolean;
    containsArrow(arrow: Arrow): boolean;
    clear(): void;
}
