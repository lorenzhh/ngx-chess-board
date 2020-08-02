import { Board } from '../models/board';
export declare class BoardLoader {
    private board;
    constructor(board: Board);
    addPieces(): void;
    loadFEN(fen: string): void;
    private setCurrentPlayer;
    setBoard(board: Board): void;
    private setCastles;
    private setFullMoveCount;
    private setEnPassant;
    private setRookAlreadyMoved;
}
