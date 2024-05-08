import React from 'react'
import styles from './styles.module.scss'

export default function Btn({ text, size, width, onClick, padding = "20px", active = true }) {
    return (
        <button
            className={active ? `${styles.btn} ${styles.active}` : styles.btn}
            style={{ width: width, fontSize: size, paddingRight: padding, paddingLeft: padding}}
            onClick={onClick}>
            {text}
        </button>
    )
}
