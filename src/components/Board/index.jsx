import React, { useEffect } from 'react'
import { useState } from 'react'
import styles from './styles.module.scss'
import israelCheck from '../../functions/IsraelCheck';
import ypreiserCheck from '../../functions/ypreiserCheck';
import Square from '../Square';
// import botPlayer from '../../functions/botPlayer';
import botPlayer from '../../functions/newBot';
export default function Board({
  setWinner,
  winner,
  turnX,
  setTurnX,
  board,
  setBoard,
  setPrevWins,
  isSolo,
  yourPlayer,
  counter,
  setCounter,
}) {

  const [winRow, setWinRow] = useState([]);
  let botSymbol = yourPlayer == "x" ? "o" : "x";
  // console.log({ botSymbol });

  useEffect(() => {
    // console.log({ counter })
    if (
      !winner && isSolo && counter < 10 &&
      (yourPlayer == "x" && !turnX || yourPlayer == "o" && turnX)) {
      setCounter(counter => counter + 1);

      setTimeout(() => {
        let botCell = botPlayer(board, botSymbol);
        const newBoard = [...board];
        newBoard[botCell[0]][botCell[1]] = turnX ? "x" : "o";
        setBoard(newBoard);
        if (counter > 4) {

          let winnerArray = check(botCell[0], botCell[1], newBoard);
          console.log({ winnerArray });
          if (winnerArray) {
            setCounter(1);
            setWinRow(winnerArray);
            turnX ? setWinner("x") : setWinner("o");
            turnX ? setPrevWins(prevWins => ({ ...prevWins, x: prevWins.x + 1 })) : setPrevWins(prevWins => ({ ...prevWins, o: prevWins.o + 1 }));
          }
        }
        setTurnX(!turnX);
      }, 500);
    }
  }, [turnX, winner])


  // const board = [0, 0, 0, 0, 0, 0, 0, 0, 0]
  // const check = ypreiserCheck
  const check = israelCheck
  const handleClick = (rowIndex, columnIndex) => {
    if ((!winner && !isSolo && counter < 10) || ((yourPlayer == "x" && turnX) || (yourPlayer == "o" && !turnX))) {

      setCounter(counter => counter + 1);
      // console.log(counter)
      if (board[rowIndex][columnIndex] === '') {
        const newBoard = [...board];
        newBoard[rowIndex][columnIndex] = turnX ? "x" : "o";
        setBoard(newBoard);
        if (counter > 4) {

          let winnerArray = check(rowIndex, columnIndex, newBoard);
          if (winnerArray) {
            setCounter(1);
            setWinRow(winnerArray);
            turnX ? setWinner("x") : setWinner("o");
            turnX ? setPrevWins(prevWins => ({ ...prevWins, x: prevWins.x + 1 })) : setPrevWins(prevWins => ({ ...prevWins, o: prevWins.o + 1 }));
          }
        }
        setTurnX(!turnX);
      }
    }
  }


  const active = (RI, CI) => {
    if (winner) {
      return winRow.some(cell => JSON.stringify(cell) === JSON.stringify([RI, CI]));
    } else if (counter === 10) {
      return false;
    } else {
      return true;
    }
  }
  // console.log({ counter })

  return (

    <div className={styles.board}>
      {board.map((row, rowIndex) => (
        row.map((cell, columnIndex) => (
          <div
            className={styles.cell}
            key={`${rowIndex}-${columnIndex}`}
            onClick={() => handleClick(rowIndex, columnIndex)}>
            <Square
              player={cell}
              active={active(rowIndex, columnIndex)}
              choosen={winner && active(rowIndex, columnIndex)} />
          </div>
        ))
      ))}
       <div className={(counter == 10 && !winner)? `${styles.draw} ${styles.show}`: `${styles.draw}`}>draw!</div>
    </div>
  )
}

