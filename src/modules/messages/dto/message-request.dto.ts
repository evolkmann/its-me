import { ApiModelProperty } from '@nestjs/swagger';

export class MessageRequestDto {

    @ApiModelProperty({
        description: 'E-Mail-Address of the contact-form user',
        example: 'myname@example.com'
    })
    readonly email: string;

    @ApiModelProperty({
        description: 'Full name of the contact-form user',
        example: 'Jon Doe'
    })
    readonly name: string;

    @ApiModelProperty({
        description: 'The message with HTML-line-breaks',
        example: 'This is a message.'
    })
    readonly message: string;

    /**
     * Check the validity of the request by disallowing any unfilled fields
     */
    static isValid(request: MessageRequestDto): boolean {
        return request.email.length > 0
            && request.name.length > 0
            && request.message.length > 0;
    }
}
