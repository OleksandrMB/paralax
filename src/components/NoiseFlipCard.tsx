import "./NoiseCards.css";

const NoiseFlipCard = ({
  title,
  paragraph,
  large,
}: {
  title: string;
  paragraph: string;
  large?: boolean;
}) => {
  return large ? (
    <div
      className={`group card h-[369px]"
      } relative flex justify-center items-center bg-[rgba(202, 223, 255, 0.2) border-[2px] border-solid border-gray-[#E2E2E2] cursor-pointer rounded-[20px]`}
    >
      <div className="z-20 h-[400px] lg:h-[369px] pt-[130px] px-[70px]">
        <h1 className="group-hover:invisible text-[#222] text-[29px] services-1430:text-[34px] bold text-center">
          {title}
        </h1>

        <div className="absolute top-0 left-0 invisible group-hover:visible pt-[30px] pl-[25px] pr-[25px] flex flex-col gap-[21px] backdrop-filter:blur-[11px] z-20">
          <h1
            className={`text-[#222] text-[23px] services-1430:text-[28px] bold text-center`}
          >
            {title}
          </h1>
          <p className={`text-[#222] text-[13px] services-1430:text-[16px]`}>
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  ) : (
    <div
      className={`group card h-full relative flex justify-center items-center bg-[rgba(202, 223, 255, 0.2) border-[2px] border-solid border-gray-[#E2E2E2] cursor-pointer rounded-[20px]`}
    >
      <div className="z-20">
        <h1 className="group-hover:invisible text-[#222] text-[15px] services-678:text-[29px] services-1430:text-[34px] bold text-center">
          {title}
        </h1>

        <div className="absolute top-0 left-0 invisible group-hover:visible pt-[13px] services-678:pt-[30px] services-678:px-[25px] px-[13px] flex flex-col gap-[8px] services-678:gap-[21px] backdrop-filter:blur-[11px] z-20">
          <h1
            className={`text-[#222] text-[15px] services-678:text-[27px] services-1430:text-[34px] bold text-center`}
          >
            {title}
          </h1>
          <p
            className={`text-[#222] text-[11px] services-678:text-[15px] services-1430:text-[20px] break-words`}
          >
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NoiseFlipCard;
