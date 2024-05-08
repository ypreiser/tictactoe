import React, { useState } from 'react'
import styles from './styles.module.scss'
import ChoosePlayerPage from '../ChoosePlayerPage'
import Board from '../../components/Board';
import Btn from '../../components/Btn';

export default function GamePage() {

  const [yourPlayer, setYourPlayer] = useState("");
  const [winner, setWinner] = useState('');

  return (
    <div>
      {yourPlayer ?
        // game page comp
        <div className={styles.container}>
          <div>yellow Line</div>
          {winner && <div>{winner} win!</div>}

          <Board setWinner={setWinner} />

          {winner ?
            <div className={styles.buttons}>
              <Btn text='Play Again' size={"23px"} width={"210px"}/>
              <Btn text='Back to main' size={"23px"} width={"210px"}/>
            </div> :
            <Btn text='Back' />
          }
        </div>
        : <ChoosePlayerPage setYourPlayer={setYourPlayer} />}
    </div>
  )
}
