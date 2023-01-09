import React from 'react'
import { Navbar, Nav, NavLink } from 'reactstrap'
import '../index.css'
import logo from './logo.png'

const NavigationBarAdmin = () => {
    return (
        <div className="navigation-bar" expand="md">
             <img src={logo} alt="Logo" className="logo"/>
             <div className="logo-text"><h2>LOVE</h2><h2>FOR PEOPLE</h2></div>
                <Nav className="nav-button" navbar>
                        <NavLink style={{textDecoration: "none", padding:"50px 25px 30px 25px", color: "white"}} href="">HOME</NavLink>
                        <NavLink style={{textDecoration: "none", padding:"50px 25px 30px 25px", color: "white"}} href="/">EMERGENCIES</NavLink>     
                        <NavLink style={{textDecoration: "none", padding:"50px 25px 30px 25px", color: "white"}} href="/">PACIENTS</NavLink>
                        <NavLink style={{textDecoration: "none", padding:"50px 25px 30px 25px", color: "white"}} href="/">APPOINTMENTS</NavLink>
                </Nav>
        </div>
    )
}

export default NavigationBarAdmin;