import React from 'react'
import { useForm } from '../utils/Formutils';
import {Link, useNavigate} from 'react-router-dom';
import { useFormData } from '../utils/FormDataContext';

function Document() {
  const { formData, dispatch } = useFormData();
  const { handleChange } = useForm();
  const navigate = useNavigate();

  const handleFieldChange = (e) => {
    handleChange(e);
    dispatch({ type: 'updateFormData', payload: { ...formData, [e.target.name]: e.target.value } });
  };
  
  const validateAndProceed = () => {
    if (formData.class10Marksheet && formData.class12Marksheet && formData.graduationMarksheet && formData.resume) {
      navigate('/sop');
    } else {
      alert('Please fill in required fields before proceeding.');
    }
  };
  
  return (
    <div>
      <div className='form-container'>
      <section className='flex-col form'>
        <div>
          <h3 style={{margin:"0px"}}>Preview</h3>
          <p style={{margin:"0px",paddingBottom:"5px", fontSize:"small"}}>you will be able to customize the fields in later stages</p>
        </div>
        <div className='section-title'>
          <h2>Document Collection</h2>
          <p>Provide following information to process your application</p>
        </div>
        <div className='form-box'> 
        <label>
          Class 10 Marksheet*:
          <input type="file" name="class10Marksheet" onChange={handleFieldChange} required />
        </label>

        <label>
          Class 12 Marksheet*:
          <input type="file" name="class12Marksheet" onChange={handleFieldChange} required />
        </label>

        <label>
          Graduation Marksheet*:
          <input type="file" name="graduationMarksheet" onChange={handleFieldChange} required />
        </label>

        <label>
          Post Graduation Marksheet:
          <input type="file" name="postGraduationMarksheet" onChange={handleFieldChange} />
        </label>

        <label>
          Resume/CV*:
          <input type="file" name="resume" onChange={handleFieldChange} required />
        </label>

        <label>
          Recommendation Letter:
          <input type="file" name="recommendationLetter" onChange={handleFieldChange} />
        </label>

        <label>
          Salary Slips:
          <input type="file" name="salarySlips" onChange={handleFieldChange} />
        </label>

        <label>
          Others:
          <input type="file" name="others" onChange={handleFieldChange} />
        </label>
        </div>
        <div className='btn-Container-2'>
          <button className='btn'><Link className='link' to='/'>Back</Link></button>
          {/* <button className='btn'><Link className='link' to='/sop'>Next</Link></button> */}
          <button className='btn' onClick={validateAndProceed}>Next</button>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Document
