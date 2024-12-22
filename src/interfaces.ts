export interface ILink {
    title: string,
    link: string
}

export  interface IProdCard {
    id: number | string;
    image: string;
    altImage: string;
    title: string;
    description: string;
    price?: number;
    discPrice?: number;
    postingdate?: string;
    commentCount?: number;
}


