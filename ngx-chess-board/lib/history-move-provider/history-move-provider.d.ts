import { HistoryMove } from './history-move';
export declare class HistoryMoveProvider {
    historyMoves: HistoryMove[];
    constructor();
    addMove(historyMove: HistoryMove): void;
    pop(): HistoryMove;
    getAll(): HistoryMove[];
    clear(): void;
}
