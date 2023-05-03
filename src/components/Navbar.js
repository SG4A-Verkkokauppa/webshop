import Container from "react-bootstrap/Container";
import { Nav, Navbar, Form, Offcanvas } from "react-bootstrap";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Cart from "./Cart";
import "../App.css";

function BasicExample({ url, cart }) {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(url + "products/categories.php")
      .then((response) => {
        const json = response.data;
        setCategories(json);
      })
      .catch((error) => {
        alert(error.response === undefined ? error : error.response.data.error);
      });
  }, []);

  function executeSearch(e) {
    if (e.keyCode === 13) {
      e.preventDefault();
      navigate("/search/" + search);
    }
  }

  return (
    <>
      {[false].map((expand) => (
        <Navbar className="navbar" key={expand} expand={expand}>
          <Container fluid>
            <Navbar.Toggle
              className="navbar-toggle"
              aria-controls={`offcanvasNavbar-expand-${expand}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                fill="#ffda05"
                class="bi bi-list-stars"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5z"
                />
                <path d="M2.242 2.194a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.256-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53zm0 4a.27.27 0 0 1 .516 0l.162.53c.035.115.14.194.258.194h.551c.259 0 .37.333.164.493l-.468.363a.277.277 0 0 0-.094.3l.173.569c.078.255-.213.462-.423.3l-.417-.324a.267.267 0 0 0-.328 0l-.417.323c-.21.163-.5-.043-.423-.299l.173-.57a.277.277 0 0 0-.094-.299l-.468-.363c-.206-.16-.095-.493.164-.493h.55a.271.271 0 0 0 .259-.194l.162-.53z" />
              </svg>
            </Navbar.Toggle>
            <Navbar.Offcanvas
              className="navbar-pohja"
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  className="justify-content-start"
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                >
                  Tuotealueet
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Nav
                className="justify-content-end-top flex-grow-1 pe-3 me-auto"
                title="Tuotteet"
              >
                {categories.map((category) => (
                  <li key={category.tuoteryhma_id}>
                    {
                      <Link
                        className="linkki"
                        to={"/products/" + category.tuoteryhma_id}
                      >
                        {category.tuoteryhma_nimi}
                      </Link>
                    }
                  </li>
                ))}
                <Link className="linkki" to={"/allproducts/"}>
                  Kaikki tuotteet
                </Link>

                <Form className="d-flex">
                  <Form.Control
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onKeyDown={(e) => executeSearch(e)}
                    type="search"
                    placeholder="Haku"
                    className="me-2"
                    aria-label="Search"
                  />
                </Form>
              </Nav>
            </Navbar.Offcanvas>

            <Link className="navbar-brand" to="/">
              <img src={require("./images/maaginen-logo-v2.png")}></img>
            </Link>

            <li>
              <Cart cart={cart} />
            </li>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default BasicExample;
