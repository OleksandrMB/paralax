const headerButtons = ["Services", "AI Solutions", "Wow cases", "Get in touch"];

const Header = ({ theme }: { theme: "dark" | "light" }) => {
  return (
    <div className="px-70 flex justify-between items-center h-108 self-stretch">
      <img
        src={theme === "dark" ? "/icons/whiteLogo.png" : "/icons/blackLogo.png"}
        alt="gart.tech logo"
      ></img>
      <div
        style={{
          color: `${theme === "dark" ? "#fff" : "#222"}`,
        }}
        className="flex gap-5 "
      >
        {headerButtons.map((item) => {
          return (
            <button
              key={item}
              className="font-neue-machina text-17 font-medium leading-150"
            >
              {item}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
