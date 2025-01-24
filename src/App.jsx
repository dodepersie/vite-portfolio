import AOS from "aos";
import "aos/dist/aos.css";
import "@splidejs/splide/css";
import "@splidejs/splide/css/core";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./components/main.main";
import { NotFound } from "./components/Home/notfound.home";
import ScrollToTop from "react-scroll-to-top";
import { FaChevronUp } from "react-icons/fa";

function App() {
  AOS.init({
    easing: "ease-in-out-back",
    duration: "1000",
  });

  return (
    <Router>
      <div className="select-none text-xl" data-theme="fantasy">
        <ScrollToTop
          style={{ zIndex: "1001", right: "15px", bottom: "20px" }}
          className="flex justify-center items-center transition-colors ease-in duration-50 dark:bg-slate-600 dark:text-gray-50"
          component={<FaChevronUp />}
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
