import "./NoiseCards.css";
const NoiseCards = ({
  title,
  paragraph,
  colSpan,
}: {
  title: string;
  paragraph: string;
  colSpan?: string;
}) => {
  // add blur add background fix button update the positions of circles
  return (
    <div
      className={`card border-[2px] border-solid border-gray-[#E2E2E2] cursor-pointer ${colSpan} pl-[20px] rounded-[16px] pr-[20px] pt-[50px] h-[217px] backdrop:blur-[11px]`}
    >
      <h1 className="text-[#222] font-epilogue-font text-[23px] pb-[20px] bold text-center">
        {title}
      </h1>
      <p>{paragraph}</p>
    </div>
  );
};

export default NoiseCards;
