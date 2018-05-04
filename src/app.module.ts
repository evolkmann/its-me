import { Module } from '@nestjs/common';
import { SharedModule } from './modules/shared/shared.module';
import { MessagesModule } from './modules/messages/messages.module';
import { ResumeModule } from './modules/resume/resume.module';
import { ProjectsModule } from './modules/projects/projects.module';

@Module({
  imports: [
      SharedModule,
      MessagesModule,
      ResumeModule,
      ProjectsModule
  ],
  controllers: [],
  components: [],
  exports: []
})
export class AppModule {}
