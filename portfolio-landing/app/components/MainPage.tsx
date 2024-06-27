'use client'
import React, { useContext } from 'react'
import HeroPage from './HeroPage';
import ContactPage from './ContactPage';
import EducationPlusExperiencePage from './EducationPlusExperiencePage';
import ProjectsPage from './ProjectsPage';
import LanguagesPlusCoursesPage from './LanguagesPlusCoursesPage';
import { LocaleContext } from './context';
import { Root } from '../interfaces/Root';
import { Locale } from '../interfaces/Locale';
import { Landing } from '../interfaces/Landing';
import { Contact } from '../interfaces/Contact';
import { ContactLocale } from '../interfaces/ContactLocale';
import { Courses } from '../interfaces/Courses';
import { Education } from '../interfaces/Education';
import { Experiencies } from '../interfaces/Experiencies';
import { Languages } from '../interfaces/Languages';
import { Projects } from '../interfaces/Projects';
import { Titles } from '../interfaces/Titles';


interface MainPageProps {
    root: Root;
}

const MainPage: React.FC<MainPageProps> = ({ root }) => {
  const {locale, setLocale} = useContext(LocaleContext)
  const selected_locale: Locale = root[locale]
  const landing: Landing = selected_locale.landing
  const contact_locale: ContactLocale = selected_locale.contact_locale
  const titles: Titles = selected_locale.titles
  const contacts: Contact[] = selected_locale.contact
  const education: Education[] = selected_locale.education
  const experiences: Experiencies[] = selected_locale.experiences
  const projects: Projects[] = selected_locale.projects
  const languages: Languages[] = selected_locale.languages
  const courses: Courses[] = selected_locale.courses

  return (
    <div>
      <main>
        <HeroPage landing={landing} style={{ backgroundImage: 'url("/img/backgrounds/hero-background.webp")' }}></HeroPage>
      </main>
      <section>
        <ContactPage contacts={contacts} contact_locale={contact_locale} style={{ backgroundImage: 'url("/img/backgrounds/contact-background.webp")' }}></ContactPage>
      </section>
      <section>
        <EducationPlusExperiencePage educations={education} experiences={experiences} education_title = {titles.education} experiencies_title={titles.experiences} education_style={{ backgroundImage: 'url("/img/backgrounds/experiences-background.webp")' }} experiences_style={{ backgroundImage: 'url("/img/backgrounds/education-background.webp")' }}></EducationPlusExperiencePage>
      </section>
      <section>
        <ProjectsPage projects={projects} title= {titles.projects} style={{ backgroundImage: 'url("/img/backgrounds/projects-background.webp")' }}></ProjectsPage>
      </section>
      <section>
        <LanguagesPlusCoursesPage languages={languages} courses={courses} languages_title = {titles.languages} courses_title = {titles.courses} style={{ backgroundImage: 'url("/img/backgrounds/languages-courses-background.webp")' }}></LanguagesPlusCoursesPage>
      </section>
    </div>
  )
}

export default MainPage
