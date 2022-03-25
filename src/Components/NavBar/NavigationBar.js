import "./NavigationBar.css";
import { MenuItems } from "./MenuItems.js";
import { useState } from "react";
import CustomToggle from "../Buttons/CustomToggle";
import { useNavigate } from "react-router-dom";

function NavigationBar() {
  const [clicked, setClicked] = useState(false);

  let Navigate = useNavigate();
  const handleNav = (e) => {
    console.log(e);
    let objectE = e.item;
    console.log(objectE);
    let path = `/${objectE}`;
    console.log(path);
    setClicked(!clicked);
    Navigate(path);
  };
  function handleClick() {
    setClicked(!clicked);
  }
  return (
    <h1>
      <nav className="navbarItems">
        <h1 className="navbar-logo">
          Alton DeLuca<i className="fab fa-react"></i>
        </h1>
        <div className="menu-icon" onClick={handleClick}>
          <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
          <li key="projects">
            <CustomToggle
              data={["Projects", "Algorithms", "Currency"]}
              className="nav-links btn"
              content="Projects"
              variant="dark"
              id="dropdown-basic-dark"
              handleSelect={handleNav}
            ></CustomToggle>
          </li>
        </ul>
      </nav>
      {/* <span className="banner">
        This site is a work in progress! Please excuse any unfinished components
        while I continue to work on this page! Thank you for visiting!
      </span> */}
    </h1>
  );
}

export default NavigationBar;
