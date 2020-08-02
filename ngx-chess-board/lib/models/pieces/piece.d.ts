import { Point } from './point';
import { Color } from './color';
import { AbstractPiece } from '../../piece-decorator/abstract-piece';
import { Board } from '../board';
export declare abstract class Piece implements AbstractPiece {
    point: Point;
    color: Color;
    image: string;
    checkPoints: Point[];
    relValue: number;
    board: Board;
    constructor(point: Point, color: Color, image: string, relValue: number, board: Board);
    abstract getPossibleMoves(): Point[];
    abstract getPossibleCaptures(): Point[];
    abstract getCoveredFields(): Point[];
}
