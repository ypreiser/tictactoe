import React, { useState } from 'react'
import styles from './styles.module.scss'
import ChoosePlayerPage from '../ChoosePlayerPage'
import Board from '../../components/Board';
import Btn from '../../components/Btn';
import Yellow from '../../components/Yellow'
import { useNavigate } from 'react-router-dom';

export default function GamePage() {

  const nav = useNavigate();
  const [isSolo, setIsSolo] = useState(location.pathname == '/solo')
  const [yourPlayer, setYourPlayer] = useState("");
  const [winner, setWinner] = useState('');
  const [turnX, setTurnX] = useState(true);
  const [prevWins, setPrevWins] = useState({ x: 0, o: 0 })
  const [board, setBoard] = useState([
    //   0  1  2
    ['', '', ''], // 0
    ['', '', ''], // 1
    ['', '', '']  // 2
  ]);

  const playAgain = () => {
    setWinner('');
    setTurnX(true);
    setBoard([
  //   0  1  2
      ['', '', ''], // 0
      ['', '', ''], // 1
      ['', '', '']  // 2
    ]);
  }


  return (
    <div>
      {yourPlayer ?
        // game page comp
        <div className={styles.container}>
          <Yellow turnX={turnX} prevWins={prevWins} winner={winner} setWinner={setWinner} />

          <Board
            yourPlayer={yourPlayer} 
            isSolo={isSolo}
            setWinner={setWinner}
            turnX={turnX}
            setTurnX={setTurnX}
            board={board}
            setBoard={setBoard}
            winner={winner}
            setPrevWins={setPrevWins}
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
