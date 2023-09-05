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
    <div className="flex">
      <div className="group relative img-MdBreakPoint:w-[182px]  img-MdBreakPoint:h-[260px] img-LgbreakPoint:w-[192px] img-LgbreakPoint:h-[277px] md:w-[119px] md:h-[200px] w-[79.698px] h-[114.465px] mt-[110px] md:mt-[200px] lg:mt-[223px]">
        <TeamCard
          image="/imgs/RodionFull.png"
          description="Developing strategies for visual and user experience, ensuring alignment of design with company’s overall goals and vision. "
          name="Rodion Bychkoviak"
          position="UI/UX Architect"
          linkedinUrl="https://www.linkedin.com/in/uiarchitector/"
          radius="rounded-[15px] md:rounded-[25.43px]"
          size="extraSmall"
        />
      </div>
      <div className="flex flex-col gap-[30px] ml-[10px]">
        <div className="group img-MdBreakPoint:w-[200px] img-MdBreakPoint:h-[33vh] img-LgbreakPoint:w-[237px] img-LgbreakPoint:h-[337px] md:w-[154px] md:h-[256px] w-[102.698px] h-[147.628px] relative">
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
        <div className="group img-MdBreakPoint:w-[190px] img-MdBreakPoint:h-[290px] img-LgbreakPoint:w-[213px] img-LgbreakPoint:h-[304px] ml-[8px] lg:ml-[13px] md:w-[138px] md:h-[228px] w-[92px] h-[132px] relative">
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
      <div className="flex flex-col gap-[33px] md:gap-[30px] lg:gap-[26px] ml-[12px] lg:ml-[19px]">
        <div className="group relative img-MdBreakPoint:w-[182px] img-MdBreakPoint:h-[260px] img-LgbreakPoint:w-[192px] img-LgbreakPoint:h-[277px] md:w-[124px] md:h-[178px] w-[71px] h-[102px] mt-[43px] md:mt-[77px] lg:mt-[53px] ml-[8px]">
          <TeamCard
            image="/imgs/OksanaFull.png"
            description="Transferring business needs to working solutions"
            name="Oksana Basova"
            position="Chief of BA/PM 
            department"
            linkedinUrl="https://www.linkedin.com/in/oksana-basova/"
            radius="rounded-[15px] md:rounded-[25.43px]"
            size="small"
          />
        </div>
        <div className="group relative img-MdBreakPoint:w-[182px] img-MdBreakPoint:h-[250px] img-LgbreakPoint:w-[192px] img-LgbreakPoint:h-[277px] md:w-[107px] md:h-[178px] w-[71px] h-[100px]">
          <TeamCard
            image="/imgs/DimaFull.png"
            description="Technical planning and managing the execution"
            name="Dmitry Bagow"
            position="CTO"
            linkedinUrl="https://www.linkedin.com/?original_referer=https%3A%2F%2Fwww.google.com%2F"
            radius="rounded-[15px] md:rounded-[25.43px]"
            size="small"
          />
        </div>
      </div>
    </div>
  );
};

export default TeamCards;
