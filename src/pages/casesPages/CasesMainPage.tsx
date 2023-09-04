import { type } from "@testing-library/user-event/dist/type";

type CaseInfo = {
  title: string;
  paragraph: string;
  img: string;
};

type CasesData = {
  [key: string]: CaseInfo;
};

const CASE_DATA: CasesData = {
  tornado: {
    title: "Tornado",
    paragraph:
      "Our client's request was to create a customized NFT sales tool. It was quite a challenge to move through the discovery, coding, and testing all the way to the working product in a concise time frame. Here's what came out of our team’s efforts.",
    img: "/imgs/Tornado.png",
  },
  mySun: {
    title: "MySun",
    paragraph:
      "MySun is a cross-platform mobile application that gathers and estimates the user's Nature footprint level. It achieves this by implementing features such as questionnaires and movement tracking. With integrations with Apple Health and an AI engine, the MySun app optimizes user actions and data. Additionally, users have the ability to improve their results by participating in challenges and environmental events.",
    img: "/imgs/mySun.png",
  },
  bachu: {
    title: "Bachu",
    paragraph:
      "A web and mobile apps (IOS and Android) designed for reporting the movements of Russian military vehicles, weapons, troops, or saboteurs on Ukrainian territory. Any Ukrainian user who has spotted the enemy can transmit the exact location directly to the Security Service of Ukraine.",
    img: "/imgs/bachu.png",
  },
  saveUA: {
    title: "SaveUA",
    paragraph:
      "Numuw is a healthcare platform for performing screening and providing treatment to pediatric patients by licensed therapists. Parents can book sessions, attend video consultations and access medical history within this app.",
    img: "/imgs/saveUA.png",
  },
  forpost: {
    title: "Forpost",
    paragraph:
      "As the war in Ukraine intensifies, any unusual movement is a cause for alarm. With this app, you can check whether the vehicle is a security threat by photographing the license plate or simply entering the letters and digits you saw.",
    img: "/imgs/forpost.png",
  },
  interLegion: {
    title: "International Legion",
    paragraph:
      "A website and chatbot designed for the non-citizens willing to volunteer for military service in Ukraine. Our solution assists volunteers to join the Armed Forces of Ukraine with all the logistical help to secure the necessary paperwork. ",
    img: "/imgs/interLegion.png",
  },
};

type CasesType = {
  currentCase: string;
};

const CasesMainPage: React.FC<CasesType> = ({ currentCase }) => {
  const caseInfo = CASE_DATA[currentCase];
  if (!caseInfo) {
    return <div>Case not found</div>;
  }
  return (
    <div className="flex md:flex-col lg:flex-row md:items-center lg:justify-between CasesMainPage-1480:justify-center lg:mr-[80px] mt-[10px] sm:mt-[100px] md:mt-[232px] lg:mt-[125px]">
      <div className=" z-10 ml-[20px] mr-[32px]">
        <h1 className="text-black-900-222222 text-left relative text-[32px] lg:text-[48px] font-bold leading-[140%] font-epilogue-font">
          {caseInfo.title}
        </h1>
        <p className=" inline-block font-normal text-[16px] leading-[217%] font-helvetica-font lg:font-epilogue-font md:hidden lg:inline-block text-black-900-222222 text-left relative max-w-[481px] break-words">
          {caseInfo.paragraph}
        </p>

        <img
          className={` z-10 inline-block md:hidden lg:hidden ${
            caseInfo.title === "Tornado" || "Bachu"
              ? "w-[282px] h-[205px]"
              : "w-[204px] h-[257px]"
          }  mt-[10px]`}
          src={caseInfo.img}
        />

        <div
          className=" lg:block hidden text-[#ffffff] text-left relative"
          style={{ font: "700 90px/140% 'Epilogue', sans-serif" }}
        >
          #01
        </div>

        <div className="max-w-[529px] hidden md:block lg:hidden ">
          <img
            className={`float-right ml-5 ${
              caseInfo.title === "Tornado" || "Bachu"
                ? "w-[330px] h-[240px]"
                : "w-[32.05vw] h-[32.6vh]"
            }`}
            src={caseInfo.img}
          />
          <p className="mt-3 text-black text-[20px] leading-[200%] font-normal">
            {caseInfo.paragraph}
          </p>
        </div>

        <svg
          className="shrink-0 hidden lg:block absolute left-[22vw] bottom-[60px] overflow-visible"
          width="73"
          height="180"
          viewBox="0 0 73 180"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.6963 0C13.6963 0 76.2259 59.1718 58.2127 164.664"
            stroke="white"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray="0 11"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M64.3925 172.025L62.7405 169.892L57.108 175.042L52.4348 169.008L50.4437 170.828L55.9428 177.929C56.399 178.518 57.2145 178.588 57.7644 178.086L64.3925 172.025Z"
            fill="white"
          />
        </svg>
      </div>
      <img
        className={`hidden lg:block ${
          caseInfo.title === "Tornado" || caseInfo.title === "Bachu"
            ? "w-[600px] h-[420px] CasesMainPage-1260:w-[680px] CasesMainPage-1260:h-[500px]"
            : caseInfo.title === "MySun"
            ? "h-[576px] w-[400px]"
            : "h-[576px] w-[439px] CasesMainPage-1260:w-[680px] CasesMainPage-1260:h-[500px]"
        }`}
        src={caseInfo.img}
      />
      <div
        className=" z-[2] absolute bottom-[6vh] left-[34vw] md:bottom-[10vh] md:left-[15vw] lg:hidden inline-block text-[#ffffff] text-left"
        style={{ font: "700 90px/140% 'Epilogue', sans-serif" }}
      >
        #01
      </div>
      <svg
        className="absolute hidden md:block lg:hidden left-[50vw] bottom-[3vh]"
        xmlns="http://www.w3.org/2000/svg"
        width="178"
        height="220"
        viewBox="0 0 178 220"
        fill="none"
      >
        <path
          d="M2 32.332C2 32.332 136.384 69.3824 165.203 180.587"
          stroke="white"
          stroke-width="2.3814"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0 8.73"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M174.779 181.486L171.882 179.929L168.125 185.269L159.931 180.862L158.603 182.75L168.245 187.936C169.045 188.366 169.991 188.292 170.357 187.771L174.779 181.486Z"
          fill="white"
        />
      </svg>
      <svg
        className="absolute left-[4vw] bottom-[3vh] md:hidden"
        xmlns="http://www.w3.org/2000/svg"
        width="133"
        height="146"
        viewBox="0 0 133 146"
        fill="none"
      >
        <path
          d="M72.8379 1.57031C72.8379 1.57031 30.4413 74.2016 64.8684 134.353"
          stroke="white"
          stroke-width="2.3814"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-dasharray="0 8.73"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M57.2621 137.931L58.4159 134.253L65.939 135.656L69.2028 125.251L71.8622 125.747L68.0215 137.99C67.7029 139.006 66.8494 139.718 66.115 139.581L57.2621 137.931Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default CasesMainPage;
