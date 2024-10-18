import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-evenly  p-8 bg-blue-300
      '>
        <Link to={'/'}><p>Home</p></Link>
        <Link to={'/about'}><p>About</p></Link>
        <Link to={'/contact'}><p>Contact us</p></Link>
      </nav>
    </div>
  )
}

export default Navbar
