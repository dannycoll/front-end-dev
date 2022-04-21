import Navbar from '../components/Navbar/Navbar';
import Particles from 'react-tsparticles';
import options from '../utils/particleOptions';
import MainContent from '../components/MainContent/MainContent';
import { useState, useEffect } from 'react';

export default function Home() {
  const [toShow, setToShow] = useState('home');
  useEffect(() => {
    console.log(toShow);
  }, [toShow]);

  const particleOptions = {
    ...options,
  };

  return (
    <div>
      <Particles options={particleOptions} />
      <MainContent show={toShow} />
      <Navbar show={toShow} setContent={setToShow} />
    </div>
  );
}
