import { useEffect, useState } from 'react'
import './App.css'
import { HashRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import { ThemeProvider } from './Hooks/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  )
}

export default App
