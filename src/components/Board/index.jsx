import React from 'react'
import { useState } from 'react'
import styles from './styles.module.scss'
import israelCheck from '../../functions/IsraelCheck';
import ypreiserCheck from '../../functions/ypreiserCheck';
import Square from '../Square';

export default function Board({ setWinner, turnP1, setTurnP1, board, setBoard }) {

  const [counter, setCounter] = useState(1);

  // const board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  // const check = ypreiserCheck
  const check = israelCheck
  const handleClick = (rowIndex, columnIndex) => {
    setCounter(counter => counter + 1);
    console.log(counter)
    if (board[rowIndex][columnIndex] === 0) {
      const newBoard = [...board];
      newBoard[rowIndex][columnIndex] = turnP1 ? "x" : "o";
      setBoard(newBoard);
      if (counter > 4) {

        let isWinner = check(rowIndex, columnIndex, newBoard);
        if (isWinner) {
          turnP1 ? setWinner("x") : setWinner("o");
          // alert(winner + " win!");
        }
      }

      setTurnP1(!turnP1);
    }
  }

  return (
    <div className={styles.board}>
      {board.map((row, rowIndex) => (
        row.map((cell, columnIndex) => (
          <div className={styles.cell} key={`${rowIndex}-${columnIndex}`} onClick={() => handleClick(rowIndex, columnIndex)}>
            <Square player={cell} />
          </div>
        ))
      ))}
    </div>
  )
}
