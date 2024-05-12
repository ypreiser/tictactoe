import React, { useState } from 'react'
import styles from './styles.module.scss'
import ChoosePlayerPage from '../ChoosePlayerPage'
import Board from '../../components/Board';
import Btn from '../../components/Btn';
import Yellow from '../../components/Yellow'
import { useNavigate } from 'react-router-dom';

export default function GamePage() {

  const nav = useNavigate();

  const [yourPlayer, setYourPlayer] = useState("");
  const [winner, setWinner] = useState('');
  const [turnP1, setTurnP1] = useState(true);
  const [board, setBoard] = useState([
    //   0  1  2
    [0, 0, 0], // 0
    [0, 0, 0], // 1
    [0, 0, 0]  // 2
  ]);

  const playAgain = () => {
    setWinner('');
    setTurnP1(true);
    setBoard([
      //   0  1  2
      [0, 0, 0], // 0
      [0, 0, 0], // 1
      [0, 0, 0]  // 2
    ]);
  }
  
  return (
    <div>
      {yourPlayer ?
        // game page comp
        <div className={styles.container}>
          <Yellow turnP1={turnP1} />

          <Board
            setWinner={setWinner}
            turnP1={turnP1}
            setTurnP1={setTurnP1}
            board={board}
            setBoard={setBoard}
            winner={winner}
          />

          {winner ?
            <div className={winner ? `${styles.buttons} ${styles.winner}` : styles.buttons}>
              <Btn text='Play Again' size={"23px"} width={"210px"} onClick={playAgain} key='playAgain' />
              <Btn text='Back to main' size={"23px"} width={"210px"} onClick={() => nav('/')} key='backToMain' />
            </div> :
            <div className={styles.buttons}>
              <Btn text='Back' size={"23px"} width={"210px"} onClick={() => nav('/')} key='back' />
            </div>
          }
        </div>
        : <ChoosePlayerPage setYourPlayer={setYourPlayer} />}
    </div>
  )
}
