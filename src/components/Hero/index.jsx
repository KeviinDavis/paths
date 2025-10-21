import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <video
        className={styles.heroImage}
        // src="/paths/pathsvideos/video1.mp4"
        src="/paths/pathsvideos/video2.mp4"
        // src="/paths/pathsvideos/video3.mp4"
        // src="/paths/pathsvideos/video4.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      <div className={styles.content}>
        <h1>Guiding Growth.<br />Inspiring Renewal.</h1>
        <button className={styles.cta}>Programs</button>
      </div>
    </section>
  );
}