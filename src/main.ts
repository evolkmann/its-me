import { NestFactory } from '@nestjs/core';
import { Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common/interfaces/nest-application.interface';
import { AppModule } from './app.module';
import { ExpressComponent as Express } from './modules/shared/components/express.component';
import { ExpressSetting } from './modules/shared/models/express-setting.enum';
import * as express from 'express';

const logger = new Logger('NestApplication');
let expressInstance: express.Application;

/**
 * Start the nest application after the internal express server has been bootstrapped.
 */
async function startNestApplication() {
  const app: INestApplication = await NestFactory.create(AppModule, expressInstance, {});

  // Configure Swagger for API Documentation
  const swaggerConfig = new DocumentBuilder()
      .setTitle(expressInstance.get(ExpressSetting.NAME))
      .setDescription(`Environment: ${expressInstance.get(ExpressSetting.ENV)}\n\n` + expressInstance.get(ExpressSetting.DESCRIPTION))
      .setVersion(expressInstance.get(ExpressSetting.VERSION))
      .build();
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('/api', app, document, {
    customSiteTitle: `API v${expressInstance.get(ExpressSetting.VERSION)} - ${expressInstance.get(ExpressSetting.NAME)}`
  });

  // Start the application
  await app.listen(expressInstance.get(ExpressSetting.PORT));
}

/**
 * Start the bootstrapping process by creating a new express instance.
 * Afterwards, start the NEST server.
 */
Express.getInstance()
    .then(instance => expressInstance = instance)
    .then(() => startNestApplication())
    .then(() => {
      logger.log(``);
      logger.log(`${expressInstance.get(ExpressSetting.NAME)} running on Port ${expressInstance.get(ExpressSetting.PORT)}`);
      logger.log(``);
      logger.log(`-------------------------------------------------------`);
      logger.log(`Environment  : ${expressInstance.get(ExpressSetting.ENV)}`);
      logger.log(`Version      : ${expressInstance.get(ExpressSetting.VERSION)}`);
      logger.log(`-------------------------------------------------------`);
      logger.log(``);
    });