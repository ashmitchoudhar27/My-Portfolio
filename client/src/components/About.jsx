import React from 'react';
import {
  FaPython, FaHtml5, FaCss3Alt, FaGithub, FaLinux,
  FaNodeJs, FaReact, FaJava
} from 'react-icons/fa';
import {
  SiJavascript, SiCplusplus, SiC, SiBootstrap,
  SiMysql, SiMongodb, SiPostman
} from 'react-icons/si';
import './About.css';

const About = () => {
  const stack = [
    // Languages row
    { name: 'C++',        icon: <SiCplusplus color="#00599C" /> },
    { name: 'JAVASCRIPT', icon: <SiJavascript color="#F7DF1E" /> },
    { name: 'C',          icon: <SiC color="#A8B9CC" /> },
    { name: 'PYTHON',     icon: <FaPython color="#3776AB" /> },
    { name: 'JAVA',       icon: <FaJava color="#ED8B00" /> },
    // Frameworks row
    { name: 'HTML',       icon: <FaHtml5 color="#E34F26" /> },
    { name: 'CSS',        icon: <FaCss3Alt color="#1572B6" /> },
    { name: 'BOOTSTRAP',  icon: <SiBootstrap color="#7952B3" /> },
    { name: 'NODE.JS',    icon: <FaNodeJs color="#339933" /> },
    { name: 'REACT',      icon: <FaReact color="#61DAFB" /> },
    // Tools row
    { name: 'GIT',        icon: <FaGithub color="#FFF" /> },
    { name: 'LINUX',      icon: <FaLinux color="#FCC624" /> },
    { name: 'MYSQL',      icon: <SiMysql color="#4479A1" /> },
    { name: 'MONGODB',    icon: <SiMongodb color="#47A248" /> },
    { name: 'POSTMAN',    icon: <SiPostman color="#FF6C37" /> },
  ];

  return (
    <section id="about" className="section-wrapper about-section">
      <div className="container about-container">

        {/* Left Column */}
        <div className="about-left fade-in-up">
          <span className="section-label blue-text">ABOUT</span>
          <h2 className="about-title">The work<br/>defines me.</h2>

          <div className="about-bio">
            <p>
              Passionate about the intersection of <strong>AI, full-stack development,</strong> and <strong>algorithms</strong>. I build things that are genuinely useful — not just demos.
            </p>
            <p>
              From complex C++ algorithms to scalable MERN web applications, my work spans the entire stack. Based in <strong>Jalandhar, Punjab</strong>.
            </p>
            <p>
              Currently studying Computer Science at <strong>LPU</strong> — holding a 3-Star rating on CodeChef and ranking in the top 15% on LeetCode with 100+ problems solved.
            </p>
          </div>

          <div className="stats-container">
            <div className="stat-item">
              <h3>10+</h3>
              <p>GitHub Repos</p>
            </div>
            <div className="stat-item">
              <h3>20+<span className="star-icon">★</span></h3>
              <p>Total Stars</p>
            </div>
            <div className="stat-item">
              <h3>100+</h3>
              <p>DSA Problems</p>
            </div>
            <div className="stat-item">
              <h3>Top 15%</h3>
              <p>LeetCode Rank</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="about-right fade-in-up" style={{ animationDelay: '0.2s' }}>
          <span className="section-label grey-text">STACK</span>
          <div className="stack-grid">
            {stack.map((item, index) => (
              <div key={index} className="stack-card">
                <div className="stack-icon">{item.icon}</div>
                <span className="stack-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
