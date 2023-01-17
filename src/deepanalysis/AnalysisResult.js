import React from 'react';
import { useForm } from 'react-hook-form';
import "./Form.css"
import { Waves } from 'loading-animations-react';
import NavigationBarAdmin from '../commons/navigation-bar-admin';
import Footer from '../commons/footer';


export default function AnalysisResult() {
    const [isLoading, setLoading] = React.useState(true);
    const onLoadEffect = () => {
        setTimeout(() => {
            setLoading(false);
        }, 3000);
    }
    React.useEffect(onLoadEffect, []);

    if (isLoading) {
        return <Waves waveColor="cyan" backgroundColor="#FFF" />;
    }
    return (<div >
        <NavigationBarAdmin></NavigationBarAdmin>
        <h1>Deep Analysis</h1>
        <h1>Deep Analysis</h1>

        <div className='treatment'>
        <div className='image-container'>
            <img src={require("./images/result.png")}  className='imgres'/>
        </div>
        <div className='result-container'>
            <ul>
                <h2 style={{color: 'white'}}>Treatment Plan</h2>
                <li>Cefuroxime - 1 pills every 4h  </li>
                <li>Amikacin - 1 pill in the morning and in the evening</li>
                <li>Terbinafine - 1 pill every day</li>
                <li>Terbinafine - 2 pills in the evening</li>


            </ul>
        </div>
        </div>
        <button className='btn-download'>DOWNLOAD</button>
        <Footer ></Footer>

    </div>
    )
}