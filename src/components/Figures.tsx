import { animated, useSpring } from "@react-spring/web";

const Figures = ({ theme }: { theme: "dark" | "light" }) => {
  const styles = useSpring({
    to: {
      topValue: theme === "dark" ? "-270px" : "-150px",
      leftValue1: theme === "dark" ? "320px" : "68px",
      bottomValue1: theme === "dark" ? "-70px" : "-50px",
      leftValue2: theme === "dark" ? "-50px" : "10px",
      bottomValue2: theme === "dark" ? "-100px" : "-20px",
      rightValue: theme === "dark" ? "-50px" : "57px",
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

  return (
    <div className="h-screen w-screen overflow-clip absolute">
      <animated.svg
        width="217"
        height="216"
        viewBox="0 0 217 216"
        fill="none"
        xmlns="http://www.w3.org/2000/animated.svg"
        className="absolute w-[462px] h-[462px]"
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
        width="238"
        height="238"
        viewBox="0 0 238 238"
        fill="none"
        xmlns="http://www.w3.org/2000/animated.svg"
        className="absolute w-[237px] h-[237px]"
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
        width="238"
        height="238"
        viewBox="0 0 238 238"
        fill="none"
        xmlns="http://www.w3.org/2000/animated.svg"
        className="absolute w-[237px] h-[237px]"
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
