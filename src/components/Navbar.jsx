import React, { useRef, useState } from "react";
import { links, social } from "../data";
import logo from "../assets/android-chrome-192x192.png";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  const linkStyles = {
    height: showLinks
      ? `${linksRef.current.getBoundingClientRect().height}px`
      : "0px",
  };

  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} alt="logo" className="logo" />
          <button
            type="button"
            className="nav-toggle"
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>
        <div
          className="links-container"
          ref={linksContainerRef}
          style={linkStyles}
        >
          <ul className="links" ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className="social-icons">
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
