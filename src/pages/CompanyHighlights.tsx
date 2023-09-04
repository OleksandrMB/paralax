import React from "react";
import GradientButton from "../components/GradientButton";
import QualityCards from "../components/QualityCards";

interface CompanyHighlightsProps {
  setReadIsActive: (active: boolean) => void;
  readIsActive: boolean;
}

const CompanyHighlights: React.FC<CompanyHighlightsProps> = ({
  setReadIsActive,
  readIsActive,
}) => {
  const handleRead = () => {
    return () => {
      setReadIsActive(true);
    };
  };
  return (
    <div
      className="overflow-hidden w-full flex flex-col md:block"
      style={{
        height: "calc(100vh - 80px - 10px - 40px)",
      }}
    >
      <div className="mx-[15px] md:mx-[30px] lg:ml-[60px] text-white flex flex-col gap-[27px] mt-[25px] qualityCards-betwen:mt-[47px] mb-[40px]">
        <h1 className="font-epilogue-font text-[24px] md:text-[32px] lg:text-[45px] leading-[140%] font-bold">
          Finding your Next Big Thing with Gart
        </h1>
        <p
          className={` md:block font-helvetica-font text-[16px] md:text-[22px] font-normal leading-[140%] ${
            readIsActive ? "block" : "hidden  "
          }`}
        >
          At Gart, we specialize in unearthing the Next Big Thing for your
          business through technology. Our collaboration is two-fold: your
          knowledge of business and industry pairs with our expertise in
          cutting-edge technology and market research. Our process is agile. We
          work in short iterations, rigorously testing the core of your idea for
          viability. This streamlined approach is efficient, conserving
          resources and minimizing risk. When the metrics are favorable, we move
          toward product development. Otherwise, we pivot and reassess with you.
          Together, we harness innovation to cultivate tangible growth.
        </p>
      </div>
      <div
        className={`md:ml-[30px] lg:ml-[60px] ${
          readIsActive ? "hidden" : "block"
        }`}
      >
        <QualityCards />
      </div>

      <div
        className={`md:hidden justify-center mb-[20px] mt-auto ${
          readIsActive ? "hidden" : "flex"
        }`}
        onClick={handleRead()}
      >
        <GradientButton>Read More</GradientButton>
      </div>
    </div>
  );
};

export default CompanyHighlights;
