import React from 'react'
import Smalllogo from '../Smalllogo'
// import { AiFillHamburger } from "react-icons/ai";
// import { FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Mobilenav() {
  return (
    <div className='mob-nav'>
        <Smalllogo/>
        <div className='mob-nav-icon'>
            <GiHamburgerMenu size={35} />
        </div>
    </div>
  )
}

export default Mobilenav
