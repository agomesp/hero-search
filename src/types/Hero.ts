export interface IHero {
    id: number;
    name: string;
    description: string;
    thumbnail: {
        path: string;
        extension: string;
    };
    series: {
        items: { name: string }[];
    };
    comics: {
        items: { name: string }[];
    };
    events: {
        items: { name: string }[];
    };
}