import React, { useState } from 'react'
import styles from './styles.module.scss'
import ChoosePlayerPage from '../ChoosePlayerPage'

export default function GamePage() {

  const [yourPlayer, setYourPlayer] = useState("");

  return (
    <div>
      {yourPlayer ?
      // game page comp
        <div>

        </div>
        : <ChoosePlayerPage setYourPlayer={setYourPlayer}/>}
    </div>
  )
}
