import GradientButton from "../components/GradientButton";
import TeamCard from "../components/TeamCards";

type HomePageProps = {
  setcurrentPage: (pageIndex: number) => void;
};

const HomePage: React.FC<HomePageProps> = ({ setcurrentPage }) => {
  return (
    <div className="flex justify-between z-10 h-full flex-col lg:flex-row ">
      <div className="order-2 h-full lg:order-1 lg:mt-[10vh] mt-[20px] mr-[25px]">
        <img
          src="/icons/Intersect.png"
          className="w-[622px] h-[692px] absolute top-[150px] hidden img-MdBreakPoint:block right-[140px] img-breakPoint:right-[150px] z-[10]"
        />
        <div className="lg:mt-[9vh] h-full flex flex-col justify-around lg:justify-normal">
          <div className="flex flex-col gap-[20px] lg:gap-[6vh] ml-[15px] md:ml-[30px]">
            <h1 className="md:text-[32px] custom-md:text-[58px] font-epilogue-font font-bold text-black-900 uppercase lg:text-[44px] text-[24px] leading-120 z-20">
              Your tech-wise <br /> advisor and software <br /> development{" "}
              <br />
              contractor
            </h1>
            <p className="md:text-[22px] custom-md:text-[27px] lg:text-[23px] text-[16px] font-normal font-helvetica-font leading-120 z-20">
              We transform complex issues into innovative solutions.
              <br /> Better and Faster
            </p>
          </div>

          {/* TeamCard for screens < 1000px */}
          <div className=" img-SmBreakPoint:hidden lg:mt-[20px] flex justify-center">
            <TeamCard />
          </div>

          <div className="flex flex-col md:flex-row gap-[20px] mb-[100px] md:gap-[0px] lg:gap-[18px] img-SmBreakPoint:ml-[35px] md:mt-[25px] lg:justify-start justify-center  md:mr-[0] home-1108:static img-SmBreakPoint:absolute img-SmBreakPoint:top-[730px]">
            <GradientButton>Get in touch</GradientButton>

            <GradientButton>Kick off</GradientButton>
          </div>
        </div>
      </div>

      {/* TeamCard for screens >= 1000px */}
      <div className="hidden img-SmBreakPoint:flex justify-center order-2 mt-[30px] lg:mr-[90px] z-20">
        <TeamCard />
      </div>
    </div>
  );
};

export default HomePage;
