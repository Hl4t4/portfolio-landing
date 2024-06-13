import React, { CSSProperties } from 'react'
import LanguagesPage from './LanguagesPage';
import CoursesPage from './CoursesPage';
import { Languages } from '../interfaces/Languages';
import { Courses } from '../interfaces/Courses';

interface LanguagesPlusCoursesPageProps {
    languages: Languages[];
    courses: Courses[];
    style: CSSProperties;
}

const LanguagesPlusCoursesPage: React.FC<LanguagesPlusCoursesPageProps> = ({ languages, courses, style }) => {
    return (
        <div className='relative min-h-full'>
            <div className="absolute inset-0 bg-cover bg-no-repeat pt-10 blur-sm" style={style}></div>
            <div className="relative px-5 py-5">
                <div>
                    <LanguagesPage languages={languages}></LanguagesPage>
                </div>
                <div>
                    <CoursesPage courses={courses}></CoursesPage>
                </div>
            </div>
            
        </div>
    )
}


export default LanguagesPlusCoursesPage