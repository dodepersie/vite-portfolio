import { Experience } from "./../components/Experience/main.experience";
import { Home } from "./../components/Home/main.home";
import { Footer } from "./../components/Layouts/footer.layouts";
import { Navbar } from "./../components/Layouts/navbar.layouts";
import { Projects } from "./../components/Projects/main.projects";
import { TechStack } from "./../components/TechStack/main.techstack";
import { Contact } from "./Contact/main.contact";

export const Main = () => {
  return (
    <div className="container-fluid mx-auto">
      <Navbar />
      <Home />
      <Experience />
      <TechStack />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
};
