import "./App.css";
import Navbar from "./components/Navbar";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";

function App() {
  return (
    <>
      {" "}
      <div className="navbar">
        <Navbar />
      </div>

      
      <Container fluid>
        <Col className="Carousel">
          <div >
            <HomeCarousel />
          </div>
        </Col>
      </Container>
    </>
  );
}

export default App;
