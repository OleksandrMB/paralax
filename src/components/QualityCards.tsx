import { type } from "@testing-library/user-event/dist/type";

const CARD_DATA = [
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
];

type CardData = (typeof CARD_DATA)[number];

const QualityCard = ({ icon, title, paragraph, cardNumber }: CardData) => {
  return (
    <div className="group flex flex-col items-center justify-start shrink-0 w-[271px] h-[364px] cursor-pointer relative">
      <div className="flex flex-col gap-[9px] items-center justify-start shrink-0 w-[131.81px] h-[129.08px] relative">
        <div className="group-hover:blur-[7.5px] absolute group-hover:ease-in duration-[0.3s] transition-all">
          <div
            className="rounded-tl-[13.64px] rounded-tr-[13.64px] rounded-br-[85.45px] rounded-bl-[85.45px] pt-[63.63px] pr-[22.73px]  pl-[22.73px] flex flex-col gap-[9.09px] items-center justify-center self-stretch shrink-0 w-[131px] h-[90px] group-hover:top-[17px] relative"
            style={{
              background:
                "var(--gradient-gradient-3, linear-gradient(-76.33deg, rgba(50, 225, 249, 0.50) 0%,rgba(86, 76, 236, 1.00) 73.41175675392151%))",
            }}
          ></div>
        </div>
      </div>
      <div
        className=" rounded-[29px] flex flex-col items-center justify-center self-stretch flex-1 relative overflow-hidden"
        style={{
          margin: "-112.72px 0 0 0",
          boxShadow:
            "inset 5.45px 5.45px 36.36px 0px rgba(255, 255, 255, 0.50)",
          backdropFilter: "blur(13.64px)",
        }}
      >
        <div className="flex flex-col gap-[9px] items-center justify-center self-stretch shrink-0 relative">
          <div
            className="text-[#ffffff] text-center relative self-stretch"
            style={{ font: "800 23px/140% 'Epilogue', sans-serif" }}
          >
            {cardNumber}
          </div>
        </div>
        <div className="p-[4.55px] flex flex-row gap-0.5 items-center justify-center shrink-0 relative">
          <img
            src={icon}
            className="shrink-0 relative overflow-visible"
            width="67"
            height="66"
          ></img>
        </div>
        <div className="flex flex-col gap-[9px] items-center justify-center self-stretch shrink-0 relative">
          <div className="flex flex-row gap-[9px] items-center justify-center self-stretch shrink-0 relative">
            <div
              className="text-[#ffffff] text-center relative flex-1]"
              style={{
                font: "700 18px/140% 'Epilogue', sans-serif",
                height: "50px",
              }}
            >
              {title}
            </div>
          </div>
          <div className="flex flex-row gap-[9px] items-center justify-center self-stretch shrink-0 relative">
            <div
              className="text-[#ffffff] text-center relative flex-1"
              style={{
                font: "400 14px/140% 'Epilogue', sans-serif",
                height: "120px",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {paragraph}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const QualityCards = () => {
  return (
    <div className="flex gap-[28px] justify-center">
      {CARD_DATA.map((data) => {
        return (
          <QualityCard
            icon={data.icon}
            title={data.title}
            paragraph={data.paragraph}
            cardNumber={data.cardNumber}
          />
        );
      })}
    </div>
  );
};

export default QualityCards;
