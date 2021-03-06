/**
 * Resume interface based on https://jsonresume.org/schema/
 */
export interface Resume {
    basics: Basics;
    work: Work[];
    volunteer: Volunteer[];
    education: Education[];
    awards: Award[];
    publications: Publication[];
    skills: Skill[];
    languages: Language[];
    interests: Interest[];
    references: Reference[];
}

export interface Basics {
    name: string;
    label: string;
    picture: string;
    email: string;
    phone: string;
    website: string;
    summary: string;
    location: Location;
    profiles: Profile[];
}

export interface Location {
    address: string;
    postalCode: string;
    city: string;
    countryCode: string;
    region: string;
}

export interface Profile {
    network: string;
    username: string;
    url: string;
}

export interface Work {
    company: string;
    position: string;
    website: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
}

export interface Volunteer {
    organization: string;
    position: string;
    website: string;
    startDate: string;
    endDate: string;
    summary: string;
    highlights: string[];
}

export interface Education {
    institution: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate: string;
    gpa: string;
    courses: string[];
}

export interface Award {
    title: string;
    date: string;
    awarder: string;
    summary: string;
}

export interface Publication {
    name: string;
    publisher: string;
    releaseDate: string;
    website: string;
    summary: string;
}

export interface Skill {
    name: string;
    level: string;
    keywords: string[];
}

export interface Language {
    name: string;
    level: string;
}

export interface Interest {
    name: string;
    keywords: string[];
}

export interface Reference {
    name: string;
    reference: string;
}
