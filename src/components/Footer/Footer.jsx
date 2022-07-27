import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import { FaLinkedin } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Victor Amaral</a>
      <ul className='permalinks'>
          <li><a href="#"></a>Home</li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href="https://facebook.com/victor.amaral.56" ><FaFacebook /></a>
        <a href="https://www.instagram.com/victorab23/" ><FiInstagram/></a>
        <a href="https://www.linkedin.com/in/victorab/" ><FaLinkedin/></a>
      </div>
    </footer>
  )
}

export default Footer