import React, { useRef, useEffect } from 'react'
import styles from './styles.module.scss'

export default function Input({  gameCode, setGameCode }) {


  return (
    <input type="number" value={gameCode} onChange={(e)=>{setGameCode(e.target.value)}} placeholder='Enter game code' />
  )
}
