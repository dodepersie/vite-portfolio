import AOS from 'aos'
import 'aos/dist/aos.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Main } from './components/main.main';
import { NotFound } from './components/Home/notfound.home';
import ScrollToTop from "react-scroll-to-top"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

function App() {

  AOS.init({
    easing: "ease-in-out-back",
    duration: "1000",
  });

  return (
    <Router>
      <div className="select-none">
      <ScrollToTop data-aos="zoom-in" smooth component={<FontAwesomeIcon icon={faChevronUp} style={{ fontSize: "1rem", color: '#000000' }} />} />
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;