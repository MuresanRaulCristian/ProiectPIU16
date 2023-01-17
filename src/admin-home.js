import React from 'react';
import NavigationBar from './commons/navigation-bar-admin';
import Footer from './commons/footer'
import './index.css'
import image from './commons/doctor.jpg'
import {useNavigate} from 'react-router-dom';

export default function AdminHome() {

    const navigate = useNavigate();

    const goToChat = () => {
        navigate('/messages');
    };

    return (
        <div>
            <div>
                <NavigationBar></NavigationBar>
                <h1 className="welcome-text" style={{fontSize: "3em"}}>Welcome back, Dr. Meredith!</h1>
                <div>
                    <div className="my-data">
                        <h4>MY DATA</h4>
                        <div style={{display: "flex", flexDirection: "row"}}>
                            <img style={{marginLeft: "30px"}} src={image} alt="doctorImg" className="doctorImg"/>
                            <div>
                                <h4 style={{marginLeft: "20px", color: "black", fontFamily: "MaitreeBold"}}>DR. MEREDITH
                                    GREY</h4>
                                <h6 style={{marginLeft: "20px"}}>HEAD OF GENERAL SURGERY</h6>
                                <h6 style={{marginLeft: "20px"}}>Rating: 5/5</h6>
                                <button>EDIT DATA</button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="new-notification-doctor">
                            <h3>EMERGENCIES</h3>
                            <p style={{marginLeft: "40px"}}>THERE ARE 0 EMERGENCIES.</p>
                        </div>
                        <div className="treatment-plan-doctor">
                            <h3>SEE YOUR PRIVATE MESSAGES</h3>
                            <button onClick={goToChat} style={{width: "310px", margin: "0px 0px 0px 35px"}}>MESSAGES
                            </button>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
};

