import React, { PropsWithChildren } from "react";
import Header from "./Header";
import Figures from "./Figures";
import GradientButton from "./GradientButton";
import PageButtons from "./PageButtons";

type CardPageType = {
  theme?: "dark" | "light";
};

const CardPage = ({
  children,
  theme = "light",
}: PropsWithChildren<CardPageType>) => {
  return (
    <>
      <Figures theme={theme} />
      <div
        className={`h-screen px-65 py-50`}
        style={{
          backgroundColor: `${theme === "dark" ? "#171624" : "#e3eaf4"}`,
        }}
      >
        <div className="rounded-36 border-10 border-70 bg-20 h-full backdrop-blur-[11px]">
          <Header theme={theme} />
          <div className="flex justify-between">
            {children}
            <div className="justify-self: end z-20">
              <PageButtons />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPage;
