const StoryPage = () => {
  return (
    <div className="flex h-[70vh] justify-between gap-[10px] img-MdBreakPoint:gap-[20px] mx-[15px] md:mx-[30px] lg:ml-[60px] text-[#222]">
      <div className="z-20">
        <h1 className=" font-epilogue-font md:mb-[5px] lg:mb-0 text-[32px] lg:text-[48px] mt-[27px] lg:mt-0 font-bold ">
          About us
        </h1>
        <div className="flex gap-[5px] md:gap-[16px] md:mb-[10px] lg:mb-0 ">
          <img
            src="/icons/storyBook.png"
            className="w-[18px] h-[18px] md:w-[25px] md:h-[25px] lg:w-[30px] lg:h-[30px] my-auto"
          />
          <p className="font-epilogue-font text-[19px] md:text-[22px] lg:text-[32px] font-bold leading-[140%] ">
            Our story
          </p>
        </div>
        <div className="flex flex-col text-[16px] md:text-[22px] leading-[110%] md:leading-[31px] lg:text-[13.5px] img-MdBreakPoint:text-[16px] gap-[5px] md:gap-[10px] img-MdBreakPoint:gap-[20px] lg:max-w-[700px]">
          <div className=" font-helvetica-font font-normal ">
            On the 24th of February, with the first air raid siren, civilian
            Ukrainians were caught with one
            <br /> thought:
            <br />
            "How can I help if I don't have any combat skills?"
          </div>
          <div className=" font-helvetica-font  font-normal ">
            Techies started to discuss it with their friends and colleagues, and
            within a few hours, a volunteer community called IT#StandForUkraine
            was founded.
            <br /> It grew significantly fast, and it happened thanks to
            <br />
            word-of-mouth and a solid will to stand for Ukraine's independence.
            Together we have managed to set up cooperation with other volunteer
            communities and
            <br /> the government.
          </div>
          <div className=" font-helvetica-font  font-normal ">
            The volunteer tech movement brought different and unfamiliar people
            together, and the founders of UA IT Hub learned about the job loss
            problem from experienced professionals who used to work in prominent
            Ukrainian outsourced tech companies or promising start-ups <br />
            and developed products for acknowledged international clients.
          </div>
          <div className=" font-helvetica-font  font-normal ">
            Now these incredibly talented people help commercial companies to
            optimize and transform their products
            <br /> or develop new solutions from scratch to achieve your
            business goals.
          </div>
        </div>
      </div>
      <img
        className="hidden lg:inline-block max-w-[300px] max-h-[300px] img-MdBreakPoint:max-w-[400px] img-MdBreakPoint:max-h-[400px] float-right mr-[20px] img-MdBreakPoint:mr-[60px] mt-auto mb-auto"
        src="/imgs/planet.png"
      />
      <div
        className="bottom-[3vh] right-[4vw] md:right-0 md:left-[14vw] lg:hidden absolute z-10 text-[#ffffff] text-left w-[171px] h-[103.7px]"
        style={{ font: "700 90px/140% 'Epilogue', sans-serif" }}
      >
        #01
      </div>
    </div>
  );
};

export default StoryPage;
