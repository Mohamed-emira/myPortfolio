import { useEffect, useState } from "react";
import Header from "./Component/1-header/Header";
import Hero from "./Component/2-hero/Hero";
import Main from "./Component/3-main/Main";
import Contact from "./Component/4-contact/Contact";
import Footer from "./Component/5-footer/Footer";

function App() {
  const[showScroll,setshowScroll]=useState(false);
  useEffect(()=>{
  window.addEventListener('scroll',()=>{
    {window.scrollY >300 ? setshowScroll(true):setshowScroll(false)}
  })
  },[])
  return (
    <div id="up" className="container">
      <Header />
      <Hero />
      <div className="divider" />
      <Main />
      <div className="divider" />
      <Contact />
      <div className="divider" />
      <Footer />
        <a style={{opacity:showScroll? 1:0   ,transition:"1s"}} href="#up">
      <button className="icon-keyboard_arrow_up scroll2Top"></button>
          </a>
        </div>
  );
}

export default App;
