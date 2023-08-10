import GradientButton from "../components/GradientButton";
import QualityCards from "../components/QualityCards";

const AIPage = () => {
  return (
    <div className="ml-[61px] mr-[61px]">
      <div className="text-white flex flex-col gap-[27px] mt-[40px] mb-[30px]">
        <h1 className="font-epilogue-font text-[45px] leading-[140%] font-bold">
          AI Employees
        </h1>
        <p className="font-helvetica-font text-[22px] font-normal leading-[150%]">
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
      <div>
        <QualityCards large={true} />
      </div>
      <div className="flex justify-center mt-[15px]">
        <GradientButton>Get in touch</GradientButton>
      </div>
    </div>
  );
};

export default AIPage;