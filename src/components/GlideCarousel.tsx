import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";

// // Import Swiper styles
import "swiper/swiper.min.css";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const Slide = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-[7px] bg-white px-[30px] py-[47px] h-full">
      <img
        className="h-full w-[508px] ml-[-10px]"
        src="/imgs/wowImg.png"
        alt="Healthcare platform img"
      />
      <span className="text-center text-[#222] text-[19px] font-bold font-epilogue-font leading-[140%]">
        Healthcare platform
      </span>
    </div>
  );
};

export default function SwiperCoverflow() {
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
      className="h-[224px] md:h-[458px] w-full"
    >
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
      <SwiperSlide>
        <Slide />
      </SwiperSlide>
    </Swiper>
  );
}
