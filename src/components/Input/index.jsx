import React, { useRef, useEffect } from 'react'
import styles from './styles.module.scss'

export default function Input({  code, setCode }) {


  return (
    <input type="number" value={code} onChange={(e)=>{setCode(e.target.value)}} placeholder='Enter game code' />
  )
}
