import axios from "axios";

export const httpClient = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: `Bearer <TOKEN>`,
    }
});

