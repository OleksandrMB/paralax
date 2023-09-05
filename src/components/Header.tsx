const headerButtonsFirst = [
  "Services",
  "AI Solutions",
  "Wow cases",
  "Get in touch",
];
const headerButtonsSeccond = [
  "Journey",
  "About us",
  "Wow cases",
  "Get in touch",
];

interface HeaderProps {
  theme: "dark" | "light";
  changePage: (pageIndex: number) => void;
  setcurrentCase: (caseName: string) => void;
  setReadIsActive: (active: boolean) => void;
  readIsActive: boolean;
  currentPage: number;
}

const Header: React.FC<HeaderProps> = ({
  theme,
  changePage,
  currentPage,
  setcurrentCase,
  setReadIsActive,
  readIsActive,
}) => {
  const handleButtonClick = (btnName: string) => {
    return () => {
      let pageIndex;

      switch (btnName) {
        case "Services":
          pageIndex = 3;
          break;
        case "About us":
          pageIndex = 0;
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
          pageIndex = 8;
          break;
        default:
          pageIndex = 0;
          break;
      }
      if (btnName === "About us") {
        setcurrentCase("AboutCase");
        changePage(pageIndex);
        return;
      } else {
        changePage(pageIndex);
        setcurrentCase("HomeCase");
      }
    };
  };

  const navHandleClick = () => {
    setReadIsActive(false);
  };

  return (
    <div className="pl-[15px] z-50 md:pl-[30px] flex justify-between items-center h-[80px] lg:h-[108px] self-stretch border-b border-[#E2E2E2] lg:border-none">
      <img
        src={theme === "dark" ? "/icons/whiteLogo.png" : "/icons/blackLogo.png"}
        alt="gart.tech logo"
        onClick={() => {
          changePage(0);
          setcurrentCase("HomeCase");
        }}
        className=" cursor-pointer h-[49px] lg:h-[67px]"
      />
      <div
        style={{
          color: `${theme === "dark" ? "#fff" : "#222"}`,
        }}
        className=" gap-5 hidden lg:flex lg:mr-[95px]"
      >
        {currentPage > 0
          ? headerButtonsSeccond.map((btnLabel) => {
              return (
                <button
                  key={btnLabel}
                  className="font-neue-machina text-17 font-medium leading-150 cursor-pointer"
                  onClick={handleButtonClick(btnLabel)}
                >
                  {btnLabel}
                </button>
              );
            })
          : headerButtonsFirst.map((btnLabel) => {
              return (
                <button
                  key={btnLabel}
                  className="font-neue-machina text-17 font-medium leading-150 cursor-pointer"
                  onClick={handleButtonClick(btnLabel)}
                >
                  {btnLabel}
                </button>
              );
            })}
      </div>
      <img
        className="lg:hidden mr-[30px] cursor-pointer"
        src={readIsActive ? "/icons/close.png" : "/icons/Nav.png"}
        onClick={navHandleClick}
      />
    </div>
  );
};

export default Header;
