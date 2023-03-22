import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home"
import { Row, Col, Container } from "react-bootstrap";
import GridCard from "./components/GridCard";
import Footer from "./components/Footer";
import React from "react";



function App() {
  return (
    <>

      
      {" "}
      <div className="navbar">
        <Navbar />
      </div>


              <Home />

    </>
    
  
  );
}

export default App;
