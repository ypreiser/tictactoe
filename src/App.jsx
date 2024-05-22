import { Route, Routes } from 'react-router-dom'
import Menu from './pages/Menu'
import GamePage from './pages/GamePage'
import JoinGame from './pages/JoinGame'
import  './styles.scss'
import Board from './components/Board'
import Yellow from './components/Yellow'

function App() {

  const logo = "https://s3-alpha-sig.figma.com/img/fe9f/5a78/620af74ff1676949d91804882a8c5bab?Expires=1715558400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pS5GC~snUDt8LJ0~mUSAokSvquxFsxEG~hlK9BAiJ8XovERcbln38Xd1zOq-vOkHOe066z3Od1ZD-eOdiGBHXg5M9UbYX4CnFuO3BpLzRlY8mWw7eHAk2FYnVF43G3vhxZbWqxJlDq766VCWBMHC~K2FZK5~0vXBiEpyoPOjrfwXK0HOWsTXRGErCH8dkqmyYdYKFMB2GmqAbB93cywSoQ1uz9WEX4a8MmJOnGRAUz9QhKTJXGauuqP0~iCpDGcqxHtQDua9spyK0v75LVJtbm8W44T2ZfT94~PtsQog~YfoJy5rmHYWOpx5LiHaUKwbF2NcLFoEzlGd1igA16-buA__"

  return (
    <div>
      <Routes>
        <Route path='/'>
          <Route index element={<Menu logo={logo} />} />
          <Route path='solo' element={<GamePage />} />
          <Route path='testboard' element={<Board />} />
          <Route path='testplayer' element={<Yellow />} />
          <Route path='multyPlayer'>
            {/* <Route index element={<JoinGame />} /> */}
            <Route index element={<GamePage />} />
            <Route path='game' element={<GamePage />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
