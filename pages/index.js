import Navbar from '../components/Navbar/Navbar';
import Particles from 'react-tsparticles';
import options from '../utils/particleOptions';
import GridBoard from '../components/WaveCollapse/Gridboard';

export default function Home() {
  const particleOptions = {
    ...options,
  };

  return (
    <div>
      <Particles options={particleOptions} />
      <GridBoard />
      <Navbar />
    </div>
  );
}
