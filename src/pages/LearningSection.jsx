import React from "react";

const LearningSection = () => {
  const containerStyle = {
    textAlign: "center",
    padding: "50px 20px",
    color: "#4A4A4A",
    fontFamily: "Arial, sans-serif",
  };

  const headingStyle = {
    fontSize: "40px",
    fontWeight: "bold",
    color: "#2C3E50",
    marginBottom: "20px",
  };

  const subHeadingStyle = {
    fontSize: "28px",
    fontWeight: "400",
    color: "#7B8A8B",
    marginBottom: "30px",
  };

  const bulletContainerStyle = {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    fontSize: "18px",
    marginBottom: "40px",
    color: "#7B8A8B",
  };

  const descriptionStyle = {
    fontSize: "20px",
    lineHeight: "1.6",
    color: "#4A4A4A",
    maxWidth: "800px",
    margin: "0 auto",
  };

  return (
    <div style={containerStyle}>
      <h1 style={headingStyle}>A bridge to holistic learning</h1>
      <h2 style={subHeadingStyle}>AI-powered SaaS</h2>
      <div style={bulletContainerStyle}>
        <span>• School admin tasks</span>
        <span>• Engaging teachers and parents</span>
      </div>
      <p style={descriptionStyle}>
        AI-powered SaaS to automate school admin tasks, enabling teachers to
        focus on education and parents to stay engaged
      </p>
    </div>
  );
};

export default LearningSection;
