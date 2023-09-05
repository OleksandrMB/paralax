import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

interface CardItem {
  imgSrc: string;
  hoverImgSrc: string;
  title: string;
  name: string;
  position: string;
}

interface CardProps {
  item: CardItem;
}

const Card: React.FC<CardProps> = ({ item }) => {
  return (
    <div className="group w-[207px] h-[280px] MissionPage-1365:w-[277px] MissionPage-1365:h-[360px]">
      <img
        src={item.imgSrc}
        className={`w-full h-full img-MdBreakPoint:group-hover:invisible shrink`}
      />
      <div
        className={` group-hover:flex hidden img-MdBreakPoint:block invisible hover:border hover:border-[#564CEC] group-hover:visible cursor-pointer bg-opacity-10 bg-white w-full h-full pt-6 pr-4 pb-6 pl-4 flex-col gap-15 items-start justify-start absolute -top-0 ring-0`}
        style={{
          backdropFilter: "blur(5.9px)",
        }}
      >
        <div className="flex flex-col gap-0 items-start justify-start self-stretch flex-1 relative shrink ">
          <img
            className={`rounded-full relative mb-[7px] object-top object-cover shrink`}
            src={item.hoverImgSrc}
            alt={item.name}
          />

          <div className="text-black flex flex-row gap-2 items-start justify-start self-stretch flex-1 relative">
            <p className=" font-helvetica-font font-medium leading-[140%]">
              {item.title}
            </p>
          </div>

          <div className="flex flex-row items-end justify-between self-stretch shrink-0 relative">
            <div className="flex flex-col gap-1 items-start justify-start shrink-0 relative">
              <div className="text-black font-medium leading-[140%]">
                {item.name}
              </div>

              <div className="text-black font-light  leading-[140%]">
                {item.position}
              </div>
            </div>

            <div className="static h-auto w-">
              <a href="/" target="_blank" rel="noreferrer">
                <img src="/icons/linkedin.png" className="max-w-[4vw]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const MissionPage = () => {
  const data = [
    {
      imgSrc: "/imgs/IvanFull.png",
      hoverImgSrc: "/imgs/Ivan-1.png",
      title: "Architecture and development of the company",
      name: "Ivan Kosyuk",
      position: "Founder & CEO",
    },
    {
      imgSrc: "/imgs/IvanFull.png",
      hoverImgSrc: "/imgs/Ivan-1.png",
      title: "Architecture and development of the company",
      name: "Ivan Kosyuk",
      position: "Founder & CEO",
    },
    {
      imgSrc: "/imgs/IvanFull.png",
      hoverImgSrc: "/imgs/Ivan-1.png",
      title: "Architecture and development of the company",
      name: "Ivan Kosyuk",
      position: "Founder & CEO",
    },
    {
      imgSrc: "/imgs/IvanFull.png",
      hoverImgSrc: "/imgs/Ivan-1.png",
      title: "Architecture and development of the company",
      name: "Ivan Kosyuk",
      position: "Founder & CEO",
    },
    {
      imgSrc: "/imgs/IvanFull.png",
      hoverImgSrc: "/imgs/Ivan-1.png",
      title: "Architecture and development of the company",
      name: "Ivan Kosyuk",
      position: "Founder & CEO",
    },
  ];

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col gap-2.5 items-start justify-start relative mx-[70px]">
        <div className="flex">
          <img src="/icons/storyBook.png" />
          <div
            className="text-text-1 text-left relative flex-1"
            style={{
              font: "var(--approach-h-1, 700 32px/140% 'Epilogue', sans-serif)",
            }}
          >
            Mission{" "}
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center justify-start flex-1 relative">
          <div
            className="text-black-900-222222 text-left relative self-stretch"
            style={{ font: "400 16px/31px 'HelveticaNeueCyr', sans-serif" }}
          >
            First of all, we want to stop to stop our state’s economic downturn.
            That is why we provide the inflow of foreign capital and job
            opportunities for our fellow citizens.{" "}
          </div>
          <div
            className="text-black-900-222222 text-left relative self-stretch"
            style={{ font: "400 16px/31px 'HelveticaNeueCyr', sans-serif" }}
          >
            Secondly, as a former group of volunteers, we strive to make the
            world a better place. To make that happen, we focus on working with
            businesses that share this desire and developing solutions to
            improve the quality of people’s lives in every way possible.{" "}
          </div>
        </div>
      </div>

      <div className="">
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          loop={true}
          className="MissionPage-1365:max-w-[1198px]"
        >
          {/* <div key={index}>
            <img
              className="rounded-[12.46px] self-stretch flex-1 relative"
              src={item.imgSrc}
              alt={item.name}
            />
          </div> */}

          {data.map((item, index) => (
            <SwiperSlide
              key={index}
              className="w-[207px] h-[180px] MissionPage-1365:w-[277px] MissionPage-1365:h-[360px]"
            >
              <Card item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default MissionPage;
