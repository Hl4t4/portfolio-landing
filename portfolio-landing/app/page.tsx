import { getContentData } from './lib/fetchContent';
import HeroPage from './components/HeroPage';
import ContactPage from './components/ContactPage';
import EducationPlusExperiencePage from './components/EducationPlusExperiencePage';
import ProjectsPage from './components/ProjectsPage';
import LanguagesPlusCoursesPage from './components/LanguagesPlusCoursesPage';
import { Landing } from './interfaces/Landing';
import { Experiencies } from './interfaces/Experiencies';
import { Projects } from './interfaces/Projects';
import { Education } from './interfaces/Education';
import { Languages } from './interfaces/Languages';
import { Courses } from './interfaces/Courses';
import { Contact } from './interfaces/Contact';
import { Locale } from './interfaces/Locale';
import { Root } from './interfaces/Root';

export default function Home() {
  const root: Root = getContentData('data.json')
  const locale: Locale = root.es
  const landing: Landing = locale.landing
  const contacts: Contact[] = locale.contact
  const education: Education[] = locale.education
  const experiences: Experiencies[] = locale.experiences
  const projects: Projects[] = locale.projects
  const languages: Languages[] = locale.languages
  const courses: Courses[] = locale.courses
  
  return (
    <div>
      <main>
        <HeroPage landing={landing} style={{ backgroundImage: 'url("/img/backgrounds/hero-background.webp")' }}></HeroPage>
      </main>
      <section>
        <ContactPage contacts={contacts} style={{ backgroundImage: 'url("/img/backgrounds/contact-background.webp")' }}></ContactPage>
      </section>
      <section>
        <EducationPlusExperiencePage educations={education} experiences={experiences} education_style={{ backgroundImage: 'url("/img/backgrounds/experiences-background.webp")' }} experiences_style={{ backgroundImage: 'url("/img/backgrounds/education-background.webp")' }}></EducationPlusExperiencePage>
      </section>
      <section>
        <ProjectsPage projects={projects} style={{ backgroundImage: 'url("/img/backgrounds/projects-background.webp")' }}></ProjectsPage>
      </section>
      <section>
        <LanguagesPlusCoursesPage languages={languages} courses={courses} style={{ backgroundImage: 'url("/img/backgrounds/languages-courses-background.webp")' }}></LanguagesPlusCoursesPage>
      </section>
    </div>
  );
};
