import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Header from "./View/Header";
import Footer from "./View/Footer";
import Hero from "./View/Hero";
import About from "./View/About"
import Portfolio_sec from "./View/Portfolio_sec"
import Resume from "./View/Resume"
import Skills from "./View/Skills"
function App() {
  const Layout = () => {
    return (
      <>
        
        <Outlet />
        <Hero/>
        <About/>
        <Skills/>
        <Resume/>
        <Portfolio_sec/>
        <Footer/>
        
      </>
    );
  };
  return (
      <BrowserRouter>
      <Layout />
          
          
      </BrowserRouter>
  );
}

export default App;
