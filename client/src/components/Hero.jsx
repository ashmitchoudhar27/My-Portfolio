import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section section-wrapper">
      <div className="hero-container">
        
        <div className="hero-badge fade-in-up">
          <span className="dot"></span> Jalandhar, Punjab • Full Stack Web Developer
        </div>

        <h1 className="hero-title fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="hero-greeting">Hey I'm</span><br />
          <span className="hero-name">Ashmit Choudhary</span>
        </h1>
        
        <p className="hero-desc fade-in-up" style={{ animationDelay: '0.2s' }}>
          <strong>Full Stack Web Developer</strong> and <strong>Problem Solver</strong> — architecting scalable backend systems, interactive interfaces, and seamless user experiences. Top 15% on LeetCode with 100+ DSA problems solved.
        </p>
        
        <div className="hero-socials fade-in-up" style={{ animationDelay: '0.3s' }}>
          <a href="https://github.com/ashmitchoudhar27" target="_blank" rel="noreferrer" className="social-box">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/ashmitchoudhary/" target="_blank" rel="noreferrer" className="social-box">
            <FaLinkedin />
          </a>
          <a href="mailto:ashmitchoudhary2709@gmail.com" className="social-box">
            <FaEnvelope />
          </a>
        </div>

        <div className="hero-cta fade-in-up" style={{ animationDelay: '0.4s' }}>
          <a href="#projects" className="btn view-work-btn">View work</a>
        </div>

      </div>

      <div className="scroll-indicator fade-in-up" style={{ animationDelay: '0.6s' }}>
        <span>Scroll to explore</span>
        <div className="line"></div>
      </div>
    </section>
  );
};

export default Hero;
