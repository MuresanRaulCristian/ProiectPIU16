import React from 'react';
import { useForm } from 'react-hook-form';
import "./Form.css"
import { Waves } from 'loading-animations-react';


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
        <h1>Deep Analysis</h1>
        <div className='treatment'>
        <div className='image-container'>
            <img src={require("./images/result.png")} />
        </div>
        <div className='result-container'>
            <ul>
                <h2>Treatment Plan</h2>
                <li>Cefuroxime - 1 pills every 4h  </li>
                <li>Amikacin - 1 pill in the morning and in the evening</li>
                <li>Terbinafine - 1 pill every day</li>
                <li>Terbinafine - 2 pills in the evening</li>


            </ul>
        </div>
        </div>
        <button className='btn-download'>DOWNLOAD</button>

    </div>
    )
}