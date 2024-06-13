import React from 'react'
import CourseItem from './CourseItem';
import { Courses } from '../interfaces/Courses';

interface CoursesPageProps {
    courses: Courses[];
}

const CoursesPage: React.FC<CoursesPageProps> = ({ courses }) => {
    return (
        <div>
            <h1 className='w-full text-4xl text-center font-mono italic text-neutral'>Cursos</h1>
            {courses.map(course => (
                <CourseItem key={course.id} course={course}></CourseItem>
            ))}
        </div>
    )
}

export default CoursesPage
