import React, {useState} from 'react'
import {Nav, NavLink} from 'reactstrap'
import '../index.css'
import logo from './logo.png'

const NavigationBarAdmin = () => {
    const [isPacientsDropdownOpen, setPacientsDropdownOpen] = useState(false);

    return (
        <div className="navigation-bar" expand="md">
            <img src={logo} alt="Logo" className="logo"/>
            <div className="logo-text"><h2>LOVE</h2><h2>FOR PEOPLE</h2></div>
            <Nav className="nav-button" navbar>
                <NavLink style={{textDecoration: "none", padding: "50px 25px 30px 25px", color: "white"}}
                         href="/">HOME</NavLink>
                <NavLink style={{textDecoration: "none", padding: "50px 25px 30px 25px", color: "white"}}
                         onMouseOver={() => setPacientsDropdownOpen(false)} href="/emergencies">EMERGENCIES</NavLink>
                <NavLink style={{textDecoration: "none", padding: "50px 25px 30px 25px", color: "white"}}
                         onMouseOver={() => setPacientsDropdownOpen(true)} href="/patient-details">PACIENTS</NavLink>
                {isPacientsDropdownOpen &&
                    <div className="dropdown-pacients" onMouseLeave={() => setPacientsDropdownOpen(false)}>
                        <a style={{textDecoration: "none"}} href="/graphs">GRAPHICS</a>
                        <a style={{textDecoration: "none"}} href="/devices">DEVICES</a>
                        <a style={{textDecoration: "none"}} href="/patient-details">PACIENTS</a>
                        <a style={{textDecoration: "none"}} href="/farmacy">PHARMACY</a>
                        <a style={{textDecoration: "none"}} href="/messages">MESSAGES</a>
                        <a style={{textDecoration: "none"}} href="/analysis">ANALYSIS</a>

                    </div>}
                <NavLink style={{textDecoration: "none", padding: "50px 25px 30px 25px", color: "white"}}
                         onMouseOver={() => setPacientsDropdownOpen(false)} href="/appointments">APPOINTMENTS</NavLink>
                <NavLink style={{textDecoration: "none", padding: "50px 25px 30px 25px", color: "white"}}
                         href="/doctor-list">DOCTORS</NavLink>
            </Nav>
        </div>
    )
}

export default NavigationBarAdmin;