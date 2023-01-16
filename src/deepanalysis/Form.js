import React from 'react';
import { useForm } from 'react-hook-form';
import "./Form.css"
import { Dots } from 'loading-animations-react';

export default function DeepAnalysis() {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => window.location.href='/analysis/result';
    console.log(errors);
    const inputFile = React.useRef(null); 

    const onButtonClick = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();
      };
      

    return (
        <div>
            <h1>Deep Analysis</h1>
        <div className={'form-background'}>
        
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='inputs'>
            <label>Targeted System</label>
            <select {...register("Targeted System")}>
                <option value="Digestive">Digestive</option>
                <option value="Respiratory">Respiratory</option>
                <option value="Circulatory">Circulatory</option>
                <option value="Nervous">Nervous</option>
            </select>
            <label>Previous Conditions</label>

            <input type="undefined" placeholder="" {...register} />
            </div>
                <div className="measure">
                <label>Select measurements</label>
                <div className={"measurements"}>
                <input  type="radio" value="Heart rate" />      <label>Heart Rate</label>
                <input  type="radio" value="Blood pressure" />  <label>Blood Pressure</label>
                <input  type="radio" value="Blood glucose" />   <label>Blood glucose</label>
                <input  type="radio" value="Lymphocyes" />      <label>Lymhocytes</label>
                <input  type="radio" value="WBCs" />            <label>WBCs</label>
                <input  type="radio" value="Neutrophils" />     <label>"Neutrophils</label>
                <input  type="radio" value="Monocytes" />       <label>Monocytes</label>
                <input  type="radio" value="Basophilis" />      <label>Basophilis</label>
                <input  type="radio" value="RBCs" />            <label>RBCs</label>
                <input  type="radio" value="Hb" />              <label>Hb</label>
                <input  type="radio" value="Hematocrit" />      <label>Hematocrit</label>
                <input  type="radio" value="Platelets" />       <label>Platelets</label>
                </div>
            </div>
            <div className={"files"}>
            
            <label>Attach Radiology</label>
            <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
            <button className='browse-btn' onClick={onButtonClick}>Browse</button>


            <label>Attach MRI Scan</label>
            <input type='file' id='file' ref={inputFile} style={{display: 'none'}}/>
            <button className='browse-btn' onClick={onButtonClick}>Browse</button>


            </div>
            <input type="submit" value="RUN"/>
        </form>
        </div>
        </div>
    );
}