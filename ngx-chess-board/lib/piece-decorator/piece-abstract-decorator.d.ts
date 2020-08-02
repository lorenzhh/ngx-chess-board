import { AbstractPiece } from './abstract-piece';
import { Point } from '../models/pieces/point';
export declare abstract class PieceAbstractDecorator implements AbstractPiece {
    piece: AbstractPiece;
    protected constructor(piece: AbstractPiece);
    abstract getPossibleCaptures(): Point[];
    abstract getPossibleMoves(): Point[];
}
