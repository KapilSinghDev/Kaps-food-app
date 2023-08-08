import React , {useState}from 'react'
import Textdiv from './Textdiv'
import Passdiv from './Passdiv'
import Btn from './Btn'
import {Link} from 'react-router-dom'
import Alertbox from './Alertbox'
// import Alert from '@mui/material/Alert'

const Loginform = () => {
  const [isAlert , setAlert] = useState(false)
  const [email , setEmail] = useState('')
  const [pass , setPass] = useState('')
  console.log(isAlert)
  
  const handleLogin = (e) => {
    e.preventDefault();

    if(email.trim() === '' || pass.trim() === ''){
      setAlert(true);
    }
    else{
      setAlert(false);
    }
  };
  // console.log(isAlert)
  return (
    <>
      <div className='web-login-form'>
        <h1 className='form-header'>Login</h1>
        <h4 className='form-header-2'>Sign in with your data that you entered during registration</h4>
        <form className='form-details' onSubmit={handleLogin}>
          <p className='login-email'>Email</p>
          <Textdiv info={'name@example.com'}
           placeholder={'name@example.com'}
           value={email}
           onChange = { (e) => setEmail(e.target.value) }
           />
          <p className='login-password'>Password</p>
          <Passdiv
            value = {pass} 
            onChange = { (e) => setPass(e.target.value)}
           /> 
          <br/>
          <input className='checkBox' type='checkbox' id='logincheck' />
          <label className='check-it'>keep me signed in ?</label> 
          <Link to={'/Firstpage'} style={{textDecoration:'none'}} >
            <Btn 
              className='button-type-1'
              buttonName={'Login'} 
            />      
          </Link>
          <Btn 
            className='button-type-2' 
            buttonName={'Forgot password'}
          />
          {isAlert && (
            <Alertbox 
              className={'alert-web'}
              statement={'Fill your credentials'}
            />
          )}
        </form>
        
      </div>
    </>
  )
}
export default Loginform
