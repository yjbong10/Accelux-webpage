import React, { useState, useEffect } from 'react';
import './NavbarComp.scss'
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

const NavbarComp = () => {

    const [isMouseOver, setMouseOver] = useState(false)
    const [isOnTop, setIsOnTop] = useState(false)
    const navbarStyle = 
        isMouseOver || isOnTop ? "Navbar px-4 px-md-3"
            : "Navbar Navbar--transparent px-4 px-md-3"

    useEffect(() => {
        window.onscroll = () => {
            if (window.pageYOffset > 0) {
                setIsOnTop(true);
            } else {
                setIsOnTop(false);
            }
        }
    }, [])

    return (
        <Navbar expand="md" className={navbarStyle} fixed='top' 
            onMouseOver={() => setMouseOver(true)}
            onMouseOut={() => setMouseOver(false)}>
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
