import { Slug } from "sanity";

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

export interface IProdCategroy {
    id: string;
    image: string;
    altImage: string;
    itemCount: number;
}

export interface IlogosProp {
    id: number,
    image: string,
    altImage: string,
}

export interface IProductProp {
    imageUrl : string;
    price: number;
    tags: string[];
    dicountPercentage: number;
    description: string;
    isNew: boolean;
    _id: string;
    title: string;
    slug: {current : string},
    productId: string;
}