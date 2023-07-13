import React from 'react'
import Footerlogo from './Footerlogo'
import { FaFacebook } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import FootCol from './FootCol'
function Pagefooter() {
  return (
    <>
    <div className='mob-foot'>

    </div>
    <div className='footer-sm'>
      <div className='footer-sm-lt'>
        <Footerlogo/>
        <div className='foot-soc-ic'>
            <FaFacebook className='ic-hov' style={{ color: 'lightblue' }}size={24}/>
            <FaTwitter className='ic-hov' style={{ color: 'lightblue' }} size={24}/>
            <FaLinkedin className='ic-hov' style={{ color: 'lightblue' }} size={24}/>
            <FaInstagram className='ic-hov' style={{ color: 'lightblue' }} size={24}/>
            <FaYoutube className='ic-hov' style={{ color: 'lightblue' }} size={24}/>
        </div>
        
      </div>
      
      <div className='footer-sm-rt'>
        <FootCol
            line1={'Work with us'}
            line2={"know About us"}
            line3={"Privacy Policy"}
            line4={"Licenses"}
        />
        <FootCol
            line1={'Getting Started'}
            line2={"Help Center"}
            line3={"Report a bug"}
            line4={"Contact us"}
        />
        <FootCol
            line1={'How it Works'}
            line2={"Guarantee"}
            line3={"Security"}
            line4={"Pricing"}
            />
      </div>
    </div>
  </>
  )
}

export default Pagefooter
