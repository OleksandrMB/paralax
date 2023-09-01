import SwiperCoverflow from "../components/GlideCarousel";
import GradientButton from "../components/GradientButton";
type CarouselPageProps = {
  setcurrentCase: (caseName: string) => void;
};
const CarouselPage: React.FC<CarouselPageProps> = ({ setcurrentCase }) => {
  return (
    <div className="text-[#222] flex flex-col z-20 mt-[26px]">
      <h1 className="font-epilogue-font text-[48px] leading-[140%] font-bold ml-[15px] md:ml-[60px] ">
        Wow Cases
      </h1>
      <div>
        <div className="w-full mt-[45px] mb-[47px] justify-items-center absolute left-[0]">
          <SwiperCoverflow setcurrentCase={setcurrentCase} />
        </div>
      </div>
      <div className="flex justify-center mt-[400px] lg:mt-[580px]">
        <GradientButton>Get in touch</GradientButton>
      </div>
    </div>
  );
};

export default CarouselPage;
