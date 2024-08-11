import Image from "next/image";
import Logo from '@/assets/logohero.png'

export const Footer = () => {
  return (
    <footer className='text-white mt-16 sm:mt-16 md:mt-0 lg:mt-0'>
      <div className="lg:px-20 md:px-16 sm:px-6 px-4 mb-6">
        <div className="flex flex-col sm:flex-col md:flex-row md:justify-between lg:flex-row lg:justify-between">
          <div className=''>
            <Image src={Logo} alt='DesignLunch Logo' height={90} width={90} />
          </div>

          <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row h-[176px] pt-4 gap-x-20 gap-y-6">
            <div className='flex flex-col gap-y-2'>
              <h1 className='text-[#6C7275] text-sm text-left font-medium leading-6 tracking-[-0.02em] uppercase'>company</h1>
                <a href="/" className="text-sm text-left font-medium leading-6 tracking-[-0.02em] hover:text-[#6C7275] transition-all ease-in">How it works</a>
                <a href="/" className="text-sm text-left font-medium leading-6 tracking-[-0.02em] hover:text-[#6C7275] transition-all ease-in">Pricing</a>
                <a href="/" className="text-sm text-left font-medium leading-6 tracking-[-0.02em] hover:text-[#6C7275] transition-all ease-in">Demo</a>
            </div>

            <div className='flex flex-col gap-y-2'>
              <h1 className='text-[#6C7275] text-sm text-left font-medium leading-6 tracking-[-0.02em] uppercase'>resources</h1>
                <a href="/" className="text-sm text-left font-medium leading-6 tracking-[-0.02em] hover:text-[#6C7275] transition-all ease-in">Blog post name goes here</a>
                <a href="/" className="text-sm text-left font-medium leading-6 tracking-[-0.02em] hover:text-[#6C7275] transition-all ease-in">Blog post name goes here</a>
                <a href="/" className="text-sm text-left font-medium leading-6 tracking-[-0.02em] hover:text-[#6C7275] transition-all ease-in">Blog post name goes here</a>
                <a href="/" className="text-sm text-left font-medium leading-6 tracking-[-0.02em] hover:text-[#6C7275] transition-all ease-in">See all resources</a>
            </div>

            <div className='flex flex-col gap-y-2'>
              <h1 className='text-[#6C7275] text-sm text-left font-medium leading-6 tracking-[-0.02em] uppercase'>about</h1>
              <a href="/" className="text-sm text-left font-medium leading-6 tracking-[-0.02em] hover:text-[#6C7275] transition-all ease-in">Terms & Conditions</a>
              <a href="/" className="text-sm text-left font-medium leading-6 tracking-[-0.02em] hover:text-[#6C7275] transition-all ease-in">Privacy Policy</a>
            </div>
            </div>
          </div>
          <h1 className="text-[#fefefe] text-sm text-center font-normal leading-[21px] mt-72 sm:mt-72 md:mt-0 lg:mt-0">Copyright © 2024 Designluch</h1>
      </div>
    </footer>
  );
};
