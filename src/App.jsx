import "@splidejs/splide/css";
import "@splidejs/splide/css/core";
import AOS from "aos";
import "aos/dist/aos.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { NotFound } from "./components/Home/notfound.home";
import { Main } from "./components/main.main";

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
