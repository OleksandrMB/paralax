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
    <div className="text-[#222] flex flex-col z-20 mt-[54px] ml-[70px]">
      <h1 className="font-epilogue-font text-[48px] leading-[140%] font-bold">
        They trust us
      </h1>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-4 grid-rows-2 gap-[30px] mt-[100px] mb-[80px] w-[745px]">
          {logos.map((url) => {
            return (
              <div className="bg-[#F7F8FA] rounded-[10px]">
                <img className="h-[100px] w-[100px] m-[30px]" src={url.logo} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex  justify-center">
        {/* add margin top 30px */}
        <GradientButton>Get in touch</GradientButton>
      </div>
    </div>
  );
};

export default TrustPage;
