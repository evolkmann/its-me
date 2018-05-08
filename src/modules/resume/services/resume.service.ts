import { Component } from '@nestjs/common';
import { Resume } from '../models/resume.model';

@Component()
export class ResumeService {

    constructor() { }

    /**
     * Returns the complete resume object
     */
    static getResume(): Resume {
        return {
            basics: {
                name: 'Enzo Volkmann',
                label: 'Software Developer',
                picture: 'https://avatars2.githubusercontent.com/u/24471188',
                email: 'enzo@enzo-volkmann.de',
                phone: '+49 176 4760 8843',
                website: 'https://enzo-volkmann.de',
                summary: 'I am a self-taught software developer focusing on Web-Sites and Web-Applications,' +
                    ' including the full stack of frontend and backend as well as proper SCM, Build and Deployment' +
                    ' Pipelines. I enjoy writing clean and maintainable code and optimizing the workflow for my fellow' +
                    ' developers and myself. When creating web experiences, I pay attention to structure, semantics,' +
                    ' usability and accessibility. Besides coding, I enjoy reading and learning (mostly about personal' +
                    ' development), spending time with my family and friends, doing sports and developing businesses.',
                location: {
                    address: 'Eichenweg 2',
                    postalCode: '34253',
                    city: 'Lohfelden',
                    countryCode: 'DE',
                    region: 'Hessen'
                },
                profiles: [
                    {
                        network: 'facebook',
                        username: 'enzo.volkmann',
                        url: 'https://www.facebook.com/enzo.volkmann'
                    },
                    {
                        network: 'medium',
                        username: '@enzo_volkmann',
                        url: 'https://medium.com/@enzo_volkmann'
                    },
                    {
                        network: 'github',
                        username: 'evolkmann',
                        url: 'https://github.com/evolkmann'
                    },
                    {
                        network: 'xing',
                        username: 'Enzo_Volkmann3',
                        url: 'https://www.xing.com/profile/Enzo_Volkmann3'
                    }
                ]
            },
            work: [
                {
                    company: 'B. Braun Melsungen AG',
                    position: 'Dualer Student Wirtschaftsinformatik',
                    website: 'https://www.bbraun.com',
                    startDate: '2014-09-01',
                    endDate: '2017-06-01',
                    summary: 'After finishing my A-Levels, I started a dual study program at B. Braun. The time was' +
                        ' split into phases of work and phases of studying (each of them between 3 and 6 months long).' +
                        ' During this time, I got to know many friends and other people which are important to me. I' +
                        ' also started learning to code and finished the first projects, both internally at B. Braun' +
                        ' but also private ones.',
                    highlights: [
                        'Participation in attracting and hiring new students (local events, interviews)',
                        'Web app to send greeting cards with integration of IDP and E-Mail',
                        'Web app to collect issues during software rollout with integration of JIRA API',
                        'Creation of a brand with unified visual language for www.meisterring-mittelmosel.de (Private' +
                        ' project. We did not get the chance to implement it unfortunately.)',
                        'Design and implementation of website for www.volkmann-planung.de (Private project. My first' +
                        ' web project. This one is not live anymore, but I also participated at the current one.)',
                        'Exploration of the tools and technologies of modern web development'
                    ]
                },
                {
                    company: 'B. Braun Melsungen AG',
                    position: 'Software Developer / Inhouse Consultant',
                    website: 'https://www.bbraun.com',
                    startDate: '2014-06-02',
                    endDate: '',
                    summary: 'After positioning myself as a developer, I started working as one in the first months' +
                        ' after finishing my studies. Due to organizational reasons, I was forced to leave this' +
                        ' position unfortunately and was re-positioned internally. Apart from my corporate job, I' +
                        ' continue to be a developer though.',
                    highlights: [
                        'Introduction of Angular as the new web framework',
                        'Development of a web app for a phone hotline which consults cancer patients with potential' +
                        ' malnutrition (Angular, Spring Boot, Jasper for PDF Reports)',
                        'Usage of JIRA and Confluence as a cost-saving alternative to externally developed custom applications'
                    ]
                }
            ],
            volunteer: [],
            education: [
                {
                    institution: 'Wilhelm-Filchner Schule Wolfhagen',
                    area: 'A-Levels',
                    studyType: 'A-Levels',
                    startDate: '',
                    endDate: '2014-05-30',
                    gpa: '1.9',
                    courses: [
                        'Advanced courses in English and Physics',
                        'Visiting XLAB Göttingen (www.xlab-goettingen.de)',
                        'Participation in designing, printing and selling of our graduation magazine'
                    ]
                },
                {
                    institution: 'Technische Hochschule Mittelhessen (StudiumPlus)',
                    area: 'Betriebswirtschaft (Fachrichtung Wirtschaftsinformatik)',
                    studyType: 'Bachelor',
                    startDate: '2014-09-01',
                    endDate: '2017-06-01',
                    gpa: '1.9',
                    courses: [
                        'Creation of a branding and marketing concept for local retailer',
                        'Law Basics: An introduction to general and contract legislation in Germany'
                    ]
                },
                {
                    institution: 'Tallinn University of Technology (Tallinn, Estonia)',
                    area: 'Semester abroad',
                    studyType: 'Bachelor',
                    startDate: '2015-08-24',
                    endDate: '2015-12-23',
                    gpa: 'n/a',
                    courses: [
                        'Entrepreneurship: Creation and presentation of a start-up idea',
                        'Business Information Systems: Evaluation and improvement of an existing business model',
                        'Sports program'
                    ]
                }
            ],
            awards: [],
            publications: [],
            skills: [
                {
                    name: 'Frontend-Development',
                    level: 'Intermediate',
                    keywords: [
                        'Angular',
                        'Gulp',
                        'Typescript',
                        'Javascript',
                        'HTML',
                        'CSS',
                        'SASS/SCSS',
                        'Bootstrap',
                        'Semantics and accessibility'
                    ]
                },
                {
                    name: 'Backend-Development',
                    level: 'Intermediate',
                    keywords: [
                        'Java',
                        'Spring Boot',
                        'Typescript',
                        'Node.js',
                        'Hapi',
                        'Nest.js',
                        'REST',
                        'Swagger'
                    ]
                },
                {
                    name: 'SCM / CI / CD',
                    level: 'Intermediate',
                    keywords: [
                        'Jenkins',
                        'CircleCI',
                        'Git',
                        'Bitbucket',
                        'Github',
                        'Git-Flow',
                        'Semantic Versioning'
                    ]
                },
                {
                    name: 'Collaboration',
                    level: 'Intermediate',
                    keywords: [
                        'JIRA',
                        'Confluence',
                        'Nuclino',
                        'Asana'
                    ]
                },
                {
                    name: 'Creative Work',
                    level: 'Beginner',
                    keywords: [
                        'Adobe Illustrator CC',
                        'Adobe Photoshop CC',
                        'SketchUp Make (by Trimble Inc.)'
                    ]
                },
                {
                    name: 'DevOps',
                    level: 'Beginner',
                    keywords: [
                        'Flynn',
                        'Heroku',
                        'Let`s Encrypt',
                        'Linux',
                        'Apache HTTPD'
                    ]
                }
            ],
            languages: [
                {
                    name: 'German',
                    level: 'native'
                },
                {
                    name: 'English',
                    level: 'fluent'
                }
            ],
            interests: [
                {
                    name: 'Body & Mind',
                    keywords: [
                        'Exercising since late 2014',
                        'Meditating since ~03/2018',
                        'Healthy and conscious eating and drinking'
                    ]
                },
                {
                    name: 'Entrepreneurship',
                    keywords: [
                        'Accounting & Tax',
                        'Founding',
                        'Creating a network',
                        'Creative Work',
                        'Making people happy'
                    ]
                },
                {
                    name: 'Reading',
                    keywords: [
                        'Personal blogs',
                        'Self Awareness and Mindfulness',
                        'Personal Development',
                        'Communication and interpersonal behaviour'
                    ]
                }
            ],
            references: []
        };
    }
}
