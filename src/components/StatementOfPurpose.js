import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from '../utils/Formutils'
import { useFormData } from '../utils/FormDataContext';

export default function StatementOfPurpose() {
  const { formData, dispatch } = useFormData();
  const { handleChange } = useForm();
  const handleFieldChange = (e) => {
    handleChange(e);
    dispatch({ type: 'updateFormData', payload: { ...formData, [e.target.name]: e.target.value } });
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
          <h2>Statement Of Purpose</h2>
          <p>Provide following information to process your application</p>
        </div>
        <div className='form-box'>
        <label>
          a. Tell me about a time you were asked to do something you had never done before. How did you react? What did you learn?*
          <div>
            <textarea
            name="q1"
            value={formData.q1}
            onChange={handleFieldChange}
            maxLength={300}
            required
            />
          </div>
        </label>

        <label>
          b. Tell me about the last time something significant didnt go according to plan at work. What was your role? What was the outcome?*
          <div>
          <textarea
            name="q2"
            value={formData.q2}
            onChange={handleFieldChange}
            maxLength={300}
            required
          />
          </div>
        </label>
        <label>
          c. What are the three things that are most important to you in a job?*
          <div>
          <textarea
            name="q3"
            value={formData.q3}
            onChange={handleFieldChange}
            maxLength={300}
            required
          />
          </div>
        </label>
        <div className='btn-Container-2'>
          <button className='btn'><Link className='link' to='/document'>Back</Link></button>
          <button className='btn'><Link className='link' to='/interview'>Next</Link></button>
        </div>
        </div>
      </section>
    </div>
    </div>
  )
}
