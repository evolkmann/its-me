import { Component } from '@nestjs/common';
import { PrismicPredicate } from '../models/prismic/prismic-predicate.model';
import { PrismicDocumentType } from '../models/prismic/prismic-document-types.enum';

@Component()
export class Predicates {

    static byDocumentType(documentType: PrismicDocumentType): PrismicPredicate {
        return {
            fragment: 'document.type',
            value: documentType as string
        };
    }

    static byProjectId(id: string): PrismicPredicate {
        return {
            fragment: 'my.project.uid',
            value: id
        };
    }
}
