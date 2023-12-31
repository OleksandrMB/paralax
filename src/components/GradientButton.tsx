import { type } from "@testing-library/user-event/dist/type";
import React from "react";

type GradientButtonProps = {
  children: React.ReactNode;
  bg?: boolean;
};

// const GradientButton = ({ children, full = false }: GradientButtonProps) => {
//   return (
//     <div
//       className={`group absolute h-[59px] ${
//         full ? "w-full" : "w-[313px]"
//       } md:w-[287px] lg:w-[212px] z-50`}
//     >
//       {/* fix gradient */}
//       <button className=" group-hover:backdrop-filter:blur-[10px] w-full h-full rounded-[2000px] text-white font-helvetica-font font-bold leading-[125%] absolute z-10 text-center group-hover:bg-1 group-hover:backdrop-blur group-hover:border group-hover:border-[#564CEC] group-hover:ease-in-out duration-100 ">
//         {children}
//       </button>
//       {/* <div className=" blur-[7.5px] w-full h-full absolute left-0 right-0 z-40 cursor-pointer bg-red-500" /> */}
//       <div className="bg-gradient-to-r from-gradient-start to-gradient-end rounded-[2000px]  w-full h-full left-0 right-0 ml-auto mr-auto absolute group-hover:w-[146px] group-hover:bottom-[9px] group-hover:ease-in duration-200 " />
//     </div>
//   );
// };

const GradientButton = ({ children, bg = true }: GradientButtonProps) => {
  const handleClick = () => {};
  return (
    <div
      className={`group relative h-[59px] w-full lg:w-[212px]
      } ml-[15px] mr-[15px] md:ml-[30px] md:mr-[30px] lg:ml-[0] lg:mr-[0]  z-50`}
    >
      {/* fix gradient */}
      <button
        onClick={handleClick}
        className={`group-hover:backdrop-filter:blur-[10px] w-full h-full rounded-[2000px] text-white font-helvetica-font font-bold leading-[125%] absolute z-10 text-center group-hover:bg-1 ${
          bg
            ? "group-hover:border group-hover:border-[#564CEC] group-hover:backdrop-blur"
            : "border border-[#564CEC]"
        } group-hover:ease-in-out duration-100`}
      >
        {children}
      </button>
      <div
        className={` ${
          bg ? "" : "hidden"
        } bg-gradient-to-r from-[#564FE3] to-[#94D1F3] rounded-[2000px]  w-full h-full left-0 right-0 ml-auto mr-auto absolute group-hover:w-[68%] group-hover:bottom-[9px] group-hover:ease-in duration-200 `}
      />
    </div>
  );
};

export default GradientButton;
