import React from 'react'

import './portfolio.css'
const Portfolio = () => {

  const favRepos = [
    {
      id: 1,
      title: 'Pricing component with toggle',
      image: "https://user-images.githubusercontent.com/43121767/161164644-11320172-d5da-4512-9530-cf356d3087b8.gif",
      github:'https://github.com/abvictor/pricing-component-with-toggle--FrontendMentor',
      demo: 'https://pricingcomponent.herokuapp.com/'
    },
    {
      id: 2,
      title: 'Github Finder',
      image: "https://user-images.githubusercontent.com/43121767/161606035-6d0bfcdb-2ace-488e-85eb-fa81419167c0.gif",
      github:'https://github.com/abvictor/DevFinder',
      demo: 'https://githubfinder-fem.herokuapp.com/'
    },
    {
      id: 3,
      title: 'Secret Word',
      image: "https://user-images.githubusercontent.com/43121767/173640349-0ea31259-2606-4441-aaf9-7df86b37dec9.gif",
      github:'https://github.com/abvictor/Secret-Word',
      demo: 'https://pricingcomponent.herokuapp.com/'
    },
   {
      id: 4,
      title: 'Miniblog React',
      image: "https://user-images.githubusercontent.com/43121767/181080546-66711606-7836-4924-a7b7-41ff77ef25e8.png",
      github:'https://github.com/abvictor/miniBlog-React',
      demo: 'https://miniblogreact.herokuapp.com/'
    },
    {
      id: 5,
      title: 'Coming soon',
      image: "https://media.istockphoto.com/vectors/geometric-banner-megaphone-with-coming-soon-bubble-loudspeaker-modern-vector-id1181378326?k=20&m=1181378326&s=612x612&w=0&h=FUstjwTm6ZOYSHkusiHSsPHUV7kSGDnmRF18QDy-AO8=",
      github:'https://github.com/abvictor?tab=repositories',
      demo: 'https://github.com/abvictor?tab=repositories'
    },
    {
      id: 6,
      title: 'Coming soon',
      image: "https://media.istockphoto.com/vectors/geometric-banner-megaphone-with-coming-soon-bubble-loudspeaker-modern-vector-id1181378326?k=20&m=1181378326&s=612x612&w=0&h=FUstjwTm6ZOYSHkusiHSsPHUV7kSGDnmRF18QDy-AO8=",
      github:'https://github.com/abvictor?tab=repositories',
      demo: 'https://github.com/abvictor?tab=repositories'
    }
  ]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {favRepos.map(({id,image,title,github,demo})=>(
           <article className='portfolio__item' key={id}>
           <div className='portfolio__item-image'>
           <img src={image} alt="" />
           </div>
               <h3>{title}</h3>
           <div className='portfolio__item-cta'>
           <a href={github} className='btn' target='_blank' rel="noreferrer">Github</a>
           <a href={demo} className='btn btn-primary' target='_blank' rel="noreferrer">Demo</a>
           </div>
          </article> 
        ))}
      </div>
    </section>
  )
}

export default Portfolio

