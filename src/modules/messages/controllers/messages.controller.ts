import {
    Controller, Post, Body, HttpStatus, HttpCode, BadRequestException,
    InternalServerErrorException, Logger
} from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';
import { NodemailerService } from '../services/nodemailer.service';
import { SendMailOptions } from 'nodemailer';
import { Environments } from '../../shared/environments';
import { MessageRequestDto } from '../dto/message-request.dto';

@ApiUseTags('messages')
@Controller('messages')
export class MessagesController {

    private logger = new Logger(MessagesController.name);

    constructor(private nodemailerService: NodemailerService) { }

    @ApiOperation({
        title: '/message',
        description: 'Send emails with contents from the contact form on the website'
    })
    @ApiResponse({ status: HttpStatus.ACCEPTED, description: 'The message has been sent.' })
    @ApiResponse({ status: HttpStatus.BAD_REQUEST, description: 'Request is invalid.' })
    @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Mail delivery failed.' })
    @HttpCode(HttpStatus.ACCEPTED)
    @Post()
    async sendMessage(@Body() requestDto: MessageRequestDto): Promise<void> {
        this.logger.log(`[POST] /message`);
        if (!MessageRequestDto.isValid(requestDto)) {
            throw new BadRequestException('Request is invalid!');
        }

        const mailConfig = Environments.getConfiguration().mail;
        mailConfig.smtpTransportOptions.auth.pass = Environments.getMailPassword();

        const messageInternal: SendMailOptions = {
            from: `"${mailConfig.name}" <${mailConfig.email}>`,
            to: '"Enzo Volkmann" <enzo@enzo-volkmann.de>',
            replyTo: `"${requestDto.name}" <${requestDto.email}>`,
            subject: `Nachricht von ${requestDto.name}`,
            html: `Neue Nachricht über die Its-Me-API.<br>`
                + `<br>`
                + `<strong>Name</strong><br>`
                + `${requestDto.name}<br>`
                + `<strong>E-Mail-Adresse</strong><br>`
                + `<a href="mailto:${requestDto.email}">${requestDto.email}</a><br>`
                + `<strong>Nachricht</strong><br>`
                + `${requestDto.message}<br>`
                + `<br>`
        };
        const messageExternal: SendMailOptions = {
            from: `"${mailConfig.name}" <${mailConfig.email}>`,
            to: `"${requestDto.name}" <${requestDto.email}>`,
            subject: `Ihre Nachricht über die Its-Me-API`,
            html: `Hallo ${requestDto.name},<br>`
                + `<br>`
                + `vielen Dank für Ihre Anfrage über die Its-Me-API.<br>`
                + `Ich habe Ihre Nachricht erhalten und melde mich schnellstmöglich unter der angegebenen E-Mail-Adresse.<br>`
                + `<br>`
                + `Ihre Angaben:<br>`
                + `<br>`
                + `<strong>Name</strong><br>`
                + `${requestDto.name}<br>`
                + `<strong>E-Mail-Adresse</strong><br>`
                + `<a href="mailto:${requestDto.email}">${requestDto.email}</a><br>`
                + `<strong>Nachricht</strong><br>`
                + `${requestDto.message}<br>`
                + `<br>`
                + `Viele Grüße<br>`
                + `Enzo Volkmann<br>`,
        };

        try {
            await this.nodemailerService.sendEmail(mailConfig.smtpTransportOptions, messageExternal);
            await this.nodemailerService.sendEmail(mailConfig.smtpTransportOptions, messageInternal);
            return Promise.resolve();
        } catch (error) {
            throw new InternalServerErrorException(error.message);
        }
    }
}
