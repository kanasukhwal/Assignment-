import React, { useState } from 'react';

const RocketForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    schoolName: '',
    city: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: '' }); // Clear error on input change
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.schoolName) newErrors.schoolName = 'School Name is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = 'Email is invalid';
    if (!formData.phoneNumber)
      newErrors.phoneNumber = 'Phone Number is required';
    else if (!/^\d{10}$/.test(formData.phoneNumber))
      newErrors.phoneNumber = 'Phone Number must be 10 digits';
    if (!formData.message) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      console.log('Form Data Submitted:', formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '20px auto',
        padding: '20px',
        borderRadius: '8px',
        background: 'linear-gradient(to bottom, #f0fdf9, #d1f4f7)',
        boxShadow: '0px 4px 8px rgba(0,0,0,0.1)',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ textAlign: 'start', color: '#333' }}>
        Get Ready to board the <strong>Rocket!</strong>
      </h2>
      <p style={{ textAlign: 'start', color: '#555', marginBottom: '20px' }}>
        Let's align our constellations! Reach out and let the magic of
        collaboration illuminate our skies.
      </p>
      {submitted ? (
        <div
          style={{
            textAlign: 'center',
            color: 'green',
            fontWeight: 'bold',
            marginBottom: '20px',
          }}
        >
          Form Submitted Successfully! 🚀
        </div>
      ) : null}
      <form onSubmit={handleSubmit} style={{ padding: '10px' }}>
        {/* First Name & Last Name */}
        <div style={{ display: 'flex', gap: '10px' }}>
          <div style={{ flex: 1 }}>
            <input
              style={inputStyle}
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <div style={errorStyle}>{errors.lastName}</div>
            )}
          </div>
          <div style={{ flex: 1 }}>
            <input
              style={inputStyle}
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <div style={errorStyle}>{errors.firstName}</div>
            )}
          </div>
        </div>

        {/* School Name */}
        <div>
          <input
            style={inputStyle}
            type="text"
            name="schoolName"
            placeholder="School Name"
            value={formData.schoolName}
            onChange={handleChange}
          />
          {errors.schoolName && <div style={errorStyle}>{errors.schoolName}</div>}
        </div>

        {/* City */}
        <div>
          <input
            style={inputStyle}
            type="text"
            name="city"
            placeholder="City"
            value={formData.city}
            onChange={handleChange}
          />
          {errors.city && <div style={errorStyle}>{errors.city}</div>}
        </div>

        {/* Email */}
        <div>
          <input
            style={inputStyle}
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <div style={errorStyle}>{errors.email}</div>}
        </div>

        {/* Phone Number */}
        <div>
          <input
            style={inputStyle}
            type="tel"
            name="phoneNumber"
            placeholder="Phone Number"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && (
            <div style={errorStyle}>{errors.phoneNumber}</div>
          )}
        </div>

        {/* Message */}
        <div>
          <textarea
            style={{
              ...inputStyle,
              height: '100px',
              resize: 'none',
            }}
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
          />
          {errors.message && <div style={errorStyle}>{errors.message}</div>}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            display: 'block',
            width: '100%',
            padding: '10px',
            marginTop: '10px',
            backgroundColor: '#023e8a',
            color: '#fff',
            fontWeight: 'bold',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
          }}
        >
          Send it to the moon 🚀
        </button>
      </form>
    </div>
  );
};

const inputStyle = {
  width: '100%',
  marginTop: '10px',
  padding: '10px',
  borderRadius: '4px',
  border: '1px solid #ccc',
  boxSizing: 'border-box',
};

const errorStyle = {
  color: 'red',
  fontSize: '12px',
  marginTop: '4px',
  textAlign : 'start'
};

export default RocketForm;
