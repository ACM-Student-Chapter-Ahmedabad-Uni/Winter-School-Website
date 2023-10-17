import React from 'react';
import './team_try-style.css';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';


function Box() {
  return (
    <div style={{ position: 'relative',  width: '200px', height: '200px' }}>
      <img src="https://images.unsplash.com/photo-1525591932088-8eb7ed314934?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ" alt="Your Name" style={{ width: '100%', height: '100%' }} />
      <div style={{ position: 'absolute', bottom: '0', width: '100%'}}>
        Your Name
        <div style={{ display: 'flex', gap: '10px' }}>
          <a href="your-instagram-url" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={30} />
          </a>
          <a href="your-linkedin-url" target="_blank" rel="noopener noreferrer">
            <FaLinkedin size={30} />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Box;


