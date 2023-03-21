import "../App.css";
import HomeCarousel from "../HomeCarousel/HomeCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Container } from "react-bootstrap";
import GridCard from "../components/GridCard";



function App() {
  return (
    <>
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