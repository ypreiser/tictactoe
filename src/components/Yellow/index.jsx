import React, { useState } from 'react'
import styles from './styles.module.scss'
import Player from '../Player'

export default function Yellow({ turnP1, prevWins, winner, setWinner }) {
    return (
        <div className={styles.relative} onClick={()=>setWinner('x')}>
            <div className={styles.yellow}>
                {
                    winner
                        ?
                        <Player symble={winner} prevWins={prevWins} winning={true} />
                        :
                        <>
                            <Player symble='x' turn={turnP1} prevWins={prevWins}  winning={false}/>
                            <Player symble='o' turn={!turnP1} prevWins={prevWins} winning={false} />
                        </>
                }
            </div>
            <div className={styles.after} />
        </div>

    )
}
