import { Module } from '@nestjs/common';
import { PrismicService } from './services/prismic.service';
import { ProjectsController } from './controllers/projects.controller';
import { ProjectPipe } from './pipes/project.pipe';
import { Predicates } from './components/predicates.component';

@Module({
    imports: [],
    controllers: [
        ProjectsController
    ],
    components: [
        PrismicService,
        ProjectPipe,
        Predicates
    ],
})
export class ProjectsModule {}
