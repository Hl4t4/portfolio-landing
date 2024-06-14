import React from 'react'
import LanguageItem from './LanguageItem';
import { Languages } from '../interfaces/Languages';

interface LanguagesPageProps {
    languages: Languages[];
    title: string;
}

const LanguagesPage: React.FC<LanguagesPageProps> = ({ languages, title }) => {
    return (
        <div id='languages' className=''>
            <div className='w-fit p-2  text-4xl font-mono italic text-neutral bg-neutral-content bg-opacity-80 rounded-box m-auto mb-2'>{title}</div>
            <div className='stats stats-vertical lg:stats-horizontal shadow'>
                {languages.map(language => (
                    <LanguageItem key={language.id} language={language}></LanguageItem>
                ))}
            </div>
        </div>
    )
}

export default LanguagesPage
