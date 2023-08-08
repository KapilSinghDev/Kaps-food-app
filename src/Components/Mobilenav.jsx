import React,{useState} from 'react'
import Smalllogo from '../Smalllogo'
// import { AiFillHamburger } from "react-icons/ai";
// import { FaHamburger } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

function Mobilenav() {
  const [mobmenu , setMobmenu] = useState(false);

  const handleMobmenu = () => {
    setMobmenu(!mobmenu);
  }
  return (
    <>
      <div className='mob-nav'>
          <Smalllogo/>
          {/* make the profile box here */}
          <div>
            <div className='mob-nav-icon'>
              <GiHamburgerMenu size={35} onClick={handleMobmenu}/>
            </div>  
          </div>
      </div>

      {
        mobmenu && (
        <div className='mob-menu-box'>
            <ul>
              <li>Restraunts</li>
              <li>Orders</li>
              <li>Deals</li>
            </ul>
        </div>
      )}

    </>
  )
}

export default Mobilenav
