import { useState, useEffect } from "react";
import CardPage from "./components/CardPage";
import HomePage from "./pages/HomePage";
import CompanyHighlights from "./pages/CompanyHighlights";
import { useTransition, animated } from "@react-spring/web";
import Figures from "./components/Figures";
import Header from "./components/Header";

enum Theme {
  Light = "light",
  Dark = "dark",
}

function App() {
  const [currentPage, setcurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const numberOfPages = 2;

  const transitions = useTransition(currentPage, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    onStart: () => setIsAnimating(true),
    onRest: () => setIsAnimating(false),
  });

  useEffect(() => {
    const handleScroll = (e: WheelEvent) => {
      if (isAnimating) return;

      if (e.deltaY > 0) {
        setcurrentPage((prev) => (prev + 1) % numberOfPages);
      } else {
        setcurrentPage((prev) => (prev - 1 + numberOfPages) % numberOfPages);
      }
    };

    window.addEventListener("wheel", handleScroll);

    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, [isAnimating]);

  const determineTheme = () => {
    switch (currentPage) {
      case 0:
        return Theme.Light;
      case 1:
        return Theme.Dark;
      default:
        return Theme.Light;
    }
  };

  return (
    <div className="h-screen overflow-y-clip">
      <Figures theme={determineTheme()} />

      <CardPage
        theme={determineTheme()}
        currentPage={currentPage}
        setPageIndex={setcurrentPage}
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
                  <Header
                    currentPage={currentPage}
                    theme={determineTheme()}
                    changePage={setcurrentPage}
                  />
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
                  <Header
                    currentPage={currentPage}
                    theme={determineTheme()}
                    changePage={setcurrentPage}
                  />
                  <CompanyHighlights />
                </animated.div>
              );
            default:
              return (
                <animated.div
                  style={{
                    ...style,
                    position: "absolute",
                    top: 0,
                    width: "100%",
                  }}
                >
                  <Header
                    currentPage={currentPage}
                    theme={determineTheme()}
                    changePage={setcurrentPage}
                  />
                  <HomePage />
                </animated.div>
              );
          }
        })}
      </CardPage>
    </div>
  );
}

export default App;
