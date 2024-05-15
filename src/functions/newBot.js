export default function botPlayer(board = [], botSymbol) {
    console.log({botSymbol});
    const humanSymbol = botSymbol === 'x' ? 'o' : 'x';

    const checkRows = (playerSymbol, action) => {
        for (let rowIndex = 0; rowIndex < board.length; rowIndex++) {
            const row = board[rowIndex];
            const rowCnt = row.reduce((acc, val) => acc + (val === playerSymbol ? 1 : 0), 0);
            const result = rowCnt === 2 && row.includes('');
            console.log(`${action} row ${rowIndex}: ${result}`);
            if (result) {
                const columnIndex = row.findIndex(cell => cell === '');
                return [rowIndex, columnIndex];
            }
        }
    };

    const checkColumns = (playerSymbol, action) => {
        for (let i = 0; i < board.length; i++) {
            const colCnt = board.reduce((acc, row) => acc + (row[i] === playerSymbol ? 1 : 0), 0);
            const result = colCnt === 2 && (board[0][i] === '' || board[1][i] === '' || board[2][i] === '');
            console.log(`${action} column ${i}: ${result}`);
            if (result) {
                return [board[0][i] === '' ? 0 : board[1][i] === '' ? 1 : 2, i];
            }
        }
    };

    const checkDiagonals = (playerSymbol, action) => {
        const diagCnt1 = board.reduce((acc, row, i) => acc + (row[i] === playerSymbol ? 1 : 0), 0);
        const resultDiag1 = diagCnt1 === 2 && (board[0][0] === '' || board[1][1] === '' || board[2][2] === '');
        console.log(`${action} diagonal1: ${resultDiag1}`);
        if (resultDiag1) {
            const cell = [board[0][0], board[1][1], board[2][2]].findIndex(cell => cell === '');
            return [cell, cell];
        }

        const diagCnt2 = board.reduce((acc, row, i) => acc + (row[2 - i] === playerSymbol ? 1 : 0), 0);
        const resultDiag2 = diagCnt2 === 2 && (board[0][2] === '' || board[1][1] === '' || board[2][0] === '');
        console.log(`${action} diagonal2: ${resultDiag2}`);
        if (resultDiag2) {
            const cell = [board[0][2], board[1][1], board[2][0]].findIndex(cell => cell === '');
            return [cell, 2 - cell];
        }
    };

    let cellToWin = checkRows(botSymbol, 'check to win') || checkColumns(botSymbol, 'check to win') || checkDiagonals(botSymbol, 'check to win');
    if (cellToWin) {
        return cellToWin;
    }

    let cellToBlock = checkRows(humanSymbol, 'check to block') || checkColumns(humanSymbol, 'check to block') || checkDiagonals(humanSymbol, 'check to block');
    if (cellToBlock) {
        return cellToBlock;
    }

    // If there's no immediate winning move or blocking move, play randomly
    let emptyCells = [];
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === '') {
                emptyCells.push([i, j]);
            }
        }
    }

    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    console.log('random: true');
    return emptyCells[randomIndex];
}
