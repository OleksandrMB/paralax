import GradientButton from "../components/GradientButton";
import NoiseCards from "../components/NoiseCards";

const NoiseCardsData = [
  {
    title: "Business needs analysis",
    paragraph:
      "We will your key business goals, high-level product vision, which will serve as a foundation for further development and research  with us.",
  },
  {
    title: "Emergency tech consultation",
    paragraph:
      "Our top engineers are available for urgent review of your tech issues with further support,  required fixes and future maintenance plan.",
  },
  {
    title: "Technology and production analysis",
    paragraph:
      "We will identify and provide an overview of available technologies for the task, their pros and cons, as well as expected budgets and timelines for launching the tech solution.",
  },
  {
    title: "Mock-ups design",
    paragraph:
      "We will create 3 key designs to illustrate your future solution functionality, which will help you to present your idea effectively for the clear concept understanding. With an additional option of logo and pitch-deck design. ",
  },
  {
    title: "Market competitors research",
    paragraph:
      "We will help identifying competitors within an industry, analyzing current solutions regarding 'killer' features, and defining the main up- and downsides of each solution, as well as tracking market state and possible competitors with further defining of a key features set.",
  },
];

const KickOffPage = () => {
  return (
    <div className="ml-[61px] mr-[61px] flex flex-col h-[100% - 109px]">
      <div className="text-[#222] flex flex-col">
        <h1 className="font-helvetica-font text-[45px] leading-[140%] font-bold">
          Kick-Off
        </h1>
        <p className="font-helvetica-font text-[22px] font-normal leading-[150%]">
          Kick-off as an efficient way to start cooperating with Gart is a
          certain win-win. It is a great opportunity for you to get acquainted
          with us and for us to find the best way to facilitate your big ideas
          and business.
        </p>
      </div>
      <div className="grid grid-cols-6 gap-x-[20px] gap-y-[50px] mt-[45px]">
        {NoiseCardsData.map((data, index) => {
          const isLastTwo = index >= NoiseCardsData.length - 2;
          return (
            <NoiseCards
              key={index}
              title={data.title}
              paragraph={data.paragraph}
              colSpan={isLastTwo ? "col-span-3" : "col-span-2"}
            />
          );
        })}
      </div>
      <div className="flex justify-center mt-[10px]">
        {/* add margin top 30px */}
        <GradientButton>Get in touch</GradientButton>
      </div>
    </div>
  );
};

export default KickOffPage;
