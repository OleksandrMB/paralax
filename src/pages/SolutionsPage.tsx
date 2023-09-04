import GradientButton from "../components/GradientButton";
import NoiseFlipCard from "../components/NoiseFlipCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "@glidejs/glide/dist/css/glide.core.css";
import "@glidejs/glide/dist/css/glide.theme.css";

const NoiseCardsData = [
  {
    title: "Medical Consumables Market-Making",
    paragraph:
      "Trained on guidelines our ChatGPT-based bot actively reaches interested parties across many channels, presents the company as well as offers across 63 currencies and cryptocurrencies in 30+ countries, answers questions, redirects the chats to a manager for transaction completion.",
  },
  {
    title: "Crypto Exchange Platform for EU and Arab Markets",
    paragraph:
      "Trained on guidelines our ChatGPT-based bot actively reaches interested parties across many channels, presents the company as well as offers across 63 currencies and cryptocurrencies in 30+ countries, answers questions, redirects the chats to a manager for transaction completion.",
  },
  {
    title: "Messaging Analyzer for a Real Estate Company",
    paragraph:
      "Trained on guidelines our ChatGPT-based bot actively reaches interested parties across many channels, presents the company as well as offers across 63 currencies and cryptocurrencies in 30+ countries, answers questions, redirects the chats to a manager for transaction completion.",
  },
];

type SolutionsPageProps = {
  setcurrentPage: (pageIndex: number) => void;
};

const SolutionsPage: React.FC<SolutionsPageProps> = ({ setcurrentPage }) => {
  return (
    <div className="flex flex-col h-full">
      <img
        className="absolute hidden lg:block right-[70px] -top-[-90px]  h-[291px] w-[257px] z-10"
        src="/icons/robot.png"
        alt="robot img"
      />
      <div className="ml-[15px] md:ml-[60px] text-[#222] flex flex-col z-20 mt-[15px]">
        <h1 className="font-epilogue-font text-[24px] md:text-[45px] leading-[140%] font-bold">
          Engineering Solutions
        </h1>
        <p className="font-epilogue-font text-[16px] md:text-[22px] lg:text-[24px] font-normal leading-[150%] lg:pr-[250px] mr-[15px] md:mt-[28px]">
          Some systems we designed and built to generate value for businesses on
          the back stage. They optimize lead generation, market making or client
          research within the applications our clients already use. Learn below
          what those systems accomplish:
        </p>
      </div>
      <div className="ml-[15px] md:ml-[60px] hidden lg:grid grid-cols-3 gap-x-[20px] h-[369px] gap-y-[50px] mt-[15px] md:mt-[28px]">
        {NoiseCardsData.map((data) => {
          return (
            <NoiseFlipCard
              key={data.title}
              title={data.title}
              paragraph={data.paragraph}
              large={true}
            />
          );
        })}
      </div>
      <div className="ml-[15px] md:ml-[60px] flex lg:hidden justify-center items-center">
        <Swiper spaceBetween={30} slidesPerView="auto">
          {NoiseCardsData.map((data) => {
            return (
              <SwiperSlide
                key={data.title}
                style={{
                  width: "313px",
                }}
              >
                <NoiseFlipCard
                  title={data.title}
                  paragraph={data.paragraph}
                  large={true}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="flex  justify-center mt-[28px]">
        {/* add margin top 30px */}

        <GradientButton>Get in touch</GradientButton>
      </div>
    </div>
  );
};

export default SolutionsPage;
