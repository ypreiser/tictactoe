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
  const checkDiagonalL = () => {
    return (
      newBoard[0][0] === newBoard[1][1] &&
      newBoard[0][0] === newBoard[2][2] &&
      newBoard[0][0] !== 0
    );
  };

  const checkDiagonalR = () => {
    return (
      newBoard[0][2] === newBoard[1][1] &&
      newBoard[0][2] === newBoard[2][0] &&
      newBoard[0][2] !== 0
    );
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