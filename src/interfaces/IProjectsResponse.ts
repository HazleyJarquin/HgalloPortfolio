export interface IProjectsResponse {
  id: number;
  title: string;
  description: string;
  image: string;
  url: string;
  tecnologies: Tecnologies[];
}

interface Tecnologies {
  id: number;
  name: string;
}
