import React from 'react'
import discordLogo from '../images/logo.svg'
import USAFlag from '../images/USA flag.png'
import { Footerdata, SocialMedia } from '../constants'
import { MdOutlineKeyboardArrowDown } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className='bg-[#23272a] text-white '>
      <div className='container  max-w-[1200px] mx-auto pt-24 flex flex-col gap-10 pb-14'>

        {/* section 1 */}
        <div className='flex md:gap-[100px] gap-[40px] flex-col md:flex-row px-5'>
          {/* left part */}
          <div className='flex flex-col gap-10 w-[100%] md:w-[20%] cursor-pointer'>
            <div className='flex items-center'>
              <img src={USAFlag} className='w-6 h-4 mr-2' alt={USAFlag} />
              <p>English, USA  </p>
              <MdOutlineKeyboardArrowDown className='ml-2' />
            </div>

            <div className='text-2xl flex gap-7'>
              {SocialMedia.map(icon => (
                <p className='cursor-pointer'>
                  {icon.icon}
                </p>
              ))}
            </div>
          </div>

          {/* right part */}
          <div className='md:w-[75%] flex justify-around flex-wrap'>
            {Footerdata.map(data => (
              <div key={data.id} className='w-[50%] md:w-fit'>
                <p className='text-[#5865f2] text-[16px] font-ggSans md:py-[10px] py-[15px]'>{data.title}</p>

                <ul className='text-white flex flex-col gap-[10px] font-ggSans leading-[24px] font-normal'>
                  {data.link.map(link => (
                    <li className='cursor-pointer hover:underline'>
                      {link}
                    </li>
                  ))}
                </ul>

              </div>
            ))}
          </div>
        </div>


        {/* section 2 - last row*/}
        <div className='flex border-t-2 border-[#5865f2] items-center justify-between pt-7 mx-5'>
          {/* Logo */}
          <div>
            <img src={discordLogo} alt={discordLogo} />
          </div>

          <div className="md:block hidden">
            <button
              className="bg-[#5865f2] px-4 py-2 rounded-full leading-[24px] text-[14px] font-semibold hover:bg-[#404eed]">
              Sign up
            </button>
          </div>


          {/* for mobile */}
          <div className="md:hidden block">
            <button
              className="bg-[#5865f2] px-4 py-2 rounded-full leading-[24px] text-[14px] font-semibold hover:bg-[#404eed]">
              Download
            </button>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer