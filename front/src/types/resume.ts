import { WebTechno } from "./projectTypes"

//Define ProExperiences interface
export interface ProExperiences{
    title: string
    company: string,
    city: string,
    description: string,
    period: {
        start: Date|string,
        end: Date|string
    },
    technologiesUsed: WebTechno[]
}

export interface Training {
    degree: string,
    university: string,
    field: string,
    city: string,
    description: string,
    period: {
        start: Date | string,
        end: Date | string
    }
}


