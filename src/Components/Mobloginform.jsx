import React from 'react'
import Mobinoutcomp from './Mobinoutcomp'
import MobButton from './MobButton'
import { Link } from 'react-router-dom'
import Alertbox from './Alertbox'
function Mobloginform() {
  return (
    <div className='mob-form'>
        <h2 className='mob-form-line1'>Login</h2>
        <h3 className='mob-form-line2'>Login with your data that you entered during registration</h3>
        <Mobinoutcomp heading={'Email'} placeholder={'enter your email here'}/>
        <Mobinoutcomp heading={'Password'} placeholder={'enter your password here'}/>
        <input className='mob-log-check' type='checkbox' id='login-check'/>
        <label className='check-label' 
            htmlFor ="login-check" >
            Keep me Signed in ?
        </label>
        <Link to={''} style={{ textDecoration: 'none' }}>
            <MobButton className={'mob-btn-blue'} 
                buttonName={'Login'}
            />
        </Link>
        <Alertbox 
            className={'alert-web'}
            statement={'Fill your credentials'}
        />    
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
