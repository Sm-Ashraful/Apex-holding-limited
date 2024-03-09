import './App.css'
import './assets/styles/main.scss';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import AboutUs from './section/overview/about-us';
import Segments from './section/overview/segments';
import KeyStrength from './section/overview/strength';

function App() {
  return (
    <>
      <Navbar />
      <Slider />
      <AboutUs />
      <Segments />
      <KeyStrength />
    </>
  )
}

export default App
