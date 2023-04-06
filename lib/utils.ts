// Get ratio of photograph
export const getPhotographFormatRatio = (ratio: string): number => {
    const regex = /^r(\d+)\/(\d+)$/;
    const match = ratio.match(regex);

    if (match === null) {
        throw new Error(`Invalid ratio string: ${ratio}`);
    }

    const numerator = parseInt(match[1], 10);
    const denominator = parseInt(match[2], 10);

    return numerator / denominator;
}

// Get property of an entity object
// Image size Enum
const ImageSize = {
    thumbnail: "thumbnail",
    small: "small",
    medium: "medium",
    large: "large",
} as const;

type ImageSize = typeof ImageSize[keyof typeof ImageSize];

export const getPropertyFromObject = (obj: any, property: string, imageSize?: ImageSize): any => {
    for (const key in obj) {
        if (!obj.hasOwnProperty(key)) continue;

        const value = obj[key];
        if (key === property) {
            return imageSize && typeof value === 'object' ? value[imageSize] : value;
        }

        if (typeof value === 'object') {
            const result = getPropertyFromObject(value, property, imageSize);
            if (result) return result;
        }
    }

    return undefined;
};
