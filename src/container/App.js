import { Container } from 'react-bootstrap';
import JumbotronComp from '../components/HeroSection/HeroSection';
import NavbarComp from '../components/NavbarComp/NavbarComp';
import Sections from '../components/Sections/Sections';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Container fluid className="App__container--p-Bg">
          <JumbotronComp />

        <Container fluid className="App__container--s-Bg">
          <Sections />
        </Container>

      </Container>
    </div>
  );
}

export default App;
