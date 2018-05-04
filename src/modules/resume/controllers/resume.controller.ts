import { Controller, Get, HttpCode, HttpStatus, Logger } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { ResumeService } from '../services/resume.service';
import {
    Award, Basics, Education, Interest, Language, Profile,
    Publication, Reference, Resume, Skill, Volunteer, Work
} from '../models/resume.model';

@ApiUseTags('resume')
@Controller('resume')
export class ResumeController {

    private logger = new Logger(ResumeController.name);

    constructor() { }

    @ApiOperation({
        title: '/resume',
        description: 'Returns the complete resume'
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'Successfully sent resume.' })
    @HttpCode(HttpStatus.OK)
    @Get()
    async getResume(): Promise<Resume> {
        this.logger.log(`[GET] /resume`);
        return Promise.resolve(ResumeService.getResume());
    }

    @ApiOperation({
        title: '/resume/basics',
        description: 'Returns the basics'
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'Successfully sent resume.' })
    @HttpCode(HttpStatus.OK)
    @Get('basics')
    async getBasics(): Promise<Basics> {
        this.logger.log(`[GET] /resume/basics`);
        return Promise.resolve(ResumeService.getResume().basics);
    }

    @ApiOperation({
        title: '/resume/basics/profiles',
        description: 'Returns the social profiles'
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'Successfully sent resume.' })
    @HttpCode(HttpStatus.OK)
    @Get('basics/profiles')
    async getBasicsProfiles(): Promise<Profile[]> {
        this.logger.log(`[GET] /resume/profiles`);
        return Promise.resolve(ResumeService.getResume().basics.profiles);
    }

    @ApiOperation({
        title: '/resume/work',
        description: 'Returns the work places'
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'Successfully sent resume.' })
    @HttpCode(HttpStatus.OK)
    @Get('work')
    async getWork(): Promise<Work[]> {
        this.logger.log(`[GET] /resume/work`);
        return Promise.resolve(ResumeService.getResume().work);
    }

    @ApiOperation({
        title: '/resume/volunteer',
        description: 'Returns the voluntary places'
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'Successfully sent resume.' })
    @HttpCode(HttpStatus.OK)
    @Get('volunteer')
    async getVolunteer(): Promise<Volunteer[]> {
        this.logger.log(`[GET] /resume/volunteer`);
        return Promise.resolve(ResumeService.getResume().volunteer);
    }

    @ApiOperation({
        title: '/resume/education',
        description: 'Returns the educational places'
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'Successfully sent resume.' })
    @HttpCode(HttpStatus.OK)
    @Get('education')
    async getEducation(): Promise<Education[]> {
        this.logger.log(`[GET] /resume/education`);
        return Promise.resolve(ResumeService.getResume().education);
    }

    @ApiOperation({
        title: '/resume/awards',
        description: 'Returns the awards'
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'Successfully sent resume.' })
    @HttpCode(HttpStatus.OK)
    @Get('awards')
    async getAwards(): Promise<Award[]> {
        this.logger.log(`[GET] /resume/awards`);
        return Promise.resolve(ResumeService.getResume().awards);
    }

    @ApiOperation({
        title: '/resume/publications',
        description: 'Returns the publications'
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'Successfully sent resume.' })
    @HttpCode(HttpStatus.OK)
    @Get('publications')
    async getPublications(): Promise<Publication[]> {
        this.logger.log(`[GET] /resume/publications`);
        return Promise.resolve(ResumeService.getResume().publications);
    }

    @ApiOperation({
        title: '/resume/skills',
        description: 'Returns the skills'
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'Successfully sent resume.' })
    @HttpCode(HttpStatus.OK)
    @Get('skills')
    async getSkills(): Promise<Skill[]> {
        this.logger.log(`[GET] /resume/skills`);
        return Promise.resolve(ResumeService.getResume().skills);
    }

    @ApiOperation({
        title: '/resume/languages',
        description: 'Returns the languages'
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'Successfully sent resume.' })
    @HttpCode(HttpStatus.OK)
    @Get('languages')
    async getLanguages(): Promise<Language[]> {
        this.logger.log(`[GET] /resume/languages`);
        return Promise.resolve(ResumeService.getResume().languages);
    }

    @ApiOperation({
        title: '/resume/interests',
        description: 'Returns the interests'
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'Successfully sent resume.' })
    @HttpCode(HttpStatus.OK)
    @Get('interests')
    async getInterests(): Promise<Interest[]> {
        this.logger.log(`[GET] /resume/interests`);
        return Promise.resolve(ResumeService.getResume().interests);
    }

    @ApiOperation({
        title: '/resume/references',
        description: 'Returns the references'
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'Successfully sent resume.' })
    @HttpCode(HttpStatus.OK)
    @Get('references')
    async getReferences(): Promise<Reference[]> {
        this.logger.log(`[GET] /resume/references`);
        return Promise.resolve(ResumeService.getResume().references);
    }

}
