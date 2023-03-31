import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import React,{useState,useEffect} from 'react'; 
import { Link } from 'react-router-dom';
import Cart from './Cart';
import maaginenLogo from './images/maaginen-logo-pieni.png';


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
    <Navbar bg="dark" variant='dark' className='navbar'>
      <Container>
      <Link className="navbar-brand otsikko" to="/"><img src={maaginenLogo}></img></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Tuotteet" id="basic-nav-dropdown">
            {categories.map(category => (
                  <NavDropdown.Item href="#">
                  <li key={category.tuoteryhma_id}>
                  {<Link className='linkki'
                      to={'/products/' + category.tuoteryhma_id}>{category.tuoteryhma_nimi}
                    </Link>}
                  </li>
                  </NavDropdown.Item>
                ))}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#">
              {<Link className='linkki'
                      to={'/allproducts/'}>Kaikki tuotteet
                    </Link>}
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
                  <ul className='navbar-nav ml-auto'>

          </ul>
          <li className='ostoskori'>
              <Cart cart={cart} />
            </li>

        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default BasicExample;