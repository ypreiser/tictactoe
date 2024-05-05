let board = [0, 0, 0, 0, 0, 0, 0, 0, 0]

const winningSets = [
    "012",
    "345",
    "678",
    "036",
    "147",
    "258",
    "048",
    "246"
]

const checkWin = (Number) => {
    let setsToCheck = []
    winningSets.forEach(element => {
        if (element.includes(Number)) {
            setsToCheck.push(element)
        }
    })
    setsToCheck.forEach(set => {
        if (board[set[0]] == board[set[1]] && board[set[0]] == board[set[2]]) return true
    })
}
export default checkWin

// const checkWin2 = (Number) => {
//     if (board[Number] == board[Number + 1] &&(board[Number] == board[Number + 2]) return true
//     || (board[Number] == board[Number + 3] == board[Number + 6]) return true
//     || (board[Number] == board[Number + 4] == board[Number + 8]) return true
//     || (board[Number] == board[Number - 1] == board[Number - 2]) return true
//      (board[Number] == board[Number - 4] == board[Number - 8]) return true
// }