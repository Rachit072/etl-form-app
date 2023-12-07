import React, { createContext, useContext, useReducer } from 'react';

const FormDataContext = createContext();

const initialState = {
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
};

const formDataReducer = (state, action) => {
  switch (action.type) {
    case 'updateFormData':
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const FormDataProvider = ({ children }) => {
  const [formData, dispatch] = useReducer(formDataReducer, initialState);

  return (
    <FormDataContext.Provider value={{ formData, dispatch }}>
      {children}
    </FormDataContext.Provider>
  );
};

const useFormData = () => {
  const context = useContext(FormDataContext);
  if (!context) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
};

export { FormDataProvider, useFormData };
