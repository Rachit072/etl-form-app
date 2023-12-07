import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../utils/Formutils';

export default function BasicDetails() {
  const { formData, handleChange } = useForm();
  return (
    <div className='form-container'>
    <section className='flex-col form'>
      <div className='section-title'>
        <h2>Details Collection</h2>
        <p>Provide following information to process your application</p>
      </div>
      <div>
      <div>
        <label>
          Name*:
        </label>
        <div>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
      </div>
      <div>
        <label>
          Email*:
        </label>
        <div>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
      </div>
      <div>
        <label>
          Mobile Number:
        </label>
        <div>
          <input type="tel" name="mobileNumber" value={formData.mobileNumber} onChange={handleChange} />
        </div>
      </div>
      <div>
        <label>
          Date of Birth:
        </label>
        <div>
          <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleChange} />
        </div>
      </div>
      <div className='btn-Container'>
        <button className='btn'><Link className='link' to='/document'>Next</Link></button>
      </div>
      </div>
    </section>
    </div>
  )
}
