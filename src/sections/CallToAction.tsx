/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import ctaImg from "@/assets/cta.png";

export const CallToAction = () => {
  return (
    <section className="h-auto sm:h-[440px] mt-12 sm:mt-20 lg:mt-36">
      <div className="px-4 sm:px-6 md:px-16 lg:px-20 relative">
        <div className="flex flex-col md:flex-row items-center md:items-start">
          <div className="py-5 w-full md:w-1/2">
            <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl text-left font-bold leading-tight sm:leading-[3.50rem] tracking-[-0.03em]">
              Features like collaboration, <br className="hidden sm:block" /> code explainers and more
            </h1>
            <p className="text-white text-base sm:text-lg text-left font-normal leading-5 sm:leading-6 tracking-[-0.01em] mt-4 sm:mt-6">
              Whether you're part of a team or an individual, Glitty helps you supercharge your code seamlessly.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-[10px] mt-4 sm:mt-6">
              <button className="text-sm sm:text-lg text-[#fefefe] font-semibold leading-6 sm:leading-8 tracking-[-0.03em] h-10 sm:h-12 w-full sm:w-40 py-2 px-4 sm:px-8 rounded-full border bg-[#3E90F0]">
                Get Started
              </button>
              <button className="text-sm sm:text-lg text-[#fefefe] font-semibold leading-6 sm:leading-8 tracking-[-0.03em] h-10 sm:h-12 w-full sm:w-[183px] py-2 px-4 sm:px-8 rounded-full border">
                Watch a demo
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <div className="relative w-full max-w-xs md:max-w-sm lg:max-w-md">
              <Image src={ctaImg} alt="Call to Action Image" layout="responsive" className="object-contain" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
