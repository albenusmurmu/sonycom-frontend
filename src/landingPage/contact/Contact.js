import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
        duration: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Destructure only the fields your backend expects
        const { name, email, subject, message } = formData;

        try {
            const response = await fetch('https://sonycom-backend.onrender.com/api/v1/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, subject, message }),
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message || 'Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '', duration: '' });
            } else {
                alert(result.message || 'Submission failed. Please fill all required fields.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Network error. Please try again later.');
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="contact-container"
        >
            <form onSubmit={handleSubmit} className="contact-form">
                <h1 className="contact-title">Contact Us</h1>

                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="contact-input"
                    required
                />
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    className="contact-input"
                    required
                />
                <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="contact-input"
                    required
                />
                <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    className="contact-textarea"
                    required
                />
                <input
                    type="date"
                    name="duration"
                    value={formData.duration}
                    onChange={handleChange}
                    className="contact-input"
                    required
                />

                <button type="submit" className="contact-button mt-4" style={{ marginBottom: '40px' }}>
                    Send Message
                </button>
            </form>
        </motion.div>
    );
}

export default Contact;
