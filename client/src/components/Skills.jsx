import React from 'react';
import { 
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaPython, 
  FaJava, FaPhp, FaGithub, FaDatabase, FaLinux 
} from 'react-icons/fa';
import { SiCplusplus, SiJavascript, SiBootstrap, SiExpress, SiMysql, SiMongodb, SiPostman } from 'react-icons/si';
import './Skills.css';

const Skills = () => {
  const languageSkills = [
    { name: 'C++', icon: <SiCplusplus color="#00599C" /> },
    { name: 'JavaScript', icon: <SiJavascript color="#F7DF1E" /> },
    { name: 'Python', icon: <FaPython color="#3776AB" /> },
    { name: 'Java', icon: <FaJava color="#ED8B00" /> },
    { name: 'PHP', icon: <FaPhp color="#777BB4" /> },
  ];

  const fwSkills = [
    { name: 'React.js', icon: <FaReact color="#61DAFB" /> },
    { name: 'Node.js', icon: <FaNodeJs color="#339933" /> },
    { name: 'Express.js', icon: <SiExpress color="#FFF" /> },
    { name: 'HTML5', icon: <FaHtml5 color="#E34F26" /> },
    { name: 'CSS3', icon: <FaCss3Alt color="#1572B6" /> },
    { name: 'Bootstrap', icon: <SiBootstrap color="#7952B3" /> },
  ];

  const toolsSkills = [
    { name: 'MongoDB', icon: <SiMongodb color="#47A248" /> },
    { name: 'MySQL', icon: <SiMysql color="#4479A1" /> },
    { name: 'Git', icon: <FaGithub color="#FFF" /> },
    { name: 'Postman', icon: <SiPostman color="#FF6C37" /> },
    { name: 'Linux', icon: <FaLinux color="#FCC624" /> },
  ];

  return (
    <section id="skills" className="section-wrapper">
      <div className="container">
        <h2 className="section-title fade-in-up">Technical Skills</h2>
        
        <div className="skills-container">
          <div className="skill-category glass fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="category-title">Languages</h3>
            <div className="skills-grid">
              {languageSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-icon">{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category glass fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h3 className="category-title">Frameworks & Libraries</h3>
            <div className="skills-grid">
              {fwSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-icon">{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category glass fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="category-title">Tools & Databases</h3>
            <div className="skills-grid">
              {toolsSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-icon">{skill.icon}</div>
                  <span>{skill.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
