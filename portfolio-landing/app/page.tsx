import { GetStaticProps } from 'next';
import Image from "next/image";
import Link from "next/link";
import fs from 'fs';
import path from 'path';
import { getContentData } from './lib/fetchContent';
import HeroPage from './components/HeroPage';
import ContactPage from './components/ContactPage';
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
  const projects: Projects[] = locale.projects
  const experiencies: Experiencies[] = locale.experiences
  const languages: Languages[] = locale.languages
  const courses: Courses[] = locale.courses
  

  // contacto, educación, idiomas, experiencia, projectos, cursos
  // education, courses, languages, xp, project, courses

  return (
    <div>
      <main>
        <HeroPage landing={landing} style={{ backgroundImage: 'url("/hero-background.png")'}}></HeroPage>
      </main>
      <section>
        <ContactPage contacts={contacts} style={{ backgroundImage: 'url("/contact-background.jpeg")'}}></ContactPage>
      </section>
    </div>
  );
};
