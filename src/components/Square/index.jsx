import React from 'react'
import styles from './styles.module.scss'

export default function Square({active = true, player}) {
  const symble = `${player}.svg`
  return (
    <div className={active? `${styles.active} ${styles.sqr}` : styles.sqr }>
      {player? <img src={symble} alt={player}/> : null}
    </div>
  )
}
