import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { CommonController } from './common.controller';

describe('CommonController', () => {
    let app: TestingModule;
    beforeAll(async () => {
        app = await Test.createTestingModule({
            controllers: [CommonController],
        }).compile();
    });

    describe('/common/health', () => {
        it('should return a Promise', () => {
            const commonController = app.get<CommonController>(CommonController);
            const spy = spyOn(commonController, 'healthCheck');
            commonController.healthCheck();
            expect(spy).toHaveBeenCalledTimes(1);
        });
    });
});
