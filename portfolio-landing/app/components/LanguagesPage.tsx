import React from 'react'
import LanguageItem from './LanguageItem';
import { Languages } from '../interfaces/Languages';

interface LanguagesPageProps {
    languages: Languages[];
}

const LanguagesPage: React.FC<LanguagesPageProps> = ({ languages }) => {
    return (
        <div>
            <h1 className='w-full text-4xl text-center font-mono italic text-neutral'>Lenguajes</h1>
            {languages.map(language => (
                <LanguageItem key={language.id} language={language}></LanguageItem>
            ))}
        </div>
    )
}

export default LanguagesPage
