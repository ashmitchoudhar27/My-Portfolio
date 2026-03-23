import React from 'react';
import './Achievements.css';
import { FaGraduationCap, FaTrophy, FaCertificate } from 'react-icons/fa';

const Achievements = () => {
  return (
    <section id="achievements" className="section-wrapper">
      <div className="container">
        <h2 className="section-title fade-in-up">Achievements & Education</h2>
        
        <div className="timeline-container">
          {/* Achievements Column */}
          <div className="timeline-column fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="column-title"><FaTrophy className="title-icon" /> Accolades</h3>
            <div className="timeline glass">
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4 className="timeline-title">Top 15% on LeetCode</h4>
                <p className="timeline-desc">Consistently ranked in the Top 15% and solved 100+ DSA problems. Earned Persistence & 365 Days Streak badges.</p>
                <span className="timeline-date">Feb 2026</span>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4 className="timeline-title">3-Star Rater on CodeChef</h4>
                <p className="timeline-desc">Achieved a 3-star rating by competing in multiple high-level contests, focusing on algorithm optimization.</p>
                <span className="timeline-date">Dec 2025</span>
              </div>
              
              <h3 className="column-title mt-4"><FaCertificate className="title-icon" /> Certificates</h3>
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4 className="timeline-title">Privacy and Security in Social Media</h4>
                <p className="timeline-desc">NPTEL Certified Course</p>
              <div className="timeline-date-row">
                <span className="timeline-date">Jan 2025</span>
                <a href="https://drive.google.com/drive/u/1/folders/1ATHWDXbKADb1MrKT3tGHY7Nhhd9Wwlly" target="_blank" rel="noreferrer" className="cert-link">View ↗</a>
              </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4 className="timeline-title">Data Structures and Algorithm</h4>
                <p className="timeline-desc">Certified completion</p>
              <div className="timeline-date-row">
                <span className="timeline-date">Jul 2025</span>
                <a href="https://drive.google.com/drive/u/1/folders/1ATHWDXbKADb1MrKT3tGHY7Nhhd9Wwlly" target="_blank" rel="noreferrer" className="cert-link">View ↗</a>
              </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4 className="timeline-title">Full-Stack Web Dev Bootcamp</h4>
                <p className="timeline-desc">Comprehensive MERN Stack training</p>
              <div className="timeline-date-row">
                <span className="timeline-date">Nov 2023</span>
                <a href="https://drive.google.com/drive/u/1/folders/1ATHWDXbKADb1MrKT3tGHY7Nhhd9Wwlly" target="_blank" rel="noreferrer" className="cert-link">View ↗</a>
              </div>
              </div>
            </div>
          </div>

          {/* Education Column */}
          <div className="timeline-column fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h3 className="column-title"><FaGraduationCap className="title-icon" /> Education</h3>
            <div className="timeline glass">
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4 className="timeline-title">B.Tech - Computer Science & Engineering</h4>
                <p className="timeline-desc">Lovely Professional University, Punjab, India | <strong>CGPA: 7.0</strong></p>
                <span className="timeline-date">Since Aug 2023</span>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4 className="timeline-title">Intermediate (12th Grade)</h4>
                <p className="timeline-desc">Atomic Energy Central School, Rawatbhata | <strong>Percentage: 87%</strong></p>
                <span className="timeline-date">Apr 2020 - Mar 2022</span>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <h4 className="timeline-title">Matriculation (10th Grade)</h4>
                <p className="timeline-desc">Atomic Energy Central School, Rawatbhata | <strong>Percentage: 85%</strong></p>
                <span className="timeline-date">Apr 2018 - Mar 2020</span>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default Achievements;
