import { Navbar } from './../components/Layouts/navbar.layouts'
import Home from "./../components/Home/main.home"
import TechStack from "./../components/TechStack/main.techstack"
import Projects from './../components/Projects/main.projects'
import { Footer } from './../components/Layouts/footer.layouts'

export const Main = () => {
    return (
        <div>
            <Navbar />
            <Home />
            <Projects />
            <TechStack />
            <Footer />
        </div>
    )
};