export interface NgxChessBoardView {
    reset(): any;
    reverse(): any;
    undo(): any;
    getMoveHistory(): any;
    setFEN(fen: string): any;
    getFEN(): any;
}
