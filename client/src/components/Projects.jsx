import React from 'react';
import { FaGithub, FaArrowRight } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projectsData = [
    {
      title: 'ZappyEats',
      category: 'FULL STACK',
      desc: 'Real-time food delivery platform with Socket.IO, reducing order-tracking latency by ~80%. Features JWT-based auth, role-based access control, and a responsive React frontend with Context API.',
      tech: ['MongoDB', 'Express', 'React', 'Node.js', 'Socket.IO', 'JWT'],
      links: { github: 'https://github.com/ashmitchoudhar27' },
      subcategory: 'MERN · REAL-TIME',
      stars: 4,
    },
    {
      title: 'AI Poem Generator',
      category: 'AI · FULL STACK',
      desc: 'Full-stack Generative AI platform using Google Gemini-2.0 API, achieving 30% increase in creative output variety. Includes dark/light mode, smooth scroll animations, and reactive UI.',
      tech: ['React', 'Node.js', 'Express', 'Gemini API', 'MongoDB'],
      links: { github: 'https://github.com/ashmitchoudhar27' },
      subcategory: 'GEMINI · GENERATIVE AI',
      stars: 6,
    },
    {
      title: 'Mental Health Tracker',
      category: 'FULL STACK · AI',
      desc: 'High-performance mental health tracker and therapist booking app, optimizing DOM manipulation to reduce interface lag by 15% during real-time data rendering.',
      tech: ['React', 'Node.js', 'Express', 'AI API', 'CSS'],
      links: { github: 'https://github.com/ashmitchoudhar27' },
      subcategory: 'HEALTH TECH · AI',
      stars: 5,
    },
    {
      title: 'Gamified Habit Tracker',
      category: 'FULL STACK · AI',
      desc: 'A gamified habit tracker that encourages users to develop and maintain positive habits through rewards and milestones. Tracks habits, offers progress updates, and allows filtering by type (health, productivity).',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.IO', 'JWT', 'Gemini API', 'CSS'],
      links: { github: 'https://github.com/ashmitchoudhar27' },
      subcategory: 'GAMIFICATION · AI',
      stars: 7,
    },

  ];

  return (
    <section id="projects" className="projects-section section-wrapper">
      <div className="projects-header container">
        <div className="projects-header-left">
          <span className="section-label blue-text">SELECTED WORK</span>
          <h2 className="projects-title">Projects.</h2>
        </div>
        <div className="projects-header-right">
          <span className="scroll-hint">→ &nbsp; Scroll to explore</span>
        </div>
      </div>

      <div className="projects-track-wrapper">
        <div className="projects-track">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card fade-in-up" style={{ animationDelay: `${0.1 * index}s` }}>
              {/* Card Top */}
              <div className="pc-top">
                <span className="pc-category">{project.category}</span>
                <span className="pc-stars">★ {project.stars}</span>
              </div>

              {/* Title */}
              <h3 className="pc-title">{project.title}</h3>

              {/* Description */}
              <p className="pc-desc">{project.desc}</p>

              {/* Tech tags */}
              <div className="pc-tags">
                {project.tech.map((t, i) => (
                  <span key={i} className="pc-tag">{t}</span>
                ))}
              </div>

              {/* Footer link */}
              <div className="pc-footer">
                <a href={project.links.github} target="_blank" rel="noreferrer" className="pc-link">
                  GitHub <FaArrowRight className="arrow-icon" />
                </a>
              </div>

              {/* Hover glow */}
              <div className="card-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
