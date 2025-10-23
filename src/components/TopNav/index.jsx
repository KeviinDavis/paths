'use client'
import { useEffect, useRef, useState } from "react";
import styles from "./TopNav.module.css";

export default function TopNav() {
  const [activeMenu, setActiveMenu] = useState(null);
  const [closingMenu, setClosingMenu] = useState(null); // track fade-out
  const navRef = useRef(null);

  const toggleMenu = (menu) => {
    // if clicking the same menu, trigger fade-out
    if (activeMenu === menu) {
      setClosingMenu(menu);
      setTimeout(() => {
        setActiveMenu(null);
        setClosingMenu(null);
      }, 250); // matches CSS duration
    } else {
      setActiveMenu(menu);
      setClosingMenu(null);
    }
  };

  // Close on outside click or Esc
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setClosingMenu(activeMenu);
        setTimeout(() => {
          setActiveMenu(null);
          setClosingMenu(null);
        }, 250);
      }
    };
    const handleEsc = (e) => {
      if (e.key === "Escape") {
        setClosingMenu(activeMenu);
        setTimeout(() => {
          setActiveMenu(null);
          setClosingMenu(null);
        }, 250);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEsc);
    };
  }, [activeMenu]);

  const renderDropdown = (menuKey, content) => {
    const isActive = activeMenu === menuKey;
    const isClosing = closingMenu === menuKey;
    if (!isActive && !isClosing) return null;

    return (
      <div
        id={`menu-${menuKey}`}
        className={`${styles.dropdown} ${
          isClosing ? styles.dropdownExit : styles.dropdownEnter
        }`}
        role="menu"
      >
        {content}
      </div>
    );
  };

  return (
    <>
      <nav className={styles.bottomNav} ref={navRef}>
          <div className={styles.logo}>
          {<img src="/paths/pathsimages/logo1.png" alt="PATHS Logo" />}
          {/*<img src="/paths/pathsimages/logo2.png" alt="PATHS  Logo" />*/}
        </div>
        <div className={styles.navLinks}>
          {/* ABOUT */}
          <div>
            <button
              className={styles.navItem}
              onClick={() => toggleMenu("about")}
              aria-expanded={activeMenu === "about"}
              aria-controls="menu-about"
            >
              About{" "}
              <span
                className={`${styles.arrow} ${
                  activeMenu === "about" ? styles.arrowOpen : ""
                }`}
              >
                ▾
              </span>
            </button>
          </div>

          {/* PROGRAMS */}
          <div>
            <button
              className={styles.navItem}
              onClick={() => toggleMenu("programs")}
              aria-expanded={activeMenu === "programs"}
              aria-controls="menu-programs"
            >
              Programs{" "}
              <span
                className={`${styles.arrow} ${
                  activeMenu === "programs" ? styles.arrowOpen : ""
                }`}
              >
                ▾
              </span>
            </button>
          </div>

          {/* EVENTS */}
          <div>
            <button
              className={styles.navItem}
              onClick={() => toggleMenu("events")}
              aria-expanded={activeMenu === "events"}
              aria-controls="menu-events"
            >
              Events{" "}
              <span
                className={`${styles.arrow} ${
                  activeMenu === "events" ? styles.arrowOpen : ""
                }`}
              >
                ▾
              </span>
            </button>
          </div>

          {/* DROPDOWNS */}
          {renderDropdown(
            "about",
            <>
              <div className={styles.column}>
                <h4>Mission</h4>
                <p>To uplift individuals through holistic mental health care.</p>
              </div>
              <div className={styles.column}>
                <h4>Philosophy</h4>
                <p>Grounded in empowerment and personal growth.</p>
              </div>
              <div className={styles.column}>
                <h4>Team</h4>
                <p>Meet the dedicated professionals behind PATHS.</p>
              </div>
            </>
          )}

          {renderDropdown(
            "programs",
            <>
              <div className={styles.column}>
                <h4>Psychiatric Rehabilitation Program</h4>
                <p>Strength-based support for daily life independence.</p>
              </div>
              <div className={styles.column}>
                <h4>Therapy</h4>
                <p>
                  Helping clients navigate emotional challenges and personal
                  growth through compassionate guidance.
                </p>
              </div>
              <div className={styles.column}>
                <h4>TEACH</h4>
                <p>
                  Mentorship and skill-building for young adults, fostering
                  confidence and leadership.
                </p>
              </div>
            </>
          )}

          {renderDropdown(
            "events",
            <>
              <div className={styles.column}>
                <h4>Workshops</h4>
                <p>Interactive sessions for skill development.</p>
              </div>
              <div className={styles.column}>
                <h4>Community Outreach</h4>
                <p>Connecting care with the people who need it most.</p>
              </div>
              <div className={styles.column}>
                <h4>Announcements</h4>
                <p>Stay informed about upcoming PATHS events.</p>
              </div>
            </>
          )}
        </div>
      </nav>

      <div className={styles.rightButtons}>
        <a href="#" className={styles.textLink}>
          Ask for Help
        </a>
        <a href="#" className={styles.ctaRight}>
          Contact us
        </a>
      </div>
    </>
  );
}