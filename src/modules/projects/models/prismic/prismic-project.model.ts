/**
 * Represents the Content Type "Project":
 * https://expo-webpage.prismic.io/masks/project.json/
 */
export interface PrismicProject {
    title: {
        type: 'heading1',
        text: string;
        spans: any[];
    }[];
    description: {
        type: 'paragraph',
        text: string;
        spans: any[];
    }[];
    link: {
        link_type: 'Web';
        url: string;
    };
}
