import "./App.css";
import Navbar from "./components/Navbar";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import GridCard from "./components/GridCard";



function App() {
  return (
    <>
      {" "}
      <div className="navbar">
        <Navbar />
      </div>

      <Container fluid>
        <Row className="Carousel">
          <Col>
              <HomeCarousel />
          </Col>
        </Row>

        <Row className="Gridcard">
          <Col>
              <GridCard />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
