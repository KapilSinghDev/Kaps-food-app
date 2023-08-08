import React, { useState } from 'react'
import Mobinoutcomp from './Mobinoutcomp'
import MobButton from './MobButton'
import { Link } from 'react-router-dom'
import Alertbox from './Alertbox'
// import { useState } from 'react'
function Mobloginform() {

const [isEmpty, setIsEmpty] = useState(false);

const[getuser , setGetuser] = useState('')
const handleuserName = (newuser) => {
    setGetuser(newuser);
}
const[getpass , setGetpass] = useState('')

const handlePass = (newpass) =>{
    setGetpass(newpass);
}

return (
    <div className='mob-form'>
        <h2 className='mob-form-line1'>Login</h2>
        <h3 className='mob-form-line2'>Login with your data that you entered during registration</h3>
        <form >
            <Mobinoutcomp 
                heading={'Email'} 
                placeholder={'enter your email here'}
                value={getuser}
                onChange={
                    handleuserName
                }
                setIsEmpty={setIsEmpty}
            />
            <Mobinoutcomp 
                heading={'Password'} 
                placeholder={'enter your password here'}
                value={getpass}
                onChange={
                    handlePass
                }
                setIsEmpty={setIsEmpty}

            />
        </form>
        <input className='mob-log-check' type='checkbox' id='login-check'/>
        <label className='check-label' 
            htmlFor ="login-check" >
            Keep me Signed in ?
        </label>
        <Link to={'/Firstpage'} style={{ textDecoration: 'none' }}>
            <MobButton className={'mob-btn-blue'} 
                buttonName={'Login'}
            />
        </Link>
        {isEmpty &&(
            <Alertbox 
            className={'alert-web'}
            statement={'Fill your credentials'}
            />   
        )}    
        <div className='mob-form-bottom'>
            <h3>Dont have an account ?</h3>
            <Link to={''} style={{ textDecoration: 'none' }}>
                <MobButton className={'mob-btn'}
                    buttonName={'Signup'}
                />
            </Link>
        </div>
    </div>
  )
}

export default Mobloginform
