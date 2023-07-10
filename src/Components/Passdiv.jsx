import React , {useState} from 'react'
import {AiOutlineEyeInvisible , AiOutlineEye} from 'react-icons/ai';
const Passdiv = (prop1 , prop2) => {
    const [text, setText] = useState(prop1.info);
    const [editing , setEditing] = useState(false);
    const[eyeClicked , setEyeClicked] = useState(false); 
  
    function erase(event){
          setEditing(true);
          setText('');
    }
  
    function typehere(event) {
      setText(event.target.textContent);
    }
    const changeEye = () => {
        setEyeClicked(!eyeClicked)
    }
    return (
      <div className='pass-box'>
        <div className='pass-box-1'
        contentEditable='true'
        onClick={erase}
        onInput={typehere}
        onBlur={() => setEditing(false)}
        >
            {/* if editing is true then show '' else show text*/}
            {editing ? '':text}
            
        </div>
        <div className='pass-icon' onClick={changeEye}>
            {eyeClicked?<AiOutlineEye/> : <AiOutlineEyeInvisible/>}
        </div>
      </div>
    );
  }

export default Passdiv
