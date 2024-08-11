/* eslint-disable react/no-unescaped-entities */
import Hero1 from '@/assets/heroleft.png'
import Hero2 from '@/assets/heroright.png'
import Image from 'next/image';

export const Hero = () => {
  return (
    <section>
      <div className='lg:px-20 md:px-16 sm:px-6 px-4 my-[5rem]'>
        <div className='flex flex-col items-center text-center'>
          <div className="flex justify-between items-center">
            <Image src={Hero1} alt='DesignLunch Logo' height={28} width={58} className='hidden sm:hidden md:block lg:block md:absolute md:mt-[5rem] md:left-[20rem] lg:mt-[7rem] lg:absolute lg:left-[21rem]' />
            <Image src={Hero2} alt='DesignLunch Logo' height={12} width={113} className='hidden sm:hidden md:block lg:block md:absolute md:mt-[2rem] md:right-[16rem] lg:absolute lg:mt-[1rem] lg:right-[18rem]' />
          </div>
          <h1 className="text-white text-2xl sm:text-2xl md:text-4xl lg:text-[4rem] font-bold leading-tight sm:leading-[2rem] md:leading-[3rem] lg:leading-[4.5rem] tracking-[-0.03em] max-w-full lg:max-w-[1060px] h-auto lg:h-[216px] mt-4 lg:mt-0">
        Coding fascinates us. <br /> However, imagine there also being <br /> an AI to assist with your coding?
      </h1>

      <p className="text-[#6C7275] text-sm sm:text-base md:text-lg font-semibold leading-6 sm:leading-5 md:leading-8 tracking-[-0.03em] max-w-full lg:max-w-[1060px] h-auto lg:h-16 my-4 sm:my-6">
        Transform your code into no-code while ensuring it's clean-code, making it comprehensible to others. <br />
        Sounds straightforward, doesn't it? Meet Gitty, the AI-Driven Coding Platform.
      </p>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-[10px] mt-4 sm:mt-6">
        <button className="text-sm sm:text-lg text-[#fefefe] font-semibold leading-6 sm:leading-8 tracking-[-0.03em] h-10 sm:h-12 w-full sm:w-40 py-2 px-4 sm:px-8 rounded-full border bg-[#3E90F0]">
          Get Started
        </button>
        <button className="text-sm sm:text-lg text-[#fefefe] font-semibold leading-6 sm:leading-8 tracking-[-0.03em] h-10 sm:h-12 w-full sm:w-[183px] py-2 px-4 sm:px-8 rounded-full border">
          Watch a demo
        </button>
      </div>
        </div>
      </div>
    </section>
  );
};
