import { Container } from 'react-bootstrap';
import BrandsSection from '../components/BrandsSection/BrandsSection';
import Footer from '../components/Footer/Footer';
import HeroSection from '../components/HeroSection/HeroSection';
import NavbarComp from '../components/NavbarComp/NavbarComp';
import Sections from '../components/Sections/Sections';
import Tiers from '../components/Tiers/Tiers';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavbarComp />

      <Container fluid className="HeroSection__outerContainer--p-Bg">
        <HeroSection />
      </Container>

      <Sections />

      <Tiers />

      <Container fluid className="BrandsSection__outerContainer--s-li-Bg">
        <BrandsSection />
      </Container>
      <Container fluid className="Footer__outerContainer--d-Bg">
        <Footer />
      </Container>
    </div>
  );
}

export default App;
