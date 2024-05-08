import React, { useState } from 'react'
import styles from './styles.module.scss'
import Player from '../Player'

export default function Yellow({ turnP1 }) {
    return (
        <div className={styles.relative}>
            <div className={styles.yellow}>
                <Player symble='x' turn={turnP1} />
                <Player symble='o' turn={!turnP1} />
            </div>
            <div className={styles.after} />
        </div>
    )
}
