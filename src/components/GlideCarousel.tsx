import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";

import "swiper/swiper.min.css";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);
const SLIDES_DATA = [
  {
    case: "HealthcarePlatform",
    img: "/imgs/wowImg.png",
    title: "Healthcare platform",
  },

  ,
  {
    case: "Tornado",
    img: "/imgs/Tornado.png",
    title: "Tornado",
  },
];

const Slide = (data: any) => {
  return (
    <div className="flex flex-col justify-center items-center gap-[7px] bg-white px-[30px] py-[47px] w-full h-full">
      <img
        className="h-full w-[100vw] lg:w-[508px] ml-[-10px]"
        src="/imgs/wowImg.png"
        alt={" img"}
      />
      <span className="text-center text-[#222] text-[19px] font-bold font-epilogue-font leading-[140%]">
        Healthcare platform
      </span>
    </div>
  );
};

type SwiperCoverflowProps = {
  setcurrentCase: (caseName: string) => void;
};

const SwiperCoverflow: React.FC<SwiperCoverflowProps> = ({
  setcurrentCase,
}) => {
  const handleClick = (data: any) => {
    setcurrentCase(data.route);
  };
  return (
    <Swiper
      navigation
      pagination={{ clickable: true }}
      effect="coverflow"
      coverflowEffect={{
        rotate: 50,
        stretch: -10,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      }}
      slidesPerView={2}
      initialSlide={1}
      loop={true}
      centeredSlides
      grabCursor={true}
      className="h-[25vh] lg:h-[500px] w-full"
    >
      {SLIDES_DATA.map((data) => {
        return (
          <SwiperSlide>
            <Slide data={data} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default SwiperCoverflow;
