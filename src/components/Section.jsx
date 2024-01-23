import React from 'react';

const Section = (props) => {
  return (
    <section className={`${props.extraStyle} w-full`} >

      <div className={`flex max-w-[1200px]  mx-auto items-center py-14 md:py-[120px] md:px-[40px] px-7 
              ${props.reverse ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'}  `}>

        <div className='md:w-[70%]'>
          <img src={props.image} alt={props.image} />
        </div>


        <div class="md:w-[50%]">
          <div class="w-[95%] xl:w-[60%] mx-auto">
            <h1 class="font-bold text-xl sm:text-[28px] md:text-[48px] font-ggSans leading-[24px]
                md:leading-[57.6px] mt-5 md:mt-0">
              {props.heading}
            </h1>
            <p class="font-ggSans text-[16px] sm:text-[20px] font-[400] mt-[24px]">
              {props.desc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Section;


// <section
//       className={`flex max-w-[1200px]  mx-auto items-center py-14 md:py-[120px] md:px-[40px] px-7
//       ${props.reverse ? 'flex-col md:flex-row-reverse' : 'flex-col md:flex-row'}  ${props.extraStyle}`}>

//       <div className='md:w-[70%]'>
//         <img src={props.image} alt="Section Image" />
//       </div>


//       <div class="md:w-[50%]">
//         <div class="w-[95%] xl:w-[60%] mx-auto">
//           <h1 class="font-bold text-xl sm:text-[28px] md:text-[48px] font-ggSans leading-[24px]
//                 md:leading-[57.6px] mt-5 md:mt-0">
//             {props.heading}
//           </h1>
//           <p class="font-ggSans text-[16px] sm:text-[20px] font-[400] mt-[24px]">
//             {props.desc}
//           </p>
//         </div>
//       </div>
//     </section>
