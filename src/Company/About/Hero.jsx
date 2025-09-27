import React, { useRef, useEffect, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiArrowUpRight, FiPlay, FiUsers, FiAward, FiActivity } from "react-icons/fi";

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const statsRef = useRef(null);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Multiple reliable image options
  // const backgroundImages = [
  //   // High-quality medical/tech images that are less likely to 404
  //   "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  // ];

  const handleImageError = () => {
    console.log('Image failed to load, trying next one...');
    if (currentImageIndex < backgroundImages.length - 1) {
      setCurrentImageIndex(prev => prev + 1);
    }
  };

  const handleImageLoad = () => {
    console.log('Image loaded successfully');
    setImageLoaded(true);
  };

  // GSAP Animations
  useEffect(() => {
    if (!imageLoaded) return;

    const ctx = gsap.context(() => {
      // Background image parallax effect
      gsap.to(imageRef.current, {
        scale: 1.1,
        duration: 20,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true
        }
      });

      // Text reveal animation
      const tl = gsap.timeline();
      tl.fromTo(".hero-title", 
        { 
          y: 100, 
          opacity: 0,
          rotationX: 45 
        },
        { 
          y: 0, 
          opacity: 1,
          rotationX: 0,
          duration: 1.5,
          ease: "power3.out"
        }
      )
      .fromTo(".hero-description", 
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1.2,
          ease: "power2.out"
        },
        "-=0.5"
      )
      .fromTo(".hero-button", 
        { scale: 0, opacity: 0 },
        { 
          scale: 1, 
          opacity: 1, 
          duration: 0.8,
          ease: "back.out(1.7)"
        },
        "-=0.3"
      )
      .fromTo(".stat-item", 
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6,
          stagger: 0.2,
          ease: "power2.out"
        },
        "-=0.2"
      );

      // Floating elements animation
      gsap.to(".float-element", {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5
      });

      // Particle animation
      gsap.to(".particle", {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        rotation: "random(-180, 180)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.1
      });

      // Gradient overlay animation
      gsap.to(".gradient-overlay", {
        backgroundPosition: "200% 200%",
        duration: 10,
        repeat: -1,
        ease: "none"
      });

      // Button hover animation
      const buttons = document.querySelectorAll('.hero-button');
      buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
          gsap.to(button, {
            scale: 1.05,
            boxShadow: "0 20px 40px rgba(48, 193, 160, 0.3)",
            duration: 0.3
          });
        });
        button.addEventListener('mouseleave', () => {
          gsap.to(button, {
            scale: 1,
            boxShadow: "0 10px 30px rgba(48, 193, 160, 0.2)",
            duration: 0.3
          });
        });
      });

    }, heroRef);

    return () => ctx.revert();
  }, [imageLoaded]);

  const stats = [
    { icon: FiUsers, number: "250+", label: "Healthcare Partners" },
    { icon: FiAward, number: "98%", label: "Accuracy Rate" },
    { icon: FiActivity, number: "5M+", label: "Processed Records" }
  ];

  // Fallback gradient background if no images load
  const fallbackBackground = (
    <div className="absolute inset-0 bg-gradient-to-br from-[#236BBA] via-[#30C1A0] to-purple-600">
      <div className="absolute inset-0 bg-black/40"></div>
    </div>
  );

  return (
    <div ref={heroRef} className="relative w-full  overflow-hidden mt-22">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-[#30C1A0]/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Main Background Image with Enhanced Overlay */}
      <div className="relative h-[650px] w-full ">
        {/* Background Image with Ken Burns Effect */}
        <div ref={imageRef} className="absolute inset-0">
          {/* Image with error handling and multiple fallbacks */}
          <img
            src='/about.jpg'
            alt="Advanced Healthcare AI Technology"
            className="w-full h-full object-cover"
            onLoad={handleImageLoad}
            onError={handleImageError}
            style={{ display: imageLoaded ? 'block' : 'none' }}
          />
          
          {/* Show loading or fallback */}
          {!imageLoaded && fallbackBackground}
          
          {/* Multi-layer Gradient Overlay */}
          <div className="gradient-overlay absolute inset-0 bg-gradient-to-br from-[#236BBA]/70 via-[#30C1A0]/50 to-purple-600/60 bg-[size:200%_200%] mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
          <div className="absolute inset-0 bg-radial-gradient at-center from-transparent to-black/30"></div>
        </div>

        {/* Loading indicator */}
        {!imageLoaded && (
          <div className="absolute inset-0 z-20 flex items-center justify-center">
            <div className="text-white text-lg">Loading immersive experience...</div>
          </div>
        )}

        {/* Animated Content */}
        <div className="relative z-10 flex items-center justify-center h-full px-4 sm:px-6 md:px-8 lg:px-12">
          <div className="max-w-6xl w-full text-white space-y-8">
            {/* Main Text Content */}
            <div ref={textRef} className="space-y-6">
              <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-snug">
                We practice AI so physicians can{' '}
                <span className="bg-[#30C1A0] bg-clip-text text-transparent">
                  practice medicine
                </span>
              </h1>
              
              <p className="hero-description text-lg sm:text-xl md:text-2xl lg:text-3xl leading-relaxed text-gray-200 max-w-4xl font-light">
                Empowering clinicians to deliver personalized, proactive care with clinical insights 
                they can trust, right in the moment of care.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <button 
                  ref={buttonRef}
                  className="hero-button group bg-gradient-to-r from-[#30C1A0] to-[#236BBA] text-white py-4 px-8 rounded-xl text-lg font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 flex items-center justify-center gap-3"
                >
                  <span>Start Your Journey</span>
                  <FiArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </button>
                
                <button className="hero-button group bg-[#30C1A0] backdrop-blur-sm text-white py-4 px-8 rounded-xl text-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-3">
                  <FiPlay className="group-hover:scale-110 transition-transform duration-300" />
                  <span>Watch Demo</span>
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Hero;