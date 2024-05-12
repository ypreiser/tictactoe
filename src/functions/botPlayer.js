export default function botPlayer(board = [], symbol) {
    // בדיקה אם הבוט יכול לנצח

    // check rows
    const checkRows = (player) => {
        for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
            let row = board[rowIndex];
            let rowCnt = 0;
            for (let i = 0; i < row.length; i++) {
                if (row[i] == player) rowCnt++
            }
            if (rowCnt == 2 && row.includes('')) {
                let columnIndex = row.findIndex(i => i == '');
                console.log({rowIndex, columnIndex});
                console.log({board});
                console.log({player});
                return [rowIndex, columnIndex];
            }
        }
    };

    // check columns
    const checkColumns = (player) => {
        for (let i = 0; i < board.length; i++) {
            let colCnt = 0;
            // board.forEach(row => row[i] == player ? colCnt++ : '')
            for (let j = 0; j < board.length; j++) {
                if (board[j][i] == player) colCnt++
            }
            if (colCnt == 2 && (board[0][i] == '' || board[1][i] == '' || board[2][i] == '')) {
                return [i, board[0][i] == '' ? 0 : board[1][i] == '' ? 1 : 2];
            }
        }
    };

    // check diagonals
    const checkDiagonals = (player) => {
        let diagCnt = 0;
        for (let i = 0; i < board.length; i++) {
            if (board[i][i] == player) diagCnt++;
        }
        if (diagCnt == 2 && (board[0][0] == '' || board[1][1] == '' || board[2][2] == '')) {
            let cell = [board[0][0], board[1][1], board[2][2]].findIndex(cell => cell == '');
            return [cell, cell];
        }
        diagCnt = 0;
        for (let i = 0; i < board.length; i++) {
            if (board[i][2 - i] == player) diagCnt++;
        }
        if (diagCnt == 2 && (board[0][2] == '' || board[1][1] == '' || board[2][0] == '')) {
            let cell = [board[0][2], board[1][1], board[2][0]].findIndex(cell => cell == '');
            return [cell, 2 - cell];
        }
    };

    // החזרת הלוח המעודכן
    // בדיקה אם יש ניצחון והחלה שלו אם כן
    let cellToWin = checkRows(symbol) || checkColumns(symbol) || checkDiagonals(symbol);
    if (cellToWin) {
        console.log({cellToWin})
        return cellToWin;
    }

    // בדיקה אם לשחקן השני יש 2 וחסימה שלו אם כן
    let otherPlayer = symbol == 'x' ? 'o' : 'x';
    let cellToBlock = checkRows(otherPlayer) ||
        checkColumns(otherPlayer) ||
        checkDiagonals(otherPlayer);
    if (cellToBlock) {
        console.log({cellToBlock})
        return cellToBlock;
    };

    // check rows for one
    const checkRowsForOne = (player) => {
        board.forEach((row, rowIndex) => {
            let rowCnt = 0;
            row.forEach(cell => cell == '' ? rowCnt++ : '')
            if (rowCnt == 2 && row.includes(player)) {
                let columnIndex = row.findIndex(i => i == '');
                return [rowIndex, columnIndex]
            }
        })
    };

    // check columns for one
    const checkColumnsForOne = (player) => {
        for (let i = 0; i < board[0].length; i++) {
            let colCnt = 0;
            board.forEach(row => row[i] == '' ? colCnt++ : '')
            if (colCnt == 2 && (board[0][i] == player || board[1][i] == player || board[2][i] == player)) {
                return [i, board[0][i] == '' ? 0 : board[1][i] == '' ? 1 : 2]
            }
        }
    };

    // check diagonals for one
    const checkDiagonalsForOne = (player) => {
        let diagCnt = 0;
        board.forEach((row, rowIndex) => row[rowIndex] == '' ? diagCnt++ : '')
        if (diagCnt == 2 && (board[0][0] == player || board[1][1] == player || board[2][2] == player)) {
            let cell = [board[0][0], board[1][1], board[2][2]].findIndex(cell => cell == '');
            return [cell, cell];
        }
        diagCnt = 0;
        board.forEach((row, rowIndex) => row[2 - rowIndex] == '' ? diagCnt++ : '');
        if (diagCnt == 2 && (board[0][2] == player || board[1][1] == player || board[2][0] == player)) {
            let cell = [board[0][2], board[1][1], board[2][0]].findIndex(cell => cell == '');
            return [cell, 2 - cell];
        }
    };

    // אם יש אחד והשורה שלו ריקה אז השלמה רנדומלית בשורה הזאת ספציפית
    let cellToPlay = checkRowsForOne(symbol) || checkColumnsForOne(symbol) || checkDiagonalsForOne(symbol);
    if (cellToPlay) {
        console.log({cellToPlay})
        return cellToPlay;
    }

    // אם אין אופציה אחרת שם רנדומלי
    let randomCell = [Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)];
    while (board[randomCell[0]][randomCell[1]] != '') {
        randomCell = [Math.floor(Math.random() * 3), Math.floor(Math.random() * 3)];
    }
    console.log({randomCell})
    return randomCell;
}
