import React from 'react'
import {Link} from 'react-router-dom'
import { useForm } from '../utils/Formutils'

export default function StatementOfPurpose() {
  const { formData, handleChange } = useForm();

  return (
    <div>
      <div className='form-container'>
      <section className='flex-col form'>
        <div className='section-title'>
          <h2>Statement Of Purpose</h2>
          <p>Provide following information to process your application</p>
        </div>
        <div>
        <label>
          a. Tell me about a time you were asked to do something you had never done before. How did you react? What did you learn?*
          <div>
            <textarea
            name="q1"
            value={formData.q1}
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
