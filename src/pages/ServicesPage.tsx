import GradientButton from "../components/GradientButton";
import NoiseFlipCard from "../components/NoiseFlipCard";

const NoiseCardsData = [
  {
    title: "<IT consulting>",
    paragraph:
      "</Web & Application> </Mobile (IOS, Android & Cross-platform)> </Generative Algorithms and Advanced LLM solutions>",
  },
  {
    title: "<Design Services>",
    paragraph:
      "</Web & Application> </Mobile (IOS, Android & Cross-platform)> </Generative Algorithms and Advanced LLM solutions>",
  },
  {
    title: "<R&D>",
    paragraph:
      "</Web & Application> </Mobile (IOS, Android & Cross-platform)> </Generative Algorithms and Advanced LLM solutions>",
  },
  {
    title: "<Custom Engineering>",
    paragraph:
      "</Web & Application> </Mobile (IOS, Android & Cross-platform)> </Generative Algorithms and Advanced LLM solutions>",
  },
  {
    title: "<Maintenance>",
    paragraph:
      "</Web & Application> </Mobile (IOS, Android & Cross-platform)> </Generative Algorithms and Advanced LLM solutions>",
  },
  {
    title: "<Cybersecurity>",
    paragraph:
      "</Web & Application> </Mobile (IOS, Android & Cross-platform)> </Generative Algorithms and Advanced LLM solutions>",
  },
];

const ServicesPage = () => {
  return (
    <div className="flex flex-col justify-between h-[86vh] md:h-[86vh] lg:h-[76vh] md:block">
      <h1 className="mx-[15px] md:ml-[35px] lg:mx-[60px] md:mb-[25px] lg:mb-[0] font-helvetica-font text-[32px] md:text-[40px] services-1430:text-[45px] leading-[140%] font-bold">
        Services
      </h1>
      <div
        className="flex flex-col justify-between gap-[10px] md:gap-[0]"
        style={{ height: "calc(100% - 160px)" }}
      >
        {/* Grid of cards */}
        <div className="mx-[15px] md:mx-[22px] lg:mx-[60px] h-full grid services-870:grid-rows-2 services-870:grid-cols-3 grid-cols-2 gap-x-[15px] gap-y-[15px]">
          {NoiseCardsData.map((data) => {
            return (
              <NoiseFlipCard
                key={data.title}
                title={data.title}
                paragraph={data.paragraph}
                large={false}
              />
            );
          })}
        </div>
      </div>
      {/* Gradient button */}
      <div className="flex justify-center mb-[20px] mt-[20px]">
        <GradientButton>Get in touch</GradientButton>
      </div>
    </div>
  );
};

export default ServicesPage;
