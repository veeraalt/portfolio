interface ProjectYear {
  start: string;
  end?: string;
}

export interface Project {
  id: number;
  years: Array<ProjectYear>;
  title: string;
  company: string;
  website: string;
  details: string;
  keywords: Array<string>;
}
