// src/ContactForm.js
import React, { useState } from 'react';
import { countries } from './countries.js'; // Import data from the separate file
import './Contact.css'; // Import the styles

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    countryCode: '+91',
    message: '',
    deadline: '',
  });


  // A single handler to update the state for any form field change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handler for form submission
  // src/components/Contact.js (The Updated Part)

// Handler for form submission
const handleSubmit = async (e) => {
    e.preventDefault();

    // Use the environment variable for the API URL
    const apiUrl = process.env.REACT_APP_API_URL;

    try {
        const response = await fetch(apiUrl, { // <-- UPDATED LINE
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (response.ok) {
            alert(`Success! ${result.msg}`);
            setFormData({
                name: '', email: '', phone: '', countryCode: '+1', message: '', deadline: '',
            });
        } else {
            alert(`Error: ${result.msg || 'Something went wrong.'}`);
        }
    } catch (error) {
        console.error('Submission Error:', error);
        alert('Failed to send message. Please check your connection and try again.');
    }
};

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <h2>Let's Get in Touch!</h2>
        <p>Ready to start your next project? Fill out the form below.</p>

        <div className="form-group">
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <label htmlFor="name">Full Name</label>
        </div>

        <div className="form-group">
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label htmlFor="email">Email Address</label>
        </div>

        <div className="form-group phone-group">
          <select
            name="countryCode"
            value={formData.countryCode}
            onChange={handleChange}
            className="country-code-select"
          >
            {countries.map((country) => (
              <option key={country.name} value={country.code}>
                {country.flag} {country.code}
              </option>
            ))}
          </select>
          <input
            type="tel"
            id="phone"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <label htmlFor="message">Tell me about your project</label>
        </div>

        <div className="form-group">
          <input
            type="date"
            id="deadline"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
          />
          <label htmlFor="deadline" className="date-label">
            Ideal Project Submission Date
          </label>
        </div>

        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};
export default Contact;