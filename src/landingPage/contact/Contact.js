import React, { useState, useEffect } from 'react';
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

    const [contactData, setContactData] = useState(null); // New state to store fetched contact data

    useEffect(() => {
        // Fetch existing contact data when component mounts
        const fetchContactData = async () => {
            try {
                const response = await fetch(`${process.env.REACT_APP_API_BASE_URL}/api/v1/contact`);
                const data = await response.json();
                console.log('Fetched contact data:', data);
                setContactData(data);
            } catch (error) {
                console.error('Error fetching contact data:', error);
            }
        };

        fetchContactData();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const result = await response.json();

            if (response.ok) {
                alert(result.message || 'Message sent successfully!');
                setFormData({ name: '', email: '', subject: '', message: '', duration: '' });
            } else {
                alert(result.error || 'Something went wrong. Please try again.');
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

            {/* Optional: Render fetched data */}
            {contactData && (
                <div className="fetched-contact-data">
                    <h2>Fetched Contact Data:</h2>
                    <pre>{JSON.stringify(contactData, null, 2)}</pre>
                </div>
            )}
        </motion.div>
    );
}

export default Contact;
