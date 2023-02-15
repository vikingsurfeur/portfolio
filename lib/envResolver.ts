export const envResolver = {
    apiUrl: process.env.HOST_URL,
    apiKey: process.env.API_TOKEN_SALT,
};

export const baseUrlApi = `${envResolver.apiUrl}`;