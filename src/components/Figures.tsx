import { animated, useSpring } from "@react-spring/web";

const getStyleForPage = (pageNumber: number) => {
  switch (pageNumber) {
    case 0:
      return {
        firstElement: { left: "68px", top: "-150px" },
        secondElement: { left: "10px", bottom: "-50px" },
        thirdElement: { right: "57px", bottom: "-20px" },
      };
    case 1:
      return {
        firstElement: { left: "320px", top: "270px" },
        secondElement: { left: "-50px", bottom: "-70px" },
        thirdElement: { right: "-50px", bottom: "-100px" },
      };
    default:
      return {
        firstElement: {},
        secondElement: {},
        thirdElement: {},
      };
  }
};

const Figures = ({
  theme,
  currentPage,
}: {
  theme: "dark" | "light";
  currentPage: number;
}) => {
  const getStyleForPage = (page: number) => {
    const isTablet = window.innerWidth >= 768 && window.innerWidth <= 1024;
    if (isTablet) {
      switch (page) {
        case 0:
          return {
            topValue: "-140px",
            leftValue1: "-60px",
            bottomValue1: "150px",
            leftValue2: "-80px",
            bottomValue2: "880px",
            rightValue: "-70px",
          };
        case 1:
          return {
            topValue: "-153px",
            leftValue1: "300px",
            bottomValue1: "-55px",
            leftValue2: "-76px",
            bottomValue2: "880px",
            rightValue: "-57px",
          };
        case 2:
          return {
            topValue: "-118px",
            leftValue1: "-90px",
            bottomValue1: "146px",
            leftValue2: "-76px",
            bottomValue2: "770px",
            rightValue: "-70px",
          };
        case 3:
          return {
            topValue: "-79px",
            leftValue1: "-63px",
            bottomValue1: "-90px",
            leftValue2: "53px",
            bottomValue2: "600px",
            rightValue: "-70px",
          };
        case 4:
          return {
            topValue: "-85px",
            leftValue1: "-63px",
            bottomValue1: "-90px",
            leftValue2: "53px",
            bottomValue2: "630px",
            rightValue: "-70px",
          };
        case 5:
          return {
            topValue: "-163px",
            leftValue1: "300px",
            bottomValue1: "-55px",
            leftValue2: "-86px",
            bottomValue2: "800px",
            rightValue: "-57px",
          };
        case 6:
          return {
            topValue: "-128px",
            leftValue1: "-79px",
            bottomValue1: "146px",
            leftValue2: "-76px",
            bottomValue2: "830px",
            rightValue: "-70px",
          };
        case 7:
          return {
            topValue: "-128px",
            leftValue1: "-89px",
            bottomValue1: "156px",
            leftValue2: "-76px",
            bottomValue2: "810px",
            rightValue: "-70px",
          };
        default:
          return {
            topValue: "0px",
            leftValue1: "0px",
            bottomValue1: "0px",
            leftValue2: "0px",
            bottomValue2: "0px",
            rightValue: "0px",
          };
      }
    } else
      switch (page) {
        case 0:
          return {
            topValue: "-150px",
            leftValue1: "68px",
            bottomValue1: "-50px",
            leftValue2: "10px",
            bottomValue2: "-20px",
            rightValue: "57px",
          };
        case 1:
          return {
            topValue: "-270px",
            leftValue1: "320px",
            bottomValue1: "-70px",
            leftValue2: "-50px",
            bottomValue2: "-100px",
            rightValue: "-50px",
          };
        case 2:
          return {
            topValue: "-60px",
            leftValue1: "-60px",
            bottomValue1: "-50px",
            leftValue2: "-30px",
            bottomValue2: "-100px",
            rightValue: "-50px",
          };
        case 3:
          return {
            topValue: "-150px",
            leftValue1: "68px",
            bottomValue1: "-50px",
            leftValue2: "10px",
            bottomValue2: "-20px",
            rightValue: "57px",
          };
        case 4:
          return {
            topValue: "-150px",
            leftValue1: "68px",
            bottomValue1: "-50px",
            leftValue2: "10px",
            bottomValue2: "-20px",
            rightValue: "57px",
          };
        case 5:
          return {
            topValue: "-60px",
            leftValue1: "-60px",
            bottomValue1: "-50px",
            leftValue2: "-30px",
            bottomValue2: "-100px",
            rightValue: "-50px",
          };
        case 6:
          return {
            topValue: "-270px",
            leftValue1: "-10px",
            bottomValue1: "-20px",
            leftValue2: "20px",
            bottomValue2: "-10px",
            rightValue: "70px",
          };
        case 7:
          return {
            topValue: "-150px",
            leftValue1: "68px",
            bottomValue1: "-40px",
            leftValue2: "0px",
            bottomValue2: "-10px",
            rightValue: "-70px",
          };
        default:
          return {
            topValue: "0px",
            leftValue1: "0px",
            bottomValue1: "0px",
            leftValue2: "0px",
            bottomValue2: "0px",
            rightValue: "0px",
          };
      }
  };

  const pageStyles = getStyleForPage(currentPage);

  const styles = useSpring({
    to: {
      topValue: pageStyles.topValue,
      leftValue1: pageStyles.leftValue1,
      bottomValue1: pageStyles.bottomValue1,
      leftValue2: pageStyles.leftValue2,
      bottomValue2: pageStyles.bottomValue2,
      rightValue: pageStyles.rightValue,
    },
    from: {
      topValue: theme === "light" ? "-270px" : "-150px",
      leftValue1: theme === "light" ? "320px" : "68px",
      bottomValue1: theme === "light" ? "-70px" : "-50px",
      leftValue2: theme === "light" ? "-50px" : "10px",
      bottomValue2: theme === "light" ? "-100px" : "-20px",
      rightValue: theme === "light" ? "-50px" : "57px",
    },
  });
  const MdSizedColored = theme === "dark";
  const firstElementSize =
    currentPage === 2 || currentPage === 5
      ? `${
          MdSizedColored
            ? "md:w-[257px] md:h-[257px]"
            : "md:w-[356px] md:h-[356px]"
        } lg:w-[216px] lg:h-[216px]`
      : `${
          MdSizedColored
            ? "md:w-[257px] md:h-[257px]"
            : "md:w-[356px] md:h-[356px]"
        } lg:w-[462px] lg:h-[462px]`;

  return (
    <div className="h-screen w-screen overflow-clip absolute">
      <animated.svg
        viewBox="0 0 217 216"
        fill="none"
        xmlns="http://www.w3.org/2000/animated.svg"
        className={`absolute ${firstElementSize}`}
        style={{
          top: styles.topValue,
          left: styles.leftValue1,
        }}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M108.333 216C167.98 216 216.333 167.647 216.333 108C216.333 48.3532 167.98 0 108.333 0C48.6863 0 0.333008 48.3532 0.333008 108C0.333008 167.647 48.6863 216 108.333 216ZM108.333 184.208C150.421 184.208 184.541 150.088 184.541 108C184.541 65.9116 150.421 31.7922 108.333 31.7922C66.2446 31.7922 32.1252 65.9116 32.1252 108C32.1252 150.088 66.2446 184.208 108.333 184.208Z"
          fill={theme === "dark" ? "#fff" : "#E12AC2"}
        />
      </animated.svg>
      <animated.svg
        viewBox="0 0 238 238"
        fill="none"
        xmlns="http://www.w3.org/2000/animated.svg"
        className={`absolute md:w-[180px] md:h-[180px] lg:w-[237px] lg:h-[237px]`}
        style={{
          bottom: styles.bottomValue1,
          left: styles.leftValue2,
        }}
      >
        <circle
          cx="118.833"
          cy="118.686"
          r="118.5"
          fill={theme === "dark" ? "#fff" : "#564CEC"}
        />
      </animated.svg>

      <animated.svg
        viewBox="0 0 238 238"
        fill="none"
        xmlns="http://www.w3.org/2000/animated.svg"
        className={`absolute ${
          MdSizedColored
            ? "md:w-[121px] md:h-[121px]"
            : "md:w-[159px] md:h-[159px]"
        }  lg:w-[237px] lg:h-[237px]`}
        style={{
          bottom: styles.bottomValue2,
          right: styles.rightValue,
        }}
      >
        <circle
          cx="118.833"
          cy="118.686"
          r="118.5"
          fill={theme === "dark" ? "#fff" : "#FFC24E"}
        />
      </animated.svg>
    </div>
  );
};

export default Figures;
