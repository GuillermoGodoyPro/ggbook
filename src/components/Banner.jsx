import React from 'react'
//images 
import Image from '../assets/blob.svg'

export const Banner = () => {
  return (
    <section className='section' id='banner'>
      <div className='container mx-auto'>
        <div>
          {/* text */}
          <div>text</div>
          {/* image */}
          <div>
            <img src={Image} className='h-80' alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}
