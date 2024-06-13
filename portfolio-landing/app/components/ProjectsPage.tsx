import React, { CSSProperties } from 'react'
import ProjectItem from './ProjectItem';
import { Projects } from '../interfaces/Projects';

interface ProjectsPageProps {
    projects: Projects[];
    style: CSSProperties;
}


const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects, style }) => {
    return (
        <div className='relative min-h-full'>
            <div className="absolute inset-0 bg-cover bg-no-repeat pt-10 blur-sm" style={style}></div>
            <div className="relative px-5 py-5">
                <h1 className='w-full text-4xl text-center font-mono italic text-neutral'>Proyectos</h1>
                <div className="carousel w-full">
                    <div className="flex justify-center w-full py-2 gap-2">
                        <a href="#item1" className="carousel-item btn btn-xs">1</a> 
                        <a href="#item2" className="carousel-item btn btn-xs">2</a> 
                        <a href="#item3" className="carousel-item btn btn-xs">3</a> 
                        <a href="#item4" className="carousel-item btn btn-xs">4</a>
                    </div>
                </div>
                <div className="carousel w-full">
                    <div id="item1" className="carousel-item w-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg" className="w-full" />
                    </div> 
                    <div id="item2" className="carousel-item w-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg" className="w-full" />
                    </div> 
                    <div id="item3" className="carousel-item w-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg" className="w-full" />
                    </div> 
                    <div id="item4" className="carousel-item w-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg" className="w-full" />
                    </div>
                </div> 
                
                {projects.map(project => (
                    <ProjectItem key={project.id} project={project}></ProjectItem>
                ))}
            </div>
        </div>
    )
}

export default ProjectsPage
