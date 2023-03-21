import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home"



function App() {
  return (
    <>

      <div className="navbar">
        <Navbar />
      </div>


              <Home />

    </>
  );
}

export default App;
