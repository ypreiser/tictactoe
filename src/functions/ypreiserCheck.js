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

const ypreiserCheck = (Number) => {
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
export default ypreiserCheck

