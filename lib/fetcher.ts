import { baseUrlApi, envResolver } from "./envResolver"

export const fetcher = async (resource: string, queryParams?: string) => {
    try {
        let fetchUrl;

        queryParams
            ? fetchUrl = `${baseUrlApi}/${resource}?${queryParams}`
            : fetchUrl = `${baseUrlApi}/${resource}`;

        const controller = new AbortController();
        const { signal } = controller;

        const res = await fetch(fetchUrl, {
            headers: {
                Authorization: `Bearer ${envResolver.apiKey}`,
            },
            signal,
        });

        if (!res.ok) {
            controller.abort;
            throw new Error(`Failed to retrieve data / Error: ${res.status}`);
        }

        const data = await res.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}