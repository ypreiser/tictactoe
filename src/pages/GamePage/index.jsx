import React, { useState } from 'react'
import styles from './styles.module.scss'
import ChoosePlayerPage from '../ChoosePlayerPage'
import Board from '../../components/Board';
import Btn from '../../components/Btn';
import Yellow from '../../components/Yellow'

export default function GamePage() {

  const [yourPlayer, setYourPlayer] = useState("");
  const [winner, setWinner] = useState('');
  const [turnP1, setTurnP1] = useState(true);
  const [prevWins, setPrevWins] = useState({ x: 0, o: 0 })
  const [board, setBoard] = useState([
    //   0  1  2
    [0, 0, 0], // 0
    [0, 0, 0], // 1
    [0, 0, 0]  // 2
  ]);


  return (
    <div>
      {yourPlayer ?
        // game page comp
        <div className={styles.container}>
          <Yellow turnP1={turnP1} prevWins={prevWins} winner={winner} setWinner={setWinner} />

          <Board
            setWinner={setWinner}
            turnP1={turnP1}
            setTurnP1={setTurnP1}
            board={board}
            setBoard={setBoard}
            winner={winner}
            setPrevWins={setPrevWins}
          />

          {winner ?
            <div className={styles.buttons}>
              <Btn text='Play Again' size={"23px"} width={"210px"} />
              <Btn text='Back to main' size={"23px"} width={"210px"} />
            </div> :
            <Btn text='Back' />
          }
        </div>
        : <ChoosePlayerPage setYourPlayer={setYourPlayer} />}
    </div>
  )
}
