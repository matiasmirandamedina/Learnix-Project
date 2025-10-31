import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Login from './components/login'
import LoginStudent from './components/loginStudent'
import NavBar from './components/navBar'
import Footer from './components/footer'
import HomeAdmin from './components/homeAdmin'
import HomeTeacher from './components/homeTeacher'
import HomeRector from './components/homeRector'
import NavBarAdmin from './components/NavBarAdmin'
import NavBarTeacher from './components/navBarTeacher'
import NavBarRector from './components/navBarRector'

function App() {
  const role = localStorage.getItem("role");

  const renderNavBar = () => {
    switch (role) {
      case "admin":
        return <NavBarAdmin />;
      case "teacher":
        return <NavBarTeacher />;
      case "rector":
        return <NavBarRector />;
      default:
        return <NavBar />;
    }
  };

  return (
    <>
     {renderNavBar()}
      <main className="contenido-principal">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/loginStudent' element={<LoginStudent />}></Route>
          <Route path='*' element={<div><h1>404 Not found</h1></div>}></Route>
          <Route path='/homeAdmin' element={<HomeAdmin />}></Route>
          <Route path='/homeTeacher' element={<HomeTeacher />}></Route>
          <Route path='/homeRector' element={<HomeRector />}></Route>
        </Routes>
      </main>
      <Footer />
    </>
  )
}

export default App