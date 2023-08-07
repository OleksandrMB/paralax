import React, { useEffect, useRef } from "react";
import CardPage from "./components/CardPage";
import HomePage from "./pages/HomePage";
import CompanyHighlights from "./pages/CompanyHighlights";
import { useSpring, animated } from "@react-spring/web";

function App() {
  const halfway = window.innerHeight / 2;
  const fadeDuration = window.innerHeight * 0.75; // Adjust this to set the duration (0.75 means 75% of the viewport's height)
  const fadeRange = fadeDuration / 4;
  const scrollY = useRef(0);
  let scrollTimeout: NodeJS.Timeout;

  const [{ opacity1, zIndex1, opacity2, zIndex2 }, set] = useSpring(() => ({
    opacity1: 1,
    zIndex1: 1,
    opacity2: 0,
    zIndex2: -1,
  }));

  const handleWheel = (e: WheelEvent) => {
    scrollY.current += e.deltaY;

    // Normalize the scroll values
    if (scrollY.current < 0) scrollY.current = 0;
    if (scrollY.current > window.innerHeight)
      scrollY.current = window.innerHeight;

    if (scrollY.current <= halfway - fadeRange) {
      set({ opacity1: 1, zIndex1: 1, opacity2: 0, zIndex2: -1 });
    } else if (
      scrollY.current > halfway - fadeRange &&
      scrollY.current < halfway + fadeRange
    ) {
      const progress = (scrollY.current - (halfway - fadeRange)) / fadeDuration;
      set({
        opacity1: 1 - progress,
        zIndex1: 1,
        opacity2: progress,
        zIndex2: 0,
      });
    } else {
      set({ opacity1: 0, zIndex1: -1, opacity2: 1, zIndex2: 1 });
    }

    // Ensure smoother transitions
    if (scrollTimeout) clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(() => {
      if (opacity1.get() > 0.5) {
        set({ opacity1: 1, zIndex1: 1, opacity2: 0, zIndex2: -1 });
      } else {
        set({ opacity1: 0, zIndex1: -1, opacity2: 1, zIndex2: 1 });
      }
    }, 100);
  };

  useEffect(() => {
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <div className="h-screen">
      <animated.div
        className="fixed top-0 left-0 w-full h-screen"
        style={{ opacity: opacity1, zIndex: zIndex1 }}
      >
        <CardPage theme="light">
          <HomePage />
        </CardPage>
      </animated.div>

      <animated.div
        className="fixed top-0 left-0 w-full h-screen"
        style={{ opacity: opacity2, zIndex: zIndex2 }}
      >
        <CardPage theme="dark">
          <CompanyHighlights />
        </CardPage>
      </animated.div>
    </div>
  );
}

export default App;
