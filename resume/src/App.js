import logo from './logo.svg';
import './App.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container'
function App() {
  return (
    <Container>
   <Row>
    <Col lg={true}>
    <p>Haii</p>
    </Col>
    <Col lg={true}>
      <p>Haaai</p>
    </Col>
   </Row>
   </Container>
  );
}

export default App;
