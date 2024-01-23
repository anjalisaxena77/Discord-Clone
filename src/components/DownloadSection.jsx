import React from 'react'
import section4Image from '../images/section4Image.svg'
import section5Image from '../images/section5Image.svg'
import { BsDownload } from 'react-icons/bs'


const DownloadSection = () => {
  return (
    <section className='bg-[#f6f6f6]'>
      <div className='flex flex-col container max-w-[1200px] mx-auto items-center px-5 py-14 md:py-32 '>

        <h1 class="font-extrabold font-['GintoNord'] text-[20px] md:text-[40px] leading-[19px] md:leading-[32px] text-left md:text-center text-[#23272a]">
          RELIABLE TECH FOR STAYING CLOSE
        </h1>

        <p className='md:text-center md:w-[83%] md:text-[20px] md:leading-[32.5px] text-[16px] leading-[26px] mt-[24px]'>
          Low-latency voice and video feels like you’re in the same room. Wave hello over video,
          watch friends stream their games, or gather up and have a drawing session with screen share.
        </p>



        <img src={section4Image} className='w-[100%] ' alt={section4Image}/>


        <div class="font-['ggSans'] font-bold relative w-[100%] flex flex-col items-center gap-[40px]">
          <img src={section5Image} class=" absolute top-0" alt={section5Image} />
          <div class="md:text-center pt-[30px] leading-[38px] text-[32px] ">
            Ready to start your journey?
          </div>

          <button className='hidden md:flex mt-6 mr-6 py-4 px-8 items-center gap-2 hover:shadow-xl text-white rounded-full
             bg-[#404EED] hover:bg-[#404eedd0] outline-none border-none font-semibold duration-300 text-xl'>
            <BsDownload />
            Download for Windows
          </button>
        </div>

        <div class="bg-[#404EED] md:hidden flex justify-center items-center mt-4
         text-white text-[20px] font-[500] font-['ggSans'] px-[32px] py-[16px] rounded-full">
          <i class="fa-solid fa-download mr-2"></i>
          <p>Download from Google Play</p>
        </div>

      </div>
    </section>
  )
}

export default DownloadSection