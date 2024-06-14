import React, { CSSProperties } from 'react'
import LanguagesPage from './LanguagesPage';
import CoursesPage from './CoursesPage';
import { Languages } from '../interfaces/Languages';
import { Courses } from '../interfaces/Courses';

interface LanguagesPlusCoursesPageProps {
    languages: Languages[];
    courses: Courses[];
    languages_title: string;
    courses_title: string;
    style: CSSProperties;
}

const LanguagesPlusCoursesPage: React.FC<LanguagesPlusCoursesPageProps> = ({ languages, courses, languages_title, courses_title, style }) => {
    return (
        <div className='flex relative min-h-96'>
            <div className="absolute inset-0 bg-cover bg-no-repeat pt-10 blur-sm" style={style}></div>
            <div className="grid grid-cols-1 grid-rows-2 relative w-full px-5 py-5">
                <div className='mx-auto my-5'>
                    <LanguagesPage languages={languages} title={languages_title}></LanguagesPage>
                </div>
                <div className='mx-auto my-5'>
                    <CoursesPage courses={courses} title={courses_title}></CoursesPage>
                </div>
            </div>
            
        </div>
    )
}


export default LanguagesPlusCoursesPage