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

const imgSizes = {
  rodion: {
    h: { sm: "", md: "", lg: "" },
    w: { sm: "", md: "", lg: "" },
  },
  ivan: {
    h: { sm: "", md: "", lg: "" },
    w: { sm: "", md: "", lg: "" },
  },
};

const TeamCards = () => {
  return (
    <div className="flex mr-[23px]">
      <div className="group relative img-MdBreakPoint:w-[182px]  img-MdBreakPoint:h-[260px] img-LgbreakPoint:w-[192px] img-LgbreakPoint:h-[277px] w-[119px] h-[200px] mt-[223px]">
        <TeamCard
          image="/imgs/RodionFull.png"
          description="Developing strategies for visual and user experience, ensuring alignment of design with company’s overall goals and vision. "
          name="Rodion Bychkoviak"
          position="UI/UX Architect"
          linkedinUrl="https://www.linkedin.com/in/uiarchitector/"
          radius="rounded-[25.43px]"
          size="extraSmall"
        />
      </div>
      <div className="flex flex-col gap-[30px] ml-[10px]">
        <div className="group img-MdBreakPoint:w-[200px] img-MdBreakPoint:h-[310px] img-LgbreakPoint:w-[237px] img-LgbreakPoint:h-[337px] w-[154px] h-[256px] relative">
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
        <div className="group img-MdBreakPoint:w-[190px] img-MdBreakPoint:h-[290px] img-LgbreakPoint:w-[213px] img-LgbreakPoint:h-[304px] ml-[13px] w-[138px] h-[228px] relative">
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
        <div className="group relative img-MdBreakPoint:w-[182px] img-MdBreakPoint:h-[260px] img-LgbreakPoint:w-[192px] img-LgbreakPoint:h-[277px] w-[124px] h-[178px] mt-[53px] ml-[8px]">
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
        <div className="group relative img-MdBreakPoint:w-[182px] img-MdBreakPoint:h-[250px] img-LgbreakPoint:w-[192px] img-LgbreakPoint:h-[277px] w-[107px] h-[178px]">
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
