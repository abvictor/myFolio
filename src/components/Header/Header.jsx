import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import me from '../../assets/prof1.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
          <h5>Hello, I'm</h5>
          <h1>Victor Amaral</h1>
          <h5 className='text-light'>Fullstack Developer</h5> 
          <CTA />
          <HeaderSocials/>
          
          <div className='me'>
            <img src={me} alt="Victor's face profile pic" />
          </div>
          </div>
          <a href="#contact" className='scroll_down'>Scroll Down</a>
     
    </header>
  )
}

export default Header