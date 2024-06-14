import React from 'react'
import CourseItem from './CourseItem';
import { Courses } from '../interfaces/Courses';

interface CoursesPageProps {
    courses: Courses[];
    title: string;
}

const CoursesPage: React.FC<CoursesPageProps> = ({ courses, title }) => {
    return (
        <div id='courses' className=''>
            <div className='w-fit p-2  text-4xl font-mono italic text-neutral bg-neutral-content bg-opacity-80 rounded-box m-auto mb-2'>{title}</div>
            <div className='stats w-fit stats-vertical lg:stats-horizontal shadow'>
                {courses.map(course => (
                    <CourseItem key={course.id} course={course}></CourseItem>
                ))}
            </div>
        </div>
    )
}

export default CoursesPage
