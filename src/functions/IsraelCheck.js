export default function israelCheck(rowIndex, columnIndex, newBoard) {
  return checkRow(newBoard, rowIndex) ||
    checkColumn(columnIndex, newBoard) ||
    checkDiagonal(rowIndex, columnIndex, newBoard);
};

// [[rowIndex, columnIndex], [rowIndex, columnIndex], [rowIndex, columnIndex]]

// בדיקה אופקית
const checkRow = (newBoard, rowIndex) => {
  let row = newBoard[rowIndex]
  if (row[0] == row[1] && row[0] == row[2]) {
    return [[rowIndex, 0], [rowIndex, 1], [rowIndex, 2]]
  }
};

// בדיקה אנכית
const checkColumn = (columnIndex, newBoard) => {
  if (newBoard[0][columnIndex] == newBoard[1][columnIndex] &&
    newBoard[0][columnIndex] == newBoard[2][columnIndex]) {
    return [[0, columnIndex], [1, columnIndex], [2, columnIndex]];
  }
};

// בדיקה אלכסונית
const checkDiagonal = (rowIndex, columnIndex, newBoard) => {
  const checkDiagonalL = () => {
    if (newBoard[0][0] === newBoard[1][1] &&
      newBoard[0][0] === newBoard[2][2]) {
      return [[0, 0], [1, 1], [2, 2]];
    }
  };

  const checkDiagonalR = () => {
    if (
      newBoard[0][2] === newBoard[1][1] &&
      newBoard[0][2] === newBoard[2][0]) {
      return [[2, 0], [1, 1], [0, 2]];
    }
  };

  if (rowIndex === 1 && columnIndex === 1) {
    return checkDiagonalL() || checkDiagonalR();
  } else if (rowIndex === columnIndex) {
    return checkDiagonalL();
  } else if (rowIndex + columnIndex === 2) {
    return checkDiagonalR();
  }
  return false;
};