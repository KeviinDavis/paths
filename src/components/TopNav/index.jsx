import styles from "./TopNav.module.css";

export default function TopNav() {
  const navLinks = [
    { label: "About", href: "#" },
    { label: "Programs", href: "#" },
    { label: "Events", href: "#" },
  ];

  return (
    <>
      <nav className={styles.bottomNav}>
        {navLinks.map((link, idx) => (
          <a key={idx} href={link.href} className={styles.navItem}>
            {link.label}
            <span className={styles.arrow}>▾</span>
          </a>
        ))}
      </nav>

      <div className={styles.rightButtons}>
        <a href="#" className={styles.textLink}>Ask for Help</a>
        <a href="#" className={styles.ctaRight}>Contact us</a>
      </div>
    </>
  );
}