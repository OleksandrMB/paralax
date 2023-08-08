import React from "react";
import GradientButton from "../components/GradientButton";
import TeamCard from "../components/TeamCards";
import PageButtons from "../components/PageButtons";

const HomePage = () => {
  return (
    <div className="flex justify-between w-full mt-[109px]">
      <img
        src="/icons/Intersect.png"
        className="w-[622px] h-[692px] absolute bottom-[0px] right-[23.104px] z-10"
      />
      <div className="ml-[70px] mt-[75px]">
        <div className="flex flex-col gap-[63.57px]">
          <h1 className="font-epilogue-font font-bold text-black-900 uppercase text-58 leading-120 flex-grow z-20">
            Your tech-wise <br /> advisor and software <br /> development <br />
            contractor
          </h1>
          <p className="text-27 font-normal font-helvetica-font leading-120 z-20">
            We transform complex issues into innovative solutions.
            <br /> Better and Faster
          </p>
        </div>
        <div className="flex gap-[18px] mt-[27.25px]">
          <GradientButton>Get in touch</GradientButton>
          <GradientButton>Kick off</GradientButton>
        </div>
      </div>
      <div className="flex justify-center mr-[45px] z-20">
        <TeamCard />
      </div>
    </div>
  );
};

export default HomePage;
