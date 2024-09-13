import React from "react";
import { Link } from "react-router-dom";
import {
  Navbar as NavBar,
  Container,
  Nav,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";

const Navbar = () => {
  return (
    <div>
      <NavBar fixed="top" bg="dark" variant={"dark"} expand="lg">
        <Container>
          <NavBar.Brand href="#">NewsSnake</NavBar.Brand>
          <NavBar.Toggle aria-controls="navbarScroll" />
          <NavBar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link className="nav-link" to="/">
                Top News
              </Link>
              <Link className="nav-link" to="/business">
                Business
              </Link>
              <Link className="nav-link" to="/entertainment">
                Entertainment
              </Link>
              <Link className="nav-link" to="/health">
                Health
              </Link>
              <Link className="nav-link" to="/sports">
                Sports
              </Link>
              <Link className="nav-link" to="/science">
                Science
              </Link>
              <Link className="nav-link" to="/technology">
                Technology
              </Link>
            </Nav>
            <Form className="d-flex">
              {/* <FormControl type="search"
                                placeholder="Search"
                                className="me-2"
                                aria-label="Search"
                            /> */}
              <Button
                className="btn"
                style={{
                  backgroundColor: "rgb(66, 66, 255)",
                  border: "3px solid black",
                  color: "white",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "inline-block",
                  fontSize: "16px",
                  margin: "4px 2px",
                  cursor: "pointer",
                }}
                variant="success"
              >
                Search
              </Button>
            </Form>
          </NavBar.Collapse>
        </Container>
      </NavBar>
    </div>
  );
};
export default Navbar;
