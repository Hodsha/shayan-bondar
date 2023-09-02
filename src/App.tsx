import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './pages/Navbar/Navbar'
import { ThemeProvider } from './Hooks/ThemeContext'
import TimeLine from './pages/Updates/TimeLine'
import Movie from './pages/Movies/Movie'
import Home from './pages/Home/Home'
import Game from './pages/Games/Game'


function App() {
  return (
    <ThemeProvider>
      <HashRouter>
          <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Movie' element={<Movie />} />
            <Route path='/Game' element={<Game />}/>
            <Route path='/TimeLine' element={<TimeLine />} />
          </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
