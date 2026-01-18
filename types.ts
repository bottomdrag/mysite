
export interface Company {
  name: string;
  logo: string;
  url: string;
  color: string;
}

export interface Designation {
  id: string;
  title: string;
  company: Company;
  period: string;
  description: string;
  skills: string[];
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
