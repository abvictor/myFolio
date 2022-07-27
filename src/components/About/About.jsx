import React from 'react'
import Me from '../../assets/prof2.png'
import { FaAward } from 'react-icons/fa'
import {TbSchool} from 'react-icons/tb'
import {VscFolderLibrary} from 'react-icons/vsc'
import './about.css'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="My profile photo" />
          </div>
        </div>
        <div className="about__content">
        <div className="about__cards">
          <article className='about__card'>
            <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>2+ Years in Personal Projects</small>
          </article>
          <article className='about__card'>
            <TbSchool className='about__icon' />
            <h5>Formation</h5>
            <small>Systems Analysis and Development student</small>
          </article>
          <article className='about__card'>
            <VscFolderLibrary className='about__icon' />
            <h5>Projects</h5>
            <small>20+ completed projects on GitHub</small>
          </article>
        </div>

        <p>
        Hello visitor, my name is Victor Amaral Bento, I'm 24 and I'm passionate about Web Development, and particularly the Front End.
The technologies I like to study the most are Javascript stacks.
React, React Native and NodeJS are part of my daily life as a student.
        </p>
        <a href="#contact" className='btn btn-primary'>Let's talk</a>
        </div>
      </div>
    </section>
  )
}

export default About