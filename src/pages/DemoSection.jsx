import React from 'react';

const DemoSection = () => {
  const sectionStyle = {
    textAlign: 'center',
    padding: '20px',
    borderRadius: '10px',
    fontFamily: 'Arial, sans-serif',
  };

  const headingStyle = {
    fontSize: '1.5rem',
    color: '#333',
    marginBottom: '20px',
  };

  const buttonGroupStyle = {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  };

  const buttonStyle = {
    border: 'none',
    borderRadius: '20px',
    padding: '10px 20px',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
    boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
  };

  const contactButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#1d3557',
    color: '#fff',
  };

  const demoButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#d0f0f2',
    color: '#333',
  };

  return (
    <div style={sectionStyle}>
      <h2 style={headingStyle}>
        Unleash AI-enabled Data-driven Learning – Get Your Personalized Demo Today!
      </h2>
      <div style={buttonGroupStyle}>
        <button
          style={contactButtonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#122845')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#1d3557')}
        >
          📞 Contact us
        </button>
        <button
          style={demoButtonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = '#bce4e8')}
          onMouseOut={(e) => (e.target.style.backgroundColor = '#d0f0f2')}
        >
          Book Demo
        </button>
      </div>
    </div>
  );
};

export default DemoSection;
