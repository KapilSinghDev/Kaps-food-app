import React from 'react'
import Textdiv from './Textdiv'
import Passdiv from './Passdiv'
import Btn from './Btn'
const Loginform = () => {
  return (
    <>
      <div className='web-login-form'>
        <h1 className='form-header'>Login</h1>
        <h4 className='form-header-2'>Sign in with your data that you entered during registration</h4>
        <form className='form-details'>
          <p className='login-email'>Email</p>
          <Textdiv info={'name@example.com'}/>
          <p className='login-password'>Password</p>
          <Passdiv info={'password'} /> 
          <br/>
          <input className='checkBox' type='checkbox' id='logincheck' />
          <label className='check-it'>keep me signed in ?</label> 
          <Btn className='button-type-1' buttonName={'Login'}/>      
          <Btn className='button-type-2' buttonName={'Forgot password'}/>
        </form>
      </div>
    </>
  )
}
export default Loginform
