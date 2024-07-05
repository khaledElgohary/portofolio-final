import Background from "./components/background";
import { Header } from "./components/header";
import Aboutme from "./components/about-me";
import Skills from "./components/skills";
import Experience from "./components/experience";
import Projects from "./components/projects";
import Links from "./components/links";
import Contact from "./components/contact-form";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  return (
    <div className="app">
      <Header/>
      <Background/>
      <Aboutme/>
      <Skills/>
      <Experience/>
      <Projects/>
      <Links/>
      <Contact/>
    </div>
  );
}
