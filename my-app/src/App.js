import React from "react";
import Portfolio from './components/Portfolio';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';


function App({currentPage}) {
  function page(){
    switch (currentPage.name){
      case "About me": return  <About />
      case "Portfolio": return <Portfolio />
      case "Contact": return   <Contact />
      case "Resume": return    <Resume />
      default: return <About />
    }
  }
  
  return (
    <div>{page()}</div>
  );
}

export default App;
