import { Controller, HttpStatus, HttpCode, Head } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('common')
@Controller('common')
export class CommonController {

    constructor() { }

    @ApiOperation({
        title: '/common/health',
        description: 'Check if the Server is running'
    })
    @ApiResponse({ status: HttpStatus.OK, description: 'The service is available.' })
    @ApiResponse({ status: HttpStatus.SERVICE_UNAVAILABLE, description: 'The service is not available.' })
    @HttpCode(HttpStatus.OK)
    @Head('health')
    async healthCheck(): Promise<void> {
        return Promise.resolve();
    }
}
