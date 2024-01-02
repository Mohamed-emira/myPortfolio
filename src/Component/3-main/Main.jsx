import { useState } from "react";
import "./main.css";
import { myProjects } from "../myProjectsData";
import { motion, AnimatePresence } from "framer-motion";

export default function Main() {
  //make active on button
  const [currentActive, setcurrentActive] = useState("all");
  //make filter
  const [arr, setarr] = useState(myProjects);
  //one function with parmeter for filter and active
  const handleClick = (buttonCateogry) => {
    setcurrentActive(buttonCateogry);
    const arrFilter = myProjects.filter((item) => {
      return item.cateogry === buttonCateogry;
    });
    setarr(arrFilter);
  };

  return (
    //Design of button and make active
    <main className="flex">
      <section className="left-section flex">
        <button
          onClick={() => {
            handleClick("all");
            setarr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          All Projects
        </button>
        <button
          onClick={() => {
            handleClick("CSS");
          }}
          className={currentActive === "CSS" ? "active" : null}
        >
          HTML & CSS
        </button>
        <button
          onClick={() => {
            handleClick("JavaScripts");
          }}
          className={currentActive === "JavaScripts" ? "active" : null}
        >
          JavaScripts
        </button>
        <button
          onClick={() => {
            handleClick("React");
          }}
          className={currentActive === "React" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            handleClick("Php");
          }}
          className={currentActive === "Php" ? "active" : null}
        >
          Php & Laravel
        </button>
      </section>
      {/*Design of cards and make filter*/}
      <section className="right-section flex">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: "scale(.4)" }}
                animate={{ transform: "scale(1)" }}
                transition={{type:"spring",damping:10,stiffness: 70}}
                key={item.imgpath} className="card">
                <img width={266} height={260} src={item.imgPath} alt="" />
                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">{item.subTitle}</p>
                  <div className="icons flex">
                    <div style={{ gap: ".7rem" }} className="flex">
                      <a href={item.link}><div className="icon-link"></div></a>
                      <a href={item.linkGithub}><div className="icon-github"></div></a>
                    </div>
                    <a className="link flex" href="">
                      more
                      <span
                        style={{ alignSelf: "end", fontSize: ".8rem" }}
                        className="icon-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
}
