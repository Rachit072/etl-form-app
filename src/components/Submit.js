import React from 'react';
import './Submit.css';

const Submit = () => {
  return (
    <div className='submit-pg'>
        <div className="container">
            <h2>Submission Successful!</h2>
            <p>Thank you for applying. We will review your information and get back to you soon.</p>
        <div className="back-link">
        <a href="/">Create New Form</a>
        </div>
    </div>
    </div>
  );
};

export default Submit;
