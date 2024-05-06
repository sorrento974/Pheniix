import "../styles/Navbar.css";
import { useState } from "react";

function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  // on va editer la valeur uniquement si le showLinks est different de false
  // si il est a true , on le laisse ouvert
  const handleShowLinks = () => {
    setShowLinks(!showLinks);
    // la constante handleShowLinks est relié au bouton en bas de cette page
  };
  return (
    <>
      {/* si on a la varibale showLinks a true ,alors on lui met la classe "show-nav" sinon "hide-nav" */}
      <nav className={`navbar ${showLinks ? "show-nav" : "hide-nav"}`}>
        <img
          className="navbar-image"
          src="./src/images/logo.webp"
          alt="phenix's plush"
        />
        <h2 className="navbar-title">Pheniix</h2>
        <ul className="navbar-links">
          <li className="navbar-item slideInDown-1">
            <a href="/" className="navbar-link">
              Accueil
            </a>
          </li>
          <li className="navbar-item slideInDown-2">
            <a href="/" className="navbar-link">
              Portfolio
            </a>
          </li>
          <li className="navbar-item slideInDown-3">
            <a href="/" className="navbar-link">
              Services
            </a>
          </li>
          <li className="navbar-item slideInDown-4">
            <a href="/" className="navbar-link">
              A propos
            </a>
          </li>
          <li className="navbar-item slideInDown-5">
            <a href="/" className="navbar-link">
              Contact
            </a>
          </li>
        </ul>
        <button className="navbar-burger" onClick={handleShowLinks}></button>
        <span className="burger-bar"></span>
      </nav>
    </>
  );
}

export default Navbar;
