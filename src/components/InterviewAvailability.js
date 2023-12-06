import React from 'react'
import { useForm } from '../utils/Formutils'

function InterviewAvailability() {
  const {formData,handleChange} = useForm();
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
    <div>
      <div className='form-container'>
      <section className='flex-col form'>
        <div className='section-title'>
          <h2>Interview Availability</h2>
          <p>Provide following information to process your application</p>
        </div>
        <div>
        <label>
            a. Email*
            <input
              type="email"
              name="interviewEmail"
              value={formData.interviewEmail}
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
              required
            />
          </label>
        </div>

        <div>
          <label>
            e. Time Zone (Dropdown list)*
            <select
              name="timeZone"
              value={formData.timeZone}
              onChange={handleChange}
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

        <div>
          <label>
            f. Interview Medium (Dropdown list)*
            <select
              name="interviewMedium"
              value={formData.interviewMedium}
              onChange={handleChange}
              required
            >
              <option value="">Select Interview Medium</option>
              <option value="In-Person">In-Person</option>
              <option value="On-Line">On-Line</option>
            </select>
          </label>
        </div>
      </section>
    </div>
    </div>
  )
}

export default InterviewAvailability
