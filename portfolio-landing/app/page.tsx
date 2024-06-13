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
  const root: Root = getContentData()
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
        <HeroPage landing={landing} style={{ backgroundImage: 'url("/hero-background.png")' }}></HeroPage>
      </main>
      <section>
        <ContactPage contacts={contacts} style={{ backgroundImage: 'url("/contact-background.jpeg")' }}></ContactPage>
      </section>
      <section>
        <EducationPlusExperiencePage educations={education} experiences={experiences} education_style={{ backgroundImage: 'url("/experiences-background.jpeg")' }} experiences_style={{ backgroundImage: 'url("/education-background.jpeg")' }}></EducationPlusExperiencePage>
      </section>
      <section>
        <ProjectsPage projects={projects} style={{ backgroundImage: 'url("/projects-background.jpeg")' }}></ProjectsPage>
      </section>
      <section>
        <LanguagesPlusCoursesPage languages={languages} courses={courses} style={{ backgroundImage: 'url("/languages-courses-background.jpeg")' }}></LanguagesPlusCoursesPage>
      </section>
    </div>
  );
};
