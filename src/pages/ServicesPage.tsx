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
    <div className="ml-[60px] mr-[60px]">
      <h1 className="font-helvetica-font text-[45px] leading-[140%] font-bold">
        Services
      </h1>
      <div className="grid grid-rows-2 grid-cols-3 gap-x-[15px] gap-y-[15px]">
        {NoiseCardsData.map((data) => {
          return (
            <NoiseFlipCard
              key={data.title}
              title={data.title}
              paragraph={data.paragraph}
            />
          );
        })}
      </div>
      <div className="flex justify-center mt-[25px]">
        <GradientButton>Get in touch</GradientButton>
      </div>
    </div>
  );
};

export default ServicesPage;
