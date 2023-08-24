import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.css";
import "@glidejs/glide/dist/css/glide.theme.css";
import { Swiper, SwiperSlide } from "swiper/react";

type CardDataProps = {
  icon?: string;
  title: string;
  paragraph: string;
  cardNumber?: number;
  large?: boolean;
};
const CARD_DATA = {
  small: [
    {
      icon: "/icons/Brain.png",
      title: "Identify & Establish",
      paragraph:
        "We diligently identify the primary need and establish definitive success criteria.",
      cardNumber: 1,
    },
    {
      icon: "/icons/Group.png",
      title: "Explore & Select",
      paragraph:
        "We contemplate various solutions to address the need and judiciously select the most fitting technology.",
      cardNumber: 2,
    },
    {
      icon: "/icons/graph.png",
      title: "Investigate & Refine",
      paragraph:
        "We conduct thorough research and engage with users to ascertain the validity of our proposal. If validated, we develop a prototype; if not, we make necessary adjustments.",
      cardNumber: 3,
    },
    {
      icon: "/icons/Component7.png",
      title: "Initiate & Cultivate",
      paragraph:
        "Upon successful evaluation, we formulate an in-depth plan and commence construction. Post-launch, we actively support its development and refinement.",
      cardNumber: 4,
    },
  ],
  large: [
    {
      title: "Social Media Data Harvesting:",
      paragraph:
        "Real-time analysis of market sentiment Mass conversion of conversation into insights Competitor monitoring in social media",
    },
    {
      title: "Automatic Audience Interaction:",
      paragraph:
        "Open forum human-like participation for promote a given agenda Provide human-like support to clients in need Act as universal sales agent with complex sales funnels ",
    },
    {
      title: "Employee management:",
      paragraph:
        "Supported access to a vast knowledge base for new employees Private employee consultation to manage burn-out and conflicts in a non-intrusive ways Aid employees in understanding and tracking own contribution to company goals",
    },
  ],
};

type CardData = {
  icon?: string;
  title: string;
  paragraph: string;
  cardNumber?: number;
  large?: boolean;
};

// const QualityCard = ({
//   icon,
//   title,
//   paragraph,
//   cardNumber,
//   large,
// }: CardData) => {
//   return (
//     <div
//       className={`group flex flex-col items-center shrink-0 ${
//         large ? "w-[371px]" : "w-[271px]"
//       } ${large ? "h-[363px]" : "h-[364px]"}  cursor-pointer relative`}
//     >
//       <div className="flex flex-col gap-[9px] items-center justify-start shrink-0 w-[131.81px] h-[129.08px] relative">
//         <div className="group-hover:blur-[7.5px] absolute group-hover:ease-in duration-[0.3s] transition-all">
//           <div
//             className="rounded-tl-[13.64px] rounded-tr-[13.64px] rounded-br-[85.45px] rounded-bl-[85.45px] pt-[63.63px] pr-[22.73px]  pl-[22.73px] flex flex-col gap-[9.09px] items-center justify-center self-stretch shrink-0 w-[131px] h-[90px] group-hover:top-[17px] relative"
//             style={{
//               background:
//                 "var(--gradient-gradient-3, linear-gradient(-76.33deg, rgba(50, 225, 249, 0.50) 0%,rgba(86, 76, 236, 1.00) 73.41175675392151%))",
//             }}
//           ></div>
//         </div>
//       </div>
//       <div
//         className=" rounded-[29px] flex flex-col items-center justify-center self-stretch flex-1 relative overflow-hidden"
//         style={{
//           margin: "-112.72px 0 0 0",
//           boxShadow:
//             "inset 5.45px 5.45px 36.36px 0px rgba(255, 255, 255, 0.50)",
//           backdropFilter: "blur(13.64px)",
//         }}
//       >
//         {large ? null : (
//           <div className="flex flex-col gap-[9px] items-center justify-center self-stretch shrink-0 relative">
//             <div
//               className="text-[#ffffff] text-center relative self-stretch"
//               style={{ font: "800 23px/140% 'Epilogue', sans-serif" }}
//             >
//               {cardNumber}
//             </div>
//           </div>
//         )}
//         {large ? null : (
//           <div className="p-[4.55px] flex flex-row gap-0.5 items-center justify-center shrink-0 relative mb-[20px]">
//             <img
//               src={icon}
//               className="shrink-0 relative overflow-visible"
//               width="67"
//               height="66"
//             ></img>
//           </div>
//         )}
//         <div className="flex flex-col gap-[9px] items-center justify-center self-stretch shrink-0 relative">
//           <div className="flex flex-row gap-[9px] items-center justify-center self-stretch shrink-0 relative">
//             <div
//               className="text-[#ffffff] text-center relative flex-1]"
//               style={{
//                 font: "700 18px/140% 'Epilogue', sans-serif",
//                 height: "50px",
//               }}
//             >
//               {title}
//             </div>
//           </div>
//           <div className="flex flex-row gap-[9px] items-center justify-center self-stretch shrink-0 relative">
//             <div
//               className="text-[#ffffff] text-center relative flex-1 pl-[22px] pr-[22px]"
//               style={{
//                 font: "400 14px/140% 'Epilogue', sans-serif",
//                 height: "120px",
//                 overflow: "hidden",
//                 textOverflow: "ellipsis",
//               }}
//             >
//               {paragraph}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

function QualityCard({ icon, title, paragraph, cardNumber }: any) {
  return (
    <div className="group flex flex-col items-center w-[271px] h-[364px] cursor-pointer relative rounded ">
      <div className="flex flex-col gap-[9px] items-center justify-start w-[131.81px] h-[129.08px] relative">
        <div className="absolute">
          <div
            className="rounded-tl-[13.64px] rounded-tr-[13.64px] rounded-br-[85.45px] rounded-bl-[85.45px] pt-[63.63px] pr-[22.73px]  pl-[22.73px] flex flex-col gap-[9.09px] items-center justify-center w-[131px] h-[90px]"
            style={{
              background:
                "var(--gradient-gradient-3, linear-gradient(-76.33deg, rgba(50, 225, 249, 0.50) 0%,rgba(86, 76, 236, 1.00) 73.41175675392151%))",
            }}
          />
        </div>
      </div>
      <div
        className="rounded-[29px] flex flex-col items-center justify-start flex-1 relative overflow-hidden mt-[-112.72px] shadow-inner"
        style={{
          boxShadow:
            "inset 5.45px 5.45px 36.36px 0px rgba(255, 255, 255, 0.50)",
          backdropFilter: "blur(13.64px)",
        }}
      >
        <div
          className="text-[#ffffff] mt-[20px] mb-[22px]"
          style={{ font: "800 23px/140% 'Epilogue', sans-serif" }}
        >
          {cardNumber}
        </div>

        <div className="p-[4.55px] flex flex-row gap-0.5 items-center justify-center mb-[20px]">
          <img src={icon} alt="Quality Icon" width="67" height="66"></img>
        </div>
        <div className="flex flex-col gap-[9px] items-center justify-center">
          <div
            className="text-[#ffffff] text-center flex-1"
            style={{
              font: "700 18px/140% 'Epilogue', sans-serif",
              height: "50px",
            }}
          >
            {title}
          </div>
          <div
            className="text-[#ffffff] text-center flex-1 pl-[22px] pr-[22px]"
            style={{
              font: "400 14px/140% 'Epilogue', sans-serif",
              height: "120px",
            }}
          >
            {paragraph}
          </div>
        </div>
      </div>
    </div>
  );
}

// <Swiper slidesPerView={4} initialSlide={0} centeredSlides grabCursor={true}>
const SwiperQualityCards = ({ large }: { large?: boolean }) => {
  return (
    <div className="flex qualityCards-betwen:hidden justify-start">
      {large
        ? CARD_DATA.large.map((data, index) => {
            return (
              <QualityCard
                title={data.title}
                paragraph={data.paragraph}
                key={index}
                large={large}
              />
            );
          })
        : CARD_DATA.small.map((data) => {
            return (
              <QualityCard
                icon={data.icon}
                title={data.title}
                paragraph={data.paragraph}
                cardNumber={data.cardNumber}
                key={data.cardNumber}
              />
            );
          })}
    </div>
  );
};

const QualityCards = ({ large }: { large?: boolean }) => {
  return (
    <>
      {/* <div
          className="hidden qualityCards-display:flex gap-[30px]"
          style={{
            width: "calc(100vw - 300px)",
            justifyContent: "space-between",
          }}
        >
          {CARD_DATA.small.map((data) => {
            return (
              <div>
                <QualityCard
                  icon={data.icon}
                  title={data.title}
                  paragraph={data.paragraph}
                  cardNumber={data.cardNumber}
                />
              </div>
            );
          })}
        </div>
        <div
          className="flex qualityCards-display:hidden  justify-start gap-[30px]"
          style={{
            width: "calc(120vw)",
            justifyContent: "space-between",
          }}
        >
          <Swiper slidesPerView={4} loop={true} loopFillGroupWithBlank={true}>
            {CARD_DATA.small.map((data) => {
              return (
                <SwiperSlide>
                  <div>
                    <QualityCard
                      icon={data.icon}
                      title={data.title}
                      paragraph={data.paragraph}
                      cardNumber={data.cardNumber}
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div> */}
      <div className="min-h-scree flex justify-center items-center">
        <Swiper spaceBetween={30} slidesPerView="auto">
          {CARD_DATA.small.map((data) => (
            <SwiperSlide key={data.cardNumber} style={{ width: "271px" }}>
              <QualityCard {...data} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default QualityCards;
