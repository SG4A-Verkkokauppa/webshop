import "./App.css";
import Navbar from "./components/Navbar";
import HomeCarousel from "./HomeCarousel/HomeCarousel";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

function App() {
  return (
    <>
      {" "}
      <div className="navbar">
        <Navbar />
      </div>

      
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="App">
            <HomeCarousel />
          </div>
        </Col>
      </Row>
    </>
  );
}

export default App;
