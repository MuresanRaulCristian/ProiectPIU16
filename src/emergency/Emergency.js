import React from 'react';

import Footer from '../commons/footer'
import { useState } from "react";
import './Emergency.css'
import image from './images/map.png'
import { Icon } from '@iconify/react';
import NavigationBarPacient from '../commons/navigation-bar-pacient';
import Draggable from 'react-draggable';

export default function Emergency() {

    const [isPacient1Open, setPacient1Open] = useState(false);
    const [isPacient2Open, setPacient2Open] = useState(false);


    return (
        <div>
            <div>
                <NavigationBarPacient></NavigationBarPacient>
                <div className="welcome-text">
                    <h1>Ambulance location</h1>
                </div>
                <div className="devices-map">
                    <img src={image} className="map-image"></img>
                </div>
                <Draggable onClick={() => window.location.href='/chat'}>
                    <div className='chat-bubble' >
                        <Icon icon="ant-design:message-filled" width={60} height={60} color={'white'}/>

                    </div>
                </Draggable>
                <Footer ></Footer>
            </div>
        </div>
    )
};