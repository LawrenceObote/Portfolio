import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    //setting up a navbar and connecting each individual link to the appropriate page
    <div id="nav">
      <div className="fa-icon">
        <i class="fas fa-laptop fa-2x"></i>
      </div>
      <div className="nav-content">
        <Link id="link-to-about" className="link" to="/">
          About
        </Link>
        <Link id="link-to-project" className="link" to="/projects">
          Projects
        </Link>
        <Link id="link-to-contact" className="link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
}
