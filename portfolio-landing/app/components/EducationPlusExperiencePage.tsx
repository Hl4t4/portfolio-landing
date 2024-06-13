import React, { CSSProperties } from 'react'
import EducationPage from './EducationPage';
import ExperiencesPage from './ExperiencesPage';
import { Education } from '../interfaces/Education';
import { Experiencies } from '../interfaces/Experiencies';

interface EducationPlusExperienceProps {
    educations: Education[];
    experiences: Experiencies[];
    education_style: CSSProperties;
    experiences_style: CSSProperties;
}

const EducationPlusExperiencePage: React.FC<EducationPlusExperienceProps> = ({ educations, experiences, education_style, experiences_style }) => {
    return (
        <div className='grid grid-flow-row grid-cols-1 lg:grid-cols-2'>
            <div className='col-span-1'>
                <EducationPage educations={educations} style = {education_style}></EducationPage>
            </div>
            <div className='col-span-1'>
                <ExperiencesPage experiences={experiences} style = {experiences_style}></ExperiencesPage>
            </div>
        </div>
    )
}


export default EducationPlusExperiencePage
