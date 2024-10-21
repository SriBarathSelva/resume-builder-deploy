import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import FormComponent from './components/FormComponent';
import PreviewComponent from './components/PreviewComponent';
import PreviewComponent1 from './components/PreviewComponent1';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./Resume1.css";

const Resume1 = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialTemplate = queryParams.get('template') || 'template1';

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    specialization: '',
    careerObjective: '',
    education: [],
    workExperience: [],
    project: [],
    internship: [],
    course: [],
    achievement: [],
    address1: '',
    address2: '',
    phone: '',
    email: '',
    linkinId: '',
    githubId: '',
    skills: [],
    areaOfInterest: [],
    personaltraits: [],
    languageKnown: [],
    imageUrl: ''
  });

  const [selectedTemplate, setSelectedTemplate] = useState(initialTemplate);

  useEffect(() => {
    setSelectedTemplate(initialTemplate);
  }, [initialTemplate]);

  const handleUpdate = (data) => {
    setFormData(data);
  };

  const handleSubmit = async () => {
    try {
      console.log('Submitting form data:', formData);
  
     
      if (!formData.email || !formData.firstName) {
        toast.error('Email and First Name are required fields.');
        return;
      }
  
      const response = await fetch('https://https://resume-builder-deploy-1.onrender.com/auth/resumes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...formData, template: selectedTemplate }) // Include selected template
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Network response was not ok: ${errorText}`);
      }
  
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resume.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
  
      
      toast.success('Resume saved successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } catch (error) {
     
      toast.error(`Error saving resume: ${error.message}`, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const renderPreviewComponent = () => {
    switch (selectedTemplate) {
      case 'template1':
        return <PreviewComponent1 data={formData} onSave={handleSubmit} />;
      case 'template2':
        return <PreviewComponent data={formData} onSave={handleSubmit} />;
      
      default:
        return <PreviewComponent1 data={formData} onSave={handleSubmit} />;
    }
  };

  return (
    <>
      <h2 className='tl'>Fill & Design your Resume</h2>
      <div className='appp'>
        <div className='formComp'>
          <FormComponent onUpdate={handleUpdate} />
        </div>
        <div className='previewComp'>
          {renderPreviewComponent()}
        </div>
      </div>
      <ToastContainer /> 
    </>
  );
};

export default Resume1;
