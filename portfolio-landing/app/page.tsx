import { GetStaticProps } from 'next';
import Image from "next/image";
import Link from "next/link";
import fs from 'fs';
import path from 'path';
import HeroPage from './components/HeroPage';
import { Landing } from './interfaces/Landing';

interface Experiencies {
  id: number;
  job: string;
  company: string;
  location: string;
  date: string;
  description: string;
}

interface Projects {
  id: number;
  name: string;
  github: string;
  url: string;
  screenshots: string[];
  year: number;
  description: string;
  tags: string[];
}

interface Education {
  id: number;
  institution: string;
  title: string;
  location: string;
  graduation_date: number;
  description: string;
}

interface Languages {
  id: number;
  language: string;
  level: string;
  certification: string;
}

interface Courses {
  id: number;
  name: string;
  institution: string;
  year: number;
}

interface Contact {
  id: number;
  type: string;
  img: string;
  account: string;
  url: string;
}

interface Locale {
  landing: Landing;
  experiences: Experiencies;
  projects: Projects;
  education: Education;
  languages: Languages;
  courses: Courses;
  contact: Contact;
}

interface Root {
  es: Locale;
  en: Locale;
}

export const getContentData = (): Root => {
  const filePath = path.join(process.cwd(), 'data', 'data.json');
  const jsonData = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(jsonData) as Root;
};

export default function Home() {
  const root: Root = getContentData()
  const landing: Landing = root.es.landing

  return (
    <main>
      <HeroPage landing={landing}></HeroPage>
      <h1>
        Hello World
      </h1>
      <Link href="/projects">Projects</Link>
    </main>
  );
};
