import React, { PropsWithChildren } from "react";

const GradientButton: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="group absolute h-[59px] w-[212px] z-50">
      {/* fix gradient */}
      <button className=" group-hover:backdrop-filter:blur-[10px] w-full h-full rounded-[2000px] text-white font-helvetica-font font-bold leading-[125%] absolute z-10 text-center group-hover:bg-1 group-hover:backdrop-blur group-hover:border group-hover:border-[#564CEC] group-hover:ease-in-out duration-100 ">
        {children}
      </button>
      <div className="bg-gradient-to-r from-gradient-start to-gradient-end rounded-[2000px]  w-full h-full left-0 right-0 ml-auto mr-auto absolute group-hover:w-[146px] group-hover:bottom-[9px] group-hover:ease-in duration-200 " />
    </div>
  );
};

export default GradientButton;
