import { Navbar } from './Navbar';

export interface NavbarRoot {
  es: Navbar;
  en: Navbar;
  [key: string]: Navbar;
}