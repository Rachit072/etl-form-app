import React from 'react'
import { useForm } from '../utils/Formutils';
import {Link} from 'react-router-dom';

function Document() {
  const {handleChange } = useForm();
  return (
    <div>
      <div className='form-container'>
      <section className='flex-col form'>
        <div className='section-title'>
          <h2>Document Collection</h2>
          <p>Provide following information to process your application</p>
        </div>
        <div>
        <label>
          Class 10 Marksheet*:
          <input type="file" name="class10Marksheet" onChange={handleChange} required />
        </label>

        <label>
          Class 12 Marksheet*:
          <input type="file" name="class12Marksheet" onChange={handleChange} required />
        </label>

        <label>
          Graduation Marksheet*:
          <input type="file" name="graduationMarksheet" onChange={handleChange} required />
        </label>

        <label>
          Post Graduation Marksheet:
          <input type="file" name="postGraduationMarksheet" onChange={handleChange} />
        </label>

        <label>
          Resume/CV*:
          <input type="file" name="resume" onChange={handleChange} required />
        </label>

        <label>
          Recommendation Letter:
          <input type="file" name="recommendationLetter" onChange={handleChange} />
        </label>

        <label>
          Salary Slips:
          <input type="file" name="salarySlips" onChange={handleChange} />
        </label>

        <label>
          Others:
          <input type="file" name="others" onChange={handleChange} />
        </label>
        </div>
        <div className='btn-Container-2'>
          <button className='btn'><Link className='link' to='/'>Back</Link></button>
          <button className='btn'><Link className='link' to='/sop'>Next</Link></button>
        </div>
      </section>
    </div>
    </div>
  )
}

export default Document
