/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-key */

import workProduct from '@/assets/work.png'
import projectProduct from '@/assets/project.png'
import publishProduct from '@/assets/publish.png'
import codeProduct from '@/assets/code.png'
import Image from 'next/image';



const products = [
  {
    imageSrc: workProduct,
    title: "Let AI do the work my friend",
    description: "Write a prompt, hit enter, and let AI do the heavy lifting.Having an AI tool built into, allows you to quickly and easily generate the exact code you need for your project.",
    cardStyle: "h-[784px] pt-6",
  },
  {
    imageSrc: projectProduct,
    title: "Reduce development time by working with your team",
    description: "Develop faster without being restricted. Work with multiple people on the same project at the same time.",
    cardStyle: "h-[784px]",
  },
  {
    imageSrc: publishProduct,
    title: "Publish to staging or production",
    description: "Not yet ready to publish the code to your actual website? Then publish it to staging only using the staging script with Glitty. Your production Javascript file will always be available 👍🏻",
    cardStyle: "h-[772px] pt-4",
  },
  {
    imageSrc: codeProduct,
    title: "Code Library",
    description: "Save your favorite code solutions for easy reuse. Drag and drop code you have saved into any of your projects.",
    cardStyle: "h-[772px]",
  },
]

export const ProductShowcase = () => {
  return (
    <section className=''>
      <div className='lg:px-20 md:px-16 sm:px-6 px-4 mt-36'>
        <div>
          <h1 className='text-[#fefefe] text-5xl text-center font-bold leading-[3.5rem] tracking-[-0.03em]'>Unlike any coding tool <br /> you've ever encountered</h1>
          <p className='text-lg text-[#6C7275] text-center font-semibold leading-8 tracking-[-0.03em] py-4'>Actually, we're not so different from other coding platforms. <br /> But with AI, do you catch our drift? Exactly, that's the point.</p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 place-items-center mt-7">
          {products.map(({ imageSrc, title, description, cardStyle }) => (
              <div className={`bg-[#232627] border border-[#343839] rounded-3xl flex flex-col items-center justify-center ${cardStyle}`}>
                <Image src={imageSrc} alt='' />
                <div className='py-7'> 
                  <h1 className='text-white text-[1.75rem] text-left font-bold leading-10 tracking-[-0.02em] px-16'>{title}</h1>
                  <p className="text-[#6C7275] text-base text-left font-medium leading-6 px-16 tracking-[-0.03em] pt-4">{description}</p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};
