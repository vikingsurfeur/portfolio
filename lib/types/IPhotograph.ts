// Photograph Enum ratio
const Ratio = {
    r1: "r1/1",
    r2: "r4/5",
    r3: "r5/7",
    r4: "r2/3",
    r5: "r4/3",
    r6: "r16/9",
    r7: "r16/10",
} as const;

type Ratio = typeof Ratio[keyof typeof Ratio];

// Photograph Interface
export interface IPhotograph {
    data: IPhotographData[];
}

export interface IPhotographCover {
    data: IPhotographData;
}

export interface IPhotographData {
    id: number;
    attributes: IPhotographAttributes;
}

export interface IPhotographAttributes {
    createdAt: string;
    format: Ratio;
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
    alternativeText: string | null;
    caption: string | null;
    createdAt: string;
    format: IPhotographFormat;
    previewUrl: string | null;
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
    path: string | null;
}
