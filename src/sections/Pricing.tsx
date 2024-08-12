"use client";
import { useState } from "react";
import Image from "next/image";
import priceMark from "@/assets/price-check.png";

interface PricingPlans {
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
      <div>
        <h1>We couldn’t build this without you.</h1>
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

          <div className="flex flex-col md:flex-row justify-around items-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-lg w-[374px] ${
                    plan.popular ? "border-green" : "shadow-md"
                  } ${
                    plan.inverse
                      ? "bg-green text-white h-[644px] top-[3819px]"
                      : "bg-white text-gray-900 h-[604px] top-[3841px] mt-5"
                  }`}
                >
                  <div className="text-center flex flex-col items-center">
                    <h3 className="text-[30px] font-semibold leading-[36.31px] mb-2">
                      {plan.title}
                    </h3>
                    <p
                      className={`mb-4 w-[251px] text-[18px] font-medium leading-[27px] ${
                        plan.popular ? "text-inherit" : "text-textPri"
                      }`}
                    >
                      {plan.price}
                    </p>
                    {plan.popular && (
                      <div className="bg-[#85DAB9] w-[130px] h-[40px] top-[225px] left-[122px] rounded-[10px] flex justify-center items-center text-center text-[14px] font-semibold leading-[30px] mb-3">
                        <div>
                          
                        </div>
                      </div>
                    )}
                  </div>
                  <ul
                    className={`mb-6 w-[334px] h-[360px] rounded-lg p-8 ${
                      plan.popular ? "bg-[#fff] text-textSec" : "bg-[#F9FAFB]"
                    }`}
                  >
                    {plan.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="mb-4 flex items-center gap-x-4 w-[266px]"
                      >
                        <Image src={priceMark} alt="check_mark" />
                        <span className="text-[18px] text-textSec text-left font-medium leading-[30px]">
                          {feature}
                        </span>
                      </li>
                    ))}
                    <button
                      className={`mt-8 px-6 w-[266px] h-[55px] top-[4158px] left-[1004px] flex items-center justify-center rounded-[20px] text-center text-[18px] font-semibold leading-[30px] ${
                        plan.inverse
                          ? "bg-green text-[#fff] hover:bg-[#fff] hover:text-green transition-all ease-out duration-200"
                          : "bg-[#fff] text-green hover:bg-green hover:text-[#fff] transition-all ease-out duration-200"
                      }`}
                    >
                      {plan.buttonText}
                    </button>
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
