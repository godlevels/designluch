/* eslint-disable react/jsx-key */
"use client"
import React from "react";
import avatar1 from "@/assets/avatar-1.png"; 
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import avatar5 from "@/assets/avatar-5.png";
import avatar6 from "@/assets/avatar-6.png";
import avatar7 from "@/assets/avatar-7.png";
import avatar8 from "@/assets/avatar-8.png";
import avatar9 from "@/assets/avatar-9.png";
import Image from "next/image";
import { motion } from "framer-motion";


const testimonials = [
  {
    text: "Excellent conversation. Very practical, logical and motivating info. Thanks for your time Kosta! Tal",
    imageSrc: avatar1.src,
    name: "Jamie Rivera",
    username: "@jamietechguru00",
  },
  {
    text: "Eden is 110% recommendable! Very friendly and accurate She brought me a lot of value in a short peri",
    imageSrc: avatar2.src,
    name: "Josh Smith",
    username: "@jjsmith",
  },
  {
    text: "Peter was amazing! He shared wonderful tips, made the most out of our call, and was very attentive a",
    imageSrc: avatar3.src,
    name: "Morgan Lee",
    username: "@morganleewhiz",
  },
  {
    text: "Craig was awesome. He asked great discovery questions and took time to understand my challenges and",
    imageSrc: avatar4.src,
    name: "Casey Jordan",
    username: "@caseyj",
  },
  {
    text: "Great mentorship, we had really common topics on our ways of working. He gave me pretty nice insight",
    imageSrc: avatar5.src,
    name: "Taylor Kim",
    username: "@taylorkimm",
  },
  {
    text: "Superb, invaluable advice from Barbara. The point-of-view statements are a lifesaver. Highly recomme",
    imageSrc: avatar6.src,
    name: "Riley Smith",
    username: "@rileysmith1",
  },
  {
    text: "Adopting this app for our team has streamlined our project management and improved communication across the board.",
    imageSrc: avatar7.src,
    name: "Jordan Patels",
    username: "@jpatelsdesign",
  },
  {
    text: "With this app, we can easily assign tasks, track progress, and manage documents all in one place.",
    imageSrc: avatar8.src,
    name: "Sam Dawson",
    username: "@dawsontechtips",
  },
  {
    text: "Its user-friendly interface and robust features support our diverse needs.",
    imageSrc: avatar9.src,
    name: "Casey Harper",
    username: "@casey09",
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9);


const TestimonialsColumn = (props: { className?: string; testimonials: typeof testimonials; duration?: number }) => (
  <div className="props.className">
    <motion.div animate={{translateY:'-50%',}} transition={{duration: props.duration || 10, repeat:Infinity, ease:"linear", repeatType:"loop"}} className="flex flex-col gap-6 pb-6 ">
      {[...new Array(2)].fill(0).map((_, index) => (
        <React.Fragment key={index}>
          {props.testimonials.map(({ text, imageSrc, name, username }) => (
            <div className="card">
              <div className="text-white text-lg text-left font-medium leading-8 tracking-[-0.03em]">{text}</div>
              <div className="flex items-center gap-2 mt-5">
                <Image src={imageSrc} alt={name} width={40} height={40} className="h-10 w-10 rounded-full" />
                <div className="flex flex-col">
                  <div className="text-white text-left text-sm font-medium leading-6 tracking-[-0.02em]">{name}</div>
                  <div className="text-[#6C7275] text-left text-xs font-medium leading-5 tracking-[-0.03em]">{username}</div>
                </div>
              </div>
            </div>
          ))}
        </React.Fragment>
      ))}
    </motion.div>
  </div>
)

export const Testimonials = () => {
  return (
    <section>
      <div className="lg:px-20 md:px-16 sm:px-6 px-4 mt-36">
        <h1 className="text-center text-[#fefefe] text-5xl font-bold leading-[56px] tracking-[-0.03em]">We are building AI with feedback <br /> from the best devs in the world</h1>
        <div className="flex flex-col md:flex-row lg:flex-row justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
          <TestimonialsColumn testimonials={firstColumn} duration={25} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={36} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={30} />
        </div>
      </div>
    </section>
  );
};
