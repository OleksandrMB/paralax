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
    <div className="mr-[60px] h-full">
      <h1 className="font-helvetica-font text-[40px] services-1430:text-[45px] leading-[140%] font-bold">
        Services
      </h1>
      <div className="flex flex-col h-full">
        <div className="grid grid-rows-2 services-870:grid-cols-3 grid-cols-2 gap-x-[15px] gap-y-[15px]">
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

        <div className="flex w-full justify-center ml-[15px] services-678:ml-[0] services-678:mt-[18px] mt-[25px]">
          <GradientButton full={true}>Get in touch</GradientButton>
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
