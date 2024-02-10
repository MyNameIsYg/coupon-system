import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
// import NoProducts from './NoProducts';



function Menu() {

    const nevigate = useNavigate();
    const [userDate, setUserData] = useState(JSON.parse(localStorage.getItem('userData')));

    const isUserLogin = () => {

        if (userDate !== null) {
            return true;
        }
        else {
            return false;
        }
    }

    return (
        <>
            {isUserLogin() ? (
                <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
                    <Container>
                        <Navbar.Brand > userDate.email </Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            {/* <Nav className="me-auto">
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collapsible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">
                                Another action
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">
                                Separated link
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav> */}
                            <Nav>
                                <Nav.Link onClick={nevigate('/my-coupons')}>My Coupons</Nav.Link>
                                <Nav.Link eventKey={2} href="#memes">
                                    Store
                                </Nav.Link>
                                <Nav.Link onClick={isUserLogin() ? () => localStorage.clear() : () => nevigate('/login')}>{isUserLogin() ? "Logout" : "Login"}</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            )
                :
            nevigate('/login')}
        </>
    );
}

export default Menu;