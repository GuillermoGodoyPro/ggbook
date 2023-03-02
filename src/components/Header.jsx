import React from 'react'
// Images
import Logo from '../assets/ada.png' 


export const Header = () => {
  return (
    <header className='py-8' id='home'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div>
            <img className='h-20' src={Logo} alt="VivaADA" />
          </div>
          {/* Button */}
          <button className='btn btn-sm'>Work with me</button>

        </div>
      </div>
    </header>
  )
}
