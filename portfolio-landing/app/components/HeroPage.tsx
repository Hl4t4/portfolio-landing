import React, { CSSProperties } from 'react'
import Image from 'next/image'
import { Landing } from '../interfaces/Landing';

interface HeroPageProps {
    landing: Landing;
    style: CSSProperties;
}

const HeroPage: React.FC<HeroPageProps> = ({ landing, style }) => {
  return (
    <div id='home' className='relative w-100'>
      <div className='card'>
        <div className="absolute inset-0 bg-cover bg-no-repeat pt-10 blur-md" style={style}></div>
        <div className="card-body
        grid grid-dense grid-rows-[max-content_1fr]
        grid-cols-1 lg:grid-cols-12 
        gap-1 justify-center items-center p-4">
          <div className='card-title max-h-fit
          row-span-1 row-start-1 
          col-span-1 col-start-1 lg:col-span-8 lg:col-start-3
          self-center '>
            <h1 className='w-full text-4xl lg:text-8xl text-center '>JOSÉ LATAPIATT</h1>
          </div>
          <div className='group-hover h-auto
          row-span-1 row-start-2 
          col-span-1 col-start-1 lg:col-span-4 lg:col-start-3'>
            <figure className='group relative w-60 h-70 mx-auto'>
              <Image src="/img/self.webp" alt="Profile" className="w-60 h-70 rounded-full object-cover transition-opacity duration-300 ease-in-out group-hover:opacity-0"/>
              <Image src="/img/wojak.webp" alt="Profile" className="h-full rounded-full object-cover absolute top-0 left-0 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"/>
              </figure>
          </div>
          <div className="shadow-md rounded p-6 max-w-lg w-full h-full  
          row-span-1 row-start-3 lg:row-start-2
          col-span-1 col-start-1 lg:col-span-4 lg:col-start-7">
            <h1 className="text-3xl font-bold mb-4">{landing.resume_title}</h1>
            <p className="">{landing.resume}</p>
            <br/>
            <h2 className="text-2xl font-semibold mb-4">{landing.about_title}</h2>
            <p className="mb-4">{landing.about}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroPage
