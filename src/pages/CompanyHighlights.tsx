import QualityCards from "../components/QualityCards";

const CompanyHighlights = () => {
  return (
    <div className="ml-[15px] md:ml-[60px] mr-[61px] overflow-hidden">
      <div className="text-white flex flex-col gap-[27px] mt-[25px] qualityCards-betwen:mt-[47px] mb-[40px]">
        <h1 className="font-epilogue-font text-[24px] md:text-[32px] lg:text-[45px] leading-[140%] font-bold">
          Finding your Next Big Thing with Gart
        </h1>
        <p className="font-helvetica-font text-[16px] md:text-[22px] font-normal leading-[140%]">
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
      <QualityCards />
    </div>
  );
};

export default CompanyHighlights;
