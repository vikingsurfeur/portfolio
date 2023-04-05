export interface IPhotograph {
    data: IPhotographData[];
}

export interface IPhotographData {
    id: number;
    attributes: IPhotographAttributes;
}

export interface IPhotographAttributes {
    createdAt: string;
    format: "r1/1" | "r4/5" | "r5/7" | "r2/3" | "r4/3" | "r16/9" | "r16/10" | null;
    orientation: "vertical" | "horizontal" | null;
    file?: IPhotographFile;
    isLastPortfolio: boolean;
    isOnSale: boolean;
    location: string | null;
    photographedAt: string | null;
    publishedAt: string;
    sellerUrl: string | null;
    title: string;
    updatedAt: string;
}

export interface IPhotographFile {
    data: IPhotographFileData;
}

export interface IPhotographFileData {
    id: number;
    attributes: IPhotographFileAttributes;
}

export interface IPhotographAwareData {
    ext: ".jpg" | ".png";
    hash: string;
    height: number;
    mime: "image/jpeg" | "image/png";
    name: string;
    provider_metadata: ICloudinaryMetadata;
    size: number;
    url: string;
    width: number;
}

export interface ICloudinaryMetadata {
    public_id: string;
    resource_type: "image";
}

export interface IPhotographFileAttributes extends IPhotographAwareData {
    alternativeText: null | string;
    caption: null; // TODO: check if this property can have someone other null
    createdAt: string;
    format: IPhotographFormat;
    previewUrl: null | string;
    provider: "cloudinary",
    updatedAt: string;
}

export interface IPhotographFormat {
    large: IPhotographFormatData;
    medium: IPhotographFormatData;
    small: IPhotographFormatData;
    thumbnail: IPhotographFormatData;
}

export interface IPhotographFormatData extends IPhotographAwareData {
    path: null | string;
}
