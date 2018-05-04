import { Controller, Get, HttpCode, HttpStatus, Logger, NotFoundException, Param } from '@nestjs/common';
import { ApiImplicitParam, ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { PrismicService } from '../services/prismic.service';
import { PrismicDocumentType } from '../models/prismic/prismic-document-types.enum';
import { ProjectPipe } from '../pipes/project.pipe';
import { Project } from '../models/project.model';
import { Predicates } from '../components/predicates.component';

@ApiUseTags('projects')
@Controller('projects')
export class ProjectsController {

    private logger = new Logger(ProjectsController.name);

    constructor(private prismicService: PrismicService,
                private projectPipe: ProjectPipe) { }

    @ApiOperation({
        title: '/projects',
        description: 'Returns all projects'
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'Successfully sent projects.' })
    @HttpCode(HttpStatus.OK)
    @Get()
    async getProjects(): Promise<Project[]> {
        this.logger.log(`[GET] /projects`);

        const byDocumentType = Predicates.byDocumentType(PrismicDocumentType.PROJECT);

        const prismicResponse = await this.prismicService.fetchDataByPredicate(byDocumentType);

        return Promise.resolve(prismicResponse.results.map(result => this.projectPipe.transform(result.data, null)));
    }

    @ApiOperation({
        title: '/projects/uids',
        description: 'Returns all project uids'
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'Successfully sent project uids.' })
    @HttpCode(HttpStatus.OK)
    @Get('uids')
    async getProjectUids(): Promise<string[]> {
        this.logger.log(`[GET] /projects/uids`);

        const byDocumentType = Predicates.byDocumentType(PrismicDocumentType.PROJECT);

        const prismicResponse = await this.prismicService.fetchDataByPredicate(byDocumentType);

        return Promise.resolve(prismicResponse.results.map(result => result.uid));
    }

    @ApiOperation({
        title: '/projects/:projectId',
        description: 'Returns a single project'
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'Successfully sent project.' })
    @ApiResponse({ status: HttpStatus.NOT_FOUND, description: 'Project not found' })
    @ApiImplicitParam({
        name: 'projectId',
        type: 'string',
        required: true,
        description: 'The unique ID of the project'
    })
    @HttpCode(HttpStatus.OK)
    @Get(':projectId')
    async getProject(@Param('projectId') projectId: string): Promise<Project> {
        this.logger.log(`[GET] /projects/${projectId}`);

        const byProjectId = Predicates.byProjectId(projectId);

        const prismicResponse = await this.prismicService.fetchDataByPredicate(byProjectId);

        if (prismicResponse.results_size === 0) {
            throw new NotFoundException(`Project with ID '${projectId}' not found.`);
        }

        return Promise.resolve(this.projectPipe.transform(prismicResponse.results[0].data, null));
    }
}
