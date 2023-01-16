import React from 'react';
import NavigationBar from '../commons/navigation-bar-admin';
import Footer from '../commons/footer';
import './admin-chat.css';
import image from '../commons/doctor.jpg';
import chatLogo from '../commons/chatLogo.png';
import pacientLogo from '../devices-map/client.png';
import sendLogo from '../commons/sendLogo.png';

const AdminChat = () => {

    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className='half-side'>
                <div className='chat'>
                    <div className='chat-person'>
                        <div className="chat-text"><p>What can we help you with?</p></div>
                        <img src={chatLogo} style={{ width: "80px", height: "80px"}}></img>
                    </div>
                    <div className='chat-person' style={{ marginLeft:"20px" }}>
                        <img src={pacientLogo} style={{ width: "80px", height: "80px", borderRadius: "180px" }}></img>
                        <div className="chat-text" style={{ backgroundColor: "#5CA4CC", marginLeft:"20px", marginRight: "20px"}}><p>I would like to talk to the doctor about the food I can eat after the surgery.</p></div>
                    </div>
                    <div className='chat-person'>
                        <div className="chat-text"><p>You will receive a message as soon as possible from the doctor.</p></div>
                        <img src={chatLogo} style={{ width: "80px", height: "80px", }}></img>
                    </div>
                    <div className='chat-person'>
                        <div className="chat-text"><p>Hello! I checked you surgery data and for two weeks you can eat anything but diary and alchool.</p></div>
                        <img src={image} style={{ width: "80px", height: "80px", borderRadius: "180px" }}></img>
                    </div>
                        <input type="text" className='input-chat' placeholder="Write here..." name="Write here..."></input>
                        <img src={sendLogo} style={{ width: "60px", height: "60px", marginLeft: "580px", marginTop: "15px" }}></img>
                    </div>
                    <div className='chat-logo'></div>
                <div className='chat-info'>
                    <div className='doctor-info'>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <img src={pacientLogo} alt="doctorImg" className="doctorImg" style={{ marginTop: "30px", width: "160px", height: "160px" }} />
                            <div>
                                <h4 style={{ marginLeft: "10px", marginTop: "30px", color: "black", fontFamily: "MaitreeBold" }}>GEORGE TSUSU</h4>
                                <h6 style={{ marginLeft: "10px" }}>ID: 59599595</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
};
export default AdminChat
