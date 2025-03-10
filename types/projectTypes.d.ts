// Define WebTechno interface
export interface Techno {
    name: string;
    icon: string;
}

// Define Project interface
export interface Project {
    title: string;
    banner: string;
    description: string;
    technologies: Techno[];
    url: string;
    githubUrl: string;
}
