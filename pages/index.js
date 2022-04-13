import Navbar from '../components/Navbar/Navbar';
import Particles from 'react-tsparticles';
import options from '../utils/particleOptions';

export default function Home() {
  const particleOptions = {
    ...options,
  };

  return (
    <div>
      <Particles options={particleOptions} />
      <Navbar />
    </div>
  );
}
