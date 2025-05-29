import React from 'react';
import './Services.css';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

function Services() {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Website Design',
      price: '₹4,999',
      description: 'Modern, responsive, and SEO-friendly websites tailored to your business needs.',
      clients: '15+ Clients'
    },
    {
      title: 'Portfolio Design',
      price: '₹2,499',
      description: 'A sleek personal or professional portfolio to showcase your skills and work.',
      clients: '20+ Clients'
    },
    {
      title: 'Digital Marketing',
      price: '₹3,999',
      description: 'Boost your online presence with strategic social media and ad campaign solutions.',
      clients: '40+ Clients'
    },
    {
      title: 'Presentation Design',
      price: '₹499',
      description: 'Visually engaging and impactful presentations for meetings and pitches.',
      clients: '50+ Clients'
    },
    {
      title: 'ATS-Based Resume',
      price: '₹299',
      description: 'Professional resumes designed to beat Applicant Tracking Systems and impress recruiters.',
      clients: '100+ Clients'
    },
    {
      title: 'Logo Design',
      price: '₹499',
      description: 'Unique and memorable logos that represent your brand identity effectively.',
      clients: '40+ Clients'
    },
    {
      title: 'Social Media Management',
      price: '₹1,999',
      description: 'Comprehensive management of your social media platforms to enhance engagement and growth.',
      clients: '30+ Clients'
    },
    {
      title: 'Content Writing',
      price: '₹999',
      description: 'High-quality, engaging content tailored to your audience and business goals.',
      clients: '25+ Clients'
    },
    {
      title: 'Product design',
      price: '₹1,999',
      description: 'Innovative product designs that combine functionality with aesthetic appeal.',
      clients: '10+ Clients'
    },
    {
      title: 'UI/UX Design',
      price: '₹2,499',
      description: 'User-centered designs that enhance usability and improve user experience.',
      clients: '15+ Clients'
    },
    {
      title: 'Branding',
      price: '₹3,499',
      description: 'Comprehensive branding solutions to establish and grow your brand identity.',
      clients: '20+ Clients'
    },
    {
      title: 'Video Editing',
      price: '₹1,499',
      description: 'Professional video editing services to create engaging and polished videos.',
      clients: '30+ Clients'
    }
  ];

  const handleContactClick = () => {
    setTimeout(() => {
      navigate('/contact');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    }, 200); // Simulates ease-out delay
  };

  return (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    <div className="services-page">
      <h1 className="services-heading">Our Services</h1>
      <div className="services-container">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <h3>{service.title}</h3>
            <p className="price">{service.price}</p>
            <p className="description">{service.description}</p>
            <span>
              <button className="btn-enquire">Enquire Below</button>
              <button className="btn-enquire clients">{service.clients}</button>
            </span>
          </div>
        ))}
      </div>
      <div style={{ textAlign: 'center', marginTop: '2rem' }}>
        <button className="contact-blink-btn" onClick={handleContactClick}>
          📞 Contact Us
        </button>
      </div>
    </div>
  </motion.div> // ✅ Close the motion.div here
);
}

export default Services;
