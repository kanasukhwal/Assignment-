import React from 'react';

const Footer = () => {
  const footerStyle = {
    color: '#000000',
    padding: '20px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between', // Space out sections evenly
    flexWrap: 'wrap',  // Allow wrapping of content if the screen is small
    gap: '30px',  // Add space between the sections
  };

  const sectionStyle = {
    textAlign: 'center',
    flex: '1 1 20%', // Ensure sections don't get too small and take up available space
    minWidth: '200px', // Set a minimum width for each section to maintain readability
  };

  const headingStyle = {
    fontSize: '18px',
    marginBottom: '10px',
  };

  const paragraphStyle = {
    fontSize: '14px',
    lineHeight: '1.5',
  };

  const linkStyle = {
    color: '#000000',
    textDecoration: 'none',
  };

  const copyrightStyle = {
    marginTop: '20px',
    fontSize: '14px',
    textAlign: 'center',
    width: '100%',   
  };

  return (
    <footer style={footerStyle}>
      <div style={sectionStyle}>
        <h3 style={headingStyle}>Contact</h3>
        <p style={paragraphStyle}>Work inquiries: <a href="mailto:Myed.live@gmail.com" style={linkStyle}>Myed.live@gmail.com</a></p>
      </div>
      <div style={sectionStyle}>
        <h3 style={headingStyle}>Careers</h3>
        <p style={paragraphStyle}><a href="mailto:Careers@myed.live" style={linkStyle}>Careers@myed.live</a></p>
      </div>
      <div style={sectionStyle}>
        <h3 style={headingStyle}>Address</h3>
        <p style={paragraphStyle}>MyEd Pvt. Ltd.<br />Tides Incubator,<br />IIT Roorkee</p>
      </div>
      <div style={sectionStyle}>
        <h3 style={headingStyle}>Social</h3>
        <p style={paragraphStyle}><a href="/" style={linkStyle}>Twitter</a></p>
        <p style={paragraphStyle}><a href="/" style={linkStyle}>Instagram</a></p>
        <p style={paragraphStyle}><a href="/" style={linkStyle}>LinkedIn</a></p>
      </div>
      <div style={copyrightStyle}>
        <p>&copy; 2024 MyEd. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
