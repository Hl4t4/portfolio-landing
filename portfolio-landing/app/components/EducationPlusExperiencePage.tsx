import React, { CSSProperties } from 'react'
import EducationPage from './EducationPage';
import ExperiencesPage from './ExperiencesPage';
import { Education } from '../interfaces/Education';
import { Experiencies } from '../interfaces/Experiencies';

interface EducationPlusExperienceProps {
    educations: Education[];
    education_title: string;
    experiences: Experiencies[];
    experiencies_title: string;
    education_style: CSSProperties;
    experiences_style: CSSProperties;
}

const EducationPlusExperiencePage: React.FC<EducationPlusExperienceProps> = ({ educations, experiences, education_title, experiencies_title, education_style, experiences_style }) => {
    return (
        <div className='grid grid-flow-row grid-cols-1 lg:grid-cols-2'>
            <div className='col-span-1'>
                <EducationPage educations={educations} title = {education_title} style = {education_style}></EducationPage>
            </div>
            <div className='col-span-1'>
                <ExperiencesPage experiences={experiences} title = {experiencies_title} style = {experiences_style}></ExperiencesPage>
            </div>
        </div>
    )
}


export default EducationPlusExperiencePage
