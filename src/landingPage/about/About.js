import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import "../home/home.css"; // Assuming you have a CSS file for styles

function AboutSection() {
  useEffect(() => {
    // Initialize AOS animation library with optimized settings
    AOS.init({
      duration: 600,
      easing: 'ease-out',
      once: true, // animations occur only once
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      throttleDelay: 99, // the delay on throttle used while scrolling
      debounceDelay: 50, // the delay on debounce used while resizing
      disable: 'mobile', // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    });
  }, []);

  return (
    <div className="about-container">
      {/* Hero Section */}
      <div className="container py-5">
        <div className="row align-items-center mt-4 mb-5">
          <div className="col-12" data-aos="fade-up"  style={{marginBottom: "4rem"}}>
            <h1 className="display-5 fw-bold text-center mb-4" data-aos="fade-up">
              Welcome to SonyCom – Your Gateway to Explore Your Requirement Knowledge
            </h1>
          </div>
          <div className="col-lg-6 col-md-12 text-center" data-aos="fade-up">
            <img 
              src="media/images/Sony-about.png" 
              alt="sony-about" 
              className="img-fluid mb-4 hero-logo"
              style={{ maxHeight: "280px", maxWidth: "100%", transition: "transform 0.5s ease", cursor: "pointer", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}
            />
          </div>
          <div className="col-lg-6 col-md-12" data-aos="fade-up">
            <p className="lead text-muted">
              SonyCom is a dynamic platform designed to empower you with the resources, knowledge, and inspiration you need to excel in various aspects of life. Whether you're passionate about education, fitness, personal growth, travel, or sharing your unique experiences with the world, SonyCom is your ultimate destination.
            </p>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="feature-sections">
        {/* Education Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 mb-4 mb-lg-0" data-aos="fade-up">
                <h2 className="feature-title">
                  <span className="feature-icon">🌟</span> Education & Learning
                </h2>
                <p className="lead text-muted mt-3">
                  At SonyCom, we believe that education is a lifelong journey. Our platform provides high-quality educational resources, tutorials, articles, and courses to help you enhance your knowledge and skills.
                </p>
                <p className="lead text-muted">
                  Explore our educational articles, designed to simplify complex concepts and provide practical tips for real-world applications. Dive into our expertly curated blogs and enhance your skills with ease.
                </p>
              </div>
              <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-delay="100">
                <div className="image-container">
                  <img 
                    src="media/images/Study2.jpg" 
                    alt="Group Study" 
                    className="img-fluid rounded feature-image shadow"
                    style={{transition: "transform 0.5s ease", cursor: "pointer", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fitness Section */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 order-lg-2 mb-4 mb-lg-0" data-aos="fade-up">
                <h2 className="feature-title">
                  <span className="feature-icon">💪</span> Fitness & Gym
                </h2>
                <p className="lead text-muted mt-3">
                  At SonyCom, we recognize the importance of maintaining both mental and physical well-being. Our Fitness & Gym section offers comprehensive resources to help you achieve your health and fitness goals.
                </p>
                <p className="lead text-muted">
                  SonyCom is here to guide you on your fitness journey with reliable information, encouragement, and community support.
                </p>
              </div>
              <div className="col-lg-6 col-md-12 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                <div className="image-container ">
                  <img 
                    src="media/images/fitness.jpg" 
                    alt="Fitness" 
                    className="img-fluid rounded feature-image shadow "
                    style={{transition: "transform 0.5s ease", cursor: "pointer", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Travel Section */}
        <section className="py-5 bg-light">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 mb-4 mb-lg-0" data-aos="fade-up">
                <h2 className="feature-title">
                  <span className="feature-icon">🌍</span> World Exploration & Travel
                </h2>
                <p className="lead text-muted mt-3">
                  The world is a beautiful place, and SonyCom is here to guide your exploration. From stunning travel destinations and cultural insights to adventurous travel guides and personal travelogues, our platform serves as a bridge connecting you to the diverse experiences our planet offers.
                </p>
                <p className="lead text-muted">
                  Learn from the experiences of seasoned travelers and get tips on planning your next adventure. Whether you're a solo backpacker or a luxury traveler, SonyCom is your reliable companion for all things travel.
                </p>
              </div>
              <div className="col-lg-6 col-md-12" data-aos="fade-up" data-aos-delay="100">
                <div className="image-container">
                  <img 
                    src="media/images/travel.jpg" 
                    alt="Travel" 
                    className="img-fluid rounded feature-image shadow"
                    style={{transition: "transform 0.5s ease", cursor: "pointer", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Blogging Section */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 order-lg-2 mb-4 mb-lg-0" data-aos="fade-up">
                <h2 className="feature-title">
                  <span className="feature-icon">✍️</span> Blogging & Sharing
                </h2>
                <p className="lead text-muted mt-3">
                  SonyCom isn't just a place for learning; it's a place for sharing. Our platform encourages writers, bloggers, and creators to express their thoughts and knowledge. Share your stories, insights, and experiences with the world through well-crafted blogs and articles.
                </p>
                <p className="lead text-muted">
                  We provide you with the tools and inspiration you need to enhance your writing skills, reach a broader audience, and make your voice heard. Whether it's an educational tutorial, fitness journey, or travel experience, SonyCom gives you the stage to shine.
                </p>
              </div>
              <div className="col-lg-6 col-md-12 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                <div className="image-container">
                  <img 
                    src="media/images/blog.jpg" 
                    alt="Blogging" 
                    className="img-fluid rounded feature-image shadow"
                    style={{transition: "transform 0.5s ease", cursor: "pointer", boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)", borderRadius: "8px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Why Choose Section */}
      <section className="py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center" data-aos="fade-up">
            <div className="col-lg-8">
              <h2 className="text-center fw-bold mb-4">Why Choose SonyCom</h2>
              <div className="why-choose-list">
                <div className="feature-item d-flex align-items-start mb-4">
                  <div className="feature-icon-wrapper me-3">
                    <span className="feature-icon-bullet">1</span>
                  </div>
                  <div>
                    <h5 className="fw-bold">Diverse Content</h5>
                    <p className="text-muted">Explore articles across various categories including Education, Fitness, Travel, and Blogging.</p>
                  </div>
                </div>
                
                <div className="feature-item d-flex align-items-start mb-4">
                  <div className="feature-icon-wrapper me-3">
                    <span className="feature-icon-bullet">2</span>
                  </div>
                  <div>
                    <h5 className="fw-bold">Community Interaction</h5>
                    <p className="text-muted">Engage with like-minded individuals, share your insights, and learn from others.</p>
                  </div>
                </div>
                
                <div className="feature-item d-flex align-items-start mb-4">
                  <div className="feature-icon-wrapper me-3">
                    <span className="feature-icon-bullet">3</span>
                  </div>
                  <div>
                    <h5 className="fw-bold">Continuous Learning</h5>
                    <p className="text-muted">Stay updated with the latest trends and knowledge in your field of interest.</p>
                  </div>
                </div>
                
                <div className="feature-item d-flex align-items-start mb-4">
                  <div className="feature-icon-wrapper me-3">
                    <span className="feature-icon-bullet">4</span>
                  </div>
                  <div>
                    <h5 className="fw-bold">Inspiration & Motivation</h5>
                    <p className="text-muted">Find the drive to achieve your goals through our motivational content.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom CSS */}
      <style jsx>{`
        .about-container {
          overflow-x: hidden;
        }
        
        .hero-logo {
          transition: transform 0.5s ease;
        }
        
        .hero-logo:hover {
          transform: scale(1.05);
        }
        
        .feature-title {
          font-weight: 600;
          margin-bottom: 1rem;
        }
        
        .feature-icon {
          font-size: 1.5rem;
          margin-right: 0.5rem;
        }
        
        .image-container {
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          transition: transform 0.3s ease;
        }
        
        .image-container:hover {
          transform: translateY(-5px);
        }
        
        .feature-image {
          width: 100%;
          transition: transform 0.5s ease;
        }
        
        .image-container:hover .feature-image {
          transform: scale(1.03);
        }
        
        .shadow {
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }
        
        .feature-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          flex-shrink: 0;
        }
        
        .feature-icon-bullet {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 30px;
          height: 30px;
          background-color: #0d6efd;
          color: white;
          border-radius: 50%;
          font-weight: bold;
        }
        
        .why-choose-list {
          margin: 2rem 0;
        }
        
        /* Button Animation */
        .pulsate {
          animation: pulsate 2s infinite;
          animation-direction: alternate;
          animation-timing-function: ease-in-out;
        }
        
        @keyframes pulsate {
          0% {
            box-shadow: 0 0 0 0 rgba(13, 110, 253, 0.4);
            transform: scale(1);
          }
          100% {
            box-shadow: 0 0 0 10px rgba(13, 110, 253, 0);
            transform: scale(1.05);
          }
        }
        
        /* Responsive adjustments */
        @media (max-width: 992px) {
          .order-lg-1 {
            order: 2;
          }
          .order-lg-2 {
            order: 1;
            margin-bottom: 2rem;
          }
        }
        
        @media (max-width: 768px) {
          .display-5 {
            font-size: 2rem;
          }
          .lead {
            font-size: 1rem;
          }
        }
        
        /* Add smooth scrolling to the page */
        html {
          scroll-behavior: smooth;
        }
        
        /* Optimize performance by using hardware acceleration */
        .image-container, .hero-logo, .feature-image, .pulsate {
          will-change: transform;
          transform: translateZ(0);
        }
      `}</style>
    </div>
  );
}

export default AboutSection;