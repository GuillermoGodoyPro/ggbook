import React from 'react'
// Images
import Logo from '../assets/logo.svg' 

export const Header = () => {
  return (
    <header className='py-8' id='home'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* Logo */}
          <div>
            <img src={Logo} alt="logoGG" />
          </div>
          {/* Button */}
          <button className='btn btn-sm'>Work with me</button>

        </div>
      </div>
    </header>
  )
}
