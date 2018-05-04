import { Controller, HttpStatus, HttpCode, Head, Logger } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiUseTags } from '@nestjs/swagger';

@ApiUseTags('common')
@Controller('common')
export class CommonController {

    private logger = new Logger(CommonController.name);

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
        this.logger.log(`[HEAD] /common/health`);
        return Promise.resolve();
    }
}
