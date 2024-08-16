"use client";
import { useState } from "react";
import Image from "next/image";
import priceMark from "@/assets/price-check.png";
import priceInverse from "@/assets/person.png";
import priceLine from "@/assets/line.png";
import { twMerge } from "tailwind-merge"

interface PricingPlans {
  id: number;
  title: string;
  price: string;
  inverse?: boolean;
  startups?: boolean;
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
      startups: false,
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
      inverse: true,
      startups: true,
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
      startups: false,
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
      inverse: true,
      startups: true,
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
      <div className="lg:px-20 md:px-16 sm:px-6 px-4 mt-12">
        <h1 className="text-[#fefefe] text-3xl sm:text-4xl lg:text-5xl text-center font-bold leading-tight tracking-[-0.03em] my-8 sm:my-10 lg:my-12">
          We couldn’t build this without you.
        </h1>
        <div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center mb-8 bg-[#232627] p-1 shadow-md w-full max-w-[262px] h-[64px] rounded-full">
              <button
                className={twMerge(
                  "px-4 py-2 mx-2 text-lg text-center font-semibold leading-8 tracking-[-0.03em] rounded-full",
                  billing === "monthly"
                    ? "bg-[#3E90F0] text-white w-[120px]"
                    : "bg-inherit text-white"
                )}
                onClick={() => setBilling("monthly")}
              >
                Monthly
              </button>
              <button
                className={twMerge(
                  "px-4 py-2 mx-2 text-lg text-center font-semibold leading-8 tracking-[-0.03em] rounded-full",
                  billing === "yearly"
                    ? "bg-[#3E90F0] text-white w-[120px]"
                    : "bg-inherit text-white"
                )}
                onClick={() => setBilling("yearly")}
              >
                Annually
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-x-8 gap-y-6 lg:gap-y-0">
          {pricingPlans.map(({ id, title, price, startups, features, inverse, buttonText }) => (
            <div
              key={id}
              className={twMerge(
                "w-full max-w-[576px] h-auto rounded-3xl gap-8 p-8 border border-[#343839] bg-[#202324] bg-opacity-20",
                inverse === true && "border-[#2476D7] bg-[#388AEA] bg-opacity-20"
              )}
            >
              <h3 className="text-center text-[17px] text-[#6C7275] font-normal leading-6 tracking-[-0.01em]">
                {title}
              </h3>
              <h4 className="text-[#fefefe] text-[24px] sm:text-[28px] text-center font-bold leading-tight tracking-[-0.02em]">
                {price}
              </h4>
              {startups === true && (
                <div className="flex justify-center items-center gap-x-2 mt-2 mb-4">
                  <Image src={priceInverse} alt="user icons" />
                  <span className="text-[#A7A7A7] text-center text-sm font-medium leading-6 tracking-[-0.02em]">
                    Best for startups, etc.
                  </span>
                </div>
              )}
              <Image src={priceLine} alt="Line" className="w-full max-w-[496px] mx-auto mt-8 sm:mt-14" />
              <div className="py-6">
                <ul className="space-y-2">
                  {features.map((feature, index) => (
                    <li key={index} className="flex gap-x-3">
                      <div>
                        <Image src={priceMark} alt="check mark" width={16} height={16} />
                      </div>
                      <span className="text-[#fefefe] text-base font-medium leading-6 tracking-[-0.03em]">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <button
                  className={twMerge(
                    "text-[#fefefe] text-lg text-center font-semibold leading-8 tracking-[-0.03em] py-2 px-8 w-full max-w-[496px] h-[48px] border border-[#fefefe] rounded-full hover:bg-[#3E90F0] transition-all ease-in-out duration-500 mt-6",
                    inverse === true && "bg-[#3E90F0] hover:bg-inherit"
                  )}
                >
                  {buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
