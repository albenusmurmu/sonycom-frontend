import React, { useState, useMemo } from 'react';
import { Search, Calendar, User, ArrowRight, AlertCircle } from 'lucide-react';
import BLOG_POSTS from '../../data/blogPostData'; // adjust path if needed

const CATEGORIES = ['all', 'Sports', 'Technology'];

const Blogs = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Filter blogs based on search term and category
  const filteredBlogs = useMemo(() => {
    return BLOG_POSTS.filter(blog => {
      const matchesSearch = searchTerm === '' || 
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || blog.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const clearSearch = () => {
    setSearchTerm('');
    setSelectedCategory('all');
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Our Blog</h1>
        <p style={styles.subtitle}>Discover stories, insights, and inspiration</p>
      </div>

      {/* Search Section */}
      <div style={styles.searchSection}>
        <div style={styles.searchContainer}>
          <div style={styles.searchInputWrapper}>
            <Search style={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search for Ronaldo, Messi, Steve Jobs, Mark Zuckerberg..."
              value={searchTerm}
              onChange={handleSearchChange}
              style={styles.searchInput}
            />
            {searchTerm && (
              <button onClick={clearSearch} style={styles.clearButton}>
                ×
              </button>
            )}
          </div>
        </div>

        {/* Category Filters */}
        <div style={styles.categoryContainer}>
          {CATEGORIES.map(category => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              style={{
                ...styles.categoryButton,
                ...(selectedCategory === category ? styles.categoryButtonActive : {})
              }}
            >
              {category === 'all' ? 'All Posts' : category}
            </button>
          ))}
        </div>
      </div>

      {/* Results Section */}
      <div style={styles.resultsSection}>
        {searchTerm && (
          <p style={styles.searchInfo}>
            {filteredBlogs.length > 0 
              ? `Found ${filteredBlogs.length} result${filteredBlogs.length !== 1 ? 's' : ''} for "${searchTerm}"`
              : `No results found for "${searchTerm}"`
            }
          </p>
        )}

        {/* Blog Grid */}
        {filteredBlogs.length > 0 ? (
          <div style={styles.blogGrid}>
            {filteredBlogs.map(blog => (
              <article key={blog.id} style={styles.blogCard}>
                <div style={styles.imageContainer}>
                  <img src={blog.image} alt={blog.title} style={styles.blogImage} />
                  <div style={styles.categoryTag}>{blog.category}</div>
                </div>
                <div style={styles.cardContent}>
                  <h3 style={styles.blogTitle}>{blog.title}</h3>
                  <p style={styles.blogExcerpt}>{blog.excerpt}</p>
                  <div style={styles.blogMeta}>
                    <div style={styles.metaItem}>
                      <User size={14} />
                      <span>{blog.author}</span>
                    </div>
                    <div style={styles.metaItem}>
                      <Calendar size={14} />
                      <span>{new Date(blog.date).toLocaleDateString()}</span>
                    </div>
                    <div style={styles.readTime}>{blog.readTime}</div>
                  </div>
                  <button style={styles.readMoreButton}>
                    Read More <ArrowRight size={16} />
                  </button>
                </div>
              </article>
            ))}
          </div>
        ) : (
          // 404 Error State
          <div style={styles.errorContainer}>
            <AlertCircle size={64} style={styles.errorIcon} />
            <h2 style={styles.errorTitle}>404 - Not Found</h2>
            <p style={styles.errorMessage}>
              Sorry, we couldn't find any blog posts matching "{searchTerm}".
            </p>
            <p style={styles.errorSuggestion}>
              Try searching for: Ronaldo, Messi, Steve Jobs, Mark Zuckerberg, or browse all posts.
            </p>
            <button onClick={clearSearch} style={styles.backButton}>
              Show All Posts
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    backgroundColor: '#f8fafc',
    minHeight: '100vh'
  },
  header: {
    textAlign: 'center',
    marginBottom: '40px',
    animation: 'fadeInUp 0.8s ease-out'
  },
  title: {
    fontSize: 'clamp(2rem, 5vw, 3.5rem)',
    fontWeight: '700',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '10px'
  },
  subtitle: {
    fontSize: '1.2rem',
    color: '#64748b',
    maxWidth: '600px',
    margin: '0 auto'
  },
  searchSection: {
    marginBottom: '40px',
    animation: 'fadeInUp 0.8s ease-out 0.2s both'
  },
  searchContainer: {
    marginBottom: '20px'
  },
  searchInputWrapper: {
    position: 'relative',
    maxWidth: '600px',
    margin: '0 auto'
  },
  searchIcon: {
    position: 'absolute',
    left: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    color: '#9ca3af',
    zIndex: 1
  },
  searchInput: {
    width: '100%',
    padding: '15px 50px 15px 50px',
    fontSize: '16px',
    border: '2px solid #e2e8f0',
    borderRadius: '50px',
    outline: 'none',
    transition: 'all 0.3s ease-out',
    backgroundColor: 'white',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
    boxSizing: 'border-box'
  },
  clearButton: {
    position: 'absolute',
    right: '15px',
    top: '50%',
    transform: 'translateY(-50%)',
    background: 'none',
    border: 'none',
    fontSize: '24px',
    cursor: 'pointer',
    color: '#9ca3af',
    transition: 'color 0.3s ease-out'
  },
  categoryContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    flexWrap: 'wrap'
  },
  categoryButton: {
    padding: '8px 20px',
    border: '2px solid #e2e8f0',
    borderRadius: '25px',
    background: 'white',
    color: '#64748b',
    cursor: 'pointer',
    transition: 'all 0.3s ease-out',
    fontSize: '14px',
    fontWeight: '500'
  },
  categoryButtonActive: {
    backgroundColor: '#667eea',
    color: 'white',
    borderColor: '#667eea'
  },
  resultsSection: {
    animation: 'fadeInUp 0.8s ease-out 0.4s both'
  },
  searchInfo: {
    textAlign: 'center',
    color: '#64748b',
    marginBottom: '30px',
    fontSize: '16px'
  },
  blogGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
    gap: '30px',
    marginTop: '30px'
  },
  blogCard: {
    backgroundColor: 'white',
    borderRadius: '15px',
    overflow: 'hidden',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.08)',
    transition: 'all 0.4s ease-out',
    cursor: 'pointer',
    animation: 'slideInUp 0.6s ease-out'
  },
  imageContainer: {
    position: 'relative',
    overflow: 'hidden'
  },
  blogImage: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
    transition: 'transform 0.4s ease-out'
  },
  categoryTag: {
    position: 'absolute',
    top: '15px',
    left: '15px',
    backgroundColor: 'rgba(102, 126, 234, 0.9)',
    color: 'white',
    padding: '5px 12px',
    borderRadius: '15px',
    fontSize: '12px',
    fontWeight: '600'
  },
  cardContent: {
    padding: '25px'
  },
  blogTitle: {
    fontSize: '1.3rem',
    fontWeight: '600',
    color: '#1e293b',
    marginBottom: '12px',
    lineHeight: '1.4'
  },
  blogExcerpt: {
    color: '#64748b',
    lineHeight: '1.6',
    marginBottom: '20px',
    fontSize: '14px'
  },
  blogMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: '15px',
    marginBottom: '20px',
    fontSize: '12px',
    color: '#94a3b8',
    flexWrap: 'wrap'
  },
  metaItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '5px'
  },
  readTime: {
    marginLeft: 'auto',
    fontWeight: '500'
  },
  readMoreButton: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    padding: '12px 20px',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '14px',
    fontWeight: '500',
    transition: 'all 0.3s ease-out'
  },
  errorContainer: {
    textAlign: 'center',
    padding: '60px 20px',
    animation: 'fadeInUp 0.8s ease-out'
  },
  errorIcon: {
    color: '#ef4444',
    marginBottom: '20px'
  },
  errorTitle: {
    fontSize: '2rem',
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: '15px'
  },
  errorMessage: {
    fontSize: '1.1rem',
    color: '#64748b',
    marginBottom: '10px'
  },
  errorSuggestion: {
    fontSize: '1rem',
    color: '#94a3b8',
    marginBottom: '30px'
  },
  backButton: {
    backgroundColor: '#667eea',
    color: 'white',
    border: 'none',
    padding: '12px 24px',
    borderRadius: '25px',
    cursor: 'pointer',
    fontSize: '16px',
    fontWeight: '500',
    transition: 'all 0.3s ease-out'
  }
};

// Add CSS animations
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
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Hover effects */
  [style*="blogCard"]:hover {
    transform: translateY(-8px) !important;
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15) !important;
  }

  [style*="blogCard"]:hover img {
    transform: scale(1.05) !important;
  }

  [style*="searchInput"]:focus {
    border-color: #667eea !important;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
  }

  [style*="categoryButton"]:hover {
    background-color: #f1f5f9 !important;
    border-color: #cbd5e1 !important;
  }

  [style*="readMoreButton"]:hover {
    background-color: #5a67d8 !important;
    transform: translateX(3px);
  }

  [style*="backButton"]:hover {
    background-color: #5a67d8 !important;
    transform: translateY(-2px);
  }

  [style*="clearButton"]:hover {
    color: #ef4444 !important;
  }

  /* Mobile responsiveness */
  @media (max-width: 768px) {
    [style*="container"] {
      padding: 15px !important;
    }
    
    [style*="blogGrid"] {
      grid-template-columns: 1fr !important;
      gap: 20px !important;
    }
    
    [style*="searchInput"] {
      font-size: 16px !important;
    }
    
    [style*="categoryContainer"] {
      gap: 8px !important;
    }
    
    [style*="categoryButton"] {
      padding: 6px 15px !important;
      font-size: 13px !important;
    }
    
    [style*="blogMeta"] {
      font-size: 11px !important;
    }
  }

  @media (max-width: 480px) {
    [style*="cardContent"] {
      padding: 20px !important;
    }
    
    [style*="blogTitle"] {
      font-size: 1.1rem !important;
    }
    
    [style*="errorContainer"] {
      padding: 40px 20px !important;
    }
  }
`;

document.head.appendChild(styleSheet);

export default Blogs;