import { BoardState } from './board-state';
export declare class BoardStateProvider {
    moves: BoardState[];
    constructor();
    addMove(moveHistory: BoardState): void;
    getMoves(): BoardState[];
    pop(): BoardState;
    isEmpty(): boolean;
    clear(): void;
}
