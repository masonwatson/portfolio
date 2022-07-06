import "./Header.css";
import useHeaderText from "./headerHooks/useHeaderText";
import useTimer from "./headerHooks/useTimer";

import { useState, useEffect } from "react";

const text_attributes = ["gineer.", "joyer.", "gager.", "chanter?"];

export default function Header() {
  // Custom Hooks
  const headerText = useHeaderText(text_attributes);
  const currentTime = useTimer();

  // States
  const [showAbout, setShowAbout] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showMobileNavBar, setShowMobileNavBar] = useState(false);

  const toggleAbout = () => {
    setShowAbout(!showAbout);
  };

  const toggleMobileMenu = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  useEffect(() => {
    let isMounted = true;

    function site_mount() {
      const handleMobileNav = (currentWidth) => {
        if (currentWidth <= 897) {
          setShowMobileNavBar(true);
        } else {
          if (showMobileMenu === true) {
            setShowMobileMenu(false);
          } else {
            setShowMobileNavBar(false);
          }
        }
      };

      window.addEventListener("resize", () => {
        handleMobileNav(window.innerWidth);
      });

      return window.addEventListener("resize", () => {
        handleMobileNav(window.innerWidth);
      });
    }

    if (isMounted) {
      if (window.innerWidth <= 897) {
        setShowMobileNavBar(true);
      } else {
        setShowMobileNavBar(false);
      }
      site_mount();
    }

    return () => {
      isMounted = false;
    };
  }, [showMobileMenu]);

  return (
    <>
      <header className={`navbar ${showMobileNavBar ? "top" : "bottom"}`}>
        <button
          className={`mobile-nav ${showMobileNavBar ? "active" : ""}`}
          type="button"
          aria-label="Menu"
          onClick={() => toggleMobileMenu()}
        >
          <span className="mobile-nav-box">
            <span
              className={`mobile-nav-inner ${showMobileMenu ? "arrow" : ""}`}
            />
          </span>
        </button>
        <div className="info">
          <div className="left">
            <div className="contact">
              <ul>
                <li className="name">
                  <strong>MASON WATSON</strong>
                </li>
                <li>
                  Software En{headerText}
                  <span className="blinking-cursor" />
                </li>
              </ul>
              <ul
                className={`locationemail ${
                  showMobileNavBar ? "inactive" : ""
                }`}
              >
                <li>Austin, Texas</li>
                <li>masonxwork@gmail.com</li>
              </ul>
            </div>
            <nav className={`links ${showMobileNavBar ? "inactive" : ""}`}>
              <ul>
                <li className="about-li">
                  <button className="link" onClick={() => toggleAbout()}>
                    <span>01</span>
                    <strong>&emsp;about</strong>
                  </button>
                </li>
                <li className="resume-li">
                  <button className="link">
                    <span>02</span>
                    <strong>&ensp; resume</strong>
                  </button>
                </li>
              </ul>
            </nav>
            <nav className={`social ${showMobileNavBar ? "inactive" : ""}`}>
              <ul>
                <li className="github-li">
                  <a
                    className="social-link link"
                    href="https://github.com/masonwatson"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>03</span>
                    <strong>&ensp; github</strong>
                  </a>
                </li>
                <li className="linkedin-li">
                  <a
                    className="social-link link"
                    href="https://www.linkedin.com/in/masonxw/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>04</span>
                    <strong>&ensp; linkedin</strong>
                  </a>
                </li>
                <li className="twitter-li">
                  <a
                    className="social-link link"
                    href="https://twitter.com/mxwcode"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>05</span>
                    <strong>&ensp; twitter</strong>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <section className={`about ${showAbout ? "showAbout" : "hideAbout"}`}>
        <button className="back-button" onClick={() => toggleAbout()}>
          <span className="button-box">
            <span className="icon-close" />
          </span>
        </button>
        <div className="container">
          <div className="left">
            <h2 className="heading">
              Forward-thinking Software Engineer with {currentTime} of
              experience.
            </h2>
            <p className="intro-1">Proclivity for solving problems.</p>
            <p className="intro-2">
              Seeking a company that I could add value to, both interpersonally
              and on a development level.
            </p>
          </div>
          <div className="right">
            <h5 className="heading education">Education</h5>
            <h6>Bachelor of Science in Computer Science</h6>
            <p className="school-para">Texas State University, San Marcos</p>
            <h5 className="heading skills">Skills</h5>
            <p className="skills-para">
              Data Structures & Algorithms, Object Oriented Design &
              Implementation, MVC Architecture, ASP.NET, Razor Pages, Node,
              React, Bootstrap, jQuery, JSON, Flask, MySQL, MongoDB, APIs, SDKs,
              Version Control, Git, Linux/Unix, Agile Development, Strategic
              Planning, Software Documentation
            </p>
          </div>
        </div>
      </section>
      <section
        className={`mobileMenu ${
          showMobileMenu ? "showMobileMenu" : "hideMobileMenu"
        }`}
      >
        <div className="info">
          <div className="left">
            <div className="contact">
              <ul className="locationemail">
                <li>Austin, Texas</li>
                <li>masonxwork@gmail.com</li>
              </ul>
            </div>
            <nav className="links">
              <ul>
                <li className="about-li">
                  <button className="link" onClick={() => toggleAbout()}>
                    <span>01</span>
                    <strong>&emsp;about</strong>
                  </button>
                </li>
                <li className="resume-li">
                  <button className="link">
                    <span>02</span>
                    <strong>&ensp; resume</strong>
                  </button>
                </li>
              </ul>
            </nav>
          </div>
          <div className="right">
            <nav className="social">
              <ul>
                <li className="github-li">
                  <a
                    className="social-link link"
                    href="https://github.com/masonwatson"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>03</span>
                    <strong>&ensp; github</strong>
                  </a>
                </li>
                <li className="linkedin-li">
                  <a
                    className="social-link link"
                    href="https://www.linkedin.com/in/masonxw/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>04</span>
                    <strong>&ensp; linkedin</strong>
                  </a>
                </li>
                <li className="twitter-li">
                  <a
                    className="social-link link"
                    href="https://twitter.com/mxwcode"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span>05</span>
                    <strong>&ensp; twitter</strong>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
