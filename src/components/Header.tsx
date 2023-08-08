const headerButtons = ["Services", "AI Solutions", "Wow cases", "Get in touch"];

interface HeaderProps {
  theme: "dark" | "light";
  changePage: (pageIndex: number) => void;
}

const Header: React.FC<HeaderProps> = ({ theme, changePage }) => {
  const handleButtonClick = (btnName: string) => {
    if (btnName === "Services" || btnName === "Journey") {
      changePage(btnName === "Services" ? 1 : 0);
    }
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
            theme === "dark" && btnLabel === "Services" ? "Journey" : btnLabel;
          return (
            <button
              key={label}
              className="font-neue-machina text-17 font-medium leading-150 cursor-pointer"
              onClick={() => handleButtonClick(label)}
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
