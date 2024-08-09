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
    cardStyle: "w-[576px] h-[784px] pt-[40px]",
  },
  {
    imageSrc: projectProduct,
    title: "Reduce development time by working with your team",
    description: "Develop faster without being restricted. Work with multiple people on the same project at the same time.",
    cardStyle: "w-[576px] h-[784px] pt-[40px]",
  },
  {
    imageSrc: publishProduct,
    title: "Publish to staging or production",
    description: "Not yet ready to publish the code to your actual website? Then publish it to staging only using the staging script with Glitty. Your production Javascript file will always be available 👍🏻",
    cardStyle: "w-[576px] h-[772px] pt-[40px]",
  },
  {
    imageSrc: codeProduct,
    title: "Code Library",
    description: "Save your favorite code solutions for easy reuse. Drag and drop code you have saved into any of your projects.",
    cardStyle: "w-[576px] h-[772px] pt-[40px]",
  },
]

export const ProductShowcase = () => {
  return (
    <section>
      <div className='lg:px-20 md:px-16 sm:px-6 px-4 mt-36'>
        <div>
          <h1 className='text-[#fefefe] text-5xl text-center font-bold leading-[3.5rem] tracking-[-0.03em]'>Unlike any coding tool <br /> you've ever encountered</h1>
          <p className='text-lg text-[#6C7275] text-center font-semibold leading-8 tracking-[-0.03em] py-4'>Actually, we're not so different from other coding platforms. <br /> But with AI, do you catch our drift? Exactly, that's the point.</p>
        </div>
        <div className="grid grid-cols-2">
          {products.map(({ imageSrc, title, description, cardStyle }) => (
              <div className={`bg-[#232627] border border-[#343839] rounded-3xl flex flex-col items-center justify-center ${cardStyle}`}>
                <Image src={imageSrc} alt='' />
                <div>
                  <h1 className='text-white'>{title}</h1>
                  <p className="text-[#6C7275]">{description}</p>
                </div>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
};
