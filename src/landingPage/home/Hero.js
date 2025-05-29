import { useState, useEffect } from 'react';
import { Shield, Cloud, Download, Settings, Database, Code } from 'lucide-react';
import './home.css'; // Assuming you have a CSS file for styles
import '../../styles/style.css'; 
import { Link } from 'react-router-dom'; // Adjust the import based on your routing setup

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIcon, setActiveIcon] = useState(0);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const iconInterval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % 6);
    }, 2000);
    return () => clearInterval(iconInterval);
  }, []);

  const icons = [
    { icon: <Shield className="icon-white" />, delay: '0ms' },
    { icon: <Cloud className="icon-white" />, delay: '200ms' },
    { icon: <Download className="icon-white" />, delay: '400ms' },
    { icon: <Settings className="icon-white" />, delay: '600ms' },
    { icon: <Database className="icon-white" />, delay: '800ms' },
    { icon: <Code className="icon-white" />, delay: '1000ms' }
  ];

  const floatingIcons = [
    { icon: <Shield size={32} />, top: '20%', left: '15%', animationDelay: '0s' },
    { icon: <Cloud size={32} />, top: '15%', right: '20%', animationDelay: '1s' },
    { icon: <Download size={32} />, bottom: '30%', left: '10%', animationDelay: '2s' },
    { icon: <Settings size={32} />, top: '30%', right: '15%', animationDelay: '1.5s' },
    { icon: <Database size={32} />, bottom: '15%', right: '10%', animationDelay: '0.5s' }
  ];

  return (
    <>
      <div className="background">
        {/* Curved Bottom */}
        <div className="curved-bottom" aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full" style={{width: '100%', height: 'auto'}}>
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L80,213.3C160,203,320,181,480,181.3C640,181,800,203,960,197.3C1120,192,1280,160,1360,144L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* Floating Icons */}
        {floatingIcons.map((item, index) => (
          <div
            key={index}
            className="floating-icon"
            style={{
              top: item.top,
              left: item.left,
              right: item.right,
              bottom: item.bottom,
              animationDelay: item.animationDelay,
            }}
          >
            {item.icon}
          </div>
        ))}

        <div className="container">
          <div className="flex-row">
            {/* Left Content */}
            <div className={`left-content ${isVisible ? 'visible' : ''}`}>
              <h1>
                  Elevating<br />
                  Ideas into<br />
                  Impact
              </h1>

              <p>
                At SonyCom, we are not just a software solutions provider. We are
                your partners in progress. We are highly committed to elevating tech
                excellence, which encourages us to deliver innovative solutions that
                will capacitate your business growth. Our team is inclined towards
                creating software solutions that not only fulfill your needs but also
                exceed your expectations.
              </p>
              <Link to = '/contact' >
              <button
                className={`btn-contact ${hovered ? 'hovered' : ''}`}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
              >
                Quick Talk, Contact US!
              </button>              
              </Link>
            </div>

            {/* Right Content */}
            <div className={`right-content ${isVisible ? 'visible' : ''}`}>
              <div className="infinity-container">
                <svg
                  viewBox="0 0 100 100"
                  xmlns="http://www.w3.org/2000/svg"
                  className="animate-pulse"
                  style={{ width: '100%', height: '100%' }}
                  aria-hidden="true"
                >
                  <path
                    d="M30,50 C30,32 45,25 50,25 C55,25 65,27 65,40 C65,53 55,55 50,55 C45,55 35,53 35,40 C35,27 45,25 50,25 C55,25 70,32 70,50 C70,68 55,75 50,75 C45,75 35,73 35,60 C35,47 45,45 50,45 C55,45 65,47 65,60 C65,73 55,75 50,75 C45,75 30,68 30,50 Z"
                    className="infinity-path"
                  />
                </svg>

                {/* Orbiting icons */}
                {icons.map((item, index) => {
                  // Calculate positions on circle (same as before)
                  const topPercent = 50 - 35 * Math.cos((2 * Math.PI * index) / icons.length);
                  const leftPercent = 50 - 35 * Math.sin((2 * Math.PI * index) / icons.length);

                  return (
                    <div
                      key={index}
                      className={`orbit-icon ${activeIcon === index ? 'active' : ''}`}
                      style={{
                        top: `${topPercent}%`,
                        left: `${leftPercent}%`,
                        transitionDelay: item.delay,
                        transformOrigin: 'center center',
                      }}
                    >
                      {item.icon}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
