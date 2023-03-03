import React from 'react'
/* icon */
import { BsArrowUpRight } from 'react-icons/bs'
// motion
import {motion} from 'framer-motion'
// variant 
import { fadeIn } from '../variants'


// services data
const services = [
  {
    name: 'Graphic design',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, sit.',
    link: 'Learn More'
  },
  {
    name: 'Development',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, sit.',
    link: 'Learn More'
  },
  {
    name: 'Business Services',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat, sit.',
    link: 'Learn More'
  },
]

export const Services = () => {
  return (
    <section className='section' id='services'>
      <div className="container mx-auto">
        <div>
          {/* text */}
          <h2 className='h2'>What I Do.</h2>
          {/* services */}
          <div>services</div>
          
        </div>
      </div>
    </section>
  )
}
