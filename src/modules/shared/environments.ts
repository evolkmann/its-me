import { Component } from '@nestjs/common';
import { Configuration } from './models/configuration.model';
import { NodeEnv } from './models/node-env.enum';

/**
 * Import each configuration file from /src/modules/shared/configurations
 *
 * They are mapped to a {@link NodeEnv} in {@link configMapping}
 */
import { configuration as CONFIG_LOCAL } from './configurations/local.configuration';
import { configuration as CONFIG_PRODUCTION } from './configurations/production.configuration';

/**
 * This class is responsible for differentiating between
 * environments and other associated values.
 *
 * Non-technical app configuration can be found in {@link Configuration}.
 *
 * Idea from https://github.com/d3viant0ne/nestjs-mongoose/blob/master/src/shared/environments.ts
 */
@Component()
export class Environments {

    /**
     * Maps each NODE_ENV to the corresponding configuration file.
     */
    static configMapping: Map<NodeEnv, Configuration> = new Map([
        [NodeEnv.LOCAL, CONFIG_LOCAL],
        [NodeEnv.PRODUCTION, CONFIG_PRODUCTION],
    ]);

    /**
     * In a hosting environment such as Flynn, the environment variable
     * "NODE_ENV" (string) will be available and will be used. For local
     * development, use a fixed fallback.
     */
    static getEnvironment(): string {
        return process.env.NODE_ENV || NodeEnv.LOCAL;
    }

    /**
     * Check if we are currently in the given environment.
     */
    static isEnvironment(env: NodeEnv): boolean {
        return this.getEnvironment() === env;
    }

    /**
     * In a hosting environment such as Flynn, the environment variable
     * "PORT" will be available and will be used. For local development,
     * the fallback port number shall be used.
     */
    static getPort(): number {
        return Number(process.env.PORT) || 4000;
    }

    /**
     * The Mail Password is stored in Heroku.
     */
    static getMailPassword(): string {
        return process.env.MAIL_PASSWORD;
    }

    /**
     * Returns the server configuration based on the environment.
     */
    static getConfiguration(): Configuration {
        return this.configMapping.get(this.getEnvironment() as NodeEnv);
    }
}
