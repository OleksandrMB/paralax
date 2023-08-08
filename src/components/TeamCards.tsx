import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import TeamCard from "./TeamCard";

const TEAM_DATA = {
  Rodion: {
    image: "/imgs/RodeonFull.png",
    descriotion: "Architecture and development of the company",
    name: "Rodion Bychkoviak",
    position: "UI/UX Architect",
    likdnUrl: "",
  },
  Ivan: {
    image: "/imgs/IvanFull.pn",
    descriotion: "Architecture and development of the company",
    name: "Ivan Kosyuk",
    position: "Founder & CEO",
    likdnUrl: "",
  },
  Elena: {
    image: "/imgs/ElenaFull.pn",
    descriotion:
      "Setting and achieving organizational objectives, human resource planning",
    name: "Elena Nogikh",
    position: "Head of HR",
    likdnUrl: "",
  },
  Oksana: {
    image: "/imgs/OksanaFull.pn",
    descriotion: "Transferring business needs to working solutions",
    name: "Oksana Basova",
    position: "Chief of BA/PM department",
    likdnUrl: "",
  },
  Dima: {
    image: "/imgs/DimaFull.pn",
    descriotion: "Technical planning and managing the execution",
    name: "Dmitry Bagow",
    position: "CTO",
    likdnUrl: "",
  },
};

const TeamCards = () => {
  return (
    <div className="flex mr-[23px]">
      <div className="group relative w-[192px] h-[277px] mt-[223px]">
        <TeamCard
          image="/imgs/RodionFull.png"
          description="Architecture and development of the company"
          name="Rodion Bychkoviak"
          position="UI/UX Architect"
          linkedinUrl="https://www.linkedin.com/in/uiarchitector/"
          radius="rounded-[25.43px]"
          size="small"
        />
      </div>
      <div className="flex flex-col gap-[30px] ml-[10px]">
        <div className="group w-[237px] h-[337px] relative">
          <TeamCard
            image="/imgs/IvanFull.png"
            description="Architecture and development of the company"
            name="Ivan Kosyuk"
            position="Founder & CEO"
            linkedinUrl="https://www.linkedin.com/in/ivan-kosyuk-82a05b247/"
            radius="rounded-[14.53px]"
            size="large"
          />
        </div>
        <div className="group w-[213px] h-[304px] ml-[13px] relative">
          <TeamCard
            image="/imgs/ElenaFull.png"
            description="Setting and achieving organizational objectives, human resource planning"
            name="Elena Nogikh"
            position="Head of HR"
            linkedinUrl="https://www.linkedin.com/in/elena-nogikh-27b37a103/"
            radius="rounded-[14.53px]"
            size="mid"
          />
        </div>
      </div>
      <div className="flex flex-col gap-[26px] ml-[19px]">
        <div className="group relative w-[192px] h-[277px] mt-[67px] ml-[8px]">
          <TeamCard
            image="/imgs/OksanaFull.png"
            description="Transferring business needs to working solutions"
            name="Oksana Basova"
            position="Chief of BA/PM 
            department"
            linkedinUrl="https://www.linkedin.com/in/oksana-basova/"
            radius="rounded-[25.43px]"
            size="small"
          />
        </div>
        <div className="group relative w-[192px] h-[277px]">
          {/* <img
          src="/imgs/DimaFull.png"
          className={`w-[135px] h-[194px] rounded-[25.43px] object-cover`}
        /> */}
          <TeamCard
            image="/imgs/DimaFull.png"
            description="Technical planning and managing the execution"
            name="Dmitry Bagow"
            position="CTO"
            linkedinUrl="https://www.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F"
            radius="rounded-[25.43px]"
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamCards;
