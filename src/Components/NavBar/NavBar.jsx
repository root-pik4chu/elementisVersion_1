import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import { RxHamburgerMenu } from "react-icons/rx";
const NavBar = () => {
  return (
    <div>
      
      <div className="z-20 fixed top-0 left-1/2 transform -translate-x-1/2  w-full flex gap-2  max-w-screen-2xl mx-auto h-[15vh] items-center justify-between">
      <div className="flex gap-5 w-[33.3%] justify-start text-2xl">
         <h1>ELEMENTIS</h1>
         </div>
         <div className="flex gap-5 w-[33.3%] text-xl justify-center">
         <Link to="/">
            home
         </Link>
         <Link to="/About">
            about
         </Link>
         <Link to="/Contact">
            Contact
         </Link>
         </div>
         
         <div className="flex gap-10 w-[33.3%]  justify-end items-center ">
         <Button name="joinUs"/>
         <RxHamburgerMenu className='text-4xl'/>
         </div>
      </div>

    </div>
  )
}

export default NavBar
