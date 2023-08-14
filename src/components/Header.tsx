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
    <div className="px-70 flex justify-between items-center h-108 self-stretch">
      <img
        src={theme === "dark" ? "/icons/whiteLogo.png" : "/icons/blackLogo.png"}
        alt="gart.tech logo"
      />
      <div
        style={{
          color: `${theme === "dark" ? "#fff" : "#222"}`,
        }}
        className="flex gap-5"
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
