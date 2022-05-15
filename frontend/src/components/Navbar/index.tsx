import { ReactComponent as Githubicon } from "assets/img/github.svg";
import "./navbar.css";

function Navbar() {
  return (
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>Drake Games</h1>
          <a href="https://github.com/Drake-Montgomery/Drake-Games">
            <div className="dsmovie-contact-container">
              <Githubicon />
              <p className="dsmovie-contact-link">/Drake Montgomery</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
  );
}
export default Navbar;