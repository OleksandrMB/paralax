import React, { PropsWithChildren } from "react";
import PageButtons from "./PageButtons";

type CardPageType = {
  theme?: "dark" | "light";
};

interface CardPageProps extends PropsWithChildren<CardPageType> {
  currentPage: number;
  setPageIndex: (pageIndex: number) => void;
}

const CardPage: React.FC<CardPageProps> = ({
  children,
  theme = "light",
  currentPage,
  setPageIndex,
}: CardPageProps) => {
  return (
    <div
      className={`h-screen p-[20px] mg:p-[35px] lg:px-65 lg:py-50`}
      style={{
        backgroundColor: `${theme === "dark" ? "#171624" : "#e3eaf4"}`,
      }}
    >
      <div
        className="rounded-36 border-[5px] lg:border-10 border-70 bg-20 h-full backdrop-blur-[11px]"
        style={{ position: "relative" }}
      >
        <div className="flex">
          <div className="flex flex-col w-full">{children}</div>
          <div className="justify-self: end z-20">
            <PageButtons
              currentPage={currentPage}
              setPageIndex={setPageIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
