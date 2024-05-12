import React from 'react'
import styles from './styles.module.scss'

export default function Loader() {
    return (
        <div className={styles.container}>
            <div className={styles.loader}>
                <div className={styles.dot}></div>
            </div>
            <div className={styles.loader}>
                <div className={styles.dot}></div>
            </div>
            <div className={styles.loader}>
                <div className={styles.dot}></div>
            </div>
            <div className={styles.loader}>
                <div className={styles.dot}></div>
            </div>
            <div className={styles.loader}>
                <div className={styles.dot}></div>
            </div>
            <div className={styles.loader}>
                <div className={styles.dot}></div>
            </div>
        </div>
    )
}
