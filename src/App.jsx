import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Homepage from './pages/HomePage'
import Navbar from './components/Navbar'
import Newreport from './pages/reports/NewReport'
import Register from './pages/users/Register'
import LoginPage from './pages/users/LoginPage'
import SideBar from './components/SideBar'



function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/new-report" element={<Newreport />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />


        </Routes>
        <Navbar />
        <SideBar/>
      </Router>
    </div>
  )
}

export default App
