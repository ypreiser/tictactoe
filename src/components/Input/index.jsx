import React, { useRef, useEffect } from 'react'
import styles from './styles.module.scss'

export default function Input({  gameCode, setGameCode }) {

  useEffect(() => {
    if (gameCode.length > 6) {
      setGameCode(gameCode.slice(0, 6))
    }
  }, [gameCode])

  return (
    <input
    className={styles.input}
    type="number" 
    value={gameCode} 
    onChange={(e) =>  setGameCode(e.target.value) } 
    placeholder='Enter game gameCode' />
  )
}
