import axios from 'axios';
import { API_ROOT, API_VERSION, API_KEY } from '../services/services';

const movieClient = axios.create({
    baseURL: `${API_ROOT}/${API_VERSION}`,
    params: {
        api_key: API_KEY,
    },
});

class DataSource {
    static async searchMovie(keyword) {
        try {
            const response = await movieClient.get(`search/movie`, {
                params: { query: keyword },
            });
            return response.data.results.map((movie) => {
                movie.container = 'search';
                return movie;
            });
        } catch (e) {
            return `${keyword} is not found`;
        }
    }

    static async fecthData(path, params) {
        try {
            const response = await movieClient.get(`${path}/${params}`);
            return response.data.results.map((movie) => {
                movie.container = path;
                return movie;
            });
        } catch (e) {
            return `${path} is not found`;
        }
    }
}

export default DataSource;
