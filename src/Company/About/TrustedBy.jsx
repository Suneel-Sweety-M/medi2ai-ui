import React, { useEffect, useRef, useState } from 'react';
import { BsStars } from "react-icons/bs";
import { Monitor, Activity, Users, Brain, Stethoscope, Heart, Shield, Target, Clock, ArrowRight, Award, Trophy, Star } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

function TrustedBy() {
  // Refs for GSAP animations - matching OurSuccess structure
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const heroCardsRef = useRef([]);
  const featureCardsRef = useRef([]);
  const missionRef = useRef(null);
  const statsRef = useRef([]);
  const awardsRef = useRef([]);
  const joinRef = useRef(null);

  const companies = [
    'Upperline Health',
    'NOMS Medical',
    'MedTech Solutions', 
    'HealthCare Plus',
    'PRIVIA Health',
    'Epic Systems',
    'Cerner',
    'Allscripts'
  ];

  const clinicianFeatures = [
    {
      icon: Stethoscope,
      title: "Clinical Excellence",
      description: "Built by practicing physicians",
      number: "01"
    },
    {
      icon: Heart,
      title: "Patient-First",
      description: "Empathetic care at the core",
      number: "02"
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description: "Enterprise-grade security",
      number: "03"
    },
    {
      icon: Target,
      title: "Precision Care",
      description: "Accurate diagnoses",
      number: "04"
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Seamless care coordination",
      number: "05"
    },
    {
      icon: Clock,
      title: "Time Efficient",
      description: "Streamlined workflows",
      number: "06"
    }
  ];

  // GSAP Animations with ScrollTrigger - Fast loading (same as OurSuccess)
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section entrance animation - FAST
      gsap.fromTo(sectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Header badge animation - FAST
      gsap.fromTo(headerRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Title animation - FAST
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Subtitle animation - FAST
      gsap.fromTo(subtitleRef.current,
        { opacity: 0, y: 15 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          delay: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Hero cards animation - FAST
      gsap.fromTo(heroCardsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: heroCardsRef.current[0],
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Feature cards animation - FAST
      gsap.fromTo(featureCardsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: featureCardsRef.current[0],
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Mission animation - FAST
      gsap.fromTo(missionRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          delay: 0.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: missionRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Stats animation - FAST
      gsap.fromTo(statsRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          delay: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsRef.current[0],
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Awards animation - FAST
      gsap.fromTo(awardsRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          delay: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: awardsRef.current[0],
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      );

      // Join section animation - FAST
      gsap.fromTo(joinRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.7,
          delay: 0.7,
          ease: "power2.out",
          scrollTrigger: {
            trigger: joinRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Hover animations for cards (matching OurSuccess style)
      const allCards = document.querySelectorAll('.interactive-card');
      allCards.forEach((card) => {
        card.addEventListener('mouseenter', () => {
          gsap.to(card, {
            y: -5,
            duration: 0.3,
            ease: "power2.out",
            boxShadow: "0 0 30px rgba(0,0,0,0.2)"
          });
        });
        
        card.addEventListener('mouseleave', () => {
          gsap.to(card, {
            y: 0,
            duration: 0.3,
            ease: "power2.out",
            boxShadow: "0 0 20px rgba(0,0,0,0.15)"
          });
        });
      });

    }, sectionRef);

    return () => ctx.revert(); // Cleanup
  }, []);

  return (
    <div 
      ref={sectionRef}
      className="min-h-screen py-7 flex flex-col items-center justify-center  text-black"
    >
      {/* Section Header - Matching OurSuccess style */}
      <div 
        ref={headerRef}
        className="bg-[#F3F3F3] w-fit flex items-center gap-2 px-4 py-1 rounded-full shadow-xl shadow-gray-400 mb-6"
      >
        <BsStars />
        <p>Trusted By Healthcare Leaders</p>
      </div>

      <div className="flex flex-col items-center text-center mb-10">
        <h1
          ref={titleRef}
          style={{ fontFamily: "Satoshi, sans-serif" }}
          className="text-4xl sm:text-5xl md:text-[55px] font-normal leading-tight"
        >
          From chaos to clarity
        </h1>
        <p 
          ref={subtitleRef}
          className="text-sm sm:text-[15px] text-gray-700 mt-4 max-w-2xl"
        >
          Patient data is fragmented and messy, leaving clinicians frustrated and overburdened. 
          Medi2AI transforms healthcare data into actionable insights for better patient outcomes.
        </p>
      </div>

      {/* Hero Section */}
      <div className="bg-white p-6 rounded-3xl w-full max-w-7xl interactive-card mb-12"
           style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              The vast accumulation of data scattered across the healthcare system makes it increasingly 
              difficult for physicians to access the right information at the right time to make accurate 
              diagnoses and preventive care opportunities.
            </p>
            
            <div className="grid grid-cols-2 gap-4 ">
              {[
                { icon: Activity, text: "Real-time Analytics" },
                { icon: Users, text: "Patient-Centered" },
                { icon: Brain, text: "AI-Powered" },
                { icon: Monitor, text: "Unified Dashboard" }
              ].map((item, index) => (
                <div 
                  key={index}
                  ref={el => heroCardsRef.current[index] = el}
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 interactive-element"
                >
                  <item.icon className="h-5 w-5 text-[#30C1A0]" />
                  <span className="text-sm font-medium text-gray-700">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="rounded-2xl overflow-hidden">
            <img 
              src="https://guptadeepak.com/content/images/size/w2000/2024/07/The-Future-of-AI-and-Its-Impact-on-Humanity.webp"
              alt="Medical Dashboard"
              className="w-full h-64 object-cover rounded-xl"
            />
          </div>
        </div>
      </div>

      {/* Clinician Features Section */}
      <div className="bg-white p-6 rounded-3xl w-full max-w-7xl interactive-card mb-12"
           style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-4">
            {clinicianFeatures.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={index}
                  ref={el => featureCardsRef.current[index] = el}
                  className="bg-white p-4 rounded-2xl interactive-element border border-gray-100"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="bg-black text-white p-2 rounded-lg">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <span className="text-lg font-semibold text-[#30C1A0]">{feature.number}</span>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">{feature.title}</h4>
                  <p className="text-xs text-gray-600">{feature.description}</p>
                </div>
              );
            })}
          </div>
          
          {/* Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
              Clinician-first design
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed mb-4">
              Our platform is designed by clinicians, for clinicians. We understand that every minute counts 
              when delivering patient care, which is why our intuitive interface helps healthcare providers 
              can truly understand every patient and deliver the best possible care.
            </p>
            <p className="text-sm text-gray-600 leading-relaxed mb-6">
              Medi2AI supports clinicians and care teams at every clinical touchpoint, reducing administrative burden, 
              improving clinical outcomes and helping practices succeed in value-based care.
            </p>
            
            <div className="flex flex-wrap gap-3">
              {['HIPAA Compliant', 'FDA Approved', 'SOC 2 Certified'].map((badge, index) => (
                <div key={index} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  {badge}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div 
        ref={missionRef}
        className="bg-white p-6 rounded-3xl w-full max-w-7xl interactive-card mb-12 text-center"
        style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
      >
        <div className="bg-[#F3F3F3] w-fit flex items-center gap-2 px-4 py-1 rounded-full shadow-lg mx-auto mb-6 shadow-lg shadow-gray-400 ">
          <BsStars />
          <p className="text-sm">Our Mission</p>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6 leading-relaxed">
          Medi2AI is creating the next generation of informed, empathetic care. We work every 
          day to harness the power of data to elevate the lives of physicians and their patients, 
          using artificial intelligence to deliver genuine humanity.
        </h2>

        <div className="flex items-center justify-center space-x-2 text-[#30C1A0] font-medium interactive-element">
          <span className="text-sm">Discover our proprietary AI platform</span>
          <ArrowRight className="h-4 w-4" />
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-8">
          {[
            { value: "98%", label: "Physician satisfaction rate" },
            { value: "45%", label: "Reduction in documentation time" },
            { value: "2.5M+", label: "Patients served globally" }
          ].map((stat, index) => (
            <div 
              key={index}
              ref={el => statsRef.current[index] = el}
              className="bg-gray-50 p-4 rounded-2xl interactive-element"
            >
              <div className="text-2xl font-bold text-[#364153] mb-1">{stat.value}</div>
              <div className="text-xs text-[#30C1A0]">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Awards Section */}
      <div className="w-full max-w-7xl mb-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-2">
            Awards and recognition
          </h2>
          <p className="text-sm text-gray-600 max-w-2xl mx-auto">
            Medi2AI is a recognized pioneer in the Artificial Intelligence space 
            and the growing world of value-based care.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: Award, title: "2022 Best AI-Augmented Clinical Decision Support", subtitle: "Healthcare Innovation Awards" },
            { icon: Trophy, title: "2023 Gold Stevie Award for Artificial Intelligence Excellence", subtitle: "American Business Awards" },
            { icon: Star, title: "2023 MedTech Breakthrough Award Winner", subtitle: "Best AI Platform for Healthcare" },
            { text: "TOP 20", title: "AI in Research Top 20 Company", subtitle: "Healthcare AI Excellence of 2024" },
            { text: "50", title: "CB Insights Digital Health Top 50", subtitle: "Most Promising Healthcare AI Company" },
            { text: "100", title: "Top 100 Most AI Forward Companies", subtitle: "Healthcare Technology Innovation" }
          ].map((award, index) => (
            <div 
              key={index}
              ref={el => awardsRef.current[index] = el}
              className="bg-white p-5 rounded-3xl interactive-card"
              style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
            >
              <div className="bg-black text-white w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                {award.icon ? (
                  <award.icon className="h-6 w-6" />
                ) : (
                  <span className="font-bold text-sm">{award.text}</span>
                )}
              </div>
              <h3 className="font-semibold text-gray-800 mb-2 text-sm leading-tight">
                {award.title}
              </h3>
              <p className="text-xs text-[#30C1A0]">{award.subtitle}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Join Section */}
      <div 
        ref={joinRef}
        className="bg-white p-8 rounded-3xl w-full max-w-2xl text-center interactive-card"
        style={{ boxShadow: "0 0 20px rgba(0,0,0,0.15)" }}
      >
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Join our team ✨
        </h2>
        <p className="text-sm text-gray-600 mb-6 max-w-md mx-auto">
          If you want to make a real impact in the exciting world of healthcare and AI, we'd love 
          to hear from you.
        </p>
        
        <button className="bg-[#30C1A0] text-white px-6 py-3 rounded-xl font-medium interactive-element flex items-center gap-2 mx-auto">
          <Users className="h-4 w-4" />
          Join our team
        </button>
      </div>
    </div>
  );
}

export default TrustedBy;