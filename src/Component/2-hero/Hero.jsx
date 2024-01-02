import "./hero.css";
import Lottie from "lottie-react";
import developer from "../../animation/developer.json";
import { useRef } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const lottieRef = useRef();
  return (
    <section className="hero flex">
      <div className="left-section">
        <div className="avatar-parent span flex">
          <motion.img
            initial={{ transform: "scale(0)" }}
            animate={{ transform: "scale(1.1)" }}
            transition={{ damping: 5, type: "spring", stiffness: 50}}
            className="avatar-img"
            src="./myimg.jpg"
            alt=""
          />
          <div className="icon-verified"></div>
        </div>
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3 }}
          className="title"
        >
          Front end developer
        </motion.h1>
        <p className="sub-title">
          I am a front end developer with more than 5 years of swoftware
          development experience. Worked on successful projects for major
          companies. Motivated,punctual and open-inded,adapts easily to various
          environments.Can work alone or in team.
        </p>
        <div className="all-icons flex">
          <a href="https://twitter.com/Mohamed63583115">
            {" "}
            <div className="icon-twitter"></div>
          </a>
          <a href="https://www.instagram.com/emira5625/">
            {" "}
            <div className="icon-instagram"></div>
          </a>
          <a href="https://github.com/Mohamed-emira">
            {" "}
            <div className="icon-github"></div>
          </a>
          <a href="https://www.linkedin.com/in/mohamed-emira-b66927182/">
            {" "}
            <div className="icon-linkedin"></div>
          </a>
        </div>
      </div>
      <div className="right-section animation">
        <Lottie
          lottieRef={lottieRef}
          onLoadedImages={() => {
            lottieRef.current.setSpeed(0.5);
          }}
          animationData={developer}
        />
      </div>
    </section>
  );
}
