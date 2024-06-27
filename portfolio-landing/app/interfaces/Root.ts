import { Locale } from './Locale';

export interface Root {
  es: Locale;
  en: Locale;
  [key: string]: Locale;
}