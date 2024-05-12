import React from 'react'
import styles from './styles.module.scss'

export default function Input() {
  return (
    <input type="number" max={999999} onChange={e => console.log(e.target.value)}/>
  )
}
