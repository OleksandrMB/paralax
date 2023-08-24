import GradientButton from "../components/GradientButton";
import TeamCard from "../components/TeamCards";

const HomePage = () => {
  return (
    <div className="flex justify-between flex-col lg:flex-row w-full">
      <div className="order-2 lg:order-1 lg:mt-[109px] mt-[20px] mr-[25px]">
        {/* <img
          src="/icons/Intersect.png"
          className="w-[622px] h-[692px] absolute bottom-[0px] right-[100px] img-breakPoint:right-[150px] z-10"
        /> */}
        <div className="lg:mt-[75px]">
          <div className="flex flex-col gap-[20px] lg:gap-[63.57px]">
            <h1 className="md:text-[32px] custom-md:text-[58px] font-epilogue-font font-bold text-black-900 uppercase lg:text-[44px] text-[24px] leading-120 z-20">
              Your tech-wise <br /> advisor and software <br /> development{" "}
              <br />
              contractor
            </h1>
            <p className="md:text-[22px] custom-md:text-[27px] lg:text-[23px] text-[16px] font-normal font-helvetica-font leading-120 z-20">
              We transform complex issues into innovative solutions.
              <br /> Better and Faster
            </p>

            {/* TeamCard for screens < 1000px */}
            <div className="lg:hidden lg:mt-[20px] flex justify-start img-startPoint:justify-center">
              <TeamCard />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-[59px] md:gap-[300px] lg:gap-[230px] mt-[27.25px] h-[59px] lg:ml-[105px] mb-[32px] w-full lg:justify-start justify-center">
            <div className="flex justify-center mb-4 md:mb-0">
              <GradientButton>Get in touch</GradientButton>
            </div>
            <div className="flex justify-center">
              <GradientButton>Kick off</GradientButton>
            </div>
          </div>
        </div>
      </div>

      {/* TeamCard for screens >= 1000px */}
      <div className="hidden lg:flex justify-center order-2 mt-[30px] lg:mr-[90px] z-20">
        <TeamCard />
      </div>
    </div>
  );
};

export default HomePage;
