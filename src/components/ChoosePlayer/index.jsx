import React, { useEffect, useState } from 'react'
import styles from './styles.module.scss'
import Square from '../Square'

export default function ChoosePlayer({ setYourPlayer }) {

  const [player, setPlayer] = useState('');

  const active = (data) => {
    if (player == '') {
      return true;
    } else if (player == "x" && data == "x") {
      return true;
    } else if (player == "o" && data == "o") {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div className={styles.choosePlayer}>
      <div onClick={() => setPlayer("o")}>
        <Square player={"o"} active={active("o")} choosen={player == "o"} />
      </div>
      <div onClick={() => setPlayer("x")}>
        <Square player={"x"} active={active("x")} choosen={player == "x"} />
      </div>
    </div>
  )
}
