import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import './NavigationBar.css';

function NavigationBar() {
    return (
        <>
            <Navbar className="nav-bar" bg="light">
                <Container>
                    <Navbar.Brand href="#home">
                        <div className='image-source'>
                            <img src={require("./pinkButterfly.png")} rounded width="60" height="60" class="d-inline-block align-top" alt="" padding="50px" />
                            <div style={{ "padding-left": "30px" }}><h1>Welcome to My Profile</h1></div>
                        </div>
                    </Navbar.Brand>
                    {/* <Navbar.Brand href="#home"><h1>Welcome to My Profile</h1></Navbar.Brand> */}
                </Container>
            </Navbar>
        </>
    );
}

export default NavigationBar;