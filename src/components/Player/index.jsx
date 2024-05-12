import React from 'react'
import styles from './styles.module.scss'



export default function Player({ prevWins, name = "", symble = "x", turn, winning }) {
    const symbleImg = `${symble}.svg`
    const avatar = `${symble}.avatar.png`
    if (!name) name = `Player ${symble}`
    return (
        <div className={winning ? styles.winning : styles.player}>

            <div className={styles.relative}>
                <img className={turn ? `${styles.avatar} ${styles.turn}` : styles.avatar} src={avatar} alt={name} />
                <div className={styles.absolute}>
                    <img className={styles.symble} src={symbleImg} alt={symble} />
                    <div className={styles.wins}>Wins: {prevWins[symble]}</div>
                </div>
            </div>


            <div className={turn ? `${styles.name} ${styles.turn}` : styles.name}>
                {winning ? name + ' WINS!!!' : name}
                </div>
        </div>
    )
}
