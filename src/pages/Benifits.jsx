import React, { useEffect, useRef } from 'react';
import { FaStar } from "react-icons/fa";
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Benifits = () => {
    const scrollingItems = [
        "Virtual Assistance",
        "Faster Innovation", 
        "Scalable Solutions",
        "Data Insights",
        "Seamless Integration",
        "Global Reach"
    ];

    // Refs for the JavaScript scrolling animation
    const containerRef = useRef(null);
    const requestRef = useRef();
    const animationRef = useRef(0);
    const itemWidths = useRef([]);
    const totalWidth = useRef(0);

    // Refs for GSAP animations
    const sectionRef = useRef(null);
    const headerRef = useRef(null);
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);
    const cardsRef = useRef([]);
    const marqueeRef = useRef(null);

    // Double the items for seamless looping
    const displayItems = [...scrollingItems, ...scrollingItems];

    useEffect(() => {
        // GSAP Animations with ScrollTrigger - FAST LOADING
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
                        start: "top 85%",
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
                    duration: 0.5,
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
                    duration: 0.4,
                    delay: 0.1,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: subtitleRef.current,
                        start: "top 90%",
                        toggleActions: "play none none none"
                    }
                }
            );

            // Cards animation (staggered) - FAST
            gsap.fromTo(cardsRef.current,
                { opacity: 0, y: 30 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.1,
                    delay: 0.2,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: cardsRef.current[0],
                        start: "top 90%",
                        toggleActions: "play none none none"
                    }
                }
            );

            // Marquee section animation - FAST
            gsap.fromTo(marqueeRef.current,
                { opacity: 0, y: 20 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.5,
                    delay: 0.4,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: marqueeRef.current,
                        start: "top 90%",
                        toggleActions: "play none none none"
                    }
                }
            );

            // REMOVED: Floating animation for cards

        }, sectionRef);

        return () => ctx.revert(); // Cleanup
    }, []);

    // Original JavaScript scrolling animation (unchanged)
    useEffect(() => {
        const scrollSpeed = 0.4; // pixels per frame

        const calculateWidths = () => {
            const container = containerRef.current;
            if (container) {
                itemWidths.current = Array.from(container.children).map(child => 
                    child.getBoundingClientRect().width + 16 // 16 = mx-2*2
                );
                totalWidth.current = itemWidths.current.reduce((sum, width) => sum + width, 0);
            }
        };

        const scroll = () => {
            animationRef.current += scrollSpeed;
            
            // When we've scrolled one full loop, reset position but keep scrolling
            if (animationRef.current >= totalWidth.current / 2) {
                animationRef.current = 0;
                // Immediately reposition the container without animation
                if (containerRef.current) {
                    containerRef.current.style.transition = 'none';
                    containerRef.current.style.transform = `translateX(-${animationRef.current}px)`;
                    // Force reflow
                    containerRef.current.offsetHeight;
                    // Re-enable transitions
                    containerRef.current.style.transition = '';
                }
            }
            
            if (containerRef.current) {
                containerRef.current.style.transform = `translateX(-${animationRef.current}px)`;
            }
            requestRef.current = requestAnimationFrame(scroll);
        };

        // Initialize
        calculateWidths();
        window.addEventListener('resize', calculateWidths);
        requestRef.current = requestAnimationFrame(scroll);

        return () => {
            cancelAnimationFrame(requestRef.current);
            window.removeEventListener('resize', calculateWidths);
        };
    }, []);

    return (
        <div 
            ref={sectionRef}
            className='min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-16 md:py-20 bg-gray-50'
        >
            <div className='flex items-center px-3 py-1 gap-1 rounded-full bg-white shadow-lg mb-6'>
                <FaStar />
                <p className='text-sm sm:text-base'>Benefits</p>
            </div>

            <h2 
                ref={titleRef}
                className='text-3xl sm:text-4xl md:text-5xl text-center max-w-4xl leading-tight my-2'
            >
                Why Choose Us
            </h2>

            <p 
                ref={subtitleRef}
                className='text-sm sm:text-base text-center max-w-4xl text-[#707070] mt-2'
            >
                Partner with an AI agency delivering smart solutions.
            </p>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                <div 
                    ref={el => cardsRef.current[0] = el}
                    className='bg-white p-5 rounded-xl shadow-lg flex flex-col items-center text-center'
                >
                    <div className='relative h-[180px] w-[180px] rounded-full bg-gray-100 shadow-lg flex items-center justify-center'>
                        <div className='absolute w-4 h-4 bg-gray-400 border border-gray-300 rounded-full z-10'></div>
                        <div className='absolute top-1/2 left-1/2 h-[60px] w-[12px] bg-white border border-gray-300 rounded-full origin-top animate-moveHand'></div>
                    </div>
                    <div className='text-left mt-5 space-y-1'>
                        <h4 className='text-xl font-semibold'>Real-Time Analytics</h4>
                        <p className='text-[#707070] text-sm sm:text-base'>Stay ahead with accurate, real-time performance tracking</p>
                    </div>
                </div>

                <div 
                    ref={el => cardsRef.current[1] = el}
                    className='bg-white p-5 rounded-xl shadow-lg flex flex-col items-center text-center'
                >
                    <div className='flex items-end gap-3 h-[180px]'>
                        <div className='h-[180px] w-[60px] bg-gray-200 rounded-t-lg shadow-lg animate-bar1'></div>
                        <div className='h-[140px] w-[60px] bg-gray-200 rounded-t-lg shadow-lg animate-bar2'></div>
                        <div className='h-[100px] w-[60px] bg-gray-200 rounded-t-lg shadow-lg animate-bar3'></div>
                        <div className='h-[180px] w-[60px] bg-gray-200 rounded-t-lg shadow-lg animate-bar4'></div>
                    </div>
                    <div className='text-left mt-5 space-y-1'>
                        <h4 className='text-xl font-semibold'>AI-Driven Growth</h4>
                        <p className='text-[#707070] text-sm sm:text-base'>Make smarter moves with accurate, real-time business insights.</p>
                    </div>
                </div>

                <div 
                    ref={el => cardsRef.current[2] = el}
                    className='bg-white p-5 rounded-xl shadow-lg flex flex-col items-center text-center'
                >
                    <div className='relative h-[180px] w-[180px] flex items-center justify-center'>
                        <div className='absolute w-28 h-28 border-4 border-gray-200 rounded-full animate-ripple1'></div>
                        <div className='absolute w-40 h-40 border-4 border-gray-200 rounded-full animate-ripple3'></div>
                        <div className='absolute z-10 bg-white py-4 px-2 rounded-full shadow-lg'>
                            <img src='/hero.png' alt='logo' className='h-12 w-16' />
                        </div>
                    </div>
                    <div className='text-left mt-5 space-y-1'>
                        <h4 className='text-xl font-semibold'>Global Impact</h4>
                        <p className='text-[#707070] text-sm sm:text-base'>Creating waves of positive change across industries</p>
                    </div>
                </div>
            </div>

            {/* JavaScript-Powered Continuous Scrolling */}
            <div 
                ref={marqueeRef}
                className='mt-8 w-full max-w-6xl'
            >
                
                <div className='relative w-full overflow-hidden py-4'>
                    {/* Gradient fade edges */}
                    <div className='absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-gray-50 to-transparent z-10'></div>
                    <div className='absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-gray-50 to-transparent z-10'></div>
                    
                    {/* Scrolling container with JavaScript animation */}
                    <div className="relative h-14 overflow-hidden">
                        <div 
                            ref={containerRef}
                            className="absolute left-0 top-0 flex whitespace-nowrap will-change-transform"
                        >
                            {displayItems.map((item, index) => (
                                <div 
                                    key={`${item}-${index}`}
                                    className="inline-flex items-center mx-2"
                                >
                                    <p className='shadow-lg py-2 px-5 rounded-full bg-white text-gray-800 font-medium whitespace-nowrap text-sm sm:text-base'>
                                        {item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Add custom animation keyframes */}
            <style jsx>{`
                @keyframes moveHand {
                    0% {
                        transform: translate(-50%, 0) rotate(-90deg);
                    }
                    50% {
                        transform: translate(-50%, 0) rotate(90deg);
                    }
                    100% {
                        transform: translate(-50%, 0) rotate(-90deg);
                    }
                }
                
                .animate-moveHand {
                    animation: moveHand 4s ease-in-out infinite;
                    margin-left: -6px;
                }
                
                @keyframes barAnimation1 {
                    0%, 100% {
                        height: 180px;
                    }
                    50% {
                        height: 120px;
                    }
                }
                
                @keyframes barAnimation2 {
                    0%, 100% {
                        height: 140px;
                    }
                    50% {
                        height: 160px;
                    }
                }
                
                @keyframes barAnimation3 {
                    0%, 100% {
                        height: 100px;
                    }
                    50% {
                        height: 140px;
                    }
                }
                
                @keyframes barAnimation4 {
                    0%, 100% {
                        height: 180px;
                    }
                    50% {
                        height: 130px;
                    }
                }
                
                .animate-bar1 {
                    animation: barAnimation1 3s ease-in-out infinite;
                }
                
                .animate-bar2 {
                    animation: barAnimation2 3.5s ease-in-out infinite;
                    animation-delay: 0.5s;
                }
                
                .animate-bar3 {
                    animation: barAnimation3 4s ease-in-out infinite;
                    animation-delay: 1s;
                }
                
                .animate-bar4 {
                    animation: barAnimation4 3.2s ease-in-out infinite;
                    animation-delay: 0.8s;
                }
                
                @keyframes ripple {
                    0% {
                        transform: scale(0.8);
                        opacity: 1;
                    }
                    100% {
                        transform: scale(1.5);
                        opacity: 0;
                    }
                }
                
                .animate-ripple1 {
                    animation: ripple 3s ease-out infinite;
                }
                
                .animate-ripple3 {
                    animation: ripple 3s ease-out infinite;
                    animation-delay: 2s;
                }
            `}</style>
        </div>
    );
};

export default Benifits;