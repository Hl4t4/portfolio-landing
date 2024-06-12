import { Landing } from './Landing';
import { Experiencies } from './Experiencies';
import { Projects } from './Projects';
import { Education } from './Education';
import { Languages } from './Languages';
import { Courses } from './Courses';
import { Contact } from './Contact';

export interface Locale {
    landing: Landing;
    experiences: Experiencies[];
    projects: Projects[];
    education: Education[];
    languages: Languages[];
    courses: Courses[];
    contact: Contact[];
}