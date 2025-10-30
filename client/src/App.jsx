import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/login'
import LoginStudent from './components/loginStudent'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/login' element={<Login />}></Route>
        <Route path='/loginStudent' element={<LoginStudent />}></Route>
        <Route path='*' element={<div><h1>404 Not found</h1></div>}></Route>
      </Routes>
    </>
  )
}

export default App