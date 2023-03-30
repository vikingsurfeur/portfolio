import { baseUrlApi, envResolver } from "./envResolver"

export const fetcher = async (params: string) => {
    try {
        const res = await fetch(`${baseUrlApi}/${params}`, {
            headers: {
                Authorization: `Bearer ${envResolver.apiKey}`,
            },
        })

        if (!res.ok) {
            throw new Error(`Failed to retrieve data`)
        }

        const data = await res.json();

        return data;
    } catch (error) {
        console.error(error);
    }
}