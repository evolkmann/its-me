import request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { SharedModule } from './shared.module';

describe('SharedModule (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [SharedModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    await app.init();
  });

  it('HEAD /common/health', () => {
    return request(app.getHttpServer())
      .head('/common/health')
      .expect(200);
  });
});
