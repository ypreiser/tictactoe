import React, { useState } from 'react'
import styles from './styles.module.scss'
import Player from '../Player'

export default function Yellow({ turnX, prevWins, winner, counter }) {
    return (
        <div className={styles.relative}>
            <div className={styles.yellow}>
                {
                    winner
                        ?
                        <Player symble={winner} prevWins={prevWins} winning={true} />
                        :
                        <>
                            <Player symble='x' turn={turnX && counter < 10} prevWins={prevWins}  winning={false}/>
                            <Player symble='o' turn={!turnX && counter < 10} prevWins={prevWins} winning={false} />
                        </>
                }
            </div>
            <div className={styles.after} />
        </div>
 
    )
}
