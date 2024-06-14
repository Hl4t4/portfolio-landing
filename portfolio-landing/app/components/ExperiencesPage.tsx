import React, { CSSProperties } from 'react'
import ExperienceItem from './ExperienceItem';
import { Experiencies } from '../interfaces/Experiencies';

interface ExperiencesPageProps {
    experiences: Experiencies[];
    style: CSSProperties;
}

const ExperiencesPage: React.FC<ExperiencesPageProps> = ({ experiences, style }) => {
    return (
        <div id='experiences' className='relative min-h-full'>
            <div className="absolute inset-0 bg-cover bg-no-repeat pt-10 blur-sm" style={style}></div>
            <div className="relative px-5 py-5">
                <h1 className='w-full text-4xl text-center font-mono italic text-neutral'>Experiencia</h1>
                {experiences.map(experience => (
                    <ExperienceItem key={experience.id} experience={experience}></ExperienceItem>
                ))}
            </div>
        </div>
    )
}

export default ExperiencesPage
