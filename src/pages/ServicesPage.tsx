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
    <div className="h-full">
      <h1 className="mx-[15px] md:mx-[60px] font-helvetica-font text-[32px] md:text-[40px] services-1430:text-[45px] leading-[140%] font-bold">
        Services
      </h1>
      <div
        className="flex flex-col justify-between"
        style={{ height: "calc(100% - 160px)" }}
      >
        {/* Grid of cards */}
        <div className="mx-[15px] md:mx-[60px] grid grid-rows-2 services-870:grid-cols-3 grid-cols-2 gap-x-[15px] gap-y-[15px] mb-auto">
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

        {/* Gradient button */}
        <div className="flex justify-center mt-auto mb-auto">
          <GradientButton full={true}>Get in touch</GradientButton>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
