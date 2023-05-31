import AOS from "aos";
import "aos/dist/aos.css";

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./components/main.main";
import { NotFound } from "./components/Home/notfound.home";
import ScrollToTop from "react-scroll-to-top";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTime = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(loadTime);
  }, []);

  AOS.init({
    once: "true",
    easing: "ease-in-out-back",
    duration: "750",
  });

  return (
    <Router>
      {isLoading ? (
        <div className="fixed flex justify-center items-center w-full h-full bg-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="60px"
            height="60px"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid"
          >
            <circle
              cx="50"
              cy="50"
              fill="none"
              stroke="#2563eb"
              strokeWidth="5"
              r="35"
              strokeDasharray="164.93361431346415 56.97787143782138"
            >
              <animateTransform
                attributeName="transform"
                type="rotate"
                repeatCount="indefinite"
                dur="1s"
                values="0 50 50;360 50 50"
                keyTimes="0;1"
              />
            </circle>
          </svg>
        </div>
      ) : (
        <div className="select-none font-sans" data-theme="light">
          <ScrollToTop
            style={{ zIndex: "1001", right: "15px", bottom: "20px" }}
            component={<FontAwesomeIcon icon={faChevronUp} />}
          />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      )}
    </Router>
  );
}

export default App;
