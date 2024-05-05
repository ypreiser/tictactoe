import React from 'react'
import styles from './styles.module.scss'
import Btn from '../../components/Btn'
import { useNavigate } from 'react-router-dom'

export default function Menu({ logo }) {

  const nav = useNavigate();

  return (
    <div className={styles.menu}>
      <img src={logo} alt="logo" />
      <div className={styles.buttons}>
        <Btn
          text={"Play solo"}
          width={"100%"}
          size={"30px"}
          onClick={() => nav('/solo')} />
        <Btn
          text={"play with a friend"}
          width={"100%"}
          size={"30px"}
          onClick={() => nav('/multyPlayer')} />
      </div>
    </div>
  )
}
