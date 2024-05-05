import { useState } from 'react'

function App() {

  const [turnP1, setTurnP1] = useState(true);
  const [winner, setWinner] = useState('');

  const [board, setBoard] = useState([
    //   0  1  2
    [0, 0, 0], // 0
    [0, 0, 0], // 1
    [0, 0, 0]  // 2
  ]);


  const handleClick = (rowIndex, columnIndex) => {
    if (board[rowIndex][columnIndex] === 0) {
      const newBoard = [...board];
      newBoard[rowIndex][columnIndex] = turnP1 ? "x" : "o";
      setBoard(newBoard);

      // בדיקה אם יש ניצחון, ואם כן הכרזה על המנצח
      let isWinner = check(rowIndex, columnIndex, newBoard);
      if (isWinner) {
        turnP1 ? setWinner("x") : setWinner("o");
      }

      // החלפת תור
      setTurnP1(!turnP1);
    }
  }

  const check = (rowIndex, columnIndex, newBoard) => {
    if (checkRow(newBoard[rowIndex], columnIndex) ||
      checkColumn(rowIndex, columnIndex, newBoard) ||
      checkDiagonal(rowIndex, columnIndex, newBoard)) {
      return true
    }
  };

  // בדיקה אופקית
  const checkRow = (row = [0, 0, 0], columnIndex = Number) => {
    if (columnIndex == 0) {
      if (row[columnIndex] == row[columnIndex + 1] && row[columnIndex] == row[columnIndex + 2]) {
        return true;
      }
    } else if (columnIndex == 1) {
      if (row[columnIndex] == row[columnIndex - 1] && row[columnIndex] == row[columnIndex + 1]) {
        return true;
      }
    } else if (columnIndex == 2) {
      if (row[columnIndex] == row[columnIndex - 1] && row[columnIndex] == row[columnIndex - 2]) {
        return true;
      }
    }
  };

  // בדיקה אנכית
  const checkColumn = (rowIndex, columnIndex, newBoard) => {
    if (rowIndex == 0) {
      if (newBoard[rowIndex][columnIndex] == newBoard[rowIndex + 1][columnIndex] &&
        newBoard[rowIndex][columnIndex] == newBoard[rowIndex + 2][columnIndex]) {
        return true;
      }
    } else if (rowIndex == 1) {
      if (newBoard[rowIndex][columnIndex] == newBoard[rowIndex - 1][columnIndex] &&
        newBoard[rowIndex][columnIndex] == newBoard[rowIndex + 1][columnIndex]) {
        return true;
      }
    } else if (rowIndex == 2) {
      if (newBoard[rowIndex][columnIndex] == newBoard[rowIndex - 1][columnIndex] &&
        newBoard[rowIndex][columnIndex] == newBoard[rowIndex - 2][columnIndex]) {
        return true;
      }
    }
  };

  // בדיקה אלכסונית
  const checkDiagonal = (rowIndex, columnIndex, newBoard) => {
    if (rowIndex == 0) {
      if (columnIndex == 0) {
        if (newBoard[rowIndex][columnIndex] == newBoard[rowIndex + 1][columnIndex + 1] &&
          newBoard[rowIndex][columnIndex] == newBoard[rowIndex + 2][columnIndex + 2]) {
          return true;
        }
      } else if (columnIndex == 2) {
        if (newBoard[rowIndex][columnIndex] == newBoard[rowIndex + 1][columnIndex - 1] &&
          newBoard[rowIndex][columnIndex] == newBoard[rowIndex + 2][columnIndex - 2]) {
          return true;
        }
      }
    } else if (rowIndex == 1) {
      if (columnIndex == 1) {
        if (newBoard[rowIndex][columnIndex] == newBoard[rowIndex - 1][columnIndex - 1] &&
          newBoard[rowIndex][columnIndex] == newBoard[rowIndex + 1][columnIndex + 1]) {
          return true;
        } if (newBoard[rowIndex][columnIndex] == newBoard[rowIndex - 1][columnIndex + 1] &&
          newBoard[rowIndex][columnIndex] == newBoard[rowIndex + 1][columnIndex - 1]) {
          return true;
        }
      }
    } else if (rowIndex == 2) {
      if (columnIndex == 0) {
        if (newBoard[rowIndex][columnIndex] == newBoard[rowIndex - 1][columnIndex + 1] &&
          newBoard[rowIndex][columnIndex] == newBoard[rowIndex - 2][columnIndex + 2]) {
          return true;
        }
      } else if (columnIndex == 2) {
        if (newBoard[rowIndex][columnIndex] == newBoard[rowIndex - 1][columnIndex - 1] &&
          newBoard[rowIndex][columnIndex] == newBoard[rowIndex - 2][columnIndex - 2]) {
          return true;
        }
      }
    };
  }

  return (
    <div>
      <table>
        <tbody>
          {board.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.map((cell, columnIndex) => (
                <td key={columnIndex} onClick={() => handleClick(rowIndex, columnIndex)}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {winner && <div>{winner} win!</div>}
    </div>
  )
}

export default App
