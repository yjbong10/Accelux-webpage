import React from 'react';
import './NavbarComp.scss'
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

const NavbarComp = () => {

    const navbarStyle = "Navbar shadow-sm px-4 px-md-3"

    return (
        <Navbar expand="md" className={navbarStyle} fixed='top'>
            <Container>
                <Navbar.Brand href="#home">ACCELUX</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="Navbar__nav ml-auto">
                        <Nav.Link href="#Product">Product</Nav.Link>
                        <Nav.Link href="#Features">Features</Nav.Link>
                        <Nav.Link href="#About">About</Nav.Link>
                        <Button
                            className="rounded-pill px-3"
                            variant="info"
                            size="md">Try Now</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavbarComp
