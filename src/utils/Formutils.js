import { useState } from "react";

export const useForm = () => {

    const [formData, setFormData] = useState({
        // Basic Details
        name: '',
        email: '',
        mobileNumber: '',
        dateOfBirth: '',
        
        // Document Collection
        class10Marksheet: '',
        class12Marksheet: '',
        graduationMarksheet: '',
        postGraduationMarksheet: '',
        resume: '',
        recommendationLetter: '',
        salarySlips: '',
        others: '',
    
        // Statement of Purpose
        q1: '',
        q2: '',
        q3: '',
        
        // Interview Availability
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
