import { PrismicResult } from './prismic-result.model';
import { PrismicDocument } from './prismic-document.type';

/**
 * The response object returned by the Prismic CMS.
 * The Type of "results" depends on the {@link PrismicDocument}
 * */
export interface PrismicResponse<T extends PrismicDocument> {
    next_page: string;
    page: number;
    prev_page: string;
    results: PrismicResult<T>[];
    results_per_page: number;
    results_size: number;
    total_pages: number;
    total_results_size: number;
}
