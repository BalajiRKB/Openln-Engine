import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger if not already registered (should be done in main but safe here)
gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = () => {
    const featuresRef = useRef(null);

    useEffect(() => {
        // Ideally animation should be triggered on scroll
        // But for now, we just ensure it's rendered correctly
    }, []);

    return (
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
                className="relative grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl w-full mx-auto px-4"
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
    );
};

export default FeaturesSection;
