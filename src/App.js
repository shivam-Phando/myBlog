import React from 'react'
import './App.css'
import {Routes,Route} from "react-router-dom"
import Header from './components/header/Header'
import Home from './pages/home/Home';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </div>
  )
}

export default App