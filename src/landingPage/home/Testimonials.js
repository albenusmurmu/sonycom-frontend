import React, { useState, useEffect, useRef } from 'react';

const AnimatedCounter = ({ target, duration = 2000, suffix = '', isVisible }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) {
      setCount(0);
      return;
    }

    let startTime;
    let animationFrame;

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      setCount(Math.floor(target * progress));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [target, duration, isVisible]);

  return (
    <span style={{ fontVariantNumeric: 'tabular-nums' }}>
      {count}{suffix}
    </span>
  );
};

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      {
        threshold: 0.3, // Trigger when 30% of the section is visible
        rootMargin: '0px 0px -50px 0px' // Optional: adjust trigger point
      }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
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
      color: '#3b82f6',
      fontWeight: '600',
      fontSize: '1.125rem',
      marginBottom: '1rem',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    title: {
      fontSize: '3rem',
      fontWeight: '700',
      color: '#1e293b',
      lineHeight: '1.2',
      margin: '0'
    },
    titleHighlight: {
      color: '#3b82f6'
    },
    statsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      maxWidth: '800px',
      margin: '0 auto'
    },
    card: {
      background: 'white',
      borderRadius: '1.5rem',
      padding: '2rem',
      boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      border: '1px solid #e2e8f0'
    },
    cardContent: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    },
    iconContainer: {
      padding: '1rem',
      background: '#dbeafe',
      borderRadius: '1rem',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    icon: {
      width: '2rem',
      height: '2rem',
      color: '#3b82f6'
    },
    statsContainer: {
      textAlign: 'right'
    },
    number: {
      fontSize: '3.75rem',
      fontWeight: '700',
      color: '#3b82f6',
      marginBottom: '0.5rem',
      lineHeight: '1'
    },
    label: {
      color: '#64748b',
      fontWeight: '500',
      fontSize: '1.125rem'
    }
  };

  const CheckCircleIcon = () => (
    <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const UsersIcon = () => (
    <svg style={styles.icon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    </svg>
  );

  return (
    <div style={styles.container} ref={sectionRef}>
      <div style={styles.wrapper}>
        {/* Header */}
        <div style={styles.header}>
          <h2 style={styles.title}>
            How clients are
            <br />
            <span style={styles.titleHighlight}>satisfied with</span>
            <br />
            our service
          </h2>
        </div>

        {/* Stats Cards */}
        <div style={styles.statsGrid}>
          {/* Projects Done Card */}
          <div style={styles.card}>
            <div style={styles.cardContent}>
              <div style={styles.iconContainer}>
                <CheckCircleIcon />
              </div>
              <div style={styles.statsContainer}>
                <div style={styles.number}>
                  <AnimatedCounter target={50} suffix='+'  isVisible={isVisible} />
                </div>
                <p style={styles.label}>
                  Project Done
                </p>
              </div>
            </div>
          </div>

          {/* Happy Clients Card */}
          <div style={styles.card}>
            <div style={styles.cardContent}>
              <div style={styles.iconContainer}>
                <UsersIcon />
              </div>
              <div style={styles.statsContainer}>
                <div style={styles.number}>
                  <AnimatedCounter target={40} suffix="+" isVisible={isVisible} />
                </div>
                <p style={styles.label}>
                  Happy Clients
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsSection;