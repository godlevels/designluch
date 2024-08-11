import Image from "next/image";
import ctaImg from "@/assets/cta.png"

export const CallToAction = () => {
  return (
    <section className="h-[440px]">
      <div className="lg:px-20 md:px-16 sm:px-6 px-4 mt-36 relative">
        <div className="flex">
          <div className="py-5">
            <h1 className="text-white text-5xl text-left font-bold leading-[3.50rem] tracking-[-0.03em]">Features like collaboration, <br /> code explainers and more</h1>
            <p className="text-white text-lg text-left font-normal leading-6 tracking-[-0.01em]">Whether you're part of a team or an individual, Glitty helps you supercharge your code seamlessly.</p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[10px] mt-4 sm:mt-6">
              <button className="text-sm sm:text-lg text-[#fefefe] font-semibold leading-6 sm:leading-8 tracking-[-0.03em] h-10 sm:h-12 w-full sm:w-40 py-2 px-4 sm:px-8 rounded-full border bg-[#3E90F0]">
                Get Started
              </button>
              <button className="text-sm sm:text-lg text-[#fefefe] font-semibold leading-6 sm:leading-8 tracking-[-0.03em] h-10 sm:h-12 w-full sm:w-[183px] py-2 px-4 sm:px-8 rounded-full border">
                Watch a demo
              </button>
            </div>
          </div>
          <div className="hidden sm:hidden md:block lg:block absolute right-[9.50rem] bottom-[-1.5rem]">
            <Image src={ctaImg} alt="" width={500} height={500} />
          </div>
        </div>
      </div>
    </section>
  ); 
};
