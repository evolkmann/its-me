import { PrismicProject } from './prismic-project.model';

/**
 * Union type for all available DocumentTypes.
 * Used as the generic type of {@link PrismicResult}
 * */
export type PrismicDocument =
    PrismicProject;
