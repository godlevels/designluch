"use client";
import { useState } from "react";
import Image from "next/image";
import priceMark from "@/assets/price-check.png";
import priceInverse from "@/assets/person.png";
import priceLine from "@/assets/line.png";

interface PricingPlans {
  id: number;
  title: string;
  price: string;
  popular?: boolean;
  inverse?: boolean;
  features: string[];
  buttonText: string;
}

interface PricingData {
  monthly: PricingPlans[];
  yearly?: PricingPlans[];
}

export const pricingData: PricingData = {
  monthly: [
    {
      id: 1,
      title: "Playground",
      price: "Free for everyone",
      inverse: false,
      features: [
        "Unlimited Members",
        "2 Collaboration Project Team",
        "100 AI Messages (GPT 3.5)",
        "Individual Space",
        "Global Library",
      ],
      buttonText: "Watch a demo",
    },
    {
      id: 2,
      title: "Workspace",
      price: "$7 / month",
      popular: true,
      inverse: true,
      features: [
        "Unlimited Collaboration Project Team",
        "Unlimited AI Messages (GPT 3.5)",
        "Team Space",
        "All Integrations, APIs, webhooks",
        "Priority support",
      ],
      buttonText: "Get started",
    },
  ],
  yearly: [
    {
      id: 1,
      title: "Playground",
      price: "Free for everyone annually",
      inverse: false,
      features: [
        "Unlimited Members",
        "2 Collaboration Project Team",
        "100 AI Messages (GPT 3.5)",
        "Individual Space",
        "Global Library",
      ],
      buttonText: "Watch a demo",
    },
    {
      id: 2,
      title: "Workspace",
      price: "$70 / year",
      popular: true,
      inverse: true,
      features: [
        "Unlimited Collaboration Project Team",
        "Unlimited AI Messages (GPT 3.5)",
        "Team Space",
        "All Integrations, APIs, webhooks",
        "Priority support",
      ],
      buttonText: "Get started",
    },
  ],
};

export const Pricing: React.FC = () => {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");
  const pricingPlans = pricingData[billing] || pricingData["monthly"];

  return (
    <section>
      <div className="lg:px-20 md:px-16 sm:px-6 px-4 mt-36">
        <h1 className="text-[#fefefe] text-5xl text-center font-bold leading-[56px] tracking-[-0.03em] my-12">We couldn’t build this without you.</h1>
        <div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center mb-8 bg-[#232627] p-1 shadow-md w-[262px] h-[64px] rounded-full">
              <button
                className={`px-4 py-2 mx-2 ${
                  billing === "monthly"
                    ? "bg-[#3E90F0] rounded-full text-white text-lg text-center font-semibold leading-8 tracking-[-0.03em] border border-[1B6ECF] py-2 px-8 w-[137px] h-[48px]"
                    : "bg-inherit text-white text-lg text-center font-semibold leading-8 tracking-[-0.03em]"
                }`}
                onClick={() => setBilling("monthly")}
              >
                Monthly
              </button>
              <button
                className={`px-4 py-2 mx-2 ${
                  billing === "yearly"
                    ? "bg-[#3E90F0] rounded-full text-white text-lg text-center font-semibold leading-8 tracking-[-0.03em] border border-[1B6ECF] py-2 px-8 w-[137px] h-[48px]"
                    : "bg-inherit text-white text-lg text-center font-semibold leading-8 tracking-[-0.03em]"
                }`}
                onClick={() => setBilling("yearly")}
              >
                Annually
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-col md:flex-row lg:flex-row justify-center items-center gap-x-10">
          {pricingPlans.map(({ id, title, price, popular, inverse, features, buttonText }) => (
            <div key={id} className="w-[576px] h-[493px] rounded-3xl gap-8 p-10 border border-[#343839] bg-[#202324] bg-opacity-20">
              <h3 className="text-center text-[17px] text-[#6C7275] font-normal leading-6 tracking-[-0.01em]">{title}</h3>
              <h4 className="text-[#fefefe] text-[28px] text-center font-bold leading-10 tracking-[-0.02em] my-2">{price}</h4>
              <div>
              </div>
              <Image src={priceLine} alt="Line" className="flex items-center justify-center w-[496px]" />
              <div className="py-10">
                <ul>
                  {features.map(feature => (
                    <li key={id} className="flex w-[496px] gap-x-3 py-2 px-24"> 
                      <div><Image src={priceMark} alt="check mark" width={15.89} height={16} /></div>
                      <span className="text-[#fefefe] text-base font-medium leading-6 tracking-[-0.03em]">{feature}</span>
                    </li>
                  ))}
                </ul>
              <button className="text-[#fefefe] text-lg text-center bg-inherit font-semibold leading-8 tracking-[-0.03em] py-2 px-8 w-[496px] h-[48px] border border-[#fefefe] rounded-full hover:bg-[#3E90F0] transition-all ease-in-out duration-500 mt-6">{buttonText}</button>
              </div>

            </div>
          ))}
      </div>

      </div>
      
      {/* w-[576px] h-[504px] rounded-3xl gap-8 pt-10 border border-[#2476D7] bg-[#388AEA] bg-opacity-20 */}
      {/* [mask-image:linear-gradient(to_bottom,black,transparent)] */}
      {/* [mask-image:linear-gradient(to_bottom,black,transparent)] */}
    </section>
  );
};
