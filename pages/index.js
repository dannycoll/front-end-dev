import Navbar from "../components/Navbar/Navbar";
import Particles from "react-tsparticles";
import options from "../utils/particleOptions";
import MainContent from "../components/MainContent/MainContent";
import { useState } from "react";
import styles from "../styles/index.module.css";
import GridBoard from '../components/WaveCollapse/Gridboard';

export default function Home() {
  const [toShow, setToShow] = useState("home");

  const particleOptions = {
    ...options,
  };

  return (
    <div>
      <Particles options={particleOptions} />
      <MainContent show={toShow} className={styles.MainContent} />
      {/* <GridBoard /> */}
      <Navbar show={toShow} setContent={setToShow} />
    </div>
  );
}
