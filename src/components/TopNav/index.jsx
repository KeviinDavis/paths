'use client'
import { useState } from "react";
import styles from "./TopNav.module.css";

export default function TopNav() {
  const [activeMenu, setActiveMenu] = useState(null);

  const handleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <>
      <nav className={styles.bottomNav}>
        <div className={styles.navLinks}>
          {/* ABOUT */}
          <div
            onMouseEnter={() => setActiveMenu("about")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className={styles.navItem} onClick={() => handleMenu("about")}>
              About <span className={styles.arrow}>▾</span>
            </button>
          </div>

          {/* PROGRAMS */}
          <div
            onMouseEnter={() => setActiveMenu("programs")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className={styles.navItem} onClick={() => handleMenu("programs")}>
              Programs <span className={styles.arrow}>▾</span>
            </button>
          </div>

          {/* EVENTS */}
          <div
            onMouseEnter={() => setActiveMenu("events")}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className={styles.navItem} onClick={() => handleMenu("events")}>
              Events <span className={styles.arrow}>▾</span>
            </button>
          </div>

          {/* DROPDOWNS (now centered relative to .navLinks) */}
          {activeMenu === "about" && (
            <div className={styles.dropdown}>
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
            </div>
          )}

          {activeMenu === "programs" && (
            <div className={styles.dropdown}>
              <div className={styles.column}>
                <h4>Psychiatric Rehabilitation Program</h4>
                <p>Strength-based support for daily independence.</p>
              </div>
              <div className={styles.column}>
                <h4>Therapy</h4>
                <p>Helping clients navigate emotional challenges and personal growth.</p>
              </div>
              <div className={styles.column}>
                <h4>TEACH</h4>
                <p>Mentorship and skill-building for for young adults while fostering confidence, leadership.</p>
              </div>
            </div>
          )}

          {activeMenu === "events" && (
            <div className={styles.dropdown}>
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
            </div>
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