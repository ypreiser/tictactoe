import React from 'react'
import styles from './styles.module.scss'



export default function Player({ wins = 0, name = "Player 1", symble="x" }) {
    const symbleImg = `${symble}.svg`
    return (
        <div className={styles.player}>

            <div className={styles.relative}>
                <img className={styles.avatar} src='ticavatar.png' alt="player1" />
                <div className={styles.absolute}>
                    <img className={styles.symble} src={symbleImg} alt={symble} />
                    <div className={styles.wins}>Wins: {wins}</div>
                </div>
            </div>


            <div className={styles.name}>{name}</div>
        </div>
    )
}
