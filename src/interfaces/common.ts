export interface Project {
  id: number;
  years: ProjectYear[];
  name?: string;
  title?: string;
  company?: string;
  website: string;
  details: string;
  keywords: string[];
  type: "work" | "other";
}

interface ProjectYear {
  start: string;
  end?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface NavigationLink {
  to: string;
  text: string;
}
