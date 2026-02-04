import React from 'react';
import { Link } from 'react-router-dom';

const ProjectsSection = () => {
    return (
        <>
            {/* Projects in Development */}
            <div className="relative my-28 px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">Building an Open Learning Ecosystem</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">Our projects work together to create a seamless learning experience</p>
                </div>

                <div className="max-w-4xl mx-auto space-y-6">
                    {/* Project 1 */}
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-4 hover:bg-white/10 transition-colors">
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
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-4 hover:bg-white/10 transition-colors">
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
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 flex flex-col md:flex-row items-start md:items-center gap-4 hover:bg-white/10 transition-colors">
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
                <div className="max-w-4xl mx-auto bg-gradient-to-r from-purple-900/50 to-indigo-900/50 rounded-2xl p-8 md:p-12 border border-white/10 text-center shadow-2xl">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Level Up Your Skills?</h2>
                    <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">Join our community of learners and start your personalized learning journey today.</p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/signup" className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-lg font-medium text-lg hover:from-purple-700 hover:to-indigo-700 transition-colors shadow-lg hover:shadow-purple-600/20 transform hover:-translate-y-1">
                            Get Started
                        </Link>
                        <a href="https://github.com/Openln-git/Openln-Engine" target="_blank" rel="noopener noreferrer" className="px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg font-medium text-lg hover:bg-white/20 transition-colors transform hover:-translate-y-1">
                            Contribute on GitHub
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjectsSection;
