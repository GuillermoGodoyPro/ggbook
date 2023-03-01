//Import Icons
import {BiHomeAlt, BiUser} from 'react-icons/bi'
import {BsClipboardData, BsBriefcase, BsChatSquare} from 'react-icons/bs'
// Link
import {Link} from 'react-scroll'


export const Nav = () => {
  return (
    
      <nav className='fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50'>
        <div className='container mx-auto'>
          {/* Nav Inner */}
          <div className='w-full max-w-[28em] mx-auto h-[5.5em]  bg-black/20 backdrop-blur-2xl rounded-full '>
            <Link>
              <BiHomeAlt />
            </Link>
          </div>

        </div>


      </nav>

  )
}
