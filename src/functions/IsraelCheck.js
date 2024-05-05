export default function israelCheck(rowIndex, columnIndex, newBoard) {
  if (checkRow(newBoard[rowIndex]) ||
    checkColumn(columnIndex, newBoard) ||
    checkDiagonal(rowIndex, columnIndex, newBoard)) {
    return true
  }
};

// בדיקה אופקית
const checkRow = (row = [0, 0, 0]) => {
  if (row[0] == row[1] && row[0] == row[2]) {
    return true;
  }
};

// בדיקה אנכית
const checkColumn = (columnIndex, newBoard) => {
  if (newBoard[0][columnIndex] == newBoard[1][columnIndex] &&
    newBoard[0][columnIndex] == newBoard[2][columnIndex]) {
    return true;
  }
};

// בדיקה אלכסונית
const checkDiagonal = (rowIndex, columnIndex, newBoard) => {

  const checkDiagonalTopR = () => {
    return (newBoard[0][0] == newBoard[1][1] && newBoard[0][0] == newBoard[2][2]);
  };

  const checkDiagonalTopL = () => {
    return (newBoard[0][2] == newBoard[1][1] && newBoard[0][0] == newBoard[2][0]);
  };

  if ((rowIndex == 0 && columnIndex == 0) || (rowIndex == 2 && columnIndex == 2)) {
    checkDiagonalTopR();
  } else if ((rowIndex == 2 && columnIndex == 0) || (rowIndex == 0 && columnIndex == 2)) {
    checkDiagonalTopL()
  } else if (rowIndex == 1 && columnIndex == 1) {
    checkDiagonalTopR();
    checkDiagonalTopL()
  }
}