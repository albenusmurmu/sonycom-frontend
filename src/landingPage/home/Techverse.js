import React, { useState } from 'react';

const TechVerse = () => {
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [visibleCount, setVisibleCount] = useState(12);

  const filters = [
    'ALL', 'CLOUD', 'CI/CD', 'DEVELOPMENT', 'IAC', 
    'CONTAINERIZATION', 'SCRIPTING', 'AUTOMATION TESTING', 'SECURITY'
  ];

  const technologies = [
    { id: 1, name: 'Azure', category: 'CLOUD', icon: '🅰️', color: '#0078d4' },
    { id: 2, name: 'AWS', category: 'CLOUD', icon: '☁️', color: '#ff9900' },
    { id: 3, name: 'Jenkins', category: 'CI/CD', icon: '🔧', color: '#d33833' },
    { id: 4, name: 'GitLab', category: 'CI/CD', icon: '🦊', color: '#fc6d26' },
    { id: 5, name: 'Tableau', category: 'DEVELOPMENT', icon: '📊', color: '#1f77b4' },
    { id: 6, name: 'Steam', category: 'DEVELOPMENT', icon: '🎮', color: '#171a21' },
    { id: 7, name: 'Cube Dev', category: 'DEVELOPMENT', icon: '🔷', color: '#7c3aed' },
    { id: 8, name: 'Visual Studio', category: 'DEVELOPMENT', icon: '💜', color: '#5c2d91' },
    { id: 9, name: 'Python', category: 'SCRIPTING', icon: '🐍', color: '#3776ab' },
    { id: 10, name: 'Node.js', category: 'DEVELOPMENT', icon: '🟢', color: '#339933' },
    { id: 11, name: 'GitHub', category: 'CI/CD', icon: '🐙', color: '#181717' },
    { id: 12, name: 'Git', category: 'CI/CD', icon: '📝', color: '#f05032' },
    { id: 13, name: 'Hashicorp', category: 'IAC', icon: '🔸', color: '#7b42bc' },
    { id: 14, name: 'Redis', category: 'DEVELOPMENT', icon: '🔴', color: '#dc382d' },
    { id: 15, name: 'SourceTree', category: 'CI/CD', icon: '🌳', color: '#0052cc' },
    { id: 16, name: 'Archlinux', category: 'DEVELOPMENT', icon: '🐧', color: '#1793d1' },
    { id: 17, name: 'Kubernetes', category: 'CONTAINERIZATION', icon: '⚓', color: '#326ce5' },
    { id: 18, name: 'Docker', category: 'CONTAINERIZATION', icon: '🐋', color: '#2496ed' },
    { id: 19, name: 'PowerShell', category: 'SCRIPTING', icon: '💻', color: '#012456' },
    { id: 20, name: 'Dollar Universe', category: 'AUTOMATION TESTING', icon: '💰', color: '#2ecc71' },
    { id: 21, name: 'CV', category: 'DEVELOPMENT', icon: '📄', color: '#34495e' },
    { id: 22, name: 'Postman', category: 'AUTOMATION TESTING', icon: '📮', color: '#ff6c37' },
    { id: 23, name: 'Selenium', category: 'AUTOMATION TESTING', icon: '✅', color: '#43b02a' },
    { id: 24, name: 'WhiteSource', category: 'SECURITY', icon: '🛡️', color: '#f1c40f' }
  ];

  const filteredTechnologies = activeFilter === 'ALL' 
    ? technologies 
    : technologies.filter(tech => tech.category === activeFilter);

  const displayedTechnologies = filteredTechnologies.slice(0, visibleCount);

  const loadMore = () => {
    setVisibleCount(prev => Math.min(prev + 6, filteredTechnologies.length));
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>TechVerse: Where Innovation Meets Action</h1>
        <p style={styles.subtitle}>
          Crafting the foundation of our IT excellence, our meticulously standardized
          technology stack seamlessly fuses state-of-the-art languages, frameworks,
          and tools.
        </p>
      </div>

      <div style={styles.filterContainer}>
        {filters.map(filter => (
          <button
            key={filter}
            onClick={() => {
              setActiveFilter(filter);
              setVisibleCount(12);
            }}
            style={{
              ...styles.filterButton,
              ...(activeFilter === filter ? styles.activeFilter : {})
            }}
            onMouseEnter={(e) => {
              if (activeFilter !== filter) {
                e.target.style.backgroundColor = '#e3f2fd';
                e.target.style.transform = 'translateY(-2px)';
              }
            }}
            onMouseLeave={(e) => {
              if (activeFilter !== filter) {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.transform = 'translateY(0)';
              }
            }}
          >
            {filter}
          </button>
        ))}
      </div>

      <div style={styles.techGrid}>
        {displayedTechnologies.map((tech, index) => (
          <div
            key={tech.id}
            style={{
              ...styles.techCard,
              animationDelay: `${index * 0.1}s`
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-10px) scale(1.05)';
              e.currentTarget.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
              e.currentTarget.style.borderColor = tech.color;
              e.currentTarget.querySelector('.tech-icon').style.transform = 'scale(1.2) rotate(5deg)';
              e.currentTarget.querySelector('.tech-name').style.color = tech.color;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0) scale(1)';
              e.currentTarget.style.boxShadow = '0 8px 25px rgba(0,0,0,0.1)';
              e.currentTarget.style.borderColor = '#e0e0e0';
              e.currentTarget.querySelector('.tech-icon').style.transform = 'scale(1) rotate(0deg)';
              e.currentTarget.querySelector('.tech-name').style.color = '#333';
            }}
          >
            <div 
              className="tech-icon" 
              style={{
                ...styles.techIcon,
                color: tech.color
              }}
            >
              {tech.icon}
            </div>
            <div className="tech-name" style={styles.techName}>
              {tech.name}
            </div>
          </div>
        ))}
      </div>

      {visibleCount < filteredTechnologies.length && (
        <div style={styles.loadMoreContainer}>
          <button
            onClick={loadMore}
            style={styles.loadMoreButton}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#1565c0';
              e.target.style.transform = 'translateY(-2px)';
              e.target.style.boxShadow = '0 8px 20px rgba(25,118,210,0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#1976d2';
              e.target.style.transform = 'translateY(0)';
              e.target.style.boxShadow = '0 4px 12px rgba(25,118,210,0.2)';
            }}
          >
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    padding: '40px 20px',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif'
  },
  header: {
    textAlign: 'center',
    marginBottom: '60px',
    animation: 'fadeInUp 1s ease'
  },
  title: {
    fontSize: '3.5rem',
    fontWeight: '800',
    background: 'linear-gradient(45deg, #ffffff, #f0f8ff)',
    backgroundClip: 'text',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '20px',
    textShadow: '0 4px 8px rgba(0,0,0,0.3)'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#f0f8ff',
    maxWidth: '800px',
    margin: '0 auto',
    lineHeight: '1.6',
    opacity: '0.9'
  },
  filterContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: '12px',
    marginBottom: '50px',
    animation: 'fadeInUp 1s ease 0.2s both'
  },
  filterButton: {
    padding: '12px 24px',
    border: '2px solid rgba(255,255,255,0.3)',
    borderRadius: '25px',
    backgroundColor: 'transparent',
    color: '#ffffff',
    fontSize: '0.9rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    backdropFilter: 'blur(10px)',
    letterSpacing: '0.5px'
  },
  activeFilter: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderColor: '#ffffff',
    boxShadow: '0 4px 15px rgba(255,255,255,0.2)'
  },
  techGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '25px',
    maxWidth: '1400px',
    margin: '0 auto',
    padding: '0 20px'
  },
  techCard: {
    backgroundColor: 'rgba(255,255,255,0.95)',
    borderRadius: '20px',
    padding: '30px 20px',
    textAlign: 'center',
    cursor: 'pointer',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '2px solid #e0e0e0',
    boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
    backdropFilter: 'blur(10px)',
    animation: 'slideInUp 0.6s ease forwards',
    opacity: '0',
    transform: 'translateY(30px)'
  },
  techIcon: {
    fontSize: '3rem',
    marginBottom: '15px',
    transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
    display: 'block'
  },
  techName: {
    fontSize: '1.1rem',
    fontWeight: '600',
    color: '#333',
    transition: 'color 0.3s ease',
    letterSpacing: '0.5px'
  },
  loadMoreContainer: {
    textAlign: 'center',
    marginTop: '50px',
    animation: 'fadeIn 1s ease'
  },
  loadMoreButton: {
    padding: '15px 35px',
    backgroundColor: '#1976d2',
    color: 'white',
    border: 'none',
    borderRadius: '25px',
    fontSize: '1.1rem',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    boxShadow: '0 4px 12px rgba(25,118,210,0.2)',
    letterSpacing: '0.5px'
  }
};

// Add keyframe animations
const styleSheet = document.createElement('style');
styleSheet.textContent = `
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes slideInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  
  @media (max-width: 768px) {
    .container {
      padding: 20px 10px;
    }
    
    .title {
      font-size: 2.5rem !important;
    }
    
    .filterContainer {
      gap: 8px;
    }
    
    .filterButton {
      padding: 10px 18px !important;
      font-size: 0.8rem !important;
    }
    
    .techGrid {
      grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)) !important;
      gap: 15px !important;
    }
    
    .techCard {
      padding: 20px 15px !important;
    }
  }
`;
document.head.appendChild(styleSheet);

export default TechVerse;