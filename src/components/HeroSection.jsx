import React from 'react'
import { BsDownload } from 'react-icons/bs'


import Image0 from '../images/Image0.svg'
import Image1 from '../images/Image1.svg'
import Image2 from '../images/Image2.svg'

const HeroSection = () => {
  return (
    <section className='bg-[#404EED] relative w-full'>

      <img src={Image0} className="hidden md:block absolute z-10 bottom-0 top-auto scale-x-125 " alt="Image0" />
      <img src={Image1} className="hidden md:block absolute z-10 bottom-0 -right-[22%]" alt="Image1" />
      <img src={Image2} className="hidden md:block absolute z-10 bottom-0 -left-[25%]" alt="Image2" />

      <div className="flex flex-col text-[#fff] mx-auto container max-w-[1260px] md:px-0  md:max-w-[1100px] 
              xl:h-[555px] pt-[56px] px-[24px] md:py-[125px] md:items-center   ">

        <h1 className={`font-['GintoNord'] font-black text-left md:text-center text-[24px] md:text-[56px] z-20`}>
          IMAGINE A PLACE...
        </h1>

        <p className='font-normal text-left md:text-center text-[16px] md:text-[20px] leading-[26px] md:leading-[32.5px] 
            font-ggSans w-[90%] md:w-[70%] xl:w-[90%] z-20 md:self-center mt-10'>
          ...where you can belong to a school club, a gaming group, or a worldwide art community.
          Where just you and a handful of friends can spend time together.
          A place that makes it easy to talk every day and hang out more often.
        </p>

        <div className='flex z-20 font-semibold '>
          <button className='hidden md:flex mt-6 mr-6 py-4 px-8 items-center gap-3 bg-white text-black rounded-full
             hover:text-[#404EED] hover:shadow-xl outline-none border-none duration-300 '>
            <BsDownload size={18} />
            Download for Windows
          </button>

          <button className='hidden md:flex mt-6 py-4 px-8 bg-[#23272a] hover:bg-[#2b2f31ce] text-white rounded-full hover:shadow-xl 
                 outline-none border-none duration-300'>
            Open Discord in your browser
          </button>
        </div>


        {/* for mobile */}
        <button className='flex md:hidden mt-6 mb-8 py-4 px-6 items-center gap-2 bg-white text-black rounded-full
             hover:text-[#404EED] hover:shadow-xl outline-none border-none duration-300 font-semibold '>
          <BsDownload size={20} />
          Download from Google Play
        </button>
        <img src={Image2} className="block md:hidden ml-[-80px]" alt="" />

        <div className="hidden md:hidden mr-[-150px] mt-[-16%] justify-end">
          <img src={Image1} className="w-[70%]" alt="" />
        </div>


      </div>
    </section>
  )
}

export default HeroSection