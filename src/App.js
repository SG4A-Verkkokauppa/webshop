import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home"
import Footer from "./components/Footer";
import React from "react";


//const URL ='http://localhost:8888/maagista/';

function App(){
  return (
    <>
      {" "}
      <div className="navbar">
        <Navbar />
      </div>


              <Home />
              <Footer/>

    </>
    
  
  );
}

export default App;
