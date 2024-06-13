import React from 'react'
import { Education } from '../interfaces/Education';

interface EducationItemProps {
    education: Education;
    index: number;
    length: number;
}

const EducationItem: React.FC<EducationItemProps> = ({ education, index, length }) => {
    return (
        <li className='text-neutral'>
            {index > 0 && <hr/>}
            <div className="timeline-middle">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
            </div>
            <div className={index % 2 === 0 ? "timeline-start md:text-end mb-10" : "timeline-end mb-10"}>
                <time className="font-mono italic text-neutral">{education.graduation_date}</time>
                <div className="font-black bold">{education.title}</div>
                <div className="font-semibold italic">{education.institution}, {education.location}</div>
                <div>{education.description}</div>
            </div>
            {index < length -1 && <hr/>}
        </li>
    )
}

export default EducationItem
