import request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { MessagesModule } from './messages.module';

describe('MessagesModule (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture = await Test.createTestingModule({
      imports: [MessagesModule],
    }).compile();

    app = moduleFixture.createNestApplication();

    await app.init();
  });

  it('POST /messages', () => {
    return request(app.getHttpServer())
      .post('/messages')
      .send({
        name: 'Jon Doe',
        email: 'some@mail.com',
        message: '' // Too short
      })
      .expect(400);
  });
});
