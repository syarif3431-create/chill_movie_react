import axios from "axios";

const tmdbApi = axios.create({
    baseURL:'https://api.themoviedb.org/3',
    params: {
        api_key: import.meta.env.VITE_TMDB_KEY,
        language: 'id-ID'
    }
});
tmdbApi.interceptors.request.use((config) => config);
tmdbApi.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API Error (TMDB):", error.response?.data?.status_message || error.message);
        return Promise.reject(error);
    }
);
export default tmdbApi;