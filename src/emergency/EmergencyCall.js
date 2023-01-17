import React from 'react';
import NavigationBar from '../commons/navigation-bar-pacient';
import Footer from '../commons/footer'
import './pacient-chat.css'
import image from './images/doctor.png'
import image_controller from './images/controler.png'

import chatLogo from '../commons/chatLogo.png'
import pacientLogo from '../devices-map/client.png'
import sendLogo from '../commons/sendLogo.png'

export default function EmergencyCall() {

    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className='half-side'>
                <div className='wrapper'>
                    <img src={image} alt="doctor-image" className="doctorImg" style={{marginTop: "30px"}}/>

                    <div className='chat-call'>

                        <div className='chat-person'>
                            <img src={chatLogo} style={{width: "80px", height: "80px"}}></img>
                            <div className="chat-text"><p>What can we help you with?</p></div>
                        </div>
                        <div className='chat-person'>
                            <div className="chat-text"
                                 style={{backgroundColor: "white", marginLeft: "250px", marginRight: "20px"}}><p>I would
                                like to talk to the doctor about the food I can eat after the surgery.</p></div>
                            <img src={pacientLogo} style={{width: "80px", height: "80px", borderRadius: "180px"}}></img>
                        </div>
                        <div className='chat-person'>
                            <img src={chatLogo} style={{width: "80px", height: "80px",}}></img>
                            <div className="chat-text"><p>You will receive a message as soon as possible from the
                                doctor.</p></div>
                        </div>
                        <div className='chat-person'>
                            <img src={image} style={{width: "80px", height: "80px", borderRadius: "180px"}}></img>
                            <div className="chat-text"><p>Hello! I checked you surgery data and for two weeks you can
                                eat anything but diary and alchool.</p></div>
                        </div>
                        <input type="text" className='input-chat' placeholder="Write here..."
                               name="Write here..."></input>
                        <img src={sendLogo}
                             style={{width: "60px", height: "60px", marginLeft: "580px", marginTop: "15px"}}></img>
                    </div>
                    <img src={image_controller} className="controller"></img>
                </div>
            </div>
            <Footer></Footer>
        </div>
    )
};

