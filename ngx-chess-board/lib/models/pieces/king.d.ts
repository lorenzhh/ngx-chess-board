import { Piece } from './piece';
import { Color } from './color';
import { Point } from './point';
import { Board } from '../board';
export declare class King extends Piece {
    castledAlready: boolean;
    shortCastled: boolean;
    longCastled: boolean;
    isMovedAlready: any;
    isCastling: boolean;
    constructor(point: Point, color: Color, image: string, board: Board);
    getPossibleMoves(): Point[];
    getPossibleCaptures(): Point[];
    getCoveredFields(): Point[];
}
