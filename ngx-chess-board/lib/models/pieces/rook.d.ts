import { Piece } from './piece';
import { Color } from './color';
import { Point } from './point';
import { Board } from '../board';
export declare class Rook extends Piece {
    isMovedAlready: boolean;
    constructor(point: Point, color: Color, image: string, board: Board);
    getPossibleMoves(): Point[];
    getPossibleCaptures(): Point[];
    getCoveredFields(): Point[];
}
