import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { PrismicService } from '../services/prismic.service';
import { PrismicDocumentType } from '../models/prismic/prismic-document-types.enum';
import { PrismicResponse } from '../models/prismic/prismic-response.model';
import { PrismicProject } from '../models/prismic/prismic-project.model';
import { ProjectPipe } from '../pipes/project.pipe';

@ApiUseTags('projects')
@Controller('projects')
export class ProjectsController {

    constructor(private prismicService: PrismicService,
                private projectPipe: ProjectPipe) { }

    @ApiOperation({
        title: '/projects',
        description: 'Returns all projects'
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'Successfully sent projects.' })
    @HttpCode(HttpStatus.OK)
    @Get()
    async getProjects(): Promise<any> {
        const prismicResponse: PrismicResponse<PrismicProject> = await this.prismicService.getContentByDocumentType(PrismicDocumentType.PROJECT);
        return Promise.resolve(prismicResponse.results.map(result => this.projectPipe.transform(result.data, null)));
    }
}
