import React from 'react'
import styles from './styles.module.scss'

export default function Btn({ text, size, width, onClick }) {
    return (
        <button
            className={styles.btn}
            style={{ width: width, fontSize: size }}
            onClick={onClick}>
            {text}
        </button>
    )
}
