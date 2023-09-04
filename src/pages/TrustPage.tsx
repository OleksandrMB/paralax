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

type TrustPageProps = {
  setcurrentPage: (pageIndex: number) => void;
};

const TrustPage: React.FC<TrustPageProps> = ({ setcurrentPage }) => {
  return (
    <div className="text-[#222] flex flex-col z-20 mt-[15px] md:mt-[25px] lg:mt-[54px] h-full">
      <h1 className="font-epilogue-font text-[24px] md:text-[32px] lg:text-[48px] leading-[140%] font-bold ml-[15px] md:ml-[35px]">
        They trust us
      </h1>
      <div className="flex flex-col justify-between md:justify-center h-[77vh] lg:h-[64vh]">
        <div className="w-full flex justify-center px-[15px] md:px-[35px] lg:px-[60px]">
          <div className="grid grid-cols-2 grid-rows-4 gap-[20px] md:grid-cols-4 md:grid-rows-2 md:gap-[30px] mt-[2vh] md:mt-[0] b-[80px]">
            {logos.map((url) => {
              return (
                <div className="bg-[#F7F8FA] rounded-[10px]">
                  <img
                    className="h-[8vh] w-[8vh] m-[20px] md:m-[30px]"
                    src={url.logo}
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex justify-center mb-[20px] md:mb-[0px] md:mt-[20px] lg:mt-[80px]">
          <GradientButton>Get in touch</GradientButton>
        </div>
      </div>
    </div>
  );
};

export default TrustPage;
