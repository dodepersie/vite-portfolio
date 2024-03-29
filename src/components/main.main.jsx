import { Navbar } from "./../components/Layouts/navbar.layouts";
import { Home } from "./../components/Home/main.home";
import { TechStack } from "./../components/TechStack/main.techstack";
import { Projects } from "./../components/Projects/main.projects";
import { Experience } from "./../components/Experience/main.experience";
import { Footer } from "./../components/Layouts/footer.layouts";
import { Contact } from "./Contact/main.contact";

export const Main = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <Home />
      <Projects />
      <Experience />
      <TechStack />
      <Contact />
      <Footer />
    </div>
  );
};
