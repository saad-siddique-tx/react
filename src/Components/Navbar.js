import React from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import {BrowserRouter as Router, Link,NavLink, useHistory} from 'react-router-dom';
import Login from './Login';
import logo from '../images/logo.jpg'




function TopNavbar() {
    
    return (
                
                    <Navbar bg="dark" variant="dark">
                    
                        <Nav className="mr-auto">
                            <Nav.Link><NavLink to="/" >Home</NavLink></Nav.Link>
                            <Nav.Link><NavLink to="/contact" >Contact us</NavLink></Nav.Link>        
                            <Nav.Link><NavLink to="/about" >About </NavLink></Nav.Link>

                        </Nav>
    
                    
                        
                        <Link to="/signup" className="mr-sm-2">signup</Link>
                        {'     '}
                        <Link to="/login" className="mr-sm-2">login</Link>
        
                    </Navbar>
                  
        
    )
}

export default TopNavbar
