import React from 'react'
import { Nav, NavLink } from 'reactstrap'
import '../index.css'
import logo from './logo.png'

const NavigationBarPacient = () => {
    return (
        <div className="navigation-bar" expand="md">
             <img src={logo} alt="Logo" className="logo"/>
             <div className="logo-text"><h2>LOVE</h2><h2>FOR PEOPLE</h2></div>
                <Nav className="nav-button" navbar>
                        <NavLink style={{textDecoration: "none", padding:"50px 25px 30px 25px", color: "white"}} href="">HOME</NavLink>
                        <NavLink style={{textDecoration: "none", padding:"50px 25px 30px 25px", color: "white"}} href="">DOCTORS</NavLink>
                        <NavLink style={{textDecoration: "none", padding:"50px 25px 30px 25px", color: "white"}} href="">EMERGENCY</NavLink>     
                        <NavLink style={{textDecoration: "none", padding:"50px 25px 30px 25px", color: "white"}} href="">MY DATA</NavLink>
                        <NavLink style={{textDecoration: "none", padding:"50px 25px 30px 25px", color: "white"}} href="">PHARMACY</NavLink>
                </Nav>
        </div>
    )
}

export default NavigationBarPacient;