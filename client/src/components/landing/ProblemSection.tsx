import React from 'react';

const ProblemSection = () => {
    return (
        <div className="relative my-28 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">The Problem We're Solving</h2>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">After talking to 1000+ students, professionals, and startup founders, we discovered key problems in self-learning:</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                        <div className="text-purple-400 text-2xl mb-4">📚</div>
                        <h3 className="font-semibold text-xl mb-2">Information Overload</h3>
                        <p className="text-gray-300">Over 2000+ resources online, but no direction on what suits your specific learning style and goals.</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                        <div className="text-purple-400 text-2xl mb-4">🧭</div>
                        <h3 className="font-semibold text-xl mb-2">No Clear Roadmaps</h3>
                        <p className="text-gray-300">Students have goals, but don't know the exact steps needed to reach them effectively.</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                        <div className="text-purple-400 text-2xl mb-4">🛠️</div>
                        <h3 className="font-semibold text-xl mb-2">Finding the Right Resources</h3>
                        <p className="text-gray-300">Even professionals and founders struggle to identify which learning materials will actually help them succeed.</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-colors">
                        <div className="text-purple-400 text-2xl mb-4">💤</div>
                        <h3 className="font-semibold text-xl mb-2">Procrastination & Giving Up</h3>
                        <p className="text-gray-300">Over 50% of learners abandon courses mid-way due to lack of structure, accountability, and motivation.</p>
                    </div>
                </div>

                <div className="text-center mt-12 bg-gradient-to-r from-purple-900/30 to-indigo-900/30 p-6 rounded-xl backdrop-blur-md border border-purple-500/20 shadow-lg">
                    <p className="text-xl text-gray-200">
                        Openln solves this by giving you a personalized roadmap, broken into daily tasks and challenges that help you level up with consistency — no more confusion, no more wasted time.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProblemSection;
