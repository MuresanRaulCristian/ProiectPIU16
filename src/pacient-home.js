import React from 'react';
import NavigationBar from './commons/navigation-bar-pacient';
import Footer from './commons/footer'
import './index.css'
import image from './commons/doctor.jpg'

class PacientHome extends React.Component {


    render() {

        return (
            <div>
            <NavigationBar></NavigationBar>
            <div className="welcome-text">
                <h1>Bine ai revenit, George!</h1>
            </div>
            <div className="buttons-zone">

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
                        <button>CONTACT</button>
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
}

export default PacientHome
