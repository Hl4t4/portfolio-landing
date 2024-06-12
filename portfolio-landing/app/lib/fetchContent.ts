import fs from 'fs';
import path from 'path';
import { Locale } from '../interfaces/Locale';

interface Root {
    es: Locale;
    en: Locale;
  }
  
  export const getContentData = (): Root => {
    const filePath = path.join(process.cwd(), 'data', 'data.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(jsonData) as Root;
  };