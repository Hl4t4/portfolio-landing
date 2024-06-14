import { Landing } from './Landing';
import { Titles } from './Titles';
import { Experiencies } from './Experiencies';
import { Projects } from './Projects';
import { Education } from './Education';
import { Languages } from './Languages';
import { Courses } from './Courses';
import { Contact } from './Contact';
import { ContactLocale } from './ContactLocale';


export interface Locale {
    landing: Landing;
    titles: Titles;
    contact_locale: ContactLocale;
    experiences: Experiencies[];
    projects: Projects[];
    education: Education[];
    languages: Languages[];
    courses: Courses[];
    contact: Contact[];
}