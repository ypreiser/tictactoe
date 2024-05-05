import React from 'react'
import { useState } from 'react'
import styles from './styles.module.scss'
import IsraelCheck from '../../functions/IsraelCheck';

export default function Board() {

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
      let isWinner = IsraelCheck(rowIndex, columnIndex, newBoard);
      if (isWinner) {
        turnP1 ? setWinner("x") : setWinner("o");
      }

      // החלפת תור
      setTurnP1(!turnP1);
    }
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
