import React from "react";
import { Navbar, NavbarBrand, Container } from 'reactstrap';

const Header = () => {
  return (
    <Navbar
      color="success"
      light
    >
      <Container className='text-start'>
        <NavbarBrand
          // className="m e-auto"
          href="/"
          >
          Restaurants
        </NavbarBrand>
        </Container>
    </Navbar>
  )
}

export default Header;
