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
    },
    prismic: {
        url: 'https://enzo-its-me.cdn.prismic.io/api/v2',
        accessToken: 'MC5XdXdnX1NzQUFDa0FJQUJW.cO-_vQnvv73vv73vv73vv73vv73vv73vv73vv73vv70iCe-_ve-_ve-_ve-_vTQmK--_ve-_vS3vv70cExvvv73vv73vv73vv70',
        webhookSecret: 'wzleGUO0CFsRDiHl8TBdgCRJNmL4hDvv'
    }
};
