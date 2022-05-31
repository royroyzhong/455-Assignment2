import React from "react";

function Nav() {
  return (
    <>
      <nav className="navbar-container">
        <ul>
          <li>
            <a href="/" className="nav-item">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="nav-item">
              About
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Nav;
