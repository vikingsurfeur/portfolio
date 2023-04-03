export interface IPhotograph {
    data: IPhotographData[];
}

export interface IPhotographData {
    id: number;
    attributes: IPhotographAttributes;
}

// TODO: Implement this interface with populate query parameter
export interface IPhotographAttributes {
    createdAt: string;
    format: null; // TODO: Union type or null, maybe pass this property on required
    file: any; // TODO: Type this property
    isLastPortfolio: boolean;
    isOnSale: boolean;
    location: string | null;
    photographedAt: string | null;
    publishedAt: string;
    sellerUrl: string | null;
    title: string;
    updatedAt: string;
}