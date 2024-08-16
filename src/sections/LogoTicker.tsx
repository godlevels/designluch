"use client"
import ariseLogo from "@/assets/arise.png"
import ephicientLogo from "@/assets/ephicient.png"
import incLogo from "@/assets/inc.png"
import paakLogo from "@/assets/paak.png"
import pipelinxLogo from "@/assets/pipelinx.png"
import togetherLogo from "@/assets/together.png"
import Image from "next/image"
import { motion } from "framer-motion"

export const LogoTicker = () => {
  return (
    <div className="py-6">
      <h1 className="text-[#fefefe] text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold leading-[2.5rem] sm:leading-[3rem] md:leading-[3.5rem] lg:leading-[4rem] tracking-[-0.03em] py-4 sm:py-6 md:py-8">Our Clients</h1>

      <div className="lg:px-20 md:px-16 sm:px-6 px-4">
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div className="flex gap-6 flex-none items-center pr-6" animate={{translateX: '-50%'}} transition={{duration: 20, repeat:Infinity, ease:"linear", repeatType:"loop"}}>
            <Image src={ariseLogo} alt="Arise Logo" className="logos" />
            <Image src={ephicientLogo} alt="Ephicient Logo" className="logos" />
            <Image src={incLogo} alt="Inc Logo" className="logos" />
            <Image src={paakLogo} alt="Paak Logo" className="logos" />
            <Image src={pipelinxLogo} alt="Pipelinx Logo" className="logos" />
            <Image src={togetherLogo} alt="Together Logo" className="logos" />


            <Image src={ariseLogo} alt="Arise Logo" className="logos" />
            <Image src={ephicientLogo} alt="Ephicient Logo" className="logos" />
            <Image src={incLogo} alt="Inc Logo" className="logos" />
            <Image src={paakLogo} alt="Paak Logo" className="logos" />
            <Image src={pipelinxLogo} alt="Pipelinx Logo" className="logos" />
            <Image src={togetherLogo} alt="Together Logo" className="logos" />
          </motion.div>
        </div> 
      </div>
    </div>
  );
};
