import React, {useState} from 'react';
import NavigationBar from '../commons/navigation-bar-admin';
import Footer from '../commons/footer'
import './devices.css'
import image from '../commons/map.png'
import chart from './chart.png'
import chart2 from './chart2.png'
import client from './client.png'
import client2 from './client2.png'

const Devices = () => {

    const [isPacient1Open, setPacient1Open] = useState(false);
    const [isPacient2Open, setPacient2Open] = useState(false);

    const togglePacient1Open = () => {
        setPacient1Open(!isPacient1Open);
    }

    const togglePacient2Open = () => {
        setPacient2Open(!isPacient2Open);
    }

    return (
        <div>
            <div>
                <NavigationBar></NavigationBar>
                <div className="welcome-text">
                    <h1>View externed pacients and their devices</h1>
                </div>
                <div className="devices-map">
                    <img src={image} className="map-image"></img>
                    <div className="icon" style={{left: "703px", top: "431px"}}>I</div>
                    <div className="icon" onClick={() => togglePacient2Open()}
                         style={{left: "200px", top: "360px", color: "#990D0D"}}>!
                    </div>
                    {isPacient2Open &&
                        <div className="icon-open" style={{left: "230px", top: "160px"}}>
                            <div>
                                <img src={chart2} style={{width: "300px", marginLeft: "10px", marginTop: "10px"}}></img>
                            </div>
                            <div>
                                <img src={client2} style={{
                                    width: "70px",
                                    marginLeft: "10px",
                                    marginTop: "10px",
                                    borderRadius: "108px"
                                }}></img>
                                <h6>Pacient id: 43434343</h6>
                                <h6>Pacient name: Obiuan Kenobi</h6>
                            </div>
                        </div>
                    }
                    <div className="icon" style={{left: "903px", top: "70px"}}>III</div>
                    <div className="icon" onClick={() => togglePacient1Open()}
                         style={{left: "1103px", top: "300px"}}>IV
                    </div>
                    {isPacient1Open &&
                        <div className="icon-open" style={{left: "685px", top: "340px"}}>
                            <div>
                                <img src={chart} style={{width: "300px", marginLeft: "10px", marginTop: "10px"}}></img>
                            </div>
                            <div>
                                <img src={client} style={{
                                    width: "70px",
                                    marginLeft: "10px",
                                    marginTop: "10px",
                                    borderRadius: "108px"
                                }}></img>
                                <h6>Pacient id: 59599595</h6>
                                <h6>Pacient name: George Tsusu</h6>
                            </div>
                        </div>}
                </div>
                <Footer></Footer>
            </div>
        </div>
    )
};
export default Devices
