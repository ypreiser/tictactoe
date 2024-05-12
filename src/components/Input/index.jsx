import React, { useRef, useEffect } from 'react'
import styles from './styles.module.scss'

export default function Input({ code, setCode }) {

  useEffect(() => {
    if (code.length > 6) {
      setCode(code.slice(0, 6))
    }
  }, [code])

  return (
    <input
    className={styles.input}
    type="number" 
    value={code} 
    onChange={(e) => { setCode(e.target.value) }} 
    placeholder='Enter game code' />
  )
}
