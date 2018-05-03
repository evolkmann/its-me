import { Component } from '@nestjs/common';
import { Environments } from '../environments';
import { ExpressSetting } from '../models/express-setting.enum';
import * as express from 'express';
import * as bodyParser from 'body-parser';
const pkg = require('../../../../package.json');

@Component()
export class ExpressComponent {

  /**
   * Returns a pre-configured instance of {@link express.Application}.
   * The instance can be used by NEST to initialize a new application.
   */
  static async getInstance(): Promise<express.Application> {
    const instance = express();

    // Explicitly tell express how to parse request bodies and allow file limits
    instance.use(bodyParser.json());

    instance.set(ExpressSetting.ENV, Environments.getEnvironment());
    instance.set(ExpressSetting.PORT, Environments.getPort());
    instance.set(ExpressSetting.NAME, pkg.name);
    instance.set(ExpressSetting.DESCRIPTION, pkg.description);
    instance.set(ExpressSetting.VERSION, pkg.version);

    return Promise.resolve(instance);
  }
}
