import React from 'react';
import './previewComponent1.css';

const PreviewComponent = ({ data, onSave }) => {
  const {
    firstName,
    lastName,
    specialization,
    careerObjective,
    education,
    workExperience,
    project,
    internship,
    achievement,
    course,
    address1,
    address2,
    phone,
    email,
    linkinId,
    githubId,
    skills,
    areaOfInterest,
    personaltraits,
    languageKnown,
    imageUrl
  } = data;

  return (
    <div className="containerr">
        <div className='aa'>
    <div className="header">
    {imageUrl && (
      <div className="image">
        <img src={imageUrl} alt={`${firstName} ${lastName}`} />
      </div>
    )}
    <div>
    <h1>{firstName} {lastName}</h1>
    <h2>{specialization}</h2>
    </div>
      
    </div>

   

    {careerObjective && (
      <div className="section">
        <h3>Career Objective</h3>
        <p>{careerObjective}</p>
      </div>
    )}

    {education.length > 0 && (
      <div className="section">
        <h3>Education</h3>
        <ul>
          {education.map((edu, index) => (
            <li key={index}>{edu.school} <br /> {edu.degree} {edu.mark} ({edu.year})</li>
          ))}
        </ul>
      </div>
    )}

    {workExperience.length > 0 && (
      <div className="section">
        <h3>Work Experience</h3>
        <ul>
          {workExperience.map((exp, index) => (
            <li key={index}>
              <strong>{exp.title}</strong><br />
              <span>{exp.describe}</span>
            </li>
          ))}
        </ul>
      </div>
    )}

    {project.length > 0 && (
      <div className="section">
        <h3>Projects</h3>
        <ul>
          {project.map((proj, index) => (
            <li key={index}>
              <strong>{proj.title}</strong><br />
              <span>{proj.describe}</span>
            </li>
          ))}
        </ul>
      </div>
    )}

    {internship.length > 0 && (
      <div className="section">
        <h3>Internships</h3>
        <ul>
          {internship.map((intern, index) => (
            <li key={index}>
              <strong>{intern.title}</strong><br />
              <span>{intern.describe}</span>
            </li>
          ))}
        </ul>
      </div>
    )}

    {course.length > 0 && (
      <div className="section">
        <h3>Courses</h3>
        <ul>
          {course.map((cou, index) => (
            <li key={index}>{cou}</li>
          ))}
        </ul>
      </div>
    )}

    {achievement.length > 0 && (
      <div className="section">
        <h3>Achievements</h3>
        <ul>
          {achievement.map((ach, index) => (
            <li key={index}>{ach}</li>
          ))}
        </ul>
      </div>
    )}

    {(address1 || address2 || phone || email || linkinId || githubId) && (
      <div className="section">
        <h3>Contact Information</h3>
        {address1 && <p>{address1}</p>}
        {address2 && <p>{address2}</p>}
        {phone && <p>{phone}</p>}
        {email && <p><a href={`mailto:${email}`}>{email}</a></p>}
        {linkinId && <p><a href={linkinId} target="_blank" rel="noopener noreferrer">{linkinId}</a></p>}
        {githubId && <p><a href={githubId} target="_blank" rel="noopener noreferrer">{githubId}</a></p>}
      </div>
    )}

    {skills.length > 0 && (
      <div className="section">
        <h3>Skills</h3>
        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    )}

    {areaOfInterest.length > 0 && (
      <div className="section">
        <h3>Areas of Interest</h3>
        <ul>
          {areaOfInterest.map((interest, index) => (
            <li key={index}>{interest}</li>
          ))}
        </ul>
      </div>
    )}

    {personaltraits.length > 0 && (
      <div className="section">
        <h3>Personal Traits</h3>
        <ul>
          {personaltraits.map((trait, index) => (
            <li key={index}>{trait}</li>
          ))}
        </ul>
      </div>
    )}

    {languageKnown.length > 0 && (
      <div className="section">
        <h3>Languages Known</h3>
        <ul>
          {languageKnown.map((language, index) => (
            <li key={index}>{language}</li>
          ))}
        </ul>
      </div>
    )}
</div>
    <button onClick={onSave}>Save Resume</button>
  </div>
  );
};

export default PreviewComponent;
