import React from 'react'
import { useForm } from '../utils/Formutils'
import {Link, useNavigate} from 'react-router-dom'
import { useFormData } from '../utils/FormDataContext';

function InterviewAvailability() {
  const { formData, dispatch } = useFormData();
  const { handleChange } = useForm();
  const navigate = useNavigate();

  const handleFieldChange = (e) => {
    handleChange(e);
    dispatch({ type: 'updateFormData', payload: { ...formData, [e.target.name]: e.target.value } });
  };
  const validateAndProceed=()=>{
    if(formData.interviewEmail && formData.location
    && formData.interviewDate && formData.interviewTime 
    && formData.timeZone && formData.interviewMedium){
      navigate('/submit')
    } else {
      alert("Please fill in required fields before proceeding.")
    }
  }

  const commonTimeZones = [
    { value: 'Select Time Zone', label: 'Select Time Zone' },
    { value: 'GMT', label: 'Greenwich Mean Time (GMT)' },
    { value: 'UTC', label: 'Coordinated Universal Time (UTC)' },
    { value: 'EST', label: 'Eastern Standard Time (EST)' },
    { value: 'CST', label: 'Central Standard Time (CST)' },
    { value: 'PST', label: 'Pacific Standard Time (PST)' },
    { value: 'IST', label: 'Indian Standard Time (IST)' },
    { value: 'CET', label: 'Central European Time (CET)' },
    { value: 'JST', label: 'Japan Standard Time (JST)' },
    { value: 'AEDT', label: 'Australian Eastern Daylight Time (AEDT)' },
  ];
  return (
      <div className='form-container'>
        <section className='flex-col form'>
        <div>
          <h3 style={{margin:"0px"}}>Preview</h3>
          <p style={{margin:"0px",paddingBottom:"5px", fontSize:"small"}}>you will be able to customize the fields in later stages</p>
        </div>
        <div className='section-title'>
          <h2>Interview Availability</h2>
          <p>Provide following information to process your application</p>
        </div>
        <div className='form-box'>
        <div>
        <label>
            a. Email*
            <input
              type="email"
              name="interviewEmail"
              value={formData.interviewEmail}
              onChange={handleFieldChange}
              required
            />
          </label>
        </div>

        <div>
          <label>
            b. Location*
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleFieldChange}
              required
            />
          </label>
        </div>

        <div>
          <label>
            c. Interview Date (Date)*
            <input
              type="date"
              name="interviewDate"
              value={formData.interviewDate}
              onChange={handleFieldChange}
              required
            />
          </label>
        </div>

        <div>
          <label>
            d. Interview Time (Time)*
            <input
              type="time"
              name="interviewTime"
              value={formData.interviewTime}
              onChange={handleFieldChange}
              required
            />
          </label>
        </div>

        <div className='select-div'>
          <label>
            e. Time Zone (Dropdown list)*
            <select
              name="timeZone"
              value={formData.timeZone}
              onChange={handleFieldChange}
              required
            >
              {commonTimeZones.map((zone, index) => (
                <option key={index} value={zone.value}>
                  {zone.label}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div className='select-div'>
          <label>
            f. Interview Medium (Dropdown list)*
            <select
              name="interviewMedium"
              value={formData.interviewMedium}
              onChange={handleFieldChange}
              required
            >
              <option value="">Select Interview Medium</option>
              <option value="In-Person">In-Person</option>
              <option value="On-Line">On-Line</option>
            </select>
          </label>
          <div className='btn-Container-2'>
          <button className='btn'><Link className='link' to='/sop'>Back</Link></button>
          <button className='btn' onClick={validateAndProceed}>Submit</button>
          {/* <button className='btn'><Link className='link' to='/submit'>Submit</Link></button> */}
        </div>
        </div>
        </div>
      </section>
    </div>
  )
}

export default InterviewAvailability
