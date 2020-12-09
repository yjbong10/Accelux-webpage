import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';


const NavbarComp = () => {
    return (
        <Navbar bg="light" expand="sm" className="shadow-sm h-100">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#Product">Product</Nav.Link>
                        <Nav.Link href="#Features">Features</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                        <Button
                            className="rounded-pill"
                            variant="primary"
                            size="md">Try Now</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComp
