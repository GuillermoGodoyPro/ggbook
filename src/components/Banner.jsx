import React from 'react'
//images 
import Image from '../assets/backupimg/perfilcB.png'

// Icons
import { FaYoutube, FaDribbble, FaGithub } from 'react-icons/fa'
// Type animation
import Typewriter from 'typewriter-effect';
// Motion
import { motion } from 'framer-motion'
// variants
import { fadeIn } from '../variants'

//TODO verificar los divs

export const Banner = () => {
  return (
    <section className='min-h-[85vh] lg:min-h-[78vh] flex items-center' id='home'>
      <div className='container mx-auto' >
        <div className='flex flex-col gap-y-8 lg:flex-row lg:gap-x-12'>  
          {/*---- all div of text with animation ----*/}               
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1 
              variants={fadeIn('up', 0.3)} 
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='text-[55px] font-bold leading-[0.8] lg:text[110px]
            '>
                GUILLERMO <span>GODOY</span>
            </motion.h1>
            <motion.div 
              variants={fadeIn('up', 0.5)} 
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='mb-6 text-[36px] lg:text-[55px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='text-white mr-4'>I am a </span>
              <Typewriter
                
                wrapper='span'                
                options={{
                  strings: ['MERN Developer','Web Designer','System Analyst'],
                  autoStart: true,
                  delay:100,
                  deleteSpeed: 50,
                  loop: true,    
                  wrapperClassName: 'text-accent',             
                }}
               
              />                
             
            </motion.div>
            <motion.p 
              variants={fadeIn('up', 0.5)} 
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='mb-8 max-w-lg mx-auto lg:mx-0'
            >
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet libero ipsum, quo dignissimos dolorem molestiae reprehenderit suscipit reiciendis beatae enim!
            </motion.p>
            <motion.div
              variants={fadeIn('up', 1.2)} 
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0' 
            >
              <button className='btn btn-lg'>Contact me</button>
              <a href="https://github.com/GuillermoGodoyPro" className='text-gradient btn-link'>
                My GGBook
              </a>
            </motion.div>  
            {/* socials */}
            <motion.div 
              variants={fadeIn('up', 1.2)} 
              initial="hidden"
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <a href='https://github.com/GuillermoGodoyPro'>
                <FaYoutube />
              </a>
              <a href='https://github.com/GuillermoGodoyPro'>
                <FaGithub />
              </a>
              <a href='https://github.com/GuillermoGodoyPro'>
                <FaDribbble />
              </a>
            </motion.div>
                      
          </div>
          <motion.div 
            variants={fadeIn('down', 0.8)} 
            initial="hidden"
            whileInView={'show'}
            className='hidden lg:flex xl:flex 2xl:flex max-w-[21.5em] lg:max-w-[26em]'
          > {/* ------------- image ----------- */} {/* 2xl:flex xl:flex lg:flex  md:hidden sm:hidden xs:hidden */}
            <div>
              <img src={Image} alt="ggCBloob" />
              
            </div>
          </motion.div> 
        </div>  
      </div>
    </section>
  )
}
