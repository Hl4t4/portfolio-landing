import React from 'react'
import { Experiencies } from '../interfaces/Experiencies';

interface ExperienceItemProps {
    experience: Experiencies;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({experience}) => {

  experience.company
  experience.date
  experience.description
  experience.job
  experience.location
  return (
    <div className='card bg-neutral  text-neutral-content shadow-2xl w-fit my-5'>
        <div className='card-body p-4 leading-tight'>
            <div className='card-title'>{experience.job}</div>
            <div className='font-black bold'>{experience.company}, {experience.location}</div>
            <div className='font-semibold italic'>{experience.date}</div>
            <div>{experience.description}</div>
        </div>
    </div>
  )
}

export default ExperienceItem