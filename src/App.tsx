import { useState, useEffect } from "react";
import { useTransition, animated } from "@react-spring/web";
import Figures from "./components/Figures";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CompanyHighlights from "./pages/CompanyHighlights";
import KickOffPage from "./pages/KickOffPage";
import ServicesPage from "./pages/ServicesPage";
import AIPage from "./pages/AIPage";
import SolutionsPage from "./pages/SolutionsPage";
import TrustPage from "./pages/TrustPage";
import CarouselPage from "./pages/CarouselPage";
import CardPage from "./components/CardPage";
import CalendarPage from "./pages/CalendarPage";
import CasesMainPage from "./pages/casesPages/CasesMainPage";
import DevPage from "./pages/casesPages/DevPage";
import ResultPage from "./pages/casesPages/ResultPage";
import StoryPage from "./pages/aboutCase/StoryPage";
import MissionPage from "./pages/aboutCase/MissionPage";

enum Theme {
  Light = "light",
  Dark = "dark",
}

type ThemeType = {
  [key: number]: {
    theme: Theme;
    Component: React.ReactNode;
  };
};

function App() {
  const [currentPage, setcurrentPage] = useState(0);
  const [currentCase, setcurrentCase] = useState("HomeCase");
  console.log(currentCase);
  const [isAnimating, setIsAnimating] = useState(false);
  const [readIsActive, setReadIsActive] = useState(false);

  const numberOfPages =
    currentCase === "HomeCase" ? 9 : currentCase === "AboutCase" ? 2 : 4;
  const cases: ThemeType =
    currentCase === "HomeCase"
      ? {
          0: {
            theme: Theme.Light,
            Component: <HomePage setcurrentPage={setcurrentPage} />,
          },
          1: {
            theme: Theme.Dark,
            Component: (
              <CompanyHighlights
                readIsActive={readIsActive}
                setReadIsActive={setReadIsActive}
              />
            ),
          },
          2: {
            theme: Theme.Light,
            Component: (
              <KickOffPage
                readIsActive={readIsActive}
                setReadIsActive={setReadIsActive}
                setcurrentPage={setcurrentPage}
              />
            ),
          },
          3: { theme: Theme.Light, Component: <ServicesPage /> },
          4: {
            theme: Theme.Light,
            Component: (
              <CarouselPage
                setcurrentPage={setcurrentPage}
                setcurrentCase={setcurrentCase}
              />
            ),
          },
          5: {
            theme: Theme.Dark,
            Component: <AIPage setcurrentPage={setcurrentPage} />,
          },
          6: {
            theme: Theme.Light,
            Component: <SolutionsPage setcurrentPage={setcurrentPage} />,
          },
          7: {
            theme: Theme.Light,
            Component: <TrustPage setcurrentPage={setcurrentPage} />,
          },
          8: { theme: Theme.Light, Component: <CalendarPage /> },
        }
      : currentCase === "AboutCase"
      ? {
          0: {
            theme: Theme.Light,
            Component: <StoryPage />,
          },
          1: {
            theme: Theme.Light,
            Component: <MissionPage />,
          },
        }
      : {
          0: {
            theme: Theme.Light,
            Component: <CasesMainPage currentCase={currentCase} />,
          },
          1: {
            theme: Theme.Light,
            Component: <DevPage currentCase={currentCase} />,
          },
          2: {
            theme: Theme.Light,
            Component: <ResultPage currentCase={currentCase} />,
          },
          3: {
            theme: Theme.Light,
            Component: (
              <CarouselPage
                setcurrentPage={setcurrentPage}
                setcurrentCase={setcurrentCase}
              />
            ),
          },
        };

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
    return cases[currentPage]?.theme || Theme.Light;
  };

  return (
    <div className="h-screen overflow-clip">
      <Figures theme={determineTheme()} currentPage={currentPage} />

      <CardPage
        theme={determineTheme()}
        currentPage={currentPage}
        setPageIndex={setcurrentPage}
        currentCase={currentCase}
        readIsActive={readIsActive}
      >
        {transitions((style, item) => (
          <animated.div
            style={{
              ...style,
              position: "absolute",
              top: 0,
              width: "100%",
              height: "100%",
            }}
          >
            <Header
              currentPage={currentPage}
              theme={determineTheme()}
              changePage={setcurrentPage}
              setcurrentCase={setcurrentCase}
              setReadIsActive={setReadIsActive}
              readIsActive={readIsActive}
            />
            {cases[item]?.Component || (
              <HomePage setcurrentPage={setcurrentPage} />
            )}
          </animated.div>
        ))}
      </CardPage>
    </div>
  );
}

export default App;
