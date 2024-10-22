import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div>
      <nav className='flex justify-evenly  p-8 bg-blue-300
      '>
        <Link to={'/home'}><p className='text-xl font-semibold'>Home</p></Link>
        <Link to={'/about'}><p className='text-xl font-semibold'>About</p></Link>
        <Link to={'/contact'}><p className='text-xl font-semibold'>Contact us</p></Link>
        <Link to={'/logout'}><p className='text-xl font-semibold'>Log out</p></Link>
    
      </nav>
    </div>
  )
}

export default Navbar
