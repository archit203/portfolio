import Navbar from "./components/NavBar/Navbar";
import Resume from "./components/Resume/resume";
import Works from "./components/Works/works";
import Intro from "./components/intro/intro";
import Skills from "./components/skills/skills";


function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Resume />
    </div>
  );
}

export default App;
