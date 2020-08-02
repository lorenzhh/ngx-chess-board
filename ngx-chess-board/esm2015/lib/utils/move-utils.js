/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/move-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
export class MoveUtils {
    /**
     * @param {?} currentColor
     * @param {?} row
     * @param {?} col
     * @param {?} destRow
     * @param {?} destCol
     * @param {?} board
     * @return {?}
     */
    static willMoveCauseCheck(currentColor, row, col, destRow, destCol, board) {
        /** @type {?} */
        let srcPiece = board.getPieceByField(row, col);
        /** @type {?} */
        let destPiece = board.getPieceByField(destRow, destCol);
        if (srcPiece) {
            srcPiece.point.row = destRow;
            srcPiece.point.col = destCol;
        }
        if (destPiece) {
            board.pieces = board.pieces.filter((/**
             * @param {?} e
             * @return {?}
             */
            e => e !== destPiece));
        }
        /** @type {?} */
        let isBound = board.isKingInCheck(currentColor, board.pieces);
        if (srcPiece) {
            srcPiece.point.col = col;
            srcPiece.point.row = row;
        }
        if (destPiece) {
            board.pieces.push(destPiece);
        }
        return isBound;
    }
    /**
     * @param {?} sourcePoint
     * @param {?} destPoint
     * @param {?} reverted
     * @return {?}
     */
    static format(sourcePoint, destPoint, reverted) {
        if (reverted) {
            /** @type {?} */
            let sourceX = 104 - sourcePoint.col;
            /** @type {?} */
            let destX = 104 - destPoint.col;
            return String.fromCharCode(sourceX) + (sourcePoint.row + 1)
                + String.fromCharCode(destX) + (destPoint.row + 1);
        }
        else {
            /** @type {?} */
            let incrementX = 97;
            return String.fromCharCode(sourcePoint.col + incrementX) + (Math.abs(sourcePoint.row - 7) + 1)
                + String.fromCharCode(destPoint.col + incrementX) + (Math.abs(destPoint.row - 7) + 1);
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGVzcy1ib2FyZC8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9tb3ZlLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUEsTUFBTSxPQUFPLFNBQVM7Ozs7Ozs7Ozs7SUFFYixNQUFNLENBQUMsa0JBQWtCLENBQUMsWUFBbUIsRUFBRSxHQUFXLEVBQUUsR0FBVyxFQUFFLE9BQWUsRUFBRSxPQUFlLEVBQUUsS0FBWTs7WUFDeEgsUUFBUSxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQzs7WUFDMUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxlQUFlLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQztRQUV2RCxJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLE9BQU8sQ0FBQztZQUM3QixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7U0FDOUI7UUFFRCxJQUFJLFNBQVMsRUFBRTtZQUNiLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxNQUFNOzs7O1lBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssU0FBUyxFQUFDLENBQUM7U0FDMUQ7O1lBQ0csT0FBTyxHQUFHLEtBQUssQ0FBQyxhQUFhLENBQUMsWUFBWSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFFN0QsSUFBSSxRQUFRLEVBQUU7WUFDWixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7WUFDekIsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1NBQzFCO1FBRUQsSUFBSSxTQUFTLEVBQUU7WUFDYixLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUM5QjtRQUVELE9BQU8sT0FBTyxDQUFDO0lBQ2pCLENBQUM7Ozs7Ozs7SUFFTSxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQWtCLEVBQUUsU0FBZ0IsRUFBRSxRQUFpQjtRQUMxRSxJQUFJLFFBQVEsRUFBRTs7Z0JBQ1IsT0FBTyxHQUFHLEdBQUcsR0FBRyxXQUFXLENBQUMsR0FBRzs7Z0JBQy9CLEtBQUssR0FBRyxHQUFHLEdBQUcsU0FBUyxDQUFDLEdBQUc7WUFDL0IsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7a0JBQ3ZELE1BQU0sQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3REO2FBQU07O2dCQUNELFVBQVUsR0FBRyxFQUFFO1lBQ25CLE9BQU8sTUFBTSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztrQkFDMUYsTUFBTSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1NBQ3pGO0lBQ0gsQ0FBQztDQUVGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb2xvcn0gZnJvbSAnLi4vbW9kZWxzL3BpZWNlcy9jb2xvcic7XHJcbmltcG9ydCB7Qm9hcmR9IGZyb20gJy4uL21vZGVscy9ib2FyZCc7XHJcbmltcG9ydCB7UG9pbnR9IGZyb20gJy4uL21vZGVscy9waWVjZXMvcG9pbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmVVdGlscyB7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgd2lsbE1vdmVDYXVzZUNoZWNrKGN1cnJlbnRDb2xvcjogQ29sb3IsIHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgZGVzdFJvdzogbnVtYmVyLCBkZXN0Q29sOiBudW1iZXIsIGJvYXJkOiBCb2FyZCkge1xyXG4gICAgbGV0IHNyY1BpZWNlID0gYm9hcmQuZ2V0UGllY2VCeUZpZWxkKHJvdywgY29sKTtcclxuICAgIGxldCBkZXN0UGllY2UgPSBib2FyZC5nZXRQaWVjZUJ5RmllbGQoZGVzdFJvdywgZGVzdENvbCk7XHJcblxyXG4gICAgaWYgKHNyY1BpZWNlKSB7XHJcbiAgICAgIHNyY1BpZWNlLnBvaW50LnJvdyA9IGRlc3RSb3c7XHJcbiAgICAgIHNyY1BpZWNlLnBvaW50LmNvbCA9IGRlc3RDb2w7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRlc3RQaWVjZSkge1xyXG4gICAgICBib2FyZC5waWVjZXMgPSBib2FyZC5waWVjZXMuZmlsdGVyKGUgPT4gZSAhPT0gZGVzdFBpZWNlKTtcclxuICAgIH1cclxuICAgIGxldCBpc0JvdW5kID0gYm9hcmQuaXNLaW5nSW5DaGVjayhjdXJyZW50Q29sb3IsIGJvYXJkLnBpZWNlcyk7XHJcblxyXG4gICAgaWYgKHNyY1BpZWNlKSB7XHJcbiAgICAgIHNyY1BpZWNlLnBvaW50LmNvbCA9IGNvbDtcclxuICAgICAgc3JjUGllY2UucG9pbnQucm93ID0gcm93O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkZXN0UGllY2UpIHtcclxuICAgICAgYm9hcmQucGllY2VzLnB1c2goZGVzdFBpZWNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXNCb3VuZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZm9ybWF0KHNvdXJjZVBvaW50OiBQb2ludCwgZGVzdFBvaW50OiBQb2ludCwgcmV2ZXJ0ZWQ6IGJvb2xlYW4pIHtcclxuICAgIGlmIChyZXZlcnRlZCkge1xyXG4gICAgICBsZXQgc291cmNlWCA9IDEwNCAtIHNvdXJjZVBvaW50LmNvbDtcclxuICAgICAgbGV0IGRlc3RYID0gMTA0IC0gZGVzdFBvaW50LmNvbDtcclxuICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoc291cmNlWCkgKyAoc291cmNlUG9pbnQucm93ICsgMSlcclxuICAgICAgICArIFN0cmluZy5mcm9tQ2hhckNvZGUoZGVzdFgpICsgKGRlc3RQb2ludC5yb3cgKyAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBpbmNyZW1lbnRYID0gOTc7XHJcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHNvdXJjZVBvaW50LmNvbCArIGluY3JlbWVudFgpICsgKE1hdGguYWJzKHNvdXJjZVBvaW50LnJvdyAtIDcpICsgMSlcclxuICAgICAgICArIFN0cmluZy5mcm9tQ2hhckNvZGUoZGVzdFBvaW50LmNvbCArIGluY3JlbWVudFgpICsgKE1hdGguYWJzKGRlc3RQb2ludC5yb3cgLSA3KSArIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19