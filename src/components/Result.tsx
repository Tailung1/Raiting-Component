import React from "react";
import { useEffect } from "react";

export default function Result({ selectedRaiting }) {
  useEffect(() => {
    document.body.style.backgroundColor = "#131518";
    document.body.style.display = "flex";
    document.body.style.justifyContent = "center";
    document.body.style.alignItems = "center";
    document.body.style.height = "100vh";

    return () => {
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className='bg-[#131518] w-[412px]'>
      <div className='py-[45px] pl-[32px] pr-[40px] flex flex-col gap-[20px] justify-center items-center rounded-[30px] bg-black-gradient'>
        <img
          className='w-[162px] h-[108px]'
          src='paymentIMAGE.svg'
          alt='paymentImage'
        />
        <p className='w-[193px] text-[15px] rounded-[22.5px] text-[#FC7614] py-[4px] px-[20px] bg-[#262E38] leading-[24px]'>
          You Selected {selectedRaiting} out of 5
        </p>

        <h1 className='text-white text-[28px] font-bold'>
          Thank you!
        </h1>
        <p className=' text-[#969FAD] text-[15px] font-bo leading-[24px]'>
          We appreciate you taking the time to give a rating. If you
          ever need more support, don’t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
