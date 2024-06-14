'use client'
import React, { CSSProperties, useState } from 'react'
import ProjectItem from './ProjectItem';
import ProjectThumbnail from './ProjectThumbnail';
import { Projects } from '../interfaces/Projects';

interface ProjectsPageProps {
    projects: Projects[];
    title: string;
    style: CSSProperties;
}

const ProjectsPage: React.FC<ProjectsPageProps> = ({ projects, title, style }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div id='projects' className='relative overflow-hidden'>
            <div className="absolute inset-0 bg-cover bg-no-repeat pt-10 blur-sm" style={style}></div>
            <div className="relative px-5 py-5">
                <div className='w-fit p-2  text-4xl font-mono italic text-neutral-content bg-neutral bg-opacity-70 rounded-box m-auto'>{title}</div>
                <div className="carousel rounded-box snap-x scroll-smooth">
                    <div className="min-w-max inline-flex flex-nowrap justify-center py-5 overflow-hidden md:[mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
                        <ul className={"flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"+ (isHovered ? ' pause' : '')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                            {projects.map(project => (
                                <ProjectThumbnail key = {"thumbnail-" + project.id} project={project}></ProjectThumbnail>
                            ))}
                        </ul>
                        <ul className={"flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll"+ (isHovered ? ' pause' : '')} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} aria-hidden="true">
                            {projects.map(project => (
                                <ProjectThumbnail key = {"thumbnail-" + project.id} project={project}></ProjectThumbnail>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="carousel max-h-[1080px] overflow-y-hidden flex w-full rounded-box snap-x scroll-smooth">
                    {projects.map(project => (
                        <ProjectItem key={'project-' + project.id} project={project} length={projects.length}></ProjectItem>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectsPage
