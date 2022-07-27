import React from 'react'
import {BiCheck} from 'react-icons/bi'
import './services.css'
const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Mobile Development</h3>
          </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>React Native Development</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Reliable Screens</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Hybrid Apps</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Scalable Mobile Applications</p>
              </li>    
            </ul>   
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>HTTP Requests</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Javascript Stacks</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>APIs Consuming</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Layout Fidelity</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Responsive Applications</p>
              </li>
              
            </ul>
            
        </article>
        <article className='service'>
          <div className='service__head'>
            <h3>UI/UX</h3>
          </div>
            <ul className='service__list'>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Simple Layouts Creation</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Good Design Practices</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>HCI Knowledge</p>
              </li>
              <li>
                <BiCheck className='service__list-icon' />
                <p>Figma</p>
              </li>              
            </ul>
            
        </article>
      </div>
    </section>
  )
}

export default Services