/**
 * @fileoverview added by tsickle
 * Generated from: lib/utils/move-utils.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
var MoveUtils = /** @class */ (function () {
    function MoveUtils() {
    }
    /**
     * @param {?} currentColor
     * @param {?} row
     * @param {?} col
     * @param {?} destRow
     * @param {?} destCol
     * @param {?} board
     * @return {?}
     */
    MoveUtils.willMoveCauseCheck = /**
     * @param {?} currentColor
     * @param {?} row
     * @param {?} col
     * @param {?} destRow
     * @param {?} destCol
     * @param {?} board
     * @return {?}
     */
    function (currentColor, row, col, destRow, destCol, board) {
        /** @type {?} */
        var srcPiece = board.getPieceByField(row, col);
        /** @type {?} */
        var destPiece = board.getPieceByField(destRow, destCol);
        if (srcPiece) {
            srcPiece.point.row = destRow;
            srcPiece.point.col = destCol;
        }
        if (destPiece) {
            board.pieces = board.pieces.filter((/**
             * @param {?} e
             * @return {?}
             */
            function (e) { return e !== destPiece; }));
        }
        /** @type {?} */
        var isBound = board.isKingInCheck(currentColor, board.pieces);
        if (srcPiece) {
            srcPiece.point.col = col;
            srcPiece.point.row = row;
        }
        if (destPiece) {
            board.pieces.push(destPiece);
        }
        return isBound;
    };
    /**
     * @param {?} sourcePoint
     * @param {?} destPoint
     * @param {?} reverted
     * @return {?}
     */
    MoveUtils.format = /**
     * @param {?} sourcePoint
     * @param {?} destPoint
     * @param {?} reverted
     * @return {?}
     */
    function (sourcePoint, destPoint, reverted) {
        if (reverted) {
            /** @type {?} */
            var sourceX = 104 - sourcePoint.col;
            /** @type {?} */
            var destX = 104 - destPoint.col;
            return String.fromCharCode(sourceX) + (sourcePoint.row + 1)
                + String.fromCharCode(destX) + (destPoint.row + 1);
        }
        else {
            /** @type {?} */
            var incrementX = 97;
            return String.fromCharCode(sourcePoint.col + incrementX) + (Math.abs(sourcePoint.row - 7) + 1)
                + String.fromCharCode(destPoint.col + incrementX) + (Math.abs(destPoint.row - 7) + 1);
        }
    };
    return MoveUtils;
}());
export { MoveUtils };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW92ZS11dGlscy5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jaGVzcy1ib2FyZC8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9tb3ZlLXV0aWxzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBSUE7SUFBQTtJQXlDQSxDQUFDOzs7Ozs7Ozs7O0lBdkNlLDRCQUFrQjs7Ozs7Ozs7O0lBQWhDLFVBQWlDLFlBQW1CLEVBQUUsR0FBVyxFQUFFLEdBQVcsRUFBRSxPQUFlLEVBQUUsT0FBZSxFQUFFLEtBQVk7O1lBQ3hILFFBQVEsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUM7O1lBQzFDLFNBQVMsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUM7UUFFdkQsSUFBSSxRQUFRLEVBQUU7WUFDWixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxPQUFPLENBQUM7WUFDN0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsT0FBTyxDQUFDO1NBQzlCO1FBRUQsSUFBSSxTQUFTLEVBQUU7WUFDYixLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTTs7OztZQUFDLFVBQUEsQ0FBQyxJQUFJLE9BQUEsQ0FBQyxLQUFLLFNBQVMsRUFBZixDQUFlLEVBQUMsQ0FBQztTQUMxRDs7WUFDRyxPQUFPLEdBQUcsS0FBSyxDQUFDLGFBQWEsQ0FBQyxZQUFZLEVBQUUsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUU3RCxJQUFJLFFBQVEsRUFBRTtZQUNaLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQztZQUN6QixRQUFRLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7U0FDMUI7UUFFRCxJQUFJLFNBQVMsRUFBRTtZQUNiLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzlCO1FBRUQsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQzs7Ozs7OztJQUVhLGdCQUFNOzs7Ozs7SUFBcEIsVUFBcUIsV0FBa0IsRUFBRSxTQUFnQixFQUFFLFFBQWlCO1FBQzFFLElBQUksUUFBUSxFQUFFOztnQkFDUixPQUFPLEdBQUcsR0FBRyxHQUFHLFdBQVcsQ0FBQyxHQUFHOztnQkFDL0IsS0FBSyxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUMsR0FBRztZQUMvQixPQUFPLE1BQU0sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztrQkFDdkQsTUFBTSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDdEQ7YUFBTTs7Z0JBQ0QsVUFBVSxHQUFHLEVBQUU7WUFDbkIsT0FBTyxNQUFNLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2tCQUMxRixNQUFNLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDekY7SUFDSCxDQUFDO0lBRUgsZ0JBQUM7QUFBRCxDQUFDLEFBekNELElBeUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb2xvcn0gZnJvbSAnLi4vbW9kZWxzL3BpZWNlcy9jb2xvcic7XHJcbmltcG9ydCB7Qm9hcmR9IGZyb20gJy4uL21vZGVscy9ib2FyZCc7XHJcbmltcG9ydCB7UG9pbnR9IGZyb20gJy4uL21vZGVscy9waWVjZXMvcG9pbnQnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmVVdGlscyB7XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgd2lsbE1vdmVDYXVzZUNoZWNrKGN1cnJlbnRDb2xvcjogQ29sb3IsIHJvdzogbnVtYmVyLCBjb2w6IG51bWJlciwgZGVzdFJvdzogbnVtYmVyLCBkZXN0Q29sOiBudW1iZXIsIGJvYXJkOiBCb2FyZCkge1xyXG4gICAgbGV0IHNyY1BpZWNlID0gYm9hcmQuZ2V0UGllY2VCeUZpZWxkKHJvdywgY29sKTtcclxuICAgIGxldCBkZXN0UGllY2UgPSBib2FyZC5nZXRQaWVjZUJ5RmllbGQoZGVzdFJvdywgZGVzdENvbCk7XHJcblxyXG4gICAgaWYgKHNyY1BpZWNlKSB7XHJcbiAgICAgIHNyY1BpZWNlLnBvaW50LnJvdyA9IGRlc3RSb3c7XHJcbiAgICAgIHNyY1BpZWNlLnBvaW50LmNvbCA9IGRlc3RDb2w7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRlc3RQaWVjZSkge1xyXG4gICAgICBib2FyZC5waWVjZXMgPSBib2FyZC5waWVjZXMuZmlsdGVyKGUgPT4gZSAhPT0gZGVzdFBpZWNlKTtcclxuICAgIH1cclxuICAgIGxldCBpc0JvdW5kID0gYm9hcmQuaXNLaW5nSW5DaGVjayhjdXJyZW50Q29sb3IsIGJvYXJkLnBpZWNlcyk7XHJcblxyXG4gICAgaWYgKHNyY1BpZWNlKSB7XHJcbiAgICAgIHNyY1BpZWNlLnBvaW50LmNvbCA9IGNvbDtcclxuICAgICAgc3JjUGllY2UucG9pbnQucm93ID0gcm93O1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChkZXN0UGllY2UpIHtcclxuICAgICAgYm9hcmQucGllY2VzLnB1c2goZGVzdFBpZWNlKTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXNCb3VuZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGF0aWMgZm9ybWF0KHNvdXJjZVBvaW50OiBQb2ludCwgZGVzdFBvaW50OiBQb2ludCwgcmV2ZXJ0ZWQ6IGJvb2xlYW4pIHtcclxuICAgIGlmIChyZXZlcnRlZCkge1xyXG4gICAgICBsZXQgc291cmNlWCA9IDEwNCAtIHNvdXJjZVBvaW50LmNvbDtcclxuICAgICAgbGV0IGRlc3RYID0gMTA0IC0gZGVzdFBvaW50LmNvbDtcclxuICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoc291cmNlWCkgKyAoc291cmNlUG9pbnQucm93ICsgMSlcclxuICAgICAgICArIFN0cmluZy5mcm9tQ2hhckNvZGUoZGVzdFgpICsgKGRlc3RQb2ludC5yb3cgKyAxKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGxldCBpbmNyZW1lbnRYID0gOTc7XHJcbiAgICAgIHJldHVybiBTdHJpbmcuZnJvbUNoYXJDb2RlKHNvdXJjZVBvaW50LmNvbCArIGluY3JlbWVudFgpICsgKE1hdGguYWJzKHNvdXJjZVBvaW50LnJvdyAtIDcpICsgMSlcclxuICAgICAgICArIFN0cmluZy5mcm9tQ2hhckNvZGUoZGVzdFBvaW50LmNvbCArIGluY3JlbWVudFgpICsgKE1hdGguYWJzKGRlc3RQb2ludC5yb3cgLSA3KSArIDEpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19