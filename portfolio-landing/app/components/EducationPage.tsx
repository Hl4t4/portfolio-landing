import React, { CSSProperties } from 'react'
import { Education } from '../interfaces/Education';
import EducationItem from './EducationItem';

interface EducationPageProps {
    educations: Education[];
    style: CSSProperties;
}

const EducationPage: React.FC<EducationPageProps> = ({ educations, style }) => {
    return (
        <div id='education' className='relative min-h-full'>
            <div className="absolute inset-0 bg-cover bg-no-repeat pt-10 blur-sm" style={style}></div>
            <div className='relative px-5 py-5'>
                <h1 className='w-full text-4xl text-center font-mono italic text-neutral'>Educación</h1>
                <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                    {educations.map((education, index) => (
                        <React.Fragment key={education.id}>
                            <EducationItem education={education} index={index} length={educations.length}></EducationItem>
                        </React.Fragment>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default EducationPage
