import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';

import { Navbar, Nav } from 'react-bootstrap';

function Header () {
    return (
        <header>
            <Navbar collapseOnSelect expand="lg" variant="dark" className="navbar">
                <Navbar.Brand href="./">Multiverse</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="./">Home</Nav.Link>
                        <Nav.Link href="./characters">Characters</Nav.Link>
                        <Nav.Link href="./episodes">Episodes</Nav.Link>
                        <Nav.Link href="./locations">Locations</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="./about">About</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    )
}

export default Header;