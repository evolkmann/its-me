import { Module } from '@nestjs/common';
import { PrismicService } from './services/prismic.service';
import { ProjectsController } from './controllers/projects.controller';
import { ProjectPipe } from './pipes/project.pipe';

@Module({
    imports: [],
    controllers: [
        ProjectsController
    ],
    components: [
        PrismicService,
        ProjectPipe
    ],
})
export class ProjectsModule {}
