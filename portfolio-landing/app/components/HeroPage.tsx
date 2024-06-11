import React from 'react'
import { Landing } from '../interfaces/Landing';

interface HeroPageProps {
    landing: Landing;
}

const HeroPage: React.FC<HeroPageProps> = ({ landing }) => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center p-4">
      <div className="shadow-md rounded p-6 max-w-lg w-full">
        <h1 className="text-3xl font-bold mb-4">Resumen</h1>
        <p className="">{landing.resume}</p>
        <h2 className="text-2xl font-semibold mb-4">Acerca de Mi</h2>
        <p className="mb-4">{landing.about}</p>
        
      </div>
    </div>
  )
}

export default HeroPage
