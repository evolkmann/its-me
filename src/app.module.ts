import { Module } from '@nestjs/common';
import { SharedModule } from './modules/shared/shared.module';
import { MessagesModule } from './modules/messages/messages.module';

@Module({
  imports: [
      SharedModule,
      MessagesModule
  ],
  controllers: [],
  components: [],
  exports: []
})
export class AppModule {}
