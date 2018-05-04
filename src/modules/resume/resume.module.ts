import { Module } from '@nestjs/common';
import { ResumeController } from './controllers/resume.controller';
import { ResumeService } from './services/resume.service';

@Module({
    imports: [],
    controllers: [
        ResumeController
    ],
    components: [
        ResumeService
    ],
})
export class ResumeModule {}
