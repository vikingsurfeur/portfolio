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