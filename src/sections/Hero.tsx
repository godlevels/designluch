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
            <Image src={Hero1} alt='DesignLunch Logo' height={28} width={58} className='lg:mt-[7rem] lg:absolute lg:left-[21rem]' />
            <Image src={Hero2} alt='DesignLunch Logo' height={12} width={113} className='absolute mt-[1rem] right-[18rem]' />
          </div>
          <h1 className="text-white text-[4rem] font-bold leading-[4.5rem] tracking-[-0.03em] w-[1060px] h-[216px]">Coding fascinates us. <br /> However, imagine there also being <br /> an AI to assist with your coding?</h1>

          <p className="text-[#6C7275] text-lg text-center font-semibold leading-8 tracking-[-0.03em] w-[1060px] h-16 my-6">Transform your code into no-code while ensuring it's clean-code, making it comprehensible to others. <br /> Sounds straightforward, doesn't it? Meet Gitty, the AI-Driven Coding Platform.</p>

          <div className='flex justify-center items-center gap-[10px]'>
            <button className='text-lg text-[#fefefe] font-semibold leading-8 tracking-[-0.03em] h-12 w-40 py-2 px-8 rounded-full border bg-[#3E90F0]'>Get Started</button>
            <button className='text-lg text-[#fefefe] font-semibold leading-8 tracking-[-0.03em] w-[183px] h-12 py-2 px-8 rounded-full border'>Watch a demo</button>
          </div>
        </div>
      </div>
    </section>
  );
};
