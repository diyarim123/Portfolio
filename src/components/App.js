import About from "./About.js";
import Contact from "./Contact.js";
import Detail from "./Detail.js";
import Header from "./Header.js";
import Projects from "./Projects.js";
import Skills from "./Skills.js";
import Slider from "./Slider"


function App() {
  return (
    <div className="App bg-primary">

    <section className='flex'>

      <Slider />
      <header className="flex flex-col gap-5 scroll-smooth h-screen overflow-y-scroll overflow-x-hidden">

        <Header />

        <div className="flex w-full flex-col gap-5 lg:px-40 text-white">
          <Detail />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </div>

      </header>

      </section>


    </div>
  );
}

export default App;
