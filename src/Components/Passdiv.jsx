import React , {useState} from 'react'
import {AiOutlineEyeInvisible , AiOutlineEye} from 'react-icons/ai';
const Passdiv = (props) => {
    const[pwd , setPwd] = useState("");
    //  function to store what ever is typed in 
    const collectPassword = (event) => {
      if(event.key === 'Enter'){
        setPwd(event.target.value);
        console.log(pwd);
        console.log("the length of the password = ", pwd.length)
      }
      
    }
    let status;
    const[eyeClicked , setEyeClicked] = useState(false); 
    const changeEye = () => {
        setEyeClicked(!eyeClicked) 
        status = eyeClicked ? 'idle' : 'active'
        console.log(status)
    }

    
    return (
      <div className='pass-box'>
        <input className='pass-box-1' 
          type={eyeClicked ? 'text':'password'}
          placeholder={'enter your password'}
          // value={(pwd)}
          onKeyDown={collectPassword}
        />    
        <div className='pass-icon' onClick={changeEye}>
            {eyeClicked?<AiOutlineEye/> : <AiOutlineEyeInvisible/>}
            
        </div>
      </div>
    );
  }

export default Passdiv
