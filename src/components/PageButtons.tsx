import { useState } from "react";

const PageButtons = () => {
  const [activeButton, setActiveButton] = useState(Number);

  const handleClick = (id: number) => {
    return () => setActiveButton(id);
  };

  return (
    <div className=" flex flex-col gap-[10px] mt-[184px]">
      {Array(9)
        .fill(null)
        .map((_, index) => (
          <button
            key={index}
            className={`w-[14px] ${
              activeButton === index ? "h-[72px]" : "h-[14px]"
            }  ${
              activeButton === index
                ? "bg-gradient-to-b from-[#32E1F9] to-[#564CEC] to-[70%]"
                : "bg-white"
            } rounded-[181px] mr-[24px]  shadow-custom cursor-pointer ease-in duration-150`}
            onClick={handleClick(index)}
          />
        ))}
    </div>
  );
};

export default PageButtons;
