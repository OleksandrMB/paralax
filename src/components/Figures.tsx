const Figures = ({ theme }: { theme: "dark" | "light" }) => {
  return (
    <div className="h-screen w-screen overflow-clip absolute">
      <svg
        width="217"
        height="216"
        viewBox="0 0 217 216"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[68px] w-[462px] h-[462px]"
        style={{
          top: `${theme === "dark" ? "-270px" : "-150px"}`,
          left: `${theme === "dark" ? "320px" : "68px"}`,
        }}
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M108.333 216C167.98 216 216.333 167.647 216.333 108C216.333 48.3532 167.98 0 108.333 0C48.6863 0 0.333008 48.3532 0.333008 108C0.333008 167.647 48.6863 216 108.333 216ZM108.333 184.208C150.421 184.208 184.541 150.088 184.541 108C184.541 65.9116 150.421 31.7922 108.333 31.7922C66.2446 31.7922 32.1252 65.9116 32.1252 108C32.1252 150.088 66.2446 184.208 108.333 184.208Z"
          fill={theme === "dark" ? "#fff" : "#E12AC2"}
        />
      </svg>
      <svg
        width="238"
        height="238"
        viewBox="0 0 238 238"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-[10px] w-[237px] h-[237px]"
        style={{
          bottom: `${theme === "dark" ? "-70px" : "-50px"}`,
          left: `${theme === "dark" ? "-50px" : "10px"}`,
        }}
      >
        <circle
          cx="118.833"
          cy="118.686"
          r="118.5"
          fill={theme === "dark" ? "#fff" : "#564CEC"}
        />
      </svg>

      <svg
        width="238"
        height="238"
        viewBox="0 0 238 238"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute w-[237px] h-[237px]"
        style={{
          bottom: `${theme === "dark" ? "-100px" : "-20px"}`,
          right: `${theme === "dark" ? "-50px" : "57px"}`,
        }}
      >
        <circle
          cx="118.833"
          cy="118.686"
          r="118.5"
          fill={theme === "dark" ? "#fff" : "#FFC24E"}
        />
      </svg>
    </div>
  );
};

export default Figures;
