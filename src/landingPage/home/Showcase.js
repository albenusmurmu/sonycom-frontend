import React, { useEffect, useRef } from 'react';

const Showcase = () => {
  const cardsRef = useRef([]);

 useEffect(() => {
  const currentRefs = cardsRef.current; // snapshot of current refs

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  currentRefs.forEach((card, index) => {
    if (card) {
      card.style.opacity = '0';
      card.style.transform = 'translateY(50px)';
      card.style.transition = `all 0.6s ease ${index * 0.1}s`;
      observer.observe(card);
    }
  });

  // ✅ Cleanup using the same snapshot
  return () => {
    currentRefs.forEach(card => {
      if (card) observer.unobserve(card);
    });
  };
}, []);


  const handleCardHover = (e, isEntering) => {
    if (isEntering) {
      e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
    } else {
      e.currentTarget.style.transform = 'translateY(0) scale(1)';
    }
  };

  const projectsData = [
    {
      id: 1,
      title: "E-commerce Platform",
      description: "Full-stack online store with integrated payment system, advanced inventory management, and real-time analytics dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
      icon: (
        <svg viewBox="0 0 24 24" style={{ width: '40px', height: '40px', fill: 'white' }}>
          <path d="M12 2L2 7v10c0 5.55 3.84 9.74 9 11 5.16-1.26 9-5.45 9-11V7l-10-5z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "Responsive portfolio showcase for a professional photographer with dynamic galleries, client testimonials, and booking system.",
      technologies: ["Next.js", "TypeScript", "Tailwind", "Sanity CMS"],
      icon: (
        <svg viewBox="0 0 24 24" style={{ width: '40px', height: '40px', fill: 'white' }}>
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      )
    },
    {
      id: 3,
      title: "Learning Management System",
      description: "Comprehensive LMS platform with course creation tools, progress tracking, interactive quizzes, and video streaming capabilities.",
      technologies: ["Vue.js", "Laravel", "MySQL", "AWS S3"],
      icon: (
        <svg viewBox="0 0 24 24" style={{ width: '40px', height: '40px', fill: 'white' }}>
          <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/>
        </svg>
      )
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication, real-time transactions, and AI-powered financial insights.",
      technologies: ["React Native", "Firebase", "Redux", "Plaid API"],
      icon: (
        <svg viewBox="0 0 24 24" style={{ width: '40px', height: '40px', fill: 'white' }}>
          <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9V9h9v12z"/>
        </svg>
      )
    },
    {
      id: 5,
      title: "Task Management System",
      description: "Enterprise-grade project management tool with team collaboration, Gantt charts, time tracking, and automated reporting.",
      technologies: ["Angular", "Spring Boot", "PostgreSQL", "Docker"],
      icon: (
        <svg viewBox="0 0 24 24" style={{ width: '40px', height: '40px', fill: 'white' }}>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      )
    },
    {
      id: 6,
      title: "Event Management Platform",
      description: "Complete event planning solution with venue booking, attendee management, ticketing system, and live streaming integration.",
      technologies: ["React", "Express.js", "MongoDB", "WebRTC"],
      icon: (
        <svg viewBox="0 0 24 24" style={{ width: '40px', height: '40px', fill: 'white' }}>
          <path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/>
        </svg>
      )
    }
  ];

  const styles = {
    showcase: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      minHeight: '100vh',
      padding: '40px 20px',
      position: 'relative'
    },
    floatingElements: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      pointerEvents: 'none',
      zIndex: -1
    },
    floatingElement: {
      position: 'absolute',
      background: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '50%'
    },
    floatingElement1: {
      width: '80px',
      height: '80px',
      top: '20%',
      left: '10%',
      animation: 'float 6s ease-in-out infinite'
    },
    floatingElement2: {
      width: '60px',
      height: '60px',
      top: '60%',
      right: '15%',
      animation: 'float 6s ease-in-out infinite 2s'
    },
    floatingElement3: {
      width: '40px',
      height: '40px',
      bottom: '20%',
      left: '20%',
      animation: 'float 6s ease-in-out infinite 4s'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto'
    },
    header: {
      textAlign: 'center',
      marginBottom: '60px',
      color: 'white'
    },
    mainTitle: {
      fontSize: '3.5rem',
      fontWeight: '700',
      marginBottom: '20px',
      background: 'linear-gradient(45deg, #fff, #e0e7ff)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textShadow: '0 4px 8px rgba(0,0,0,0.3)'
    },
    subtitle: {
      fontSize: '1.3rem',
      opacity: 0.9,
      fontWeight: '300',
      letterSpacing: '1px'
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
      gap: '30px',
      marginTop: '40px'
    },
    projectCard: {
      background: 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(20px)',
      borderRadius: '20px',
      padding: '30px',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
      transition: 'all 0.4s ease',
      border: '1px solid rgba(255,255,255,0.2)',
      position: 'relative',
      overflow: 'hidden'
    },
    projectCardBefore: {
      content: "''",
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      height: '4px',
      background: 'linear-gradient(90deg, #667eea, #764ba2)',
      opacity: 0,
      transition: 'opacity 0.3s ease'
    },
    projectLogo: {
      width: '80px',
      height: '80px',
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      borderRadius: '16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '20px',
      boxShadow: '0 8px 16px rgba(102, 126, 234, 0.3)',
      transition: 'all 0.3s ease'
    },
    projectTitle: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: '#2d3748',
      marginBottom: '10px',
      lineHeight: '1.3'
    },
    projectDescription: {
      color: '#718096',
      fontSize: '1rem',
      lineHeight: '1.6',
      marginBottom: '20px'
    },
    projectTech: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '8px',
      marginTop: 'auto'
    },
    techTag: {
      background: 'linear-gradient(135deg, #667eea, #764ba2)',
      color: 'white',
      padding: '6px 12px',
      borderRadius: '20px',
      fontSize: '0.8rem',
      fontWeight: '500'
    }
  };

  // Add CSS keyframes for animations
  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      @keyframes float {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-20px) rotate(180deg); }
      }
      
      @keyframes fadeInUp {
        from {
          opacity: 0;
          transform: translateY(20px);
        }
        to {
          opacity: 1;
          transform: translateY(0);
        }
      }
      
      .tech-tag {
        animation: fadeInUp 0.6s ease forwards;
      }
      
      .tech-tag:nth-child(1) { animation-delay: 0.1s; }
      .tech-tag:nth-child(2) { animation-delay: 0.2s; }
      .tech-tag:nth-child(3) { animation-delay: 0.3s; }
      .tech-tag:nth-child(4) { animation-delay: 0.4s; }
      
      .project-card:hover::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 4px;
        background: linear-gradient(90deg, #667eea, #764ba2);
        opacity: 1;
      }
      
      .project-card:hover .project-logo {
        transform: scale(1.1);
        box-shadow: 0 12px 24px rgba(102, 126, 234, 0.4);
      }
      
      @media (max-width: 768px) {
        .main-title {
          font-size: 2.5rem !important;
        }
        
        .projects-grid {
          grid-template-columns: 1fr !important;
          gap: 20px !important;
        }
        
        .project-card {
          padding: 20px !important;
        }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <div style={styles.showcase}>
      <div style={styles.floatingElements}>
        <div style={{...styles.floatingElement, ...styles.floatingElement1}}></div>
        <div style={{...styles.floatingElement, ...styles.floatingElement2}}></div>
        <div style={{...styles.floatingElement, ...styles.floatingElement3}}></div>
      </div>

      <div style={styles.container}>
        <div style={styles.header}>
          <h1 style={styles.mainTitle} className="main-title">Expertise Meets Recognition</h1>
          <p style={styles.subtitle}>Unveiling Our Spectrum of Accomplishments and Projects</p>
        </div>

        <div style={styles.projectsGrid} className="projects-grid">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              ref={el => cardsRef.current[index] = el}
              style={styles.projectCard}
              className="project-card"
              onMouseEnter={(e) => handleCardHover(e, true)}
              onMouseLeave={(e) => handleCardHover(e, false)}
            >
              <div style={styles.projectLogo} className="project-logo">
                {project.icon}
              </div>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDescription}>{project.description}</p>
              <div style={styles.projectTech}>
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} style={styles.techTag} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Showcase;