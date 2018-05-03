import { Component, Logger } from '@nestjs/common';
import { SendMailOptions, SentMessageInfo } from 'nodemailer';
import * as Nodemailer from 'nodemailer';
import * as SMTPTransport from 'nodemailer/lib/smtp-transport';

@Component()
export class NodemailerService {

    private logger = new Logger(NodemailerService.name);

    constructor() { }

    /**
     * Send an email message.
     *
     * This transportOptions will be loaded depending on the environment
     * from the app's {@link Configuration}.
     */
    async sendEmail(transportOptions: SMTPTransport.Options, mailOptions: SendMailOptions): Promise<void> {
        const transporter = Nodemailer.createTransport(transportOptions);
        return new Promise<void>((resolve, reject) => {
            transporter.sendMail(mailOptions, (err: Error, info: SentMessageInfo) => {
                if (err) {
                    this.logger.error(`Could not send email:\n${err.message}`, err.stack);
                    reject(err);
                }
                this.logger.log(`Successfully sent email to ${info.envelope.to.join(', ')}`);
                resolve();
            });
        });
    }
}
