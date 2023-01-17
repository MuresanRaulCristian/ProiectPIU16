import { React, useState } from 'react';
import NavigationBar from '../commons/navigation-bar-pacient';
import Footer from '../commons/footer'
import '../index.css'
import './form.css'

export default function ReviewForm() {

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
            <h1 className="welcome-text" style={{marginTop: "40px"}}>REVIEW FORM FOR THE SERVICES OFFERED BY THE "LOVE FOR PEOPLE" HOSPITAL</h1>
            <form className="form" onSubmit={handleSubmit}>
            <br></br>
                <label>Please select the circle that suits your oppinion the best. (1 - Very bad, 5 - Very Good)</label>
                <br></br>
                <div>
                    <label>
                        How would you rate the doctor that took care of you?
                    <br></br>
                    <input
                        type="radio"
                        name="question1"
                        value="option1"
                        onChange={handleChange}
                    />
                    1
                    <input
                        type="radio"
                        name="question1"
                        value="option2"
                        onChange={handleChange}
                    />
                    2
                    <input
                        type="radio"
                        name="question1"
                        value="option2"
                        onChange={handleChange}
                    />
                    3
                    <input
                        type="radio"
                        name="question1"
                        value="option2"
                        onChange={handleChange}
                    />
                    4
                    <input
                        type="radio"
                        name="question1"
                        value="option2"
                        onChange={handleChange}
                    />
                    5
                    </label>
                </div>
                <div>
                    <label>
                        How would you rate the services offered by our nurses?
                    <br></br>
                    <input
                        type="radio"
                        name="question2"
                        value="option1"
                        onChange={handleChange}
                    />
                    1
                    <input
                        type="radio"
                        name="question2"
                        value="option2"
                        onChange={handleChange}
                    />
                    2
                    <input
                        type="radio"
                        name="question2"
                        value="option2"
                        onChange={handleChange}
                    />
                    3
                    <input
                        type="radio"
                        name="question2"
                        value="option2"
                        onChange={handleChange}
                    />
                    4
                    <input
                        type="radio"
                        name="question2"
                        value="option2"
                        onChange={handleChange}
                    />
                    5
                    </label>
                </div>
                <div>
                    <label>
                        How would you rate the hospital conditions?
                    <br></br>
                    <input
                        type="radio"
                        name="question3"
                        value="option1"
                        onChange={handleChange}
                    />
                    1
                    <input
                        type="radio"
                        name="question3"
                        value="option2"
                        onChange={handleChange}
                    />
                    2
                    <input
                        type="radio"
                        name="question3"
                        value="option2"
                        onChange={handleChange}
                    />
                    3
                    <input
                        type="radio"
                        name="question3"
                        value="option2"
                        onChange={handleChange}
                    />
                    4
                    <input
                        type="radio"
                        name="question3"
                        value="option2"
                        onChange={handleChange}
                    />
                    5
                    </label>
                </div>
                <div>
                    <label>
                        Would you recommend our hospital to your friends and family?
                    <br></br>
                    <input
                        type="radio"
                        name="question4"
                        value="option1"
                        onChange={handleChange}
                    />
                    1
                    <input
                        type="radio"
                        name="question4"
                        value="option2"
                        onChange={handleChange}
                    />
                    2
                    <input
                        type="radio"
                        name="question4"
                        value="option2"
                        onChange={handleChange}
                    />
                    3
                    <input
                        type="radio"
                        name="question4"
                        value="option2"
                        onChange={handleChange}
                    />
                    4
                    <input
                        type="radio"
                        name="question4"
                        value="option2"
                        onChange={handleChange}
                    />
                    5
                    </label>
                </div>
                <button type="submit" style={{ marginLeft: "500px", width: "300px"}}>Submit</button>
            </form>
            <Footer></Footer>
        </div>
    )
};
