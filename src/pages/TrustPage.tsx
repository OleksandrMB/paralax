import GradientButton from "../components/GradientButton";

const logos = [
  { logo: "/imgs/WZMN.png" },
  { logo: "/imgs/EVA.png" },
  { logo: "/imgs/GO.png" },
  { logo: "/imgs/Farm.png" },
  { logo: "/imgs/Peer.png" },
  { logo: "/imgs/Stand.png" },
  { logo: "/imgs/P.png" },
  { logo: "/imgs/Sparkbird.png" },
];

const TrustPage = () => {
  return (
    <div className="text-[#222] flex flex-col z-20 mt-[15px] md:mt-[25px] lg:mt-[54px] h-full">
      <h1 className="font-epilogue-font text-[24px] md:text-[32px] lg:text-[48px] leading-[140%] font-bold ml-[15px] md:ml-[35px]">
        They trust us
      </h1>
      <div
        className="flex flex-col justify-between md:justify-start"
        style={{
          height: "calc(100% - 130px)",
        }}
      >
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-2 grid-rows-4 gap-[20px] md:grid-cols-4 md:grid-rows-2 md:gap-[30px] mt-[50px] md:mt-[100px] b-[80px]">
            {logos.map((url) => {
              return (
                <div className="bg-[#F7F8FA] rounded-[10px]">
                  <img
                    className="h-[65px] w-[65px] m-[20px] md:h-[100px] md:w-[100px] md:m-[30px]"
                    src={url.logo}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center mb-[20px] md:mb-[0px] md:mt-[20px] lg:mt-[80px]">
          {/* add margin top 30px */}
          <GradientButton>Get in touch</GradientButton>
        </div>
      </div>
    </div>
  );
};

export default TrustPage;
