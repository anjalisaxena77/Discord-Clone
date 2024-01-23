import React, { useState } from 'react'
import { NavLinks } from '../constants'
import discordLogo from '../images/logo.svg'



import { IoMdClose } from 'react-icons/io';
import { IoMenu } from 'react-icons/io5';


const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className='bg-[#404EED]'>
      <nav className='text-[#fff] flex justify-between items-center max-w-[1260px] w-full  mx-auto h-[80px] xl:px-0 px-[24px]'>

        {/* Logo */}
        <div>
          <img src={discordLogo} alt={discordLogo} />
        </div>

        <ul className='hidden md:flex  font-semibold text-[16px]'>
          {NavLinks.map(link => (
            <li key={link.id} className='hover:cursor-pointer hover:underline mx-[10px] p-[10px] '>
              {link.link}
            </li>
          ))}
        </ul>


        <div class="hidden md:flex">
          <a href="/">
            <button class="bg-[#fff] px-4 self-center p-2 text-[#2c2f33] rounded-full font-medium text-[14px] hover:text-[#404EED]">
              Login
            </button>
          </a>
        </div>


        {/* for mobile */}
        <div className='md:hidden flex items-center justify-between'>
          <button
            className="bg-white px-4 py-2 rounded-full leading-[24px] text-[14px] font-semibold text-[#404eed] mr-4">
            Login
          </button>


          <div onClick={() => setToggleMenu(prev => !prev)}
            className='xs:ml-4 cursor-pointer'>
            {
              toggleMenu
                ? <IoMdClose color="#fff" size={40} />
                : <IoMenu color="#fff" size={40} />
            }
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar