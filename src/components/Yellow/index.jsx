import React, { useState } from 'react'
import styles from './styles.module.scss'
import Player from '../Player'

export default function Yellow({ turnX, prevWins, winner, setWinner }) {
    return (
        <div className={styles.relative}>
            <div className={styles.yellow}>
                {
                    winner
                        ?
                        <Player symble={winner} prevWins={prevWins} winning={true} />
                        :
                        <>
                            <Player symble='x' turn={turnX} prevWins={prevWins}  winning={false}/>
                            <Player symble='o' turn={!turnX} prevWins={prevWins} winning={false} />
                        </>
                }
            </div>
            <div className={styles.after} />
        </div>

    )
}
