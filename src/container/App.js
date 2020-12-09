import { Container } from 'react-bootstrap';
import JumbotronComp from '../components/JumbotronComp/JumbotronComp';
import NavbarComp from '../components/NavbarComp/NavbarComp';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavbarComp />
      <Container fluid className="App__container">
          <JumbotronComp />
      </Container>
    </div>
  );
}

export default App;
