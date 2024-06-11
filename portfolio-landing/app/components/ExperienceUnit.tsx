import React from 'react'

interface ExperienceUnitProps {
    name: string;
    place: string;
    date: Date;
    description: string;
}

const ExperienceUnit: React.FC<ExperienceUnitProps> = ({name, place, date, description}) => {
  return (
    <div className='card'>
        <div className='card-body'>
            <h2 className='card-title'>{name}</h2>
            <h4>{place}</h4>
            <h5>{date.toLocaleDateString()}</h5>
            <p>{description}</p>
        </div>
    </div>
  )
}

export default ExperienceUnit