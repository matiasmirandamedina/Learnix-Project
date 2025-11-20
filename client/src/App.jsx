import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/generalPages/home'
import HomeAdmin from './components/adminPages/homeAdmin'
import HomeTeacher from './components/teacherPages/homeTeacher'
import HomeRector from './components/rectorPages/homeRector'
import HomeStudent from './components/studentPages/homeStudent'
import Login from './components/generalPages/login'
import LoginStudent from './components/studentPages/loginStudent'
import Footer from './components/generalPages/footer'
import Register from './components/generalPages/register'
import Profile from './components/generalPages/profile'
import UsersAdmin from './components/adminPages/UsersAdmin'

function App() {
  return (
    <>
      <main className="contenido-principal">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/loginStudent' element={<LoginStudent />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/homeAdmin' element={<HomeAdmin />}></Route>
          <Route path='/usersAdmin' element={<UsersAdmin />}></Route>
          <Route path='/homeTeacher' element={<HomeTeacher />}></Route>
          <Route path='/homeRector' element={<HomeRector />}></Route>
          <Route path='/homeStudent' element={<HomeStudent />}></Route>
          <Route path='/profile' element={<Profile />}></Route>
          <Route path='*' element={<div><h1>404 Not found</h1></div>}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App