// components/Mission.jsx
import styles from './Mission.module.css';

export default function Mission() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <p className={styles.text}>
          Empowering individuals and families to rise above life’s challenges
          through holistic, evidence-based mental health care.
        </p>

        <button className={styles.button} type="button">
          ABOUT PATHS
        </button>
      </div>
    </section>
  );
}