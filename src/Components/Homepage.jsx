import React from 'react';
import Logo from './Logo';
import Loginform from './Loginform';
import Footer from './Footer';
import Btn from './Btn';
import Descbox from './Descbox';
import pizzajpg  from './images/pizza.jpg';
import cofjpg from './images/coffee.jpg';
import pastajpg from './images/Pasta.jpg'
import Smalllogo from '../Smalllogo';
import Mobloginform from './Mobloginform';

// import Mobilenav from './Mobilenav';
// import './App.scss';
function Homepage() {
  return (
  <>
    <div className='first-page'>
      <div className='left-login'>
        <Logo/>
        <Loginform/>
        <Footer 
            sentence={'Dont have an account ?'} component={<Btn 
            className='button-type-2'
            buttonName = {'Signup'}/>}
        />
      </div>
      <div className='right-com'>
        <div className='right-com-slider'>
            <Descbox
                className='slider'  
                url={pizzajpg} 
                description={"Pizza: A delicious symphony of flavors on a doughy canvas, capturing hearts worldwide."}
                amt={'$10.55'}
            />
            <Descbox  
                className='slider'
                url={pastajpg} 
                description={"Pasta, a beloved Italian dish, is made from durum wheat semolina and offers endless culinary possibilities with its versatile shapes and delectable taste."}
                amt={'$15.55'}
            />
            <Descbox  
                url={cofjpg} 
                description={"Rich and aromatic, coffee is a beloved beverage enjoyed worldwide."}
                amt={'$22.55'}
            />
            
        </div>
        {/* <Descbox  url={pizzajpg} description={"Pizza: A delicious symphony of flavors on a doughy canvas, capturing hearts worldwide."} amt={'$10.55'}/> */}
        <h3 className='foot-sen'>
            Order your favourite food now
        </h3>
      </div>
    </div>
    <div className='mob-login'>
      <Smalllogo/>
     <Mobloginform/>
    </div>
</>
  )
}

export default Homepage
