import React from 'react'
import styles from './styles.module.scss'

export default function Btn({ text, size, width }) {
    return (
        <div style={{ width: width, fontSize: size }}>{text}</div>
    )
}
