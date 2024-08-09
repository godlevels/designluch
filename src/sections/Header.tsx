import ArrowRight from '@/assets/arrow-right.svg'
import Logo from '@/assets/logohero.png'
import Image from 'next/image';
import MenuIcon from '@/assets/menu.svg'


export const Header = () => {
  return (
    <header className='sticky top-0 backdrop-blur-sm z-20'>
      <div className="flex justify-center items-center py-3 bg-white text-black text-sm gap-3">
        <p className='text-black/60 hidden md:block'>Streamline your workflow and boost your productivity</p>
        <div className='inline-flex gap-1 items-center'>
          <p>Get started for free</p>
          <ArrowRight className="h-4 w-4 inline-flex justify-center items-center" />
        </div>
      </div>

      <div className='py-2 text-white'>
        <div className='lg:px-20 md:px-16 sm:px-6 px-4'>
          <div className='flex items-center justify-between'>  
            <Image src={Logo} alt='DesignLunch Logo' height={90} width={90} />
            <MenuIcon className="h-5 w-5 md:hidden" />

            <nav className='hidden md:flex gap-8 items-center text-white text-lg font-semibold leading-8'> 
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Blog</a>
              <a href="#">Event</a>
              <a href="#">Pricing</a>

              <button className='bg-[#3E90F0] px-6 py-2 rounded-full font-medium inline-flex items-center tracking-tight border'>Sign Up</button>
            </nav>
          </div>
        </div>        
      </div>
    </header>
  );
};
