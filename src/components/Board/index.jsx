import React from 'react'
import { useState } from 'react'
import styles from './styles.module.scss'
import israelCheck from '../../functions/IsraelCheck';
import Square from '../Square';

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

      let isWinner = israelCheck(rowIndex, columnIndex, newBoard);
      if (isWinner) {
        turnP1 ? setWinner("x") : setWinner("o");
      }

      setTurnP1(!turnP1);
    }
  }

  return (
    <div className={styles.board}>
      <div className={styles.grid}>
        {board.map((row, rowIndex) => (
          row.map((cell, columnIndex) => (
            <div className={styles.cell} key={`${rowIndex}-${columnIndex}`} onClick={() => handleClick(rowIndex, columnIndex)}>
              <Square player={cell}/>
            </div>
          ))
        ))}
      </div>
      {winner && <div>{winner} win!</div>}
    </div>
  )
}
