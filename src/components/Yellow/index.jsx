import React, { useState } from 'react'
import styles from './styles.module.scss'
import Player from '../Player'

export default function Yellow() {
    const [turnP1, setTurnP1] = useState(true)
    return (
        <div onClick={() => setTurnP1(p => !p)} className={styles.yellow}>
            <Player symble='x' turn={turnP1} />
            <Player symble='o' turn={!turnP1} />
        </div>
    )
}
