import React from 'react'
import { Projects } from '../interfaces/Projects';

interface ProjectThumbnailProps {
    project: Projects;
}

const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({ project }) => {
    return (
        <li className='w-fit'>
            <div className="carousel-item  relative snap-center">
                <a href={"#project-" + project.id}>
                    <div className='card max-w-lg h-64 image-full shadow-xl m-3'>
                        <figure><img src={"/img/thumbnails/" + project.folder + "/thumbnail.webp"} className="w-full" /></figure>
                        <div className='card-body items-center text-center'>
                            <div className='card-title'>{project.name}</div>
                            <div className="card-actions justify-center">
                                {project.tags.map((tag, index) => (
                                    <button key={project.folder + '-' + tag + '-' + index} className='btn btn-primary max-w-fit'>{tag}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                </a>
            </div> 
        </li>
    )
}

export default ProjectThumbnail