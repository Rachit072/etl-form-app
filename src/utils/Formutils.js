import { useState } from 'react';

export const useForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobileNumber: '',
    dateOfBirth: '',
    class10Marksheet: '',
    class12Marksheet: '',
    graduationMarksheet: '',
    postGraduationMarksheet: '',
    resume: '',
    recommendationLetter: '',
    salarySlips: '',
    others: '',
    q1: '',
    q2: '',
    q3: '',
    interviewEmail: '',
    location: '',
    interviewDate: '',
    interviewTime: '',
    timeZone: '',
    interviewMedium: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return { formData, handleChange };
};
