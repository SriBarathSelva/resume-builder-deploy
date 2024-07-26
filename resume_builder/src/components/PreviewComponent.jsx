import React from 'react';
import './previewComponent.css';

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
    <div>
    <div className="a-41">
      <div className="container-5">
        <div className="container-2">
          <div className='head'>
            {imageUrl && <img src={imageUrl} alt="Profile" className="ellipse-1" />}
            <div className='headd'>
              <div className="name">{firstName} {lastName}</div>
              <br />
              <span className="specialization">{specialization}</span>
            </div>
          </div>
        </div>
        <div className="container-3">
          <div className="containerr">
          {(address1 || address2 || phone || email || linkinId || githubId) && (
          <div className="enter-the-details-5">
            <div className="contact">Contact</div>
            {(address1 || address2) && <p>{address1}{address2}</p>}
            {phone && <p>{phone}</p>}
            {email && <p><a href={`mailto:${email}`}>{email}</a></p>}
            {linkinId && <p><a href={linkinId} target="_blank" rel="noopener noreferrer">{linkinId}</a></p>}
            {githubId && <p><a href={githubId} target="_blank" rel="noopener noreferrer">{githubId}</a></p>}
          </div>
        )}

            
            
              {skills.length > 0 && (
                <div className="enter-the-details-6">
                  <div className="skills">Skills</div>
                <ul>
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
                </div>
              )}
            
           
            
              {areaOfInterest.length > 0 && (
                <div className="enter-the-details-8">
                   <div className="area-of-interest">Area of Interest</div>
                <ul>
                  {areaOfInterest.map((interest, index) => (
                    <li key={index}>{interest}</li>
                  ))}
                </ul>
                </div>
              )}
            
            
              {personaltraits.length > 0 && ( <div className='enter-the-details-10'>
                <span className=" personal-traits">Language Known</span>
                <ul>
                  {personaltraits.map((trait, index) => (
                    <li key={index}>{trait}</li>
                  ))}
                </ul>
                </div>
              )}
            
            {languageKnown.length > 0 && (
              <div className="enter-the-details-10">
                <span className="language-known">Language Known</span>
                <ul>
                  {languageKnown.map((language, index) => (
                    <li key={index}>{language}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div className="container-1">
            <div className="frame-1">
              <span className="career-objective">Career Objective</span>
            </div>
            <div className="enter-the-details">
              {careerObjective && <p>{careerObjective}</p>}
            </div>
            
            
              {education.length > 0 && (
                <div className="enter-the-details-1">
                <div className="frame-2">
                <span className="education">Education</span>
              </div>
              
                <ul>
                  
                  {education.map((edu, index) => (
                    <li key={index}>{edu.school} <br />{"\t"}{edu.degree} - {edu.mark} ({edu.year})</li>
                  ))}
                </ul>
                </div>
              )}
           
            
            
              {workExperience.length > 0 && (
                <div className="enter-the-details-2">
                <div className="frame-11">
                <span className="work-experience">Work Experience</span>
              </div>
                <ul>
                  {workExperience.map((exp, index) => (
                    <li key={index}>{exp.title}:<br />{"\t"}{exp.describe}</li>
                  ))}
                </ul>
                </div>
              )}
            
            
            
              {project.length > 0 && (
                <div className="enter-the-details-3">
                <div className="frame-12">
                <span className="projects">Projects</span>
              </div>
                <ul>
                  {project.map((proj, index) => (
                    <li key={index}>{proj.title}:<br />{"\t"}{proj.describe}</li>
                  ))}
                </ul>
                </div>
              )}
            
           
            
              {internship.length > 0 && (
                <div className="enter-the-details-4">
                <div className="frame-3">
              <span className="internship">Internship</span>
            </div>
                <ul>
                  {internship.map((intern, index) => (
                    <li key={index}>{intern.title}:<br />{"\t"}{intern.describe}</li>
                  ))}
                </ul>
                </div>
              )}
            
            
            
              {course.length > 0 && (
                <div className="enter-the-details-11">
                <div className="frame-4">
                <span className="courses">Courses</span>
              </div>
                <ul>
                  {course.map((cou, index) => (
                    <li key={index}>{cou}</li>
                  ))}
                </ul>
                </div>
              )}
            
            
            
              {achievement.length > 0 && (
                <span className="enter-the-details-12">
                <div className="frame-5">
                <span className="courses-1">Achievements</span>
              </div>
                <ul>
                  {achievement.map((ach, index) => (
                    <li key={index}>{ach}</li>
                  ))}
                </ul>
                </span>
              )}
            
          </div>
        </div>
      </div>
      
    </div>
    <button className='btn btn-success mt-4' onClick={onSave}>Save Resume</button>
    </div>
  );
};

export default PreviewComponent;
