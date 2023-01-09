import React from 'react';
import NavigationBar from './commons/navigation-bar-admin';
import Footer from './commons/footer'
import './index.css'
import image from './commons/doctor.jpg'

class AdminHome extends React.Component {


    render() {

        return (
            <div>
            <div>
            <NavigationBar></NavigationBar>
            <div className="welcome-text">
                <h1>Welcome back, Dr. Meredith!</h1>
            </div>
            <div className="buttons-zone">

            </div>
            <div>
                <div className="my-doctor">
                    <h4>MY DATA</h4>
                    <div style={{ display: "flex", flexDirection: "row"}}>
                    <img src={image} alt="doctorImg" className="doctorImg"/>
                    <div>
                        <h4 style={{marginLeft: "20px", color: "black", fontFamily: "MaitreeBold"}}>DR. MEREDITH GREY</h4>
                        <h6>HEAD OF GENERAL SURGERY</h6>
                        <h6>Rating: 5/5</h6>
                        <button>EDIT DATA</button>
                    </div>
                    </div>
                </div>
                <div>
                    <div className="new-notification">
                        <h3>EMERGENCIES</h3>
                        <p>THERE ARE 0 EMERGENCIES.</p>
                    </div>
                    <div className="treatment-plan">
                        <h3>SEE YOUR PRIVATE MESSAGES</h3>
                        <button style={{width: "310px", margin: "0px 0px 0px 35px"}}>MESSAGES</button>
                    </div>
                </div>
            </div>
            <Footer></Footer>
            </div>
            </div>
        )
    };
}

export default AdminHome
