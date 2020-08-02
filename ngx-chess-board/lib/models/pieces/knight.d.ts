import { Piece } from './piece';
import { Point } from './point';
import { Color } from './color';
import { Board } from '../board';
export declare class Knight extends Piece {
    isMovedAlready: boolean;
    constructor(point: Point, color: Color, image: string, board: Board);
    getPossibleMoves(): Point[];
    getPossibleCaptures(): Point[];
    getCoveredFields(): Point[];
}
