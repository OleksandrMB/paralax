type CardType = {
  image: string;
  description: string;
  name: string;
  position: string;
  linkedinUrl: string;
  radius: string;
  size: "large" | "mid" | "small" | "extraSmall";
};

const stylesBySize = {
  large: {
    imgSize: "110px",
    descriptionSize: "17px",
    nameSize: "21px",
    positionSize: "16px",
    logo: "38px",
  },
  mid: {
    imgSize: "100px",
    descriptionSize: "15px",
    nameSize: "19px",
    positionSize: "14px",
    logo: "34px",
  },
  small: {
    imgSize: "90px",
    descriptionSize: "14px",
    nameSize: "17px",
    positionSize: "13px",
    logo: "30px",
  },
  extraSmall: {
    imgSize: "80px",
    descriptionSize: "12px",
    nameSize: "15.5px",
    positionSize: "13px",
    logo: "30px",
  },
};

const TeamCard = ({
  image,
  description,
  name,
  position,
  linkedinUrl,
  radius,
  size,
}: CardType) => {
  const styles = stylesBySize[size];
  return (
    <>
      <img
        src={image}
        className={`w-full h-full ${radius} object-cover img-MdBreakPoint:group-hover:invisible shrink`}
      />
      <div
        className={`hidden img-MdBreakPoint:block invisible hover:border hover:border-[#564CEC] group-hover:visible cursor-pointer bg-opacity-10 bg-white w-full h-full ${radius} pt-6 pr-4 pb-6 pl-4 flex flex-col gap-15 items-start justify-start absolute -top-0 ring-0`}
        style={{
          backdropFilter: "blur(5.9px)",
        }}
      >
        <div className="flex flex-col gap-0 items-start justify-start self-stretch flex-1 relative shrink ">
          <img
            className={`rounded-full relative mb-[7px] object-top object-cover shrink`}
            src={image}
            alt={name}
            style={{
              height: styles.imgSize,
              width: styles.imgSize,
            }}
          />

          <div className="text-black flex flex-row gap-2 items-start justify-start self-stretch flex-1 relative">
            <p
              className=" font-helvetica-font font-medium leading-[140%]"
              style={{
                fontSize: styles.descriptionSize,
              }}
            >
              {description}
            </p>
          </div>

          <div className="flex flex-row items-end justify-between self-stretch shrink-0 relative">
            <div className="flex flex-col gap-1 items-start justify-start shrink-0 relative">
              <div
                className="text-black font-medium leading-[140%]"
                style={{
                  fontSize: styles.nameSize,
                }}
              >
                {name}
              </div>

              <div
                className="text-black font-light  leading-[140%]"
                style={{
                  fontSize: styles.positionSize,
                  width: size === "small" ? "123px" : "",
                }}
              >
                {position}
              </div>
            </div>

            <div className="static h-auto w-">
              <a href={linkedinUrl} target="_blank" rel="noreferrer">
                <img src="/icons/linkedin.png" className="max-w-[4vw]" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamCard;
