//Import Icons
import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsClipboardData, BsBriefcase , BsChatSquare} from 'react-icons/bs'
// Link
import {Link} from 'react-scroll'


export const Nav = () => {
  return (
    
      <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
        <div className='container mx-auto'>
          {/* Nav Inner */}
          <div className='w-full max-w-[20em] mx-auto h-[4em]  bg-black/20 backdrop-blur-2xl rounded-full
            px-10 flex justify-between text-2xl text-white/50 items-center
          '>
            <Link to='home' 
              activeClass='active' 
              smooth={true}
              /* offset={200} */
              spy={true}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            >
              <BiHomeAlt />
            </Link>          
            <Link to='services' 
              activeClass='active' 
              smooth={true}
              spy={true}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            >
              <BsClipboardData />
            </Link>
            <Link to='work' 
              activeClass='active' 
              smooth={true}
              spy={true}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            >
              <BsBriefcase />
            </Link>
            <Link to='contact' 
              activeClass='active' 
              smooth={true}
              spy={true}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            >
              <BsChatSquare />
            </Link>
            <Link to='about'
              activeClass='active' 
              smooth={true}
              spy={true}
              className='cursor-pointer w-[60px] h-[60px] flex items-center justify-center'
            >
              <BiUser />
            </Link>
          </div>

        </div>


      </nav>

  )
}
