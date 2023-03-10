import React from 'react'

// motion
import {motion} from 'framer-motion'
// variant 
import { fadeIn } from '../variants' 

//img
import Img1 from '../assets/portfolio-img1.png'
import Img2 from '../assets/portfolio-img2.png'
import Img3 from '../assets/portfolio-img3.png'

export const Work = () => {
  return (
    <section className='section' id='work'>
      <div className='container mx-auto '>
        <div className='flex flex-col lg:flex-row gap-x-10 items-center'>
          <motion.div 
            variants={fadeIn('right', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3}}  
            className='flex-1 flex flex-col gap-y-10 lg:mb-0'
          >
            {/* text */}
            <div>
              <h2 className='h2 leading-tigh text-accent xl:mt-14'>
                My Latest <br/>
                Work.
              </h2>
              <p className='max-w-sm mb-8'>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A recusandae, nulla saepe explicabo cupiditate rerum consectetur accusamus ipsum sint molestiae?
              </p>
              <button className='btn btn-sm'>View all projects</button>
            </div>
              {/* image */}
            <div className='group relative overflow-hidden border-2 mb-10 border-white/50 rounded-xl'>        
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 '>
              </div>
              {/* img */}
              <img src={Img1} alt="" className='group-hover:scale-125 transition-all duration-500'/>
              {/* pretittle */}
              <div className='absolute left-12 -bottom-full group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title */}
              <div  className='absolute left-12 -bottom-full group-hover:bottom-16 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white '>Project Title</span>
              </div>
            </div>

          </motion.div>
          <motion.div 
            variants={fadeIn('left', 0.2)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3}}  
            className='flex-1 flex flex-col gap-y-10'
          >
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>        
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 '>
              </div>
              {/* img */}
              <img src={Img2} alt="" className='group-hover:scale-125 transition-all duration-500'/>
              {/* pretittle */}
              <div className='absolute left-12 -bottom-full group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title */}
              <div  className='absolute left-12 -bottom-full group-hover:bottom-16 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white '>Project Title</span>
              </div>
            </div>
            {/* image */}
            <div className='group relative overflow-hidden border-2 border-white/50 rounded-xl'>        
              {/* overlay */}
              <div className='group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300 '>
              </div>
              {/* img */}
              <img src={Img3} alt="" className='group-hover:scale-125 transition-all duration-500'/>
              {/* pretittle */}
              <div className='absolute left-12 -bottom-full group-hover:bottom-24 transition-all duration-500 z-50'>
                <span className='text-gradient'>UI/UX Design</span>
              </div>
              {/* title */}
              <div  className='absolute left-12 -bottom-full group-hover:bottom-16 transition-all duration-700 z-50'>
                <span className='text-3x1 text-white '>Project Title</span>
              </div>
            </div>
          
          </motion.div>
        </div>
      </div>
    </section>
  )
}
 