import React from 'react';

const GoalExamplesSection = () => {
    return (
        <div className="relative my-28 px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Set Your Goal, We'll Show the Way</h2>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto">Whatever your ambition, Openln provides the roadmap to get there.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                {/* Goal Example 1 */}
                <div className="bg-gradient-to-br from-purple-900/40 to-purple-700/20 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all hover:transform hover:scale-105">
                    <div className="text-purple-400 text-2xl mb-3">🧑‍💻</div>
                    <h3 className="font-semibold text-xl mb-2">Land a High-Paying Tech Job</h3>
                    <p className="text-gray-300">Strategic skill building for top-tier tech positions</p>
                </div>

                {/* Goal Example 2 */}
                <div className="bg-gradient-to-br from-purple-900/40 to-purple-700/20 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all hover:transform hover:scale-105">
                    <div className="text-purple-400 text-2xl mb-3">🚀</div>
                    <h3 className="font-semibold text-xl mb-2">Launch Your Startup</h3>
                    <p className="text-gray-300">From idea validation to market entry and scaling</p>
                </div>

                {/* Goal Example 3 */}
                <div className="bg-gradient-to-br from-purple-900/40 to-purple-700/20 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all hover:transform hover:scale-105">
                    <div className="text-purple-400 text-2xl mb-3">🔬</div>
                    <h3 className="font-semibold text-xl mb-2">Master AI/ML</h3>
                    <p className="text-gray-300">Practical AI knowledge from fundamentals to advanced applications</p>
                </div>

                {/* Goal Example 4 */}
                <div className="bg-gradient-to-br from-purple-900/40 to-purple-700/20 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all hover:transform hover:scale-105">
                    <div className="text-purple-400 text-2xl mb-3">📚</div>
                    <h3 className="font-semibold text-xl mb-2">Learn Web Development</h3>
                    <p className="text-gray-300">From frontend basics to full-stack mastery</p>
                </div>
            </div>
        </div>
    );
};

export default GoalExamplesSection;
