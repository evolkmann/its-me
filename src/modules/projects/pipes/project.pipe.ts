import { PipeTransform, Pipe, ArgumentMetadata } from '@nestjs/common';
import { PrismicProject } from '../models/prismic/prismic-project.model';
import { Project } from '../models/project.model';

@Pipe()
export class ProjectPipe implements PipeTransform<PrismicProject> {

    transform(prismicProject: PrismicProject, metadata: ArgumentMetadata): Project {
        return {
            title: prismicProject.title[0].text,
            description: prismicProject.description[0].text,
            link: prismicProject.link.url
        };
    }
}
