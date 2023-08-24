import SwiperCoverflow from "../components/GlideCarousel";
import GradientButton from "../components/GradientButton";

const CarouselPage = () => {
  return (
    <div className="text-[#222] flex flex-col z-20 mt-[26px] ml-[70px]">
      <h1 className="font-epilogue-font text-[48px] leading-[140%] font-bold ">
        Wow Cases
      </h1>
      <div>
        <div className="w-full mt-[45px] mb-[47px] justify-items-center absolute left-[-35px]">
          <SwiperCoverflow />
        </div>
      </div>
      <div className="flex justify-center ml-[-105px] mt-[580px]">
        {/* add margin top 30px */}
        <GradientButton>Get in touch</GradientButton>
      </div>
    </div>
  );
};

export default CarouselPage;
