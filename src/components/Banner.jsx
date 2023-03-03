import React from 'react'
//images 
import Image from '../assets/backupimg/perfilcB.png'

// Icons
import { FaYoutube, FaDribbble, FaGithub } from 'react-icons/fa'
// Type animation
import { TypeAnimation } from 'react-type-animation'
// Motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'

//TODO verificar los divs

export const Banner = () => {
  return (
    <section className='section' id='banner'>
      <div className='container mx-auto' >
        <div className='flex flex-col gap-y-8 lg:flex-row'>  
          {/*---- all div of text with animation ----*/}               
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <h1 className='text-[55px] font-bold leading-[0.8] lg:text[110px]'>
              GODOY <span >GUILLERMO</span>
            </h1>
            <div className='mb-6 text-[36px] lg:text-[60px] font-secondary font-semibold uppercase leading-[1]'>
              <span className='text-white mr-4'>I am a </span>
              <TypeAnimation sequence={[
                'MERN Developer',
                2000,
                'Web Designer',
                2000,
                'System Analyst',
                2000,
              ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
            </div>
            <p className='mb-8 max-w-lg mx-auto lg:mx-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum in accusantium atque omnis tempore fuga suscipit error qui iusto sit.</p>
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg'>Contact me</button>
              <a href="https://github.com/GuillermoGodoyPro" className='text-gradient btn-link'>
                My GGBook
              </a>
            </div>  
            {/* socials */}
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='https://github.com/GuillermoGodoyPro'>
                <FaYoutube />
              </a>
              <a href='https://github.com/GuillermoGodoyPro'>
                <FaGithub />
              </a>
              <a href='https://github.com/GuillermoGodoyPro'>
                <FaDribbble />
              </a>
            </div>
                      
          </div>
          <div className='mx-auto '> {/* ------------- image ----------- */} {/* 2xl:flex xl:flex lg:flex  md:hidden sm:hidden xs:hidden */}
            <div>
              <img src={Image} alt="ggCBloob" />
              
            </div>
          </div> 
        </div>  
      </div>
    </section>
  )
}
