import React from 'react'
import styles from './styles.module.scss'

export default function Square({active = true, player, choosen}) {
  const symble = `${player}.svg`
  const graySymble = `gray${player}.svg`
  return (
    <div className={active? `${styles.active} ${styles.sqr}` : styles.sqr }>
      {player? <img 
      className={choosen ? styles.choosen : ''}
      src={active ? symble : graySymble} 
      alt={player}/> : null}
    </div>
  )
}
