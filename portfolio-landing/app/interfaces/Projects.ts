import { Screenshot } from './Screenshot';

export interface Projects {
    id: number;
    folder: string;
    name: string;
    github: string;
    url: string;
    thumbnail_width: number;
    thumbnail_height: number;
    screenshots: Screenshot[];
    year: number;
    description: string;
    tags: string[];
}