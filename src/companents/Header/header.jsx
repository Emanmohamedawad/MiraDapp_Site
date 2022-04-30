import React from 'react'
import './header.css';
import CTA from './CTA';
import Ka from '../../assets/kazuko2.png'
import Headersocial from './headersocial';



const Header = () => {
  return(
    <header>
    <div className='container header__container'>
      <h5>MIRA</h5>
      <h1>Kazuko NFt</h1>
      {/* <h5 className='text-light'>Head to Opensea to see the Collection.</h5>  */}
      {/* <h5>Address: {defaultAccount}</h5> */}
      <CTA/>
      <Headersocial />

      <div className='me'>
        <img src={Ka} alt="me"/>
      </div>

      <a href='#about' className='scroll__down'>Scroll Down</a>
    </div>
  </header>
  )
}

export default Header;
