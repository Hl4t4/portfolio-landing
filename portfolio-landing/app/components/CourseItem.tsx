import React from 'react'
import { Courses } from '../interfaces/Courses';

interface CourseItemProps {
    course: Courses;
}

const CourseItem: React.FC<CourseItemProps> = ({ course }) => {
    return (
        <div className='stat'>
            <div className='stat-figure'>
                <div className='rounded-full'>
                    <figure><img src={"/img/courses/" + "/course-"+course.id+".png"} className="max-w-32" /></figure>
                </div>
            </div>
            <h2 className='stat-title text-3xl'>{course.institution}</h2>
            <h3 className='stat-value text-primary text-wrap line-clamp-5'>{course.name}</h3>
            <h4 className='stat-desc text-2xl text-wrap line-clamp-5'><a href={course.url}>{course.description}</a></h4>
        </div>
    )
}

export default CourseItem
