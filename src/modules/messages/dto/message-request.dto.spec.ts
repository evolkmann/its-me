import { MessageRequestDto } from './message-request.dto';

describe('MessageRequestDto', () => {

    describe('isValid', () => {
        it('should return true', () => {
            const request: MessageRequestDto = {
                name: 'John',
                email: 'john@email.com',
                message: 'Hello there'
            };

            expect(MessageRequestDto.isValid(request)).toBe(true);
        });

        it('should return false', () => {
            const request: MessageRequestDto = {
                name: 'John',
                email: 'john@email.com',
                message: '' // Too short
            };

            expect(MessageRequestDto.isValid(request)).toBe(false);
        });
    });
});
