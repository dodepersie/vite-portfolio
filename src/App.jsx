import AOS from "aos";
import "aos/dist/aos.css";
import '@splidejs/splide/css';
import '@splidejs/splide/css/skyblue';
import '@splidejs/splide/css/core';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./components/main.main";
import { NotFound } from "./components/Home/notfound.home";
import ScrollToTop from "react-scroll-to-top";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

function App() {
  AOS.init({
    once: "true",
    easing: "ease-in-out-back",
    duration: "750",
  });

  return (
    <Router>
        <div className="select-none" data-theme="light">
          <ScrollToTop
            style={{ zIndex: "1001", right: "15px", bottom: "20px" }}
            component={<FontAwesomeIcon icon={faChevronUp} />}
          />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
    </Router>
  );
}

export default App;
