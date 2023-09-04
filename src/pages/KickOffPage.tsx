import GradientButton from "../components/GradientButton";
import NoiseCards from "../components/NoiseCards";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useState } from "react";

const NoiseCardsData = [
  {
    title: "Business needs analysis",
    paragraph:
      "We will your key business goals, high-level product vision, which will serve as a foundation for further development and research  with us.",
  },
  {
    title: "Emergency tech consultation",
    paragraph:
      "Our top engineers are available for urgent review of your tech issues with further support,  required fixes and future maintenance plan.",
  },
  {
    title: "Technology and production analysis",
    paragraph:
      "We will identify and provide an overview of available technologies for the task, their pros and cons, as well as expected budgets and timelines for launching the tech solution.",
  },
  {
    title: "Mock-ups design",
    paragraph:
      "We will create 3 key designs to illustrate your future solution functionality, which will help you to present your idea effectively for the clear concept understanding. With an additional option of logo and pitch-deck design. ",
  },
  {
    title: "Market competitors research",
    paragraph:
      "We will help identifying competitors within an industry, analyzing current solutions regarding 'killer' features, and defining the main up- and downsides of each solution, as well as tracking market state and possible competitors with further defining of a key features set.",
  },
];

interface KickOffPageProps {
  setReadIsActive: (active: boolean) => void;
  readIsActive: boolean;
}

const KickOffPage: React.FC<KickOffPageProps> = ({
  setReadIsActive,
  readIsActive,
}) => {
  const handleRead = () => {
    return () => {
      setReadIsActive(true);
    };
  };

  return (
    <div
      className={`flex ${
        readIsActive ? "mt-[20px]" : "justify-around"
      } flex-col lg:justify-start`}
      style={{
        height: "calc(100% - 85px)",
      }}
    >
      <div className="text-[#222] flex gap-[30px] lg:gap-[0] flex-col">
        <h1 className="ml-[15px] lg:ml-[60px] font-helvetica-font text-[24px] md:text-[32px] lg:text-[45px] leading-[140%] font-bold">
          Kick-Off
        </h1>
        <p
          className={` ${
            readIsActive ? "md:block md:text-[22px]" : "md:hidden"
          } ml-[15px] lg:ml-[60px] block lg:block font-helvetica-font text-[16px] lg:text-[22px] font-normal leading-[150%] mr-[14px] lg:mr-[61px]`}
        >
          Kick-off as an efficient way to start cooperating with Gart is a
          certain win-win. It is a great opportunity for you to get acquainted
          with us and for us to find the best way to facilitate your big ideas
          and business.
        </p>
      </div>
      <div className="ml-[60px] hidden lg:grid grid-cols-6 gap-y-[25px] gap-x-[50px] kick-1485:gap-y-[40px] mt-[40px] mr-[14px] lg:mr-[61px]">
        {NoiseCardsData.map((data, index) => {
          const isLastTwo = index >= NoiseCardsData.length - 2;
          return (
            <NoiseCards
              key={index}
              title={data.title}
              paragraph={data.paragraph}
              colSpan={isLastTwo ? "col-span-3" : "col-span-2"}
            />
          );
        })}
      </div>
      <div
        className={`hidden ${
          readIsActive ? "hidden" : "md:flex "
        } lg:hidden justify-center`}
        onClick={handleRead()}
      >
        <GradientButton bg={false}>Read More</GradientButton>
      </div>
      <div
        className={`ml-[15px] hidden lg:hidden flex-col gap-[20px] mr-[14px] lg:mr-[61px] ${
          readIsActive ? "hidden" : "md:flex"
        } `}
      >
        <div className="grid grid-cols-2 gap-x-[18px] gap-y-[20px] ">
          <NoiseCards
            key={NoiseCardsData[0].title}
            title={NoiseCardsData[0].title}
            paragraph={NoiseCardsData[0].paragraph}
          />
          <NoiseCards
            key={NoiseCardsData[1].title}
            title={NoiseCardsData[1].title}
            paragraph={NoiseCardsData[1].paragraph}
          />
          <NoiseCards
            key={NoiseCardsData[2].title}
            title={NoiseCardsData[2].title}
            paragraph={NoiseCardsData[2].paragraph}
          />
          <NoiseCards
            key={NoiseCardsData[3].title}
            title={NoiseCardsData[3].title}
            paragraph={NoiseCardsData[3].paragraph}
          />
        </div>
        <NoiseCards
          key={NoiseCardsData[4].title}
          title={NoiseCardsData[4].title}
          paragraph={NoiseCardsData[4].paragraph}
        />
      </div>
      <div className="ml-[15px] md:hidden ">
        <Swiper spaceBetween={30} slidesPerView="auto">
          {NoiseCardsData.map((data, index) => {
            return (
              <SwiperSlide key={index} style={{ width: "313px" }}>
                <NoiseCards
                  key={index}
                  title={data.title}
                  paragraph={data.paragraph}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div
        className={`justify-center lg:mt-[30px] ${
          readIsActive ? "hidden" : "flex"
        } `}
      >
        {/* add margin top 30px */}
        <GradientButton>Get in touch</GradientButton>
      </div>
    </div>
  );
};

export default KickOffPage;
