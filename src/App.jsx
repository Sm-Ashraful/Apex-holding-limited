import './App.css'
import './assets/styles/main.scss';
import Slider from './components/Slider';
import Layout from './layout/Layout';
import AboutUs from './section/overview/about-us';
import Segments from './section/overview/segments';
import KeyStrength from './section/overview/strength';

function App() {
  return (
    <Layout>
      <Slider />
      <AboutUs />
      <Segments />
      <KeyStrength />
    </Layout>
  )
}

export default App
