import React, { PropsWithChildren } from "react";
import Header from "./Header";
import Figures from "./Figures";
import GradientButton from "./GradientButton";
import PageButtons from "./PageButtons";

type CardPageType = {
  theme?: "dark" | "light";
};

interface CardPageProps extends PropsWithChildren<CardPageType> {
  activeButton: number;
  setPageIndex: (pageIndex: number) => void;
}

const CardPage: React.FC<CardPageProps> = ({
  children,
  theme = "light",
  activeButton, // Destructure activeButton from props
  setPageIndex, // Destructure setPageIndex from props
}: CardPageProps) => {
  return (
    <div
      className={`h-screen px-65 py-50`}
      style={{
        backgroundColor: `${theme === "dark" ? "#171624" : "#e3eaf4"}`,
      }}
    >
      <div
        className="rounded-36 border-10 border-70 bg-20 h-full backdrop-blur-[11px] overflow-y-hidden"
        style={{ position: "relative" }}
      >
        <div className="flex justify-between">
          <div className="flex flex-col">{children}</div>
          <div className="justify-self: end z-20">
            <PageButtons
              activeButton={activeButton}
              setPageIndex={setPageIndex}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
