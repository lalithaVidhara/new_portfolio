import React from 'react'
import HeroSection from './@components/HeroSection'
import { TechStack } from './@components/TechStack';
import ExperienceSection from './@components/Experiance';
import { experiences } from '@/src/constant/data/experienceData';
import ProjectShowcase from './@components/Project';
import { projectData } from '@/src/constant/data/projectData';


const Home = () => {

  return (
    <section className='home-page'>
      <HeroSection />
      <TechStack />
      <ExperienceSection experiences={experiences}/>
      <ProjectShowcase projects={projectData}/>
    </section>
  )
}

export default Home;