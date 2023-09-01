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
  const [currentCase, setcurrentCase] = useState("");
  const [isAnimating, setIsAnimating] = useState(false);
  const numberOfPages = currentCase === "HomeCase" ? 8 : 4;
  const cases: ThemeType =
    currentCase === "HomeCase"
      ? {
          0: { theme: Theme.Light, Component: <HomePage /> },
          1: { theme: Theme.Dark, Component: <CompanyHighlights /> },
          2: { theme: Theme.Light, Component: <KickOffPage /> },
          3: { theme: Theme.Light, Component: <ServicesPage /> },
          4: {
            theme: Theme.Light,
            Component: <CarouselPage setcurrentCase={setcurrentCase} />,
          },
          5: { theme: Theme.Dark, Component: <AIPage /> },
          6: { theme: Theme.Light, Component: <SolutionsPage /> },
          7: { theme: Theme.Light, Component: <TrustPage /> },
          8: { theme: Theme.Light, Component: <CalendarPage /> },
        }
      : {
          0: { theme: Theme.Light, Component: <CasesMainPage /> },
          1: { theme: Theme.Dark, Component: <CompanyHighlights /> },
          2: { theme: Theme.Light, Component: <KickOffPage /> },
          3: { theme: Theme.Light, Component: <ServicesPage /> },
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
            />
            {cases[item]?.Component || <HomePage />}
          </animated.div>
        ))}
      </CardPage>
    </div>
  );
}

export default App;
