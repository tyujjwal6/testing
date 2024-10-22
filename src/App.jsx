import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Contact from './Components/Contact'
import Login from './Components/Login'
import Logout from './Components/Logout'
import LocomotiveScroll from 'locomotive-scroll';
import Page1 from './Components/Page1'
import Banyan from './Components/Banyan'
import Menu from './Components/Menu'


const App = () => {
  return (
    <BrowserRouter>
    <Routes>

      <Route path='/' element= {<Login/>} />
      <Route path='/page1' element= {<Page1/>} />
      <Route path='/home' element= {<Home/>} />
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/about' element= {<About/>} />
      <Route path='/contact' element= {<Contact/>} />
      <Route path='/logout' element= {<Logout/>} />
      <Route path='/banyan' element= {<Banyan/>} />
      <Route path='/menu' element={<Menu/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
