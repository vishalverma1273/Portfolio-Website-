import Navbar from "./Components/Navbar.js";
import Main from "./Components/Main";
import About from "./Components/About.js";
import Overview from "./Components/Overview.js";
import Projects from "./Components/Projects.js";
import Contact from "./Components/Contact.js";
import Footer from "./Components/Footer.js";

function App() {
  return (
    <div className="flex flex-col overflow-x-hidden">
      <div className="absolute w-screen">
        <Navbar />
      </div>

      <div className="min-h-screen">
        <div className="absolute">
          <Main />
        </div>
        <div className="relative">
          <About />
        </div>
      </div>
      <div className="flex flex-col relative bg-white">
        <Overview />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
