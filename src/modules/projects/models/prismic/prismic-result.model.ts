import { PrismicDocument } from './prismic-document.type';

/**
 * Represents a single result object found in {@link PrismicResponse}.
 * Type of "data" depends on {@link PrismicDocument}
 * */
export interface PrismicResult<T extends PrismicDocument> {
    alternate_languages: string[];
    data: T;
    first_publication_date: Date;
    last_publication_date: Date;
    linked_documents: any;
    href: string;
    id: string;
    lang: string;
    slug: string;
    slugs: string[];
    tags: string[];
    technologies: string[];
    type: string;
    uid: string;
}
