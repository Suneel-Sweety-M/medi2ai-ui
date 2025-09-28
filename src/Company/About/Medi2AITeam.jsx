import React, { useEffect, useRef, useState } from "react";

const Medi2AITeam = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Local image paths from public folder
  const teamImage = "/doc.jpg";

  // Generate image paths for team members
  const getTeamMemberImage = (index) => {
    return `/doc${index}.jpg`;
  };

  const teamMembers = [
    {
      id: 1,
      name: "Vishnu Inugala",
      title: "CEO & Co-Founder",
      bio: "Experienced leader with a vision for transforming healthcare through AI. Previously founded two successful startups.",
      image: '/Vishnu.png',
    },
    {
      id: 2,
      name: "Raghotham Banda",
      title: "CTO & Co-Founder",
      bio: "Technology expert with 15+ years in AI development. Holds patents in machine learning applications.",
      image: 'Ragho.png',
    },
    {
      id: 3,
      name: "Thirupathi M",
      title: "COO & Co-Founder",
      bio: "Expertise in AI applications. Led multiple projects improving patient outcomes with innovative solutions.",
      image: 'Thirupathi.png',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={sectionRef}
      className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Hero Section with Team Image */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative inline-block mb-8">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto mb-6 transform hover:scale-110 transition-transform duration-500">
              <img
                src={teamImage}
                alt="Medi2AI Team"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback initials */}
              <div className="absolute inset-0 bg-gray-100 rounded-full flex items-center justify-center hidden">
                <span className="text-2xl font-bold text-gray-600">MT</span>
              </div>
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full animate-ping"></div>
            <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-500 rounded-full animate-bounce"></div>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            Medi2AI Leadership Team
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the visionaries driving innovation in healthcare AI,
            transforming patient outcomes through cutting-edge technology.
          </p>
        </div>

        {/* Animated Stats Section */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {[
            { number: "50+", label: "Years Combined Experience" },
            { number: "100+", label: "Successful Projects" },
            { number: "1M+", label: "Patients Impacted" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center transform hover:scale-105 transition-transform duration-300"
            >
              <div className="text-3xl font-bold text-black-400 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.id}
              className={`group h-96 perspective transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card Container */}
              <div className="relative w-full h-full transition-transform duration-500 transform-style-preserve-3d group-hover:rotate-y-180">
                {/* Front of Card */}
                <div className="absolute w-full h-full backface-hidden bg-white rounded-xl shadow-lg border border-teal-100 flex flex-col overflow-hidden">
                  <div className="h-48 bg-gradient-to-r from-teal-400 to-[#30C1A0] flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-black opacity-10"></div>
                    <div className="h-32 w-32 rounded-full bg-white p-1 relative z-10 transform group-hover:scale-110 transition-transform duration-300 overflow-hidden border-4 border-white shadow-xl">
                      {/* ACTUAL IMAGE DISPLAYED HERE */}
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover rounded-full"
                        onError={(e) => {
                          // Fallback to initials if image fails to load
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      {/* Fallback initials - hidden by default */}
                      <div className="absolute inset-0 bg-gray-100 rounded-full flex items-center justify-center hidden">
                        <span className="text-2xl font-bold text-gray-600">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    </div>
                    {/* Animated background elements */}
                    <div className="absolute top-4 left-4 w-8 h-8 bg-white rounded-full opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-4 right-4 w-6 h-6 bg-white rounded-full opacity-30 animate-bounce"></div>
                  </div>

                  <div className="p-6 text-center flex-grow flex flex-col justify-center">
                    <h3 className="text-xl font-semibold text-gray-900 transform group-hover:scale-105 transition-transform duration-300">
                      {member.name}
                    </h3>
                    <p className="text-[#30C1A0] mt-1 font-medium">
                      {member.title}
                    </p>

                    <div className="mt-6 flex justify-center space-x-4">
                      <button className="text-[#30C1A0] hover:text-teal-700 transition-all duration-200 transform hover:scale-110 hover:rotate-12">
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                        </svg>
                      </button>
                      <button className="text-[#30C1A0] hover:text-teal-700 transition-all duration-200 transform hover:scale-110 hover:-rotate-12">
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                        >
                          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                        </svg>
                      </button>
                    </div>

                    <p className="text-sm text-gray-500 mt-4 animate-pulse">
                      Hover to learn more
                    </p>
                  </div>
                </div>

                {/* Back of Card */}
                <div className="absolute w-full h-full backface-hidden bg-gradient-to-br from-teal-500 to-[#30C1A0] rounded-xl p-6 text-white rotate-y-180 flex flex-col justify-center">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-white mr-4">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.nextSibling.style.display = "flex";
                        }}
                      />
                      <div className="absolute inset-0 bg-teal-600 rounded-full flex items-center justify-center hidden">
                        <span className="text-lg font-bold text-white">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold transform group-hover:scale-105 transition-transform duration-300">
                        {member.name}
                      </h3>
                      <p className="text-teal-100">{member.title}</p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed mb-4">{member.bio}</p>

                  <div className="flex justify-center space-x-4 mt-auto">
                    <button className="text-white hover:text-teal-200 transition-all duration-200 transform hover:scale-110 hover:rotate-12">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </button>
                    <button className="text-white hover:text-teal-200 transition-all duration-200 transform hover:scale-110 hover:-rotate-12">
                      <svg
                        className="w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Section */}
        <div
          className={`text-center mt-16 p-8 bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl shadow-xl transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Join Our Innovative Team
          </h2>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Be part of the revolution in healthcare AI. We're always looking for
            talented individuals to join our mission.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            View Open Positions
          </button>
        </div>
      </div>

      <style jsx>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes glow {
          0%,
          100% {
            opacity: 0.5;
          }
          50% {
            opacity: 1;
          }
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Medi2AITeam;
