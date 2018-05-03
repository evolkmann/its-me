/**
 * Represents possible settings of the underlying express server,
 * which can be used via
 *   'server.set(ExpressSetting.ENV, 'local')'
 * and
 *   'server.get(ExpressSetting.ENV)
 */
export enum ExpressSetting {
    ENV = 'env',
    PORT = 'port',
    NAME = 'name',
    DESCRIPTION = 'description',
    VERSION = 'version'
}
