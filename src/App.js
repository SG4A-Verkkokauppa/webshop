import './App.css';
import Navbar from './components/Navbar';
import HomeCarousel from "./HomeCarousel/HomeCarousel";

function App() {
  return (
 
 <>  <div className='navbar'>
  <Navbar/>
  </div>
  

<div className="app">
<HomeCarousel/>
</div>

</>

  );
}

export default App;
