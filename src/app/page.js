import Image from "next/image";
import styles from "./page.module.css";
import Hero from '../components/Hero/index.jsx'
import Mission from '../components/Mission/index.jsx'




export default function Home() {
  return (
    <div>
      <Hero />
      <Mission />
    </div>
  );
}