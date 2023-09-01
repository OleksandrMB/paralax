const headerButtons = ["Services", "AI Solutions", "Wow cases", "Get in touch"];

interface HeaderProps {
  theme: "dark" | "light";
  changePage: (pageIndex: number) => void;
  currentPage: number;
}

const Header: React.FC<HeaderProps> = ({ theme, changePage, currentPage }) => {
  const handleButtonClick = (btnName: string) => {
    return () => {
      let pageIndex;

      switch (btnName) {
        case "Services":
          pageIndex = 3;
          break;
        case "Journey":
          pageIndex = 1;
          break;
        case "AI Solutions":
          pageIndex = 5;
          break;
        case "Wow cases":
          pageIndex = 4;
          break;
        case "Get in touch":
          pageIndex = 0;
          break;
        default:
          pageIndex = 0;
          break;
      }

      changePage(pageIndex);
    };
  };

  return (
    <div className="pl-[15px] md:pl-[30px] flex justify-between items-center h-[80px] lg:h-[108px] self-stretch border-b border-[#E2E2E2] lg:border-none">
      <img
        src={theme === "dark" ? "/icons/whiteLogo.png" : "/icons/blackLogo.png"}
        alt="gart.tech logo"
        onClick={() => {
          changePage(0);
        }}
        className=" cursor-pointer h-[49px] lg:h-[67px]"
      />
      <div
        style={{
          color: `${theme === "dark" ? "#fff" : "#222"}`,
        }}
        className=" gap-5 hidden lg:flex lg:mr-[95px]"
      >
        {headerButtons.map((btnLabel) => {
          const label =
            currentPage === 0 && btnLabel === "Services" ? "Journey" : btnLabel;
          return (
            <button
              key={label}
              className="font-neue-machina text-17 font-medium leading-150 cursor-pointer"
              onClick={handleButtonClick(label)}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Header;
