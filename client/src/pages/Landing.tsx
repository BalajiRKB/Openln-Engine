import React from 'react'
import HeroSection from '../components/landing/HeroSection'
import ProblemSection from '../components/landing/ProblemSection'
import FeaturesSection from '../components/landing/FeaturesSection'
import GoalExamplesSection from '../components/landing/GoalExamplesSection'
import ProjectsSection from '../components/landing/ProjectsSection'
import Footer from '../components/landing/Footer'

const Landing = () => {
  return (
    <div className='flex flex-col bg-black min-h-screen text-white'>
      <HeroSection />

      {/* Problem We're Solving Section */}
      <ProblemSection />

      {/* Features section */}
      <FeaturesSection />

      {/* Goal Examples Section */}
      <GoalExamplesSection />

      {/* Projects in Development */}
      <ProjectsSection />

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Landing