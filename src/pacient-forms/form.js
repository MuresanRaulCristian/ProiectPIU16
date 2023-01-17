import { React, useState } from 'react';
import NavigationBar from '../commons/navigation-bar-pacient';
import Footer from '../commons/footer'
import '../index.css'
import './form.css'
import happy from "./ant-design_smile-outlined.png"
import meh from "./fluent_emoji-smile-slight-24-regular.png"
import sad from "./fluent_emoji-sad-slight-20-regular.png"
import sadsad from "./fluent_emoji-sad-20-regular.png"

export default function Form() {

    const [formData, setFormData] = useState({});

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <div>
            <NavigationBar></NavigationBar>
            <h1 style={{ marginTop: "100px" }}>HOW DO YOU FEEL TODAY?</h1>
            <button className="button-form" type="submit">Submit</button>
            <form className='second-form' onSubmit={handleSubmit}>
                <div>
                    <div className='first-page'>
                        <br></br>
                        <label>
                            YOUR MOOD TODAY:
                            <div className='radio-img'>
                                <input
                                    type="radio"
                                    name="question1"
                                    value="option1"
                                    onChange={handleChange}
                                />
                                <div class="radio-btns">
                                    <img src={happy}></img>
                                </div>
                                <input
                                    type="radio"
                                    name="question1"
                                    value="option2"
                                    onChange={handleChange}
                                />
                                <div class="radio-btns">
                                    <img src={meh}></img>
                                </div>
                                <input
                                    type="radio"
                                    name="question1"
                                    value="option3"
                                    onChange={handleChange}
                                />
                                <div class="radio-btns">
                                    <img src={sad}></img>
                                </div>
                                <input
                                    type="radio"
                                    name="question1"
                                    value="option4"
                                    onChange={handleChange}
                                />
                                <div class="radio-btns">
                                    <img src={sadsad}></img>
                                </div>
                            </div>
                        </label>
                        <div>
                        <br></br>
                            <label className='simptoms'>
                                DID YOU HAVE ONE OF THESE SIMPTOMS TODAY?:
                                <div className='checkbox'>
                                <input
                                    type="checkbox"
                                    name="question2"
                                    value="option1"
                                    onChange={handleChange}
                                />
                                NAUSEA
                                </div>
                                <div className='checkbox'>
                                <input
                                    type="checkbox"
                                    name="question2"
                                    value="option2"
                                    onChange={handleChange}
                                />
                                HEADACHE
                                </div>
                                <div className='checkbox'>
                                <input
                                    type="checkbox"
                                    name="question2"
                                    value="option3"
                                    onChange={handleChange}
                                />
                                MUSCULAR PAIN
                                </div>
                                <div className='checkbox'>
                                <input
                                    type="checkbox"
                                    name="question2"
                                    value="option4"
                                    onChange={handleChange}
                                />
                                DIARHEA
                                </div>
                                <div className='checkbox'>
                                <input
                                    type="checkbox"
                                    name="question2"
                                    value="option5"
                                    onChange={handleChange}
                                />
                                DIZZINESS
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
                
                <div className='second-page'>
                    <br></br>
                    <br></br>
                    <label>DO YOU HAVE ADDITIONAL INFORMATION?</label>
                    <textarea initialValue="Write here..." style={{fontFamily:"Maitree", width: "532px", height: "427px", margin: "40px 20px 20px 30px", borderRadius: "10px", border: "0px"}}>
                    </textarea>
                </div>
            </form>
            <Footer></Footer>
        </div>
    )
};
