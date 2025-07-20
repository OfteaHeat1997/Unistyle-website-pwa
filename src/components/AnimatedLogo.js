import React, { useState, useEffect, useRef } from 'react';
import './AnimatedLogo.css';

const AnimatedLogo = () => {
  const svgRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const startAnimation = () => {
    // Reset animation state
    if (svgRef.current) {
      // Remove animation class if it exists
      svgRef.current.classList.remove('animate');
      
      // Get all path elements in the SVG
      const paths = svgRef.current.querySelectorAll('path');
      
      // Reset animation state
      paths.forEach(path => {
        const length = path.getTotalLength();
        path.style.strokeDasharray = length;
        path.style.strokeDashoffset = length;
      });

      // Force reflow
      void svgRef.current.offsetWidth;
      
      // Trigger animation
      svgRef.current.classList.add('animate');
      setIsAnimating(true);
      
      // Reset animation state after it completes
      setTimeout(() => {
        setIsAnimating(false);
      }, 4000); // Total animation duration + a little buffer
    }
  };

  useEffect(() => {
    // Start animation on initial render
    startAnimation();
  }, []);

  return (
    <div className="animated-logo-container">
      <svg 
        ref={svgRef}
        className="animated-logo" 
        viewBox="0 0 200 200" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Main circular outline */}
        <path 
          className="outline-path"
          d="M100,30 C130,30 155,55 155,85 C155,115 130,140 100,140 C70,140 45,115 45,85 C45,55 70,30 100,30 Z"
          fill="none" 
          stroke="#000" 
          strokeWidth="1.5"
        />
        
        {/* Left face - closed eye */}
        <path 
          className="outline-path"
          d="M70,80 C75,78 80,78 85,80"
          fill="none" 
          stroke="#000" 
          strokeWidth="1.5"
        />
        
        {/* Left face - nose */}
        <path 
          className="outline-path"
          d="M80,90 C75,95 75,100 80,105"
          fill="none" 
          stroke="#000" 
          strokeWidth="1.5"
        />
        
        {/* Left face - cheek oval */}
        <path 
          className="outline-path"
          d="M70,100 C80,90 85,95 80,105 C75,115 65,110 70,100"
          fill="none" 
          stroke="#000" 
          strokeWidth="1.5"
        />
        
        {/* Right face - open eye */}
        <path 
          className="outline-path"
          d="M130,80 C125,75 120,75 115,80 C120,85 125,85 130,80"
          fill="none" 
          stroke="#000" 
          strokeWidth="1.5"
        />
        
        {/* Right face - nose */}
        <path 
          className="outline-path"
          d="M120,90 C125,95 125,100 120,105"
          fill="none" 
          stroke="#000" 
          strokeWidth="1.5"
        />
        
        {/* Shared mouth */}
        <path 
          className="outline-path"
          d="M85,110 C95,115 105,115 115,110"
          fill="none" 
          stroke="#000" 
          strokeWidth="1.5"
        />
        
        {/* Hair strands - top curved lines */}
        <path 
          className="outline-path"
          d="M120,40 C130,50 140,60 150,70"
          fill="none" 
          stroke="#000" 
          strokeWidth="1.5"
        />
        
        <path 
          className="outline-path"
          d="M125,35 C135,45 145,55 155,65"
          fill="none" 
          stroke="#000" 
          strokeWidth="1.5"
        />
        
        <path 
          className="outline-path"
          d="M130,30 C140,40 150,50 160,60"
          fill="none" 
          stroke="#000" 
          strokeWidth="1.5"
        />
        
        {/* Black cap/beret */}
        <path 
          className="fill-path"
          d="M140,50 C145,45 150,40 150,35 C150,30 145,25 140,25 C135,25 130,30 125,35 C120,40 115,45 110,50 C120,50 130,50 140,50"
          fill="#000" 
          stroke="#000" 
          strokeWidth="1"
        />
        
        {/* Neck lines */}
        <path 
          className="outline-path"
          d="M90,140 C90,150 90,160 90,170"
          fill="none" 
          stroke="#000" 
          strokeWidth="1.5"
        />
        
        <path 
          className="outline-path"
          d="M100,140 C100,150 100,160 100,170"
          fill="none" 
          stroke="#000" 
          strokeWidth="1.5"
        />
        
        <path 
          className="outline-path"
          d="M110,140 C110,150 110,160 110,170"
          fill="none" 
          stroke="#000" 
          strokeWidth="1.5"
        />
      </svg>
      
      <button 
        className="restart-animation" 
        onClick={startAnimation}
        disabled={isAnimating}
      >
        {isAnimating ? 'Drawing...' : 'Restart Animation'}
      </button>
    </div>
  );
};

export default AnimatedLogo;
