import React from 'react'
import { Nav, NavLink } from 'reactstrap'
import { useState } from "react";
import '../index.css'
import logo from './logo.png'

const NavigationBarPacient = () => {
    const [isMyDataDropdownOpen, setMyDataDropdownOpen] = useState(false);

    return (
        <div className="navigation-bar" expand="md">
             <img src={logo} alt="Logo" className="logo"/>
             <div className="logo-text"><h2>LOVE</h2><h2>FOR PEOPLE</h2></div>
                <Nav className="nav-button" navbar>
                        <NavLink style={{textDecoration: "none", padding:"50px 25px 30px 25px", color: "white"}} href="/pacient">HOME</NavLink>
                        <NavLink style={{textDecoration: "none", padding:"50px 25px 30px 25px", color: "white"}} href="/doctors">DOCTORS</NavLink>
                        <NavLink style={{textDecoration: "none", padding:"50px 25px 30px 25px", color: "white"}} onMouseOver={() => setMyDataDropdownOpen(false)} href="/emergency">EMERGENCY</NavLink>     
                        <NavLink style={{textDecoration: "none", padding:"50px 25px 30px 25px", color: "white"}} onMouseOver={() => setMyDataDropdownOpen(true)} href="/data">MY DATA</NavLink>
                        {isMyDataDropdownOpen && 
                        <div className="dropdown-data" onMouseLeave={() => setMyDataDropdownOpen(false)}>
                            <a style={{textDecoration: "none"}} href="/my-graphs">GRAPHICS</a>
                            <a style={{textDecoration: "none"}} href="/devices">HOW I FEEL</a>
                         </div>}
                        <NavLink style={{textDecoration: "none", padding:"50px 25px 30px 25px", color: "white"}} onMouseOver={() => setMyDataDropdownOpen(false)} href="/pharmacy">PHARMACY</NavLink>
                </Nav>
        </div>
    )
}

export default NavigationBarPacient;