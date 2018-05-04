import { Configuration } from '../models/configuration.model';
import { NodeEnv } from '../models/node-env.enum';

/**
 * Configuration for PRODUCTION environment
 */
export const configuration: Configuration = {
    environment: NodeEnv.PRODUCTION,
    mail: {
        name: 'Enzo Volkmann',
        email: 'enzo@enzo-volkmann.de',
        smtpTransportOptions: {
            host: 'mx2f1a.netcup.net',
            port: 587,
            auth: {
                user: 'enzo@enzo-volkmann.de',
                pass: '' // Available as Node Env variable
            }
        }
    }
};
