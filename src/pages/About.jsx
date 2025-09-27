import React, { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// Register ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const About = () => {
  const sectionRef = useRef(null)
  const quoteRef = useRef(null)
  const founderRef = useRef(null)
  const highlightedWords = useRef([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the entire section entrance
      gsap.fromTo(sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none"
          }
        }
      )

      // Animate the quote text with staggered reveal
      gsap.fromTo(quoteRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1.5,
          scrollTrigger: {
            trigger: quoteRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      )

      // Animate each highlighted word with a color fill effect
      highlightedWords.current.forEach((word, index) => {
        gsap.fromTo(word,
          { color: '#707070' }, // Start with the same color as the rest of the text
          {
            color: '#000000',
            duration: 0.8,
            delay: index * 0.2,
            scrollTrigger: {
              trigger: word,
              start: "top 90%",
              toggleActions: "play none none none"
            }
          }
        )
      })

      // Animate the founder section with a subtle scale effect
      gsap.fromTo(founderRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.8,
          delay: 0.5,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: founderRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      )

      // Add a continuous subtle pulse animation to the quote
      gsap.to(quoteRef.current, {
        y: -5,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        scrollTrigger: {
          trigger: quoteRef.current,
          start: "top 90%",
          toggleActions: "play pause resume reset"
        }
      })

    }, sectionRef)

    return () => ctx.revert() // Cleanup
  }, [])

  return (
    <div 
      ref={sectionRef}
      className='flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-16 md:py-20 bg-gray-50 overflow-hidden'
    >
      <h3 
        ref={quoteRef}
        className='text-2xl sm:text-3xl md:text-4xl text-[#707070] text-center max-w-4xl leading-relaxed md:leading-[50px]'
      >
        "<span 
          ref={el => highlightedWords.current[0] = el}
          className='text-black'
        >Medi2AI</span> turns complex, <span 
          ref={el => highlightedWords.current[1] = el}
          className='text-black'
        >fragmented data</span> into actionable insights, transforming <span 
          ref={el => highlightedWords.current[2] = el}
          className='text-black'
        >value-based</span> workflows from the back office to the <span 
          ref={el => highlightedWords.current[3] = el}
          className='text-black'
        >point-of-care</span>."
      </h3>

      <div 
        ref={founderRef}
        className='flex items-center gap-3 mt-10 bg-white p-4 rounded-xl shadow-sm'
      >
        <img 
          src='/founder.jpg' 
          className='h-10 w-10 border-2 border-white rounded-full object-cover shadow-md'
          alt="Founder of Medi2AI"
        />
        <p className='text-sm md:text-base'>
          Founder of <span className='font-semibold text-[#30C1A0]'>Medi2AI</span>
        </p>
      </div>
    </div>
  )
}

export default About