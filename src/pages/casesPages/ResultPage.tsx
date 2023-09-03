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
      "In three weeks, we have developed a custom-tailored NFT sales tool with a great user experience. Our web app with mobile and tablet adaptation allowed our client to begin their product sales very quickly.",
    img: "/imgs/casesImgs/tornado3.png",
  },
  mySun: {
    title: "MySun",
    paragraph:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    img: "/imgs/casesImgs/mySun3.png",
  },
  bachu: {
    title: "Bachu",
    paragraph:
      "Users share their coordinates automatically by sending a report via an app, allowing Ukrainian intelligence to place the enemy's forces on a map, validate reports and prevent attacks.",
    img: "/imgs/casesImgs/bachu3.png",
  },
  saveUA: {
    title: "SaveUA",
    paragraph:
      "No one can fully vouch for the credibility and thus the safety of individuals seeking or delivering help. We have created a bot allowing you to exchange contacts quickly with individuals who have been vetted for security.",
    img: "/imgs/casesImgs/saveUA3.png",
  },
  forpost: {
    title: "Forpost",
    paragraph:
      "Any verified user can enter license plate’s info there and see brief information about the vehicle it belongs to (whether the plate matches the car, it is wanted or not, where it was seen, etc.).",
    img: "/imgs/casesImgs/forpost3.png",
  },
  interLegion: {
    title: "International Legion",
    paragraph:
      "When the Ukrainian government announced the creation of a foreign legion, it was unclear to people how to join it. Our website and chatbot solved this problem: we posted all the necessary information about joining, added an application form, and synchronized the process of submitting the application info to the relevant authorities.",
    img: "/imgs/casesImgs/interLegion3.png",
  },
};

type CasesType = {
  currentCase: string;
};

const ResultPage: React.FC<CasesType> = ({ currentCase }) => {
  const caseInfo = CASE_DATA[currentCase];
  if (!caseInfo) {
    return <div>Case not found</div>;
  }
  const isSpecialCase =
    caseInfo.title === "SaveUA" || caseInfo.title === "Bachu";
  return (
    <div className="flex md:flex-col lg:flex-row md:items-center lg:justify-between CasesMainPage-1480:justify-center lg:mr-[80px] mt-[10px] sm:mt-[100px] md:mt-[232px] lg:mt-[125px]">
      <div className=" z-10 ml-[20px] mr-[32px]">
        <h1 className="block md:hidden lg:block text-black-900-222222 text-left relative text-[32px] lg:text-[48px] font-bold leading-[140%] font-epilogue-font">
          Result
        </h1>
        <p className=" inline-block font-normal text-[16px] leading-[217%] font-helvetica-font lg:font-epilogue-font md:hidden lg:inline-block text-black-900-222222 text-left relative max-w-[481px] break-words">
          {caseInfo.paragraph}
        </p>

        <img
          className={` z-10 inline-block md:hidden lg:hidden ${
            isSpecialCase ? "w-[185px] h-[369px]" : "w-[253px] h-[317px]"
          }  `}
          src={caseInfo.img}
        />

        <div
          className=" lg:block hidden text-[#ffffff] text-left relative"
          style={{ font: "700 90px/140% 'Epilogue', sans-serif" }}
        >
          #03
        </div>

        <div className="max-w-[529px] hidden md:block lg:hidden ">
          <img
            className={`float-right ml-5 ${
              isSpecialCase ? "h-[405px] w-[225px]" : "h-[384px] w-[349px]"
            }`}
            src={caseInfo.img}
          />
          <div>
            <h1 className="lg:hidden text-black-900-222222 text-left relative text-[32px] lg:text-[48px] font-bold leading-[140%] font-epilogue-font">
              Result
            </h1>
            <p className="mt-3 text-black text-[20px] leading-[200%] font-normal">
              {caseInfo.paragraph}
            </p>
          </div>
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
          isSpecialCase
            ? "h-[572px] w-[295px]"
            : "h-[420px] CasesMainPage-1260:w-[439px] CasesMainPage-1260:h-[548px]"
        }`}
        src={caseInfo.img}
      />
      <div
        className=" z-[2] absolute bottom-[6vh] left-[34vw] md:bottom-[10vh] md:left-[15vw] lg:hidden inline-block text-[#ffffff] text-left"
        style={{ font: "700 90px/140% 'Epilogue', sans-serif" }}
      >
        #03
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

export default ResultPage;
