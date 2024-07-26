import React, { useState, useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './FormComponent.css'

const FormComponent = ({ onUpdate }) => {
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

  const [skillInput, setSkillInput] = useState('');
  const [educationInput, setEducationInput] = useState({
    school: '',
    degree: '',
    mark:'',
    year: ''
  });
  const [workExperienceInput, setWorkExperienceInput] = useState({
    title:'',
    describe:''
  });
  const [projectInput, setProjectInput] = useState({
    title:'',
    describe:''
  });
  const [internshipInput, setInternshipInput] = useState({
    title:'',
    describe:''
  });
  const [areaOfInterestInput, setAreaOfInterestInput] = useState('');
  const [personaltraitsInput, setPersonaltraitsInput] = useState('');
  const [languageKnownInput, setLanguageKnownInput] = useState('');
  const [achievementsInput, setachievementsInput] = useState('');
  const [courseInput, setcourseInput] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);
    onUpdate(updatedFormData);
  };

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleAddToList = (input, setInput, field) => {
    if (input.trim()) {
      const updatedList = [...formData[field], input.trim()];
      const updatedFormData = { ...formData, [field]: updatedList };
      setFormData(updatedFormData);
      setInput('');
      onUpdate(updatedFormData);
    }
  };

  const handleComplexAddToList = (input, setInput, field) => {
    if (input.title.trim() && input.describe.trim()) {
      const updatedList = [...formData[field], input];
      const updatedFormData = { ...formData, [field]: updatedList };
      setFormData(updatedFormData);
      setInput({ title: '', describe: '' });
      onUpdate(updatedFormData);
    }
  };

  const handleEducationChange = (e) => {
    const { name, value } = e.target;
    setEducationInput({ ...educationInput, [name]: value });
  };

  const addEducation = () => {
    if (educationInput.school && educationInput.degree && educationInput.mark && educationInput.year) {
      const updatedEducation = [...formData.education, educationInput];
      const updatedFormData = { ...formData, education: updatedEducation };
      setFormData(updatedFormData);
      setEducationInput({ school: '', degree: '',mark:'', year: '' });
      onUpdate(updatedFormData);
    }
  };
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prevState => ({
        ...prevState,
        imageUrl: reader.result
      }));
      onUpdate({ ...formData, imageUrl: reader.result });
    };
    reader.readAsDataURL(file);
  }, [onUpdate, formData]);

  const { getRootProps, getInputProps } = useDropzone({ onDrop, accept: 'image/*' });

  return (
    <div>
    <form className='mt-5 mx-4'>
      <div className='Header '>
        <h4>Upload your profile photo</h4>
      <div className='image'>
        <div className='form-control ' {...getRootProps()}>
          
        <input {...getInputProps()} />
        <img src="https://img.icons8.com/?size=100&id=hwKgsZN5Is2H&format=png&color=000000" alt="" />
        <p>Drag or click to select one</p>
      </div>
      
      </div>
      <div className='name'>
      <input className='form-control mt-4' name="firstName" placeholder="First Name" onChange={handleChange} />
      <input className='form-control mt-4' name="lastName" placeholder="Last Name" onChange={handleChange} />
      </div>
      <div className='specialization'>
      <input className='form-control mt-4' name="specialization" placeholder="Specialization" onChange={handleChange} />
      </div>
      </div>

      <input className='form-control mt-4' name="careerObjective" placeholder="Career Objective" onChange={handleChange} />
      
      {/* Education Section */}
      <div className='mod'>
        <h4>Education</h4>
        <input
        className='form-control mt-4'
          name="school"
          placeholder="School/College"
          value={educationInput.school}
          onChange={handleEducationChange}
        />
        <input
        className='form-control mt-4'
          name="degree"
          placeholder="Degree/Class"
          value={educationInput.degree}
          onChange={handleEducationChange}
        />
        <input
        className='form-control mt-4'
          name="mark"
          placeholder="Percentage/CGPA"
          value={educationInput.mark}
          onChange={handleEducationChange}
        />
        <input
        className='form-control mt-4'
          name="year"
          placeholder="Year"
          value={educationInput.year}
          onChange={handleEducationChange}
        />
        <div className='text-center'>
        <button type="button" className='btn btn-primary mt-2 '  onClick={addEducation}>Add Education</button>
        </div>
      </div>

      {/* Work Experience Section */}
      <div className='mod'>
        <h4>Work Experience</h4>
        <input
        className='form-control mt-4'
          name="title"
          placeholder="Title"
          value={workExperienceInput.title}
          onChange={(e) => setWorkExperienceInput({ ...workExperienceInput, title: e.target.value })}
        />
        <input
        className='form-control mt-4'
          name="describe"
          placeholder="Description"
          value={workExperienceInput.describe}
          onChange={(e) => setWorkExperienceInput({ ...workExperienceInput, describe: e.target.value })}
        />
        <div className='text-center'>
        <button type="button" className='btn btn-primary mt-2 ' onClick={() => handleComplexAddToList(workExperienceInput, setWorkExperienceInput, 'workExperience')}>
          Add Work Experience
        </button>
        </div>
      </div>

      {/* Project Section */}
      <div className='mod'>
        <h4>Projects</h4>
        <input
        className='form-control mt-4'
          name="title"
          placeholder="Title"
          value={projectInput.title}
          onChange={(e) => setProjectInput({ ...projectInput, title: e.target.value })}
        />
        <input
        className='form-control mt-4'
          name="describe"
          placeholder="Description"
          value={projectInput.describe}
          onChange={(e) => setProjectInput({ ...projectInput, describe: e.target.value })}
        />
        <div className='text-center'>
        <button type="button" className='btn btn-primary mt-2 '  onClick={() => handleComplexAddToList(projectInput, setProjectInput, 'project')}>
          Add Project
        </button>
        </div>
      </div>

      {/* Internship Section */}
      <div className='mod'>
        <h4>Internships</h4>
        <input
        className='form-control mt-4'
          name="title"
          placeholder="Title"
          value={internshipInput.title}
          onChange={(e) => setInternshipInput({ ...internshipInput, title: e.target.value })}
        />
        <input
        className='form-control mt-4'
          name="describe"
          placeholder="Description"
          value={internshipInput.describe}
          onChange={(e) => setInternshipInput({ ...internshipInput, describe: e.target.value })}
        />
        <div className='text-center'>
        <button type="button" className='btn btn-primary mt-2 '  onClick={() => handleComplexAddToList(internshipInput, setInternshipInput, 'internship')}>
          Add Internship
        </button>
        </div>
      </div>

      <div className='mod'>
        
        <input className='form-control mt-4' name="course" placeholder="Courses" value={courseInput} onChange={handleInputChange(setcourseInput)} />
        <div className='text-center'>
        <button type="button" className='btn btn-primary mt-2 '  onClick={() => handleAddToList(courseInput, setcourseInput, 'course')}>
          Add Course
        </button>
        </div>
      </div>
      {/* Achievement Section */}
      <div className='mod'>
        <input className='form-control mt-4' name="achievement" placeholder="Achievement" value={achievementsInput} onChange={handleInputChange(setachievementsInput)} />
        <div className='text-center'>
        <button type="button" className='btn btn-primary mt-2 '  onClick={() => handleAddToList(achievementsInput, setachievementsInput, 'achievement')}>
          Add Achievement
        </button>
        </div>
      </div>

      <input className='form-control mt-4' name="address1" placeholder="Address 1" onChange={handleChange} />
      <input className='form-control mt-4' name="address2" placeholder="Address 2" onChange={handleChange} />
      <input className='form-control mt-4' name="phone" placeholder="Phone" onChange={handleChange} />

      {/* Email and IDs as hyperlinks */}
      
      <input 
      className='form-control mt-4'
        type="email" 
        name="email" 
        value={formData.email} 
        onChange={handleChange} 
        pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" 
        placeholder="Email" 
        required 
      />
      <input
      className='form-control mt-4'
        name="linkinId"
        placeholder="LinkedIn Profile URL"
        onChange={handleChange}
        pattern="https?://.*"
        title="Enter a valid URL"
      />
      <input
      className='form-control mt-4'
        name="githubId"
        placeholder="GitHub Profile URL"
        onChange={handleChange}
        pattern="https?://.*"
        title="Enter a valid URL"
      />

      {/* Skills Section */}
      <div className='mod'>
        <h4>Skills</h4>
        <input
        className='form-control mt-4'
          name="skills"
          placeholder="Skills"
          value={skillInput}
          onChange={handleInputChange(setSkillInput)}
        />
        <div className='text-center'>
        <button type="button" className='btn btn-primary mt-2 '  onClick={() => handleAddToList(skillInput, setSkillInput, 'skills')}>
          Add Skill
        </button>
        </div>
      </div>

      {/* Area of Interest Section */}
      <div className='mod'>
        <h4>Area of Interest</h4>
        <input
        className='form-control mt-4'
          name="areaOfInterestInput"
          placeholder="Area of Interest"
          value={areaOfInterestInput}
          onChange={handleInputChange(setAreaOfInterestInput)}
        />
        <div className='text-center'>
        <button type="button" className='btn btn-primary mt-2 ' onClick={() => handleAddToList(areaOfInterestInput, setAreaOfInterestInput, 'areaOfInterest')}>
          Add Area of Interest
        </button>
        </div>
      </div>

      {/* Personal Traits Section */}
      <div className='mod'>
        <h4>Personal Traits</h4>
        <input
        className='form-control mt-4'
          name="personaltraitsInput"
          placeholder="Personal Traits"
          value={personaltraitsInput}
          onChange={handleInputChange(setPersonaltraitsInput)}
        />
        <div className='text-center'>
        <button type="button" className='btn btn-primary mt-2 '  onClick={() => handleAddToList(personaltraitsInput, setPersonaltraitsInput, 'personaltraits')}>
          Add Personal Traits
        </button>
        </div>
      </div>

      {/* Languages Known Section */}
      <div className='mod'>
        <h4>Languages Known</h4>
        <input
        className='form-control mt-4'
          name="languageKnownInput"
          placeholder="Languages Known"
          value={languageKnownInput}
          onChange={handleInputChange(setLanguageKnownInput)}
        />
        <div className='text-center'>
        <button type="button" className='btn btn-primary mt-2 '  onClick={() => handleAddToList(languageKnownInput, setLanguageKnownInput, 'languageKnown')}>
          Add Language Known
        </button>
        </div>
      </div>
    </form>
    </div>
  );
};

export default FormComponent;
