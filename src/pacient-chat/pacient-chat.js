import React from 'react';
import NavigationBar from '../commons/navigation-bar-pacient';
import Footer from '../commons/footer'
import { useState } from "react";
import './pacient-chat.css'
import image from '../commons/doctor.jpg'
import chatLogo from '../commons/chatLogo.png'
import pacientLogo from '../devices-map/client.png'
import sendLogo from '../commons/sendLogo.png'

const PacientChat = () => {

    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className='half-side'>
                <div className='chat'>
                    <div className='chat-person'>
                        <img src={chatLogo} style={{ width: "80px", height: "80px"}}></img>
                        <div className="chat-text"><p>What can we help you with?</p></div>
                    </div>
                    <div className='chat-person'>
                        <div className="chat-text" style={{ backgroundColor: "white", marginLeft: "250px", marginRight: "20px"}}><p>I would like to talk to the doctor about the food I can eat after the surgery.</p></div>
                        <img src={pacientLogo} style={{ width: "80px", height: "80px", borderRadius: "180px" }}></img>
                    </div>
                    <div className='chat-person'>
                        <img src={chatLogo} style={{ width: "80px", height: "80px", }}></img>
                        <div className="chat-text"><p>You will receive a message as soon as possible from the doctor.</p></div>
                    </div>
                    <div className='chat-person'>
                        <img src={image} style={{ width: "80px", height: "80px", borderRadius: "180px" }}></img>
                        <div className="chat-text"><p>Hello! I checked you surgery data and for two weeks you can eat anything but diary and alchool.</p></div>
                    </div>
                        <input type="text" className='input-chat' placeholder="Write here..." name="Write here..."></input>
                        <img src={sendLogo} style={{ width: "60px", height: "60px", marginLeft: "580px", marginTop: "15px" }}></img>
                    </div>
                    <div className='chat-logo'></div>
                <div className='chat-info'>
                    <h3 className='text'>STOP WAITING FOR A CALL BACK! WRITE A MESSAGE TO DR. MEREDITH AND YOU WILL GET A RESPONSE AS SOON AS POSSIBLE.</h3>
                    <div className='doctor-info'>
                        <div style={{ display: "flex", flexDirection: "row" }}>
                            <img src={image} alt="doctorImg" className="doctorImg" style={{ marginTop: "30px", width: "160px", height: "160px" }} />
                            <div>
                                <h4 style={{ marginLeft: "10px", marginTop: "30px", color: "black", fontFamily: "MaitreeBold" }}>DR. MEREDITH GREY</h4>
                                <h6 style={{ marginLeft: "10px" }}>HEAD OF GENERAL SURGERY</h6>
                                <h6 style={{ marginLeft: "10px" }}>Rating: 5/5</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
};
export default PacientChat
