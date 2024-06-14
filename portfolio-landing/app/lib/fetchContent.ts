import fs from 'fs';
import path from 'path';
import { Root } from '../interfaces/Root';
import { NavbarRoot } from '../interfaces/NavbarRoot';
import { FooterRoot } from '../interfaces/FooterRoot';
  
export const getContentData = (file_name:string): Root => {
    const filePath = path.join(process.cwd(), 'data', file_name);
    const jsonData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(jsonData) as Root;
};

export const getNavbarContentData = (file_name:string): NavbarRoot => {
    const filePath = path.join(process.cwd(), 'data', file_name);
    const jsonData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(jsonData) as NavbarRoot;
};

export const getFooterContentData = (file_name:string): FooterRoot => {
    const filePath = path.join(process.cwd(), 'data', file_name);
    const jsonData = fs.readFileSync(filePath, 'utf8');
    return JSON.parse(jsonData) as FooterRoot;
};