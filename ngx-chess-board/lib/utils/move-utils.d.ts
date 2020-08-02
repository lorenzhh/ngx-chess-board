import { Color } from '../models/pieces/color';
import { Board } from '../models/board';
import { Point } from '../models/pieces/point';
export declare class MoveUtils {
    static willMoveCauseCheck(currentColor: Color, row: number, col: number, destRow: number, destCol: number, board: Board): boolean;
    static format(sourcePoint: Point, destPoint: Point, reverted: boolean): string;
}
