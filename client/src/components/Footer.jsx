import React from 'react';
import { FaHeart } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer style={{ 
      padding: '2rem 5%', 
      textAlign: 'center', 
      borderTop: '1px solid var(--glass-border)',
      background: 'rgba(10, 10, 10, 0.8)',
      backdropFilter: 'blur(10px)'
    }}>
      <p style={{ color: 'var(--text-muted)' }}>
        Designed and Built by Ashmit Choudhary © {new Date().getFullYear()}
      </p>
    </footer>
  );
};

export default Footer;
