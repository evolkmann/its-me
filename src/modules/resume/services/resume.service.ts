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
                picture: 'https://avatars2.githubusercontent.com/u/24471188?s=460&v=4',
                email: 'enzo@enzo-volkmann.de',
                phone: '+49 176 4760 8843',
                website: 'https://enzo-volkmann.de',
                summary: '',
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
                    summary: '',
                    highlights: [
                        ''
                    ]
                },
                {
                    company: 'B. Braun Melsungen AG',
                    position: 'Software Developer',
                    website: 'https://www.bbraun.com',
                    startDate: '2014-06-02',
                    endDate: '',
                    summary: '',
                    highlights: [
                        ''
                    ]
                }
            ],
            volunteer: [],
            education: [
                {
                    institution: 'Technische Hochschule Mittelhessen',
                    area: 'Betriebswirtschaft (Fachrichtung Wirtschaftsinformatik)',
                    studyType: 'Bachelor',
                    startDate: '2014-09-01',
                    endDate: '2017-06-01',
                    gpa: '1.9',
                    courses: [
                        ''
                    ]
                },
                {
                    institution: 'Tallinn University of Technology',
                    area: 'Auslandssemester',
                    studyType: 'Bachelor',
                    startDate: '2015-08-24',
                    endDate: '2015-12-23',
                    gpa: '',
                    courses: [
                        ''
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
                        'Bootstrap'
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
                    name: 'Hosting / Deployment',
                    level: 'Beginner',
                    keywords: [
                        'Flynn',
                        'Heroku',
                        'Let`s Encrypt',
                        'Linux'
                    ]
                }
            ],
            languages: [
                {
                    name: 'German',
                    level: 'Native'
                },
                {
                    name: 'English',
                    level: 'fluent'
                }
            ],
            interests: [
                {
                    name: 'Health',
                    keywords: [
                        'Exercise',
                        'Mindfulness',
                        'Food'
                    ]
                },
                {
                    name: 'Business',
                    keywords: [
                        'Accounting & Tax',
                        'Founding'
                    ]
                }
            ],
            references: []
        };
    }
}
