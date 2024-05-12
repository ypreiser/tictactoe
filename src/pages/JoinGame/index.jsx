import React, { useState } from 'react'
import styles from './styles.module.scss'
import Btn from '../../components/Btn'
import { useNavigate } from 'react-router-dom'
import Input from '../../components/Input';
import ChoosePlayerPage from '../ChoosePlayerPage';
import Loader from '../../components/Loader';

export default function JoinGame({ logo }) {

  const nav = useNavigate();

  const [create, setCreate] = useState(false);
  const [yourPlayer, setYourPlayer] = useState("");
  const [gameCode, setGameCode] = useState("649117");

  // קבלת קוד מהשרת והגדרת הסטייט שכאן


  return (
    <div className={styles.container}>
      <button className={styles.back} onClick={() => nav('/')}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M205 34.8c11.5 5.1 19 16.6 19 29.2v64H336c97.2 0 176 78.8 176 176c0 113.3-81.5 163.9-100.2 174.1c-2.5 1.4-5.3 1.9-8.1 1.9c-10.9 0-19.7-8.9-19.7-19.7c0-7.5 4.3-14.4 9.8-19.5c9.4-8.8 22.2-26.4 22.2-56.7c0-53-43-96-96-96H224v64c0 12.6-7.4 24.1-19 29.2s-25 3-34.4-5.4l-160-144C3.9 225.7 0 217.1 0 208s3.9-17.7 10.6-23.8l160-144c9.4-8.5 22.9-10.6 34.4-5.4z" /></svg>
      </button>
      {create ?
        <>
          {yourPlayer ?
            // לשים פה מספר מהשרת ולכתוב מחכה לשחקן
            <div className={styles.waiting}>
              <div className={styles.code}>
                <div className={styles.title}>your code</div>
                {gameCode.split("").map((num, index) => <div key={index} className={styles.num}>{num}</div>)}
              </div>
              <Loader />
              <h2>waiting  for  opponent</h2>
            </div> :
            <ChoosePlayerPage setYourPlayer={setYourPlayer} />}
        </>
        :
        <>
          <h1>Join to a game</h1>
          <Input />
          <Btn
            text={"join"}
            width={"35%"}
            size={"22px"}
          // onClick={() => nav('/solo')} 
          />
          <h1 className={styles.or}><span></span>OR<span></span></h1>
          <Btn
            text={"create a game"}
            width={"100%"}
            size={"28px"}
            onClick={() => setCreate(true)}
          />
        </>
      }
    </div>
  )
}
