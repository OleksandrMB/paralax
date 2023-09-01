interface PageButtonsProps {
  currentPage: number;
  setPageIndex: (pageIndex: number) => void;
  currentCase: string;
}

const PageButtons: React.FC<PageButtonsProps> = ({
  currentPage,
  setPageIndex,
  currentCase,
}) => {
  const handleClick = (id: number) => {
    return () => {
      setPageIndex(id);
    };
  };

  return (
    <div className=" flex flex-col gap-[10px] mt-[363px]">
      {Array(currentCase === "HomeCase" ? 9 : 4)
        .fill(null)
        .map((_, index) => (
          <button
            key={index}
            className={`w-[14px] ${
              currentPage === index ? "h-[72px]" : "h-[14px]"
            }  ${
              currentPage === index
                ? "bg-gradient-to-b from-[#32E1F9] to-[#564CEC] to-[70%]"
                : "bg-white"
            } rounded-[181px] mr-[7px] md:mr-[14px] lg:mr-[24px]  shadow-custom cursor-pointer ease-in duration-150`}
            onClick={handleClick(index)}
          />
        ))}
    </div>
  );
};

export default PageButtons;
