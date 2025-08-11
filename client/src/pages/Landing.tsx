import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom';

const Landing = () => {
  // Refs for various elements to animate
  const logoRef = useRef(null);
  const taglineRef = useRef(null);
  const headingRef = useRef(null);
  const featuresRef = useRef(null);
  const loginRef = useRef(null);
  const signupRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    // Initial animation setup
    gsap.set([logoRef.current, taglineRef.current, headingRef.current], { 
      opacity: 0,
      y: 50
    });
    
    gsap.set([loginRef.current, signupRef.current], {
      opacity: 0,
      x: 20
    });
    
    gsap.set(footerRef.current, {
      opacity: 0,
      y: 20
    });

    // Animation timeline
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Background image animation
    tl.to(".bg-image", { 
      duration: 2, 
      opacity: 0.5, 
      scale: 1.05,
      ease: "power2.inOut"
    }, 0);
    
    // Login and Signup button animations
    tl.to([loginRef.current, signupRef.current], {
      duration: 0.8,
      opacity: 1,
      x: 0,
      stagger: 0.2
    }, 0.3);
    
    // Logo animation
    tl.to(logoRef.current, { 
      duration: 1.2, 
      opacity: 1, 
      y: 0 
    }, 0.5);
    
    // Tagline animation
    tl.to(taglineRef.current, { 
      duration: 1, 
      opacity: 1, 
      y: 0 
    }, 0.8);
    
    // Heading animation
    tl.to(headingRef.current, { 
      duration: 1.5, 
      opacity: 1, 
      y: 0 
    }, 1.2);
    
    // Removed features section animation
    
    // Footer animation
    tl.to(footerRef.current, { 
      duration: 0.8, 
      opacity: 1, 
      y: 0 
    }, 2.2);
    
  }, []);

  return (
    <div className='flex flex-col bg-black min-h-screen text-white'>
      {/* Background image */}
      <div className='absolute inset-0 flex justify-center items-center'>
        <img src="/bg-ell.png" className='bg-image h-150 blur-3xl opacity-0 w-300' alt="background" />
      </div>
      <div className='bg-white/12 h-full pb-12 backdrop-blur-lg'>

        {/* Login and Signup buttons */}
        <div className='relative flex justify-end p-5'>
          <div className='font-bold text-2xl flex gap-5'>
            <Link to="/login" ref={loginRef} className='cursor-pointer hover:scale-105'>Login</Link>
            <Link to="/signup" ref={signupRef} className='cursor-pointer hover:scale-105'>Signup</Link>
          </div>
        </div>

        {/* Logo and tagline */}
        <div className='relative flex flex-col items-center justify-between flex-grow px-4 py-16'>
          <div className='text-center mt-8'>
            <img ref={logoRef} src="/logo1.png" alt="Open In" className='mx-auto h-40 w-[500px] mb-5 mt-[15%] ' />
            <h2 ref={taglineRef} className='text-gray-400 font-medium mb-50 text-xl'>Turn your goals into guided missions. Learn what matters, every day.</h2>
          </div>
        </div>
      </div>

      {/* Heading */}
      <div className='relative flex flex-col items-center justify-between flex-grow px-4 py-16'>
        <h1 ref={headingRef} className='text-2xl md:text-3xl lg:text-4xl text-center max-w-3xl mx-auto mt-32 mb-20'>
          Navigate through the noise with AI-powered learning paths tailored to your goals
        </h1>
      </div>

      {/* Problem We're Solving Section */}
      <div className="relative my-28 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">The Problem We're Solving</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">After talking to 1000+ students, professionals, and startup founders, we discovered key problems in self-learning:</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6">
              <div className="text-purple-400 text-2xl mb-4">📚</div>
              <h3 className="font-semibold text-xl mb-2">Information Overload</h3>
              <p className="text-gray-300">Over 2000+ resources online, but no direction on what suits your specific learning style and goals.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6">
              <div className="text-purple-400 text-2xl mb-4">🧭</div>
              <h3 className="font-semibold text-xl mb-2">No Clear Roadmaps</h3>
              <p className="text-gray-300">Students have goals, but don't know the exact steps needed to reach them effectively.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6">
              <div className="text-purple-400 text-2xl mb-4">🛠️</div>
              <h3 className="font-semibold text-xl mb-2">Finding the Right Resources</h3>
              <p className="text-gray-300">Even professionals and founders struggle to identify which learning materials will actually help them succeed.</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6">
              <div className="text-purple-400 text-2xl mb-4">💤</div>
              <h3 className="font-semibold text-xl mb-2">Procrastination & Giving Up</h3>
              <p className="text-gray-300">Over 50% of learners abandon courses mid-way due to lack of structure, accountability, and motivation.</p>
            </div>
          </div>
          
          <div className="text-center mt-12 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 p-6 rounded-xl backdrop-blur-md border border-purple-500/20">
            <p className="text-xl text-gray-200">
              Openln solves this by giving you a personalized roadmap, broken into daily tasks and challenges that help you level up with consistency — no more confusion, no more wasted time.
            </p>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="relative my-20">
        {/* Ellipse background */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none -z-10">
          <img
            src="/bg-ell.png"
            alt="ellipse background"
            className="w-[600px] h-[350px] md:w-[700px] md:h-[400px] blur-2xl opacity-60"
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div
          ref={featuresRef}
          className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full mx-auto"
        >
          {/* Feature Card 1 */}
          <div className="feature-item group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center">
            <svg className="h-12 w-12 mb-4 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 20V10M12 10L8 14M12 10l4 4" />
              <circle cx="12" cy="12" r="10" />
            </svg>
            <h3 className="font-semibold text-xl mb-2">Personalized Roadmaps</h3>
            <p className="text-gray-200">AI-driven learning paths designed specifically for your goals and learning style.</p>
          </div>
          {/* Feature Card 2 */}
          <div className="feature-item group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center">
            <svg className="h-12 w-12 mb-4 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 9l5-5 5 5M12 4v12" />
            </svg>
            <h3 className="font-semibold text-xl mb-2">Daily Challenges</h3>
            <p className="text-gray-200">Bite-sized tasks that build consistent habits and ensure steady progress toward your goals.</p>
          </div>
          {/* Feature Card 3 */}
          <div className="feature-item group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center">
            <svg className="h-12 w-12 mb-4 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07l-1.72 1.71" />
              <path d="M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.71-1.71" />
            </svg>
            <h3 className="font-semibold text-xl mb-2">Curated Resources</h3>
            <p className="text-gray-200">No more overwhelm with perfectly matched learning materials for your specific journey.</p>
          </div>
          {/* Feature Card 4 */}
          <div className="feature-item group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center">
            <svg className="h-12 w-12 mb-4 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M12 6V4M12 6C10.8954 6 10 6.89543 10 8C10 9.10457 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12M12 6H16M12 18C10.8954 18 10 17.1046 10 16C10 14.8954 10.8954 14 12 14M12 18C13.1046 18 14 17.1046 14 16M12 18V20M8 8H4M8 16H4M16 12H20" />
            </svg>
            <h3 className="font-semibold text-xl mb-2">Progress Tracking</h3>
            <p className="text-gray-200">Level up system that shows your real growth and keeps you motivated throughout your journey.</p>
          </div>
          {/* Feature Card 5 */}
          <div className="feature-item group bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 shadow-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center md:col-span-2">
            <svg className="h-12 w-12 mb-4 text-purple-400 group-hover:text-purple-300 transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
              <circle cx="9" cy="7" r="4"></circle>
              <path d="M23 21v-2a4 4 0 00-3-3.87"></path>
              <path d="M16 3.13a4 4 0 010 7.75"></path>
            </svg>
            <h3 className="font-semibold text-xl mb-2">Community Support</h3>
            <p className="text-gray-200">Connect with like-minded learners and mentors who can guide you along your educational journey.</p>
          </div>
        </div>
      </div>

      {/* Goal Examples Section */}
      <div className="relative my-28 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Set Your Goal, We'll Show the Way</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Whatever your ambition, Openln provides the roadmap to get there.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {/* Goal Example 1 */}
          <div className="bg-gradient-to-br from-purple-900/40 to-purple-700/20 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
            <div className="text-purple-400 text-2xl mb-3">🧑‍💻</div>
            <h3 className="font-semibold text-xl mb-2">Land a High-Paying Tech Job</h3>
            <p className="text-gray-300">Strategic skill building for top-tier tech positions</p>
          </div>
          
          {/* Goal Example 2 */}
          <div className="bg-gradient-to-br from-purple-900/40 to-purple-700/20 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
            <div className="text-purple-400 text-2xl mb-3">🚀</div>
            <h3 className="font-semibold text-xl mb-2">Launch Your Startup</h3>
            <p className="text-gray-300">From idea validation to market entry and scaling</p>
          </div>
          
          {/* Goal Example 3 */}
          <div className="bg-gradient-to-br from-purple-900/40 to-purple-700/20 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
            <div className="text-purple-400 text-2xl mb-3">🔬</div>
            <h3 className="font-semibold text-xl mb-2">Master AI/ML</h3>
            <p className="text-gray-300">Practical AI knowledge from fundamentals to advanced applications</p>
          </div>
          
          {/* Goal Example 4 */}
          <div className="bg-gradient-to-br from-purple-900/40 to-purple-700/20 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all">
            <div className="text-purple-400 text-2xl mb-3">📚</div>
            <h3 className="font-semibold text-xl mb-2">Learn Web Development</h3>
            <p className="text-gray-300">From frontend basics to full-stack mastery</p>
          </div>
        </div>
      </div>

      {/* Projects in Development */}
      <div className="relative my-28 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Building an Open Learning Ecosystem</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">Our projects work together to create a seamless learning experience</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Project 1 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-md p-3 text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">openln-engine</h3>
                <span className="bg-yellow-600/30 text-yellow-400 text-xs px-2 py-1 rounded-full">🚧 Building MVP</span>
              </div>
              <p className="text-gray-300 mt-1">Core engine that generates roadmaps and tracks user progress</p>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-md p-3 text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">rubric-lens</h3>
                <span className="bg-green-600/30 text-green-400 text-xs px-2 py-1 rounded-full">✅ Working</span>
              </div>
              <p className="text-gray-300 mt-1">Evaluation API to assess tasks and provide meaningful feedback</p>
            </div>
          </div>
          
          {/* Project 3 */}
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-md p-3 text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
              </svg>
            </div>
            <div className="flex-1">
              <div className="flex justify-between items-center">
                <h3 className="font-bold text-lg">certifyln</h3>
                <span className="bg-purple-600/30 text-purple-400 text-xs px-2 py-1 rounded-full">🧪 Prototype</span>
              </div>
              <p className="text-gray-300 mt-1">Certification system based on real skill verification</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="relative my-28 px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-2xl p-8 md:p-12 border border-white/10 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Level Up Your Skills?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Join our community of learners and start your personalized learning journey today.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/signup" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg font-medium text-lg hover:from-purple-700 hover:to-indigo-700 transition-colors shadow-lg">
              Get Started
            </Link>
            <a href="https://github.com/Openln-git/Openln-Engine" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-medium text-lg hover:bg-white/20 transition-colors">
              Contribute on GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div ref={footerRef} className='relative bg-gray-200/20 p-8 mt-auto'>
        <div className='max-w-6xl mx-auto'>
          <div className='flex flex-col md:flex-row justify-between items-center mb-8'>
            <div className='mb-6 md:mb-0'>
              <img src="/logo1.png" alt="Open In" className='h-10' />
              <p className='text-gray-400 mt-2'>Empowering learning through open, intelligent technology.</p>
            </div>
            <div className='flex gap-8'>
              <div>
                <h3 className='font-semibold mb-3'>Connect</h3>
                <ul className='space-y-2'>
                  <li><a href="https://github.com/Openln-git" className='text-gray-400 hover:text-white transition-colors'>GitHub Organization</a></li>
                  <li><a href="https://github.com/Openln-git/Openln-Engine" className='text-gray-400 hover:text-white transition-colors'>Repository</a></li>
                  <li><a href="https://openln.pages.dev" className='text-gray-400 hover:text-white transition-colors'>Homepage</a></li>
                </ul>
              </div>
              <div>
                <h3 className='font-semibold mb-3'>Resources</h3>
                <ul className='space-y-2'>
                  <li><a href="https://github.com/Openln-git/Openln-Engine/blob/main/CONTRIBUTING.md" className='text-gray-400 hover:text-white transition-colors'>Contribute</a></li>
                  <li><a href="#" className='text-gray-400 hover:text-white transition-colors'>Documentation</a></li>
                  <li><a href="#" className='text-gray-400 hover:text-white transition-colors'>Blog</a></li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className='border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center'>
            <p className='text-gray-500 mb-4 md:mb-0'>© 2025 Openln. Open source project.</p>
            <div className='flex gap-6'>
              {/* Social media links */}
              {/* <a href="#" className='text-gray-400 hover:text-white'>
                <span className='sr-only'>Instagram</span>
                <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'/>
                </svg>
              </a> */}
              <a href="https://www.linkedin.com/company/open-ln" className='text-gray-400 hover:text-white'>
                <span className='sr-only'>LinkedIn</span>
                <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z'/>
                </svg>
              </a>
              <a href="https://github.com/Openln-git" className='text-gray-400 hover:text-white'>
                <span className='sr-only'>GitHub</span>
                <svg className='h-6 w-6' fill='currentColor' viewBox='0 0 24 24'>
                  <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z'/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landing