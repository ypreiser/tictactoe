export default function botPlayer(board = [], player) {
    // [
    // //   0  1  2
    //     ['', '', ''], // 0
    //     ['', '', ''], // 1
    //     ['', '', '']  // 2
    //   ]
    // if (2 of bot && free) { win }
    // check rows
    // check columns
    // check diagonals
    board.forEach((row, rowIndex) => {
        let rowCnt = 0;
        row.forEach(cell => cell == player ? rowCnt++ : '')
        if (rowCnt == 2 && row.includes('')) {
            let columnIndex = row.findIndex(i => i == '');
            return [rowIndex, columnIndex]
        }
    })

    // if (2 not bot && free) {  block }

    // else random


}
