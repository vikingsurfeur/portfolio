import { IPhotograph, IPhotographCover } from "./IPhotograph";
import { IUser } from "./IUser";

export interface IPortfolio {
    data: IPortfolioData[];
    meta: IPortfolioPagination;
}

export interface IPortfolioData {
    id: number;
    attributes: IPortfolioAttributes;
}

export interface IPortfolioAttributes {
    createdAt: string;
    description: string | null;
    location: string | null;
    publishedAt: string;
    slug: string;
    socialNetwork: string | null;
    title: string;
    updatedAt: string;
    user?: IUser;
    photographs?: IPhotograph;
    photographCover?: IPhotographCover;
}

export interface IPortfolioPagination {
    page: number;
    pageCount: number;
    pageSize: number;
    total: number;
}