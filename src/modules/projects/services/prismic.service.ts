import { Component, Logger } from '@nestjs/common';
import { PrismicDocument } from '../models/prismic/prismic-document.type';
import { PrismicResponse } from '../models/prismic/prismic-response.model';
import { PrismicPredicate } from '../models/prismic/prismic-predicate.model';
import { Environments } from '../../shared/environments';
import * as request from 'request-promise-native';
import * as urlJoin from 'url-join';

interface PrismicCache {
    [key: string]: any;
}

@Component()
export class PrismicService {

    private logger = new Logger(PrismicService.name);

    private _masterRef: string;

    /**
     * The masterRef is updated either by a Prismic Webhook or
     * is fetched manually, if it is not available yet.
     *
     * Setting a new masterRef also clears the cache,
     * as the data has been modified.
     */
    set masterRef(value: string) {
        this._masterRef = value;
        this.cache = {};
    }

    /**
     * Cache Prismic Data locally as long as they are the latest
     */
    private cache: PrismicCache = {};

    constructor() { }

    /**
     * Performs an API Call to Prismic and fetches results filtered by fragment and value
     *
     * @param {PrismicPredicate[]} predicates Any number of filtering predicates
     *
     * @returns {Promise<PrismicResponse<PrismicDocument>>} The Response object
     */
    async fetchDataByPredicate(...predicates: PrismicPredicate[]): Promise<PrismicResponse<PrismicDocument>> {
        // JSON-safe and unique key for accessing the cached data:
        // Only alphanumerical, no whitespace
        const fragmentValueKey = predicates.map(p => `${p.fragment}${p.value}`).join('').replace(/\W+/g, '');

        // Try to return a cached value
        if (this.cache[fragmentValueKey]) {
            this.logger.log(`Loading from Cache: ${fragmentValueKey}`);
            return Promise.resolve(this.cache[fragmentValueKey]);
        }

        // In case the master ref is not available, fetch it
        if (!this._masterRef) {
            await this.updateMasterRef();
        }

        // Now query the API, update cache and return
        const requestOptions = {
            uri: encodeURI(urlJoin(
                Environments.getConfiguration().prismic.url,
                '/documents/search',
                `?ref=${this._masterRef}`,
                ...predicates.map(p => `&q=[[at(${p.fragment},"${p.value}")]]`)
            )),
            qs: {
                access_token: Environments.getConfiguration().prismic.accessToken
            },
            json: true
        };
        const data = await request(requestOptions);

        this.cache[fragmentValueKey] = data;

        return Promise.resolve(data);
    }

    /**
     * Fetches the current master ref from Prismic
     *
     * @return {Promise<void>} Resolves when the master ref is updated
     */
    private async updateMasterRef(): Promise<void> {
        const requestOptions = {
            uri: Environments.getConfiguration().prismic.url,
            json: true
        };
        const api = await request(requestOptions);

        this.masterRef = api['refs'][0]['ref'];
        this.logger.log(`New masterRef is ${this._masterRef}`);

        return Promise.resolve();
    }
}
