export interface ProjectList {
  work?: Array<Project>;
  other?: Array<Project>;
}

export interface Project {
  id: number;
  years: Array<ProjectYear>;
  name?: string;
  title?: string;
  company?: string;
  website: string;
  details: string;
  keywords: Array<string>;
}

interface ProjectYear {
  start: string;
  end?: string;
}