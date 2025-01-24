import AOS from "aos";
import "aos/dist/aos.css";
import "@splidejs/splide/css";
import "@splidejs/splide/css/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Main } from "./components/main.main";
import { NotFound } from "./components/Home/notfound.home";

function App() {
  AOS.init({
    easing: "ease-in-out-back",
    duration: "1000",
  });

  return (
    <Router>
      <div className="select-none text-xl" data-theme="fantasy">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
