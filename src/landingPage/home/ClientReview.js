import React, { useState, useEffect } from 'react';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 1,
      text: "Remarkable database and scripting solution significantly optimized our data management processes. Their attention to detail and technical expertise exceeded our expectations.",
      name: "Sarah Johnson",
      position: "CTO, TechVision Inc",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 2,
      text: "Their containerization and microservice development expertise reshaped the way we deliver applications, enhancing flexibility and performance beyond our imagination.",
      name: "Michael Chen",
      position: "Lead Developer, InnovateLab",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      rating: 4
    },
    {
      id: 3,
      text: "Azure Cloud and DevOps consulting transformed our operations, providing unmatched efficiency and scalability. The team's expertise was instrumental in our digital transformation.",
      name: "Emily Rodriguez",
      position: "Operations Director, CloudTech Solutions",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 4,
      text: "HJ Infotech's expert guidance in cloud solutions elevated our performance and streamlined our operations. Their innovative approach delivered results beyond our expectations.",
      name: "David Thompson",
      position: "Founder & CEO, StartupHub",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      rating: 5
    },
    {
      id: 5,
      text: "Outstanding service delivery and technical support. They transformed our legacy systems into modern, efficient solutions that drive our business forward every day.",
      name: "Lisa Wang",
      position: "IT Manager, Enterprise Solutions",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
      rating: 4
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, sans-serif'
    },
    wrapper: {
      maxWidth: '1200px',
      width: '100%'
    },
    header: {
      textAlign: 'center',
      marginBottom: '4rem'
    },
    subtitle: {
      color: 'rgba(255, 255, 255, 0.8)',
      fontWeight: '600',
      fontSize: '1.125rem',
      marginBottom: '1rem',
      textTransform: 'uppercase',
      letterSpacing: '0.1em'
    },
    title: {
      fontSize: '3rem',
      fontWeight: '700',
      color: 'white',
      lineHeight: '1.2',
      margin: '0'
    },
    carouselContainer: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '20px',
      background: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(20px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      padding: '2rem'
    },
    carouselTrack: {
      display: 'flex',
      transition: 'transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      transform: `translateX(-${currentIndex * 100}%)`
    },
    testimonialCard: {
      minWidth: '100%',
      padding: '2rem',
      textAlign: 'center'
    },
    testimonialText: {
      fontSize: '1.25rem',
      lineHeight: '1.8',
      color: 'white',
      fontStyle: 'italic',
      marginBottom: '2rem',
      maxWidth: '800px',
      margin: '0 auto 2rem auto'
    },
    clientInfo: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '1rem'
    },
    avatar: {
      width: '60px',
      height: '60px',
      borderRadius: '50%',
      objectFit: 'cover',
      border: '3px solid rgba(255, 255, 255, 0.3)'
    },
    clientDetails: {
      textAlign: 'left'
    },
    clientName: {
      fontSize: '1.25rem',
      fontWeight: '700',
      color: 'white',
      marginBottom: '0.25rem'
    },
    clientPosition: {
      fontSize: '1rem',
      color: 'rgba(255, 255, 255, 0.7)'
    },
    indicators: {
      display: 'flex',
      justifyContent: 'center',
      gap: '0.5rem',
      marginTop: '2rem'
    },
    indicator: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      border: '2px solid rgba(255, 255, 255, 0.5)',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    activeIndicator: {
      width: '12px',
      height: '12px',
      borderRadius: '50%',
      backgroundColor: 'white',
      border: '2px solid white',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    },
    quoteIcon: {
      fontSize: '4rem',
      color: 'rgba(255, 255, 255, 0.2)',
      marginBottom: '1rem'
    },
    stars: {
      marginTop: '1rem'
    }
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Header */}
        <div style={styles.header}>
          {/* <p style={styles.subtitle}>
            Client Testimonials
          </p> */}
          <h2 style={styles.title}>
            What Our Happy Clients Say
          </h2>
        </div>

        {/* Carousel */}
        <div style={styles.carouselContainer}>
          <div style={styles.carouselTrack}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} style={styles.testimonialCard}>
                <div style={styles.quoteIcon}>"</div>
                <p style={styles.testimonialText}>
                  {testimonial.text}
                </p>
                <div style={styles.clientInfo}>
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    style={styles.avatar}
                    onError={(e) => {
                      e.target.src = `https://ui-avatars.com/api/?name=${testimonial.name}&background=667eea&color=fff&size=60`;
                    }}
                  />
                  <div style={styles.clientDetails}>
                    <h4 style={styles.clientName}>{testimonial.name}</h4>
                    <p style={styles.clientPosition}>{testimonial.position}</p>
                  </div>
                </div>
                {/* Star Rating */}
                <div style={styles.stars}>
                  {[...Array(5)].map((_, i) => (
                    <span key={i} style={{ color: i < testimonial.rating ? 'gold' : 'gray', fontSize: '1.25rem' }}>
                      ★
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Indicators */}
          <div style={styles.indicators}>
            {testimonials.map((_, index) => (
              <div
                key={index}
                style={currentIndex === index ? styles.activeIndicator : styles.indicator}
                onClick={() => handleIndicatorClick(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
