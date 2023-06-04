import { useEffect, useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import { ThemeProvider } from './Hooks/ThemeContext'
import TimeLine from './components/Updates/TimeLine'
import Movie from './components/Movies/Movie'

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/Movie' element={<Movie />} /> */}
          <Route path='/TimeLine' element={<TimeLine />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
