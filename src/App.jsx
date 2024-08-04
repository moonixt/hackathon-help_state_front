import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom'
import Homepage from './pages/HomePage'
import Navbar from './components/Navbar'
import Newreport from './pages/reports/NewReport'
import Register from './pages/users/Register'
import LoginPage from './pages/users/LoginPage'
import SideBar from './components/SideBar'
import GetReportsActive from './pages/reports/GetReportsActive'


function App() {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/new-report" element={<Newreport />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/active-reports" element={<GetReportsActive />} />



        </Routes>
        <Navbar />
        <SideBar/>
      </Router>
    </div>
  )
}

export default App
