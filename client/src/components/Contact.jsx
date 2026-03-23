import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus(data.error || 'Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      setStatus('Failed to connect to server. Ensure backend is running.');
    }
  };

  return (
    <section id="contact" className="section-wrapper">
      <div className="container">
        <h2 className="section-title fade-in-up">Get In Touch</h2>
        
        <div className="contact-container glass fade-in-up" style={{ animationDelay: '0.2s' }}>
          <div className="contact-info">
            <h3>Let's talk about your project</h3>
            <p>Whether you have a question or just want to say hi, I'll try my best to get back to you! I am currently open to exciting opportunities.</p>
            
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a href="mailto:ashmitchoudhary2709@gmail.com">ashmitchoudhary2709@gmail.com</a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <a href="tel:+919001273669">+91-9001273669</a>
              </div>
            </div>
          </div>
          
          <div className="contact-form-wrapper">
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  value={formData.subject} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              <div className="form-group">
                <textarea 
                  name="message" 
                  placeholder="Your Message..." 
                  rows="5" 
                  value={formData.message} 
                  onChange={handleChange} 
                  required 
                ></textarea>
              </div>
              <button type="submit" className="btn submit-btn">
                Send Message <FaPaperPlane className="btn-icon" />
              </button>
              
              {status && <p className={`status-msg ${status.includes('success') ? 'success' : 'error'}`}>{status}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
