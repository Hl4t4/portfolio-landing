import React from 'react'
import { Projects } from '../interfaces/Projects';

interface ProjectItemProps {
    project: Projects;
    length: number;
}

const ProjectItem: React.FC<ProjectItemProps> = ({ project, length }) => {
    return (
        <div id={'project-'+project.id} className="carousel-item flex relative snap-center w-full">
            <div className='card flex h-fit w-full max-h-1/2 bg-neutral bg-opacity-50 shadow-xl m-3'>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 z-50">
                    <a href={"#project-" + (project.id === 1 ? length : project.id-1)} className="btn btn-circle z-50">❮</a> 
                    <a href={"#project-" + (project.id === length ? 1 : project.id+1)} className="btn btn-circle z-50">❯</a>
                </div>
                <div className='card-body flex justify-center items-center text-center'>
                    <div className='card-title'>{project.name} ({project.year})</div>
                    <div className="carousel relative w-full rounded-box snap-x scroll-smooth overflow-hidden">
                        {project.screenshots.map((screenshot, index) => (
                            <div key={'project-' + project.id + '-screenshot-' + (index + 1 )} id={'project-' + project.id + '-screenshot-' + (index + 1 )} className="carousel-item flex relative justify-center snap-center max-h-[550px] w-full rounded mx-0 -z-1">
                                <figure><img src={"/img/screenshots/" + project.folder + "/" + screenshot} className="max-w-full py-5 -z-1 " /></figure>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-center w-full py-2 gap-2">
                        {project.screenshots.map((screenshot, index) => (
                            <a key={'project-' + project.id + '-screenshot-number-' + (index + 1)} href={'#project-' + project.id + '-screenshot-' + (index + 1)} className="btn btn-xs">{index + 1}</a> 
                        ))}
                    </div>
                    <div className="card-actions justify-center">
                        {project.tags.map((tag, index) => (
                            <button key={project.folder + '-' + tag + '-' + index} className='btn btn-primary max-w-fit'>{tag}</button>
                        ))}
                    </div>
                    <div className='w-4/5 lg:w-3/5'>{project.description}</div>
                    <div>
                        <a href={project.github}><button className='btn btn-secondary max-w-fit mr-3'>Repositorio del Proyecto</button></a>
                        <a href={project.url}><button className='btn btn-secondary max-w-fit ml-3'>Proyecto en Vivo</button></a>
                    </div>
                    <div></div>    
                </div>
            </div>
        </div> 
    )
}

export default ProjectItem
