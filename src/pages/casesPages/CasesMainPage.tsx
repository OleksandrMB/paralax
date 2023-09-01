const CASE_DATA = {
  tornado: {
    title: "Tornado",
    paragraph:
      "Our client's request was to create a customized NFT sales tool. It was quite a challenge to move through the discovery, coding, and testing all the way to the working product in a concise time frame. Here's what came out of our team’s efforts.",
    img: "/imgs/Tornado.png",
  },
};

const CasesMainPage = () => {
  return (
    <div className="flex md:flex-col lg:flex-row md:items-center lg:justify-between CasesMainPage-1480:justify-center lg:mr-[80px] mt-[10px] md:mt-[100px] CasesMainPage-670:mt-[232px] lg:mt-[125px]">
      <div className="ml-[20px] mr-[32px]">
        <h1 className="text-black-900-222222 text-left relative text-[32px] lg:text-[48px] font-bold leading-[140%] font-epilogue-font">
          Tornado
        </h1>
        <p
          className=" inline-block md:hidden lg:inline-block text-black-900-222222 text-left relative max-w-[481px] break-words"
          style={{ font: "400 16px/217% 'Epilogue', sans-serif" }}
        >
          Our client&#039;s request was to create a customized NFT sales tool.
          It was quite a challenge to move through the discovery, coding, and
          testing all the way to the working product in a concise time frame.
          Here&#039;s what came out of our team’s efforts.
        </p>

        <img
          className=" inline-block md:hidden lg:hidden w-[282px] h-[205px] mt-[10px]"
          src="/imgs/Tornado.png"
        />

        <div
          className=" lg:block hidden text-[#ffffff] text-left relative"
          style={{ font: "700 90px/140% 'Epilogue', sans-serif" }}
        >
          #01
        </div>

        <div className="max-w-[600px] hidden md:block lg:hidden">
          <div className="flex">
            <p className="mt-[10px] text-black-900-222222 text-[20px] CasesMainPage-670:text-[22px] leading-[200%] CasesMainPage-670:leading-[217%] font-normal text-left relative max-w-[481px] break-words w-[224px] font-helvetica-font">
              Our client&#039;s request was to create a customized NFT sales
              tool. It was quite a challenge to move
            </p>
            <img
              className=" ml-[17px] w-[330px] h-[240px]"
              src="/imgs/Tornado.png"
            />
          </div>
          <p className="text-black-900-222222 text-[20px] CasesMainPage-670:text-[22px] leading-[200%] CasesMainPage-670:leading-[217%] font-normal text-left relative break-wordsfont-helvetica-font">
            through the discovery, coding, and testing all the way to the
            working product in a concise time frame. Here&#039;s what came out
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
        className="hidden lg:block w-[600px] h-[420px] CasesMainPage-1260:w-[680px] CasesMainPage-1260:h-[500px]"
        src="/imgs/Tornado.png"
      />
      <div
        className=" absolute bottom-[6vh] left-[34vw] md:bottom-[10vh] md:left-[15vw] lg:hidden inline-block text-[#ffffff] text-left"
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
