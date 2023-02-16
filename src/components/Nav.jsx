import { useState } from "react";
import logo from "../assets/images/logo.svg";

function Nav() {
  const [active, setActive] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const openNav = () => {
    setActive(!active);
    setShowNav(!showNav);
  };

  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className={"nav-routes " + (active ? "active" : "")}>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
        <hr />
        <div className="nav-login">
          <li>Login</li>
          <button className="cta">Sign up</button>
        </div>
      </div>
      <i className={active ? "fa-solid fa-xmark" : "fa-solid fa-bars"} onClick={openNav}></i>
    </nav>
  );
}
export default Nav;
