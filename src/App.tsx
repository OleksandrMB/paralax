import React, { useState, useEffect } from "react";
import CardPage from "./components/CardPage";
import HomePage from "./pages/HomePage";
import CompanyHighlights from "./pages/CompanyHighlights";
import { useTransition, animated } from "@react-spring/web";
import Figures from "./components/Figures";

function App() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const numberOfPages = 2;

  const transitions = useTransition(index, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    onStart: () => setIsAnimating(true),
    onRest: () => setIsAnimating(false),
  });

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      e.preventDefault();

      if (isAnimating) return;

      if (e.deltaY > 0) {
        setIndex((prev) => (prev + 1) % numberOfPages);
      } else {
        setIndex((prev) => (prev - 1 + numberOfPages) % numberOfPages);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isAnimating]);

  const determineTheme = () => {
    if (index === 0) return "light";
    if (index === 1) return "dark";
    return "light"; // за замовчуванням світла тема
  };

  return (
    <div className="h-screen overflow-y-clip">
      <Figures theme={determineTheme()} />
      <CardPage
        theme={determineTheme()}
        activeButton={index}
        setPageIndex={setIndex}
      >
        {transitions((style, item) => {
          switch (item) {
            case 0:
              return (
                <animated.div
                  style={{
                    ...style,
                    position: "absolute",
                    top: 0,
                    width: "100%",
                  }}
                >
                  <HomePage />
                </animated.div>
              );
            case 1:
              return (
                <animated.div
                  style={{
                    ...style,
                    position: "absolute",
                    top: 0,
                    width: "100%",
                  }}
                >
                  <CompanyHighlights />
                </animated.div>
              );
            default:
              return null;
          }
        })}
      </CardPage>
    </div>
  );
}

export default App;
