import React from 'react'
import Logo from './Logo';
// import Logo from './Components/Logo'
import Textdiv from './Textdiv'
import Usernav from './Usernav';
import { AiOutlineSearch } from 'react-icons/ai';
import { AiFillShopping } from 'react-icons/ai';

import Navbtns from './Navbtns';
const Navbar = () => {
let count = 0;
  return (
    <div className='navbar'>
        <div className='nav-left'>
            <Logo/>
        </div>
        <div className='nav-mid'>
            <Textdiv info={'search'}/>
            <div className='nav-mid-2'>
                <AiOutlineSearch />
            </div>
        </div>
        <div className='nav-right'>
            <div className='nav-profile'>
                <div className='nav-or-box'>
                    <Navbtns buttonName = {'Orders'} icon={<AiFillShopping/>} count={count}/>
                </div>
                <Usernav url={''} username={'Kapil'}/>
            </div>
            <Navbtns buttonName={'Deals'}/>
            <Navbtns buttonName={'Restraunts'}/>
        </div>
    </div>
  )
}

export default Navbar
