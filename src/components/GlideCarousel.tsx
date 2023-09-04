import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";

import "swiper/swiper.min.css";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);
const SLIDES_DATA = [
  {
    case: "bachu",
    img: "/imgs/bachu.png",
    title: "Bachu",
  },

  {
    case: "mySun",
    img: "/imgs/mySun.png",
    title: "My sun app",
  },
  {
    case: "saveUA",
    img: "/imgs/saveUA.png",
    title: "SaveUA",
  },

  {
    case: "tornado",
    img: "/imgs/Tornado.png",
    title: "Tornado",
  },
  {
    case: "forpost",
    img: "/imgs/forpost.png",
    title: "Forpost",
  },
  {
    case: "interLegion",
    img: "/imgs/interLegion.png",
    title: "International Legion",
  },
];

const Slide = ({ data }: { data: any }) => {
  console.log(data);
  return (
    <div className="flex flex-col justify-center items-center gap-[7px] bg-white px-[30px] py-[47px] w-full h-full">
      <img
        className={`h-full ${
          data.title === "My sun app"
            ? " w-[20vw] lg:w-[308px]"
            : "w-[100vw] lg:w-[508px]"
        } ml-[-10px]`}
        src={data.img}
        alt={" img"}
      />
      <span className="text-center text-[#222] text-[19px] font-bold font-epilogue-font leading-[140%]">
        {data.title}
      </span>
    </div>
  );
};

type SwiperCoverflowProps = {
  setcurrentCase: (caseName: string) => void;
  setcurrentPage: (pageIndex: number) => void;
};

const SwiperCoverflow: React.FC<SwiperCoverflowProps> = ({
  setcurrentCase,
  setcurrentPage,
}) => {
  const handleClick = (data: any) => {
    return () => {
      setcurrentCase(data.case);
      setcurrentPage(0);
      console.log(data);
    };
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
          <SwiperSlide onClick={handleClick(data)}>
            <Slide data={data} />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};
export default SwiperCoverflow;
