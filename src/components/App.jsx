import About from "./About.jsx";
import Experience from "./Experience.jsx";
import Contact from "./Contact.jsx";
import Detail from "./Detail.jsx";
import Header from "./Header.jsx";
import Projects from "./Projects.jsx";
import Skills from "./Skills.jsx";
import Slider from "./Slider.jsx"


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
          <Experience />  
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
