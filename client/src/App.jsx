import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/homePages/home'
import HomeAdmin from './components/homePages/homeAdmin'
import HomeTeacher from './components/homePages/homeTeacher'
import HomeRector from './components/homePages/homeRector'
import HomeStudent from './components/homePages/homeStudent'
import Login from './components/loginPages/login'
import LoginStudent from './components/loginPages/loginStudent'
import Footer from './components/footerPages/footer'

function App() {
  return (
    <>
      <main className="contenido-principal">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/loginStudent' element={<LoginStudent />}></Route>
          <Route path='*' element={<div><h1>404 Not found</h1></div>}></Route>
          <Route path='/homeAdmin' element={<HomeAdmin />}></Route>
          <Route path='/homeTeacher' element={<HomeTeacher />}></Route>
          <Route path='/homeRector' element={<HomeRector />}></Route>
          <Route path='/homeStudent' element={<HomeStudent />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App