import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

const HeroSection = () => {
    const logoRef = useRef(null);
    const taglineRef = useRef(null);
    const headingRef = useRef(null);
    const loginRef = useRef(null);
    const signupRef = useRef(null);

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

    }, []);

    return (
        <>
            {/* Background image */}
            <div className='absolute inset-0 flex justify-center items-center pointer-events-none'>
                <img src="/bg-ell.png" className='bg-image h-150 blur-3xl opacity-0 w-300' alt="background" />
            </div>

            <div className='bg-white/12 h-full pb-12 backdrop-blur-lg'>
                {/* Login and Signup buttons */}
                <div className='relative flex justify-end p-5'>
                    <div className='font-bold text-2xl flex gap-5'>
                        <Link to="/login" ref={loginRef} className='cursor-pointer hover:scale-105 transition-transform'>Login</Link>
                        <Link to="/signup" ref={signupRef} className='cursor-pointer hover:scale-105 transition-transform'>Signup</Link>
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
        </>
    );
};

export default HeroSection;
