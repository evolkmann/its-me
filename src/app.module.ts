import { Module } from '@nestjs/common';
import { SharedModule } from './modules/shared/shared.module';
import { MessagesModule } from './modules/messages/messages.module';
import { ResumeModule } from './modules/resume/resume.module';

@Module({
  imports: [
      SharedModule,
      MessagesModule,
      ResumeModule
  ],
  controllers: [],
  components: [],
  exports: []
})
export class AppModule {}
