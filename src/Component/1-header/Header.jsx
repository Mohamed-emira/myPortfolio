import { useEffect, useState } from "react";
import "./header.css";
export default function Header() {
  //responsive nav
  const [showMedia, setshowMedia] = useState(false);
  //dark and light mode
  const [Theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "dark"
  );
  useEffect(() => {
    if (Theme === "dark") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  });

  return (
    <header className="flex">
      <button
        className="menu icon-menu"
        onClick={() => {
          setshowMedia(true);
        }}
      />
      <div />
      <nav>
        <ul className="flex">
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Articles</a>
          </li>
          <li>
            <a href="">Projects</a>
          </li>
          <li>
            <a href="">Speaking</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          //send value to local storage
          localStorage.setItem(
            "currentMode",
            Theme === "dark" ? "light" : "dark"
          );
          //get value from local storage
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mode"
      >
        {/*change icon between sun and moon */}
        {Theme === "dark" ? (
          <span className="icon-moon-o"></span>
        ) : (
          <span className="icon-sun"></span>
        )}
      </button>
      {showMedia && (
        <div  className="fixed">
          <ul className="model">
            <li className="border">
              <button
                className="icon-close"
                onClick={() => setshowMedia(false)}
              ></button>
            </li>
            <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Articles</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href=""></a>Uses
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
