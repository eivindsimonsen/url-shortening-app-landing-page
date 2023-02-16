import logo from "../assets/images/logo.svg";

function Nav() {
  return (
    <nav className="nav">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="nav-routes">
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resourcees</li>
        </ul>
        <div className="nav-login">
          <li>Login</li>
          <button>Sign up</button>
        </div>
      </div>
      <i className="fa-solid fa-bars"></i>
      <i className="fa-solid fa-xmark"></i>
    </nav>
  );
}

export default Nav;
