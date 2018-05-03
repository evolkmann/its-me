import { Module } from '@nestjs/common';
import { MessagesController } from './controllers/messages.controller';
import { NodemailerService } from './services/nodemailer.service';

@Module({
    imports: [],
    controllers: [
        MessagesController
    ],
    components: [
        NodemailerService
    ],
})
export class MessagesModule {}
