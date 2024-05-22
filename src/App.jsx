import { Route, Routes } from 'react-router-dom'
import Menu from './pages/Menu'
import GamePage from './pages/GamePage'
import JoinGame from './pages/JoinGame'
import  './styles.scss'
import Board from './components/Board'
import Yellow from './components/Yellow'

function App() {

  const logo = "./xologo.png"

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
