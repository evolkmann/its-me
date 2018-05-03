import { NodeEnv } from './node-env.enum';

/**
 * Represents the app configuration.
 *
 * This object shall only contain business-related configuration,
 * while "technical" configuration such as NODE_ENV, PORT, etc.
 * can be found in {@link Environments}.
 *
 * For each technical environment (currently local, development,
 * staging, production) there is one configuration file in
 * 'src/modules/shared/configurations'.
 */
export interface Configuration {
    environment: NodeEnv;
    mail:{
        name: string;
        email: string;
        smtpTransportOptions: {
            host: string;
            port: number;
            auth: {
                user: string;
                pass: string;
            };
        }
    };
}
