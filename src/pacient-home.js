import React from 'react';
import NavigationBar from './commons/navigation-bar-pacient';
import Footer from './commons/footer'
import './index.css'
import image from './commons/doctor.jpg'
import {useNavigate} from 'react-router-dom';

export default function PacientHome() {

    const navigate = useNavigate();

    const goToChat = () => {
        navigate('/pacient/chat');
      };

        return (
            <div>
            <NavigationBar></NavigationBar>
            <div className="welcome-text">
                <h1>Welcome back, George!</h1>
            </div>
            <div className="buttons-zone">
                    <img className='button-images' src={require("./emergency/images/emergency.png")} onClick={() => window.location.href='/emergency'}/>
                    <img className='button-images' src={require("./emergency/images/call.png")} onClick={() => window.location.href='/emergency/call'}/>
            </div>
            <div>
                <div className="my-doctor">
                    <h4>MY DOCTOR</h4>
                    <div style={{ display: "flex", flexDirection: "row"}}>
                    <img src={image} alt="doctorImg" className="doctorImg"/>
                    <div>
                        <h4 style={{marginLeft: "20px", color: "black", fontFamily: "MaitreeBold"}}>DR. MEREDITH GREY</h4>
                        <h6>HEAD OF GENERAL SURGERY</h6>
                        <h6>Rating: 5/5</h6>
                        <button onClick={goToChat}>CONTACT</button>
                    </div>
                    </div>
                </div>
                <div>
                    <div className="new-notification">
                        <h3>YOU HAVE A NEW NOTIFICATION!</h3>
                        <p>Please fill the following form about the services we have offered you.</p>
                        <a>CLICK HERE</a>
                    </div>
                    <div className="treatment-plan">
                        <h3>SEE YOUR TREATMENT PLAN</h3>
                        <button style={{width: "310px", margin: "0px 0px 0px 35px"}}>TO YOUR TREATMENT PLAN</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            </div>
        )
    };

