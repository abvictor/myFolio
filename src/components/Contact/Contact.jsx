import React, {useRef} from 'react'
import emailjs from 'emailjs-com'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'
import './contact.css'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('dev_account_victorab', 'template_2gr6sqb', form.current, 'nkVTOFtaf0YVVIRoO')

    e.target.reset();
      };
  
  return (
    <section id="contact">
     <h5>Get in Touch</h5>
     <h2>Contact Me</h2>

      <div className='contact__container'>
        <article className='items__block'>
        <div className='items'>
          <MdOutlineEmail/>
          <h4>E-mail</h4>
          <h5>victorab.dev@hotmail.com</h5>
          <a href="mailto:victorab.dev@hotmail.com">Send a message</a>
        </div>
        <div className='items'>
        <RiMessengerLine/>
        <h4>Messenger</h4>
        <h5>Victor Amaral</h5>
        <a href="https://m.me/victor.amaral.56">Send a message</a>
        </div>
        <div className='items'>
          <BsWhatsapp/>
          <h4>Whatsapp</h4>
          <h5>+55 16 99750-0356</h5>
          <a href="https://api.whatsapp.com/send?phone=5516997500356"> Send a message</a>
        </div>
        </article>
        
        <div className='form__div'>
        
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder='Your full name' required/>
          <input type="email" placeholder='Your e-mail'/>
          <textarea name="message" rows="7" required placeholder='Your message'></textarea>
          <button type='submit' className='btn btn-primary'>Send message</button>
        </form>
        </div>
        
      </div>        
  
    </section>
  )
}

export default Contact
