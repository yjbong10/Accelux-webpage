import { Container } from 'react-bootstrap';
import HeroSection from '../components/HeroSection/HeroSection';
import NavbarComp from '../components/NavbarComp/NavbarComp';
import Sections from '../components/Sections/Sections';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavbarComp />

      <Container fluid className="App__container--p-Bg">
        <HeroSection />

        {/* <Container fluid className="App__container--s-Bg">
          <Sections />
        </Container> */}

        <Sections />

      </Container>
    </div>
  );
}

export default App;
