import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Contact from './Components/Contact'

const App = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    
      <Route path='/' element= {<Home/>} />
      <Route path='/navbar' element={<Navbar/>}/>
      <Route path='/about' element= {<About/>} />
      <Route path='/contact' element= {<Contact/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
