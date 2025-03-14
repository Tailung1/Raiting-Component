import { useEffect } from "react";

export default function Rating({
  selectedRaiting,
  setSelectedRaiting,
  setIsSelected,
}) {
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

  const raiting = [1, 2, 3, 4, 5];

  return (
    <div className='w-[412px] py-[32px] pl-[32px] pr-[39px] rounded-[30px] bg-black-gradient flex flex-col items-start gap-[25px]'>
      <div className='w-[48px] h-[48px] bg-[#262E38] flex justify-center rounded-[50%]'>
        <img src='Star.svg' alt='Star' />
      </div>
      <h1 className=' text-white text-[28px] font-bold'>
        How did we do?
      </h1>
      <p className='text-left text-[#969FAD] text-[16px] font-normal leading-[24px]'>
        Please let us know how we did with your support request. All
        feedback is appreciated to help us improve our offering!
      </p>

      <div className='flex gap-[21px]'>
        {raiting.map((num) => (
          <button
            className=' focus:bg-[#FC7614] focus:text-[#FFF] hover:bg-[#7C8798] hover:text-[#FFF] rounded-[50%] bg-[#262E38] text-[#7C8798] py-[14px] px-[22px] text-[16px] font-bold leading-[24px] tracking-[0.2px]'
            key={num}
            onClick={() => setSelectedRaiting(num)}
          >
            {num}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          if (selectedRaiting !== undefined) {
            setIsSelected(true);
          }
        }}
        className='hover:bg-[#FFF] hover:text-red-700 w-[100%] bg-[#FC7614] text-white font-bold text-[15px] leading-normal tracking-[2px] rounded-[22.5px] py-[11px]'
      >
        Submit
      </button>
    </div>
  );
}
