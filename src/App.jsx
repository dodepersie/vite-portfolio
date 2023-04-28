import AOS from 'aos'
import 'aos/dist/aos.css'

import { Navbar } from './components/Layouts/navbar.layouts'
import Home from "./components/Home/main.home"
import TechStack from "./components/TechStack/main.techstack"
import Projects from './components/Projects/main.projects'
import { Footer } from './components/Layouts/footer.layouts'

function App() {

  AOS.init({
    once: "false",
    easing: "ease-in-out-back",
    duration: "1000",
  });

  return (
    <>
    <div className="select-none">
      <Navbar />
      <Home />
      <Projects />
      <TechStack />
      <Footer />
    </div>
    </>
  );
}

export default App;