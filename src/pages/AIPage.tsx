import React from "react";
import GradientButton from "../components/GradientButton";
import QualityCards from "../components/QualityCards";

type AIPageProps = {
  setcurrentPage: (pageIndex: number) => void;
};

const AIPage: React.FC<AIPageProps> = ({ setcurrentPage }) => {
  return (
    <div>
      <div className="text-white flex flex-col gap-[27px] mt-[25px] lg:mt-[40px] mb-[30px] ml-[15px] md:ml-[35px] lg:ml-[60px]">
        <h1 className="font-epilogue-font text-[24px] md:text-[32px] lg:text-[45px] leading-[140%] font-bold">
          AI Employees
        </h1>
        <p className="font-helvetica-font text-[16px] hidden md:block md:text-[22px] font-normal leading-[150%]">
          We harness LLMs and generative algorithms to turbocharge your team.
          These nimble machines, once tuned, not only tackle tasks beyond human
          reach but also bolster your top talent to deliver team-level output.
          They're multilingual, adept at sifting through vast knowledge, and
          communicate with human finesse. Plus, they’re scalable,
          round-the-clock, and unwavering in following intricate instructions.
          Below, discover the myriad tasks they excel at, or explore specific
          application cases here.
        </p>
      </div>
      <div className="flex md:hidden justify-center mt-[30px] mb-[80px]">
        <GradientButton bg={false}>Read more</GradientButton>
      </div>
      <div className="ml-[15px] md:ml-[35px] lg:ml-[60px]">
        <QualityCards large={true} />
      </div>
      <div className="flex justify-center mt-[451px] md:mt-[15px]">
        <GradientButton>Get in touch</GradientButton>
      </div>
    </div>
  );
};

export default AIPage;
