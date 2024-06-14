import React from 'react'
import Image from 'next/image'
import { Languages } from '../interfaces/Languages';

interface LanguageItemProps {
    language: Languages;
}

const LanguageItem: React.FC<LanguageItemProps> = ({ language }) => {
    return (
        <div className='stat'>
            <div className='stat-figure'>
                <div className='rounded-full'>
                    <figure><Image src={"/img/flags/flag-" +language.id+".webp"} alt={language.language} className="max-w-32" /></figure>
                </div>
            </div>
            <h2 className='stat-title text-3xl'>{language.language}</h2>
            <h3 className='stat-value text-primary '>{language.level}</h3>
            <h4 className='stat-desc text-2xl'><a href={language.certification_url}>{language.certification}</a></h4>
        </div>
    )
}

export default LanguageItem
