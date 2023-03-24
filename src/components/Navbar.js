import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import React,{useState,useEffect} from 'react'; 
import { Link } from 'react-router-dom';


function BasicExample({url,cart}) {
  const [categories,setCategories] = useState([]);

  useEffect(() => {
    axios.get(url + 'products/categories.php')
      .then((response) => {
        const json = response.data;
        setCategories(json);
        console.log(json)
      }).catch (error => {
        alert(error.response === undefined ? error : error.response.data.error);
      })
  }, [])


  return (
    <Navbar bg="dark" variant='dark' fixed="top" className='navbar'>
      <Container>
        <Navbar.Brand href="#home">Maagista.fi</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Koti</Nav.Link>
            <Nav.Link href="#link">Linkki</Nav.Link>
            <NavDropdown title="Tuotteet" id="basic-nav-dropdown">
            {categories.map(category => (
                  <NavDropdown.Item href="#">
                  <li key={category.tuoteryhma_id}>
                    
                    {category.tuoteryhma_nimi}
                  </li>
                  </NavDropdown.Item>
                ))}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Kaikki tuotteet
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
         
          <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Haku"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-light" >Etsi</Button>
                  </Form> 
                 
<Button bg="transparent" variant='transparent' className="cartButton" >
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="white" class="bi bi-cart3" viewBox="0 0 16 16" className='cart'>
  <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
</svg>
</Button>

                
                
  
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default BasicExample;