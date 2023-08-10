import "./NoiseCards.css";

const NoiseFlipCard = ({
  title,
  paragraph,
}: {
  title: string;
  paragraph: string;
}) => {
  return (
    <div className="group h-[280px] relative flex justify-center items-center bg-[rgba(202, 223, 255, 0.2) border-[2px] border-solid border-gray-[#E2E2E2] cursor-pointer rounded-[20px]">
      <div className="z-20">
        <h1 className="group-hover:invisible text-[#222] text-[34px] bold text-center">
          {title}
        </h1>

        <div className="absolute top-0 left-0 invisible group-hover:visible pt-[30px] pl-[25px] pr-[25px] flex flex-col gap-[21px] backdrop-filter:blur-[11px] z-20">
          <h1 className="text-[#222] text-[34px] bold text-center">{title}</h1>
          <p className="text-[#222] text-[20px]">{paragraph}</p>
        </div>
      </div>
    </div>
  );
};

export default NoiseFlipCard;
