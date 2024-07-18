import "./App.css";
import Contact from "./components/Contact/Contact.component";
import Home from "./components/Home/Home.component";
import NavBar from "./components/NavBar/NavBar.component";
import Portfolio from "./components/Portfolio/portfolio.component";
import Skills from "./components/Skills/Skills.components";


function App() {
  return (
    <>
      <NavBar></NavBar>
      <Home></Home>
      <Skills></Skills>
      <Portfolio></Portfolio>
      <Contact></Contact>
    </>
  );
}

export default App;
