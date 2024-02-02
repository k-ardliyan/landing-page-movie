import axios from 'axios';
import { API_ROOT, API_VERSION, API_KEY } from '../services/services';

class DataSource {
    static searchMovie(keyword) {
        return axios
            .get(
                `${API_ROOT}/${API_VERSION}/search/movie?api_key=${API_KEY}&query=${keyword}`
            )
            .then((response) => {
                if (response) {
                    return Promise.resolve(
                        response.data.results.map((movie) => {
                            movie.container = 'search';
                            return movie;
                        })
                    );
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            });
    }

    static fecthData(path, params) {
        return axios
            .get(
                `${API_ROOT}/${API_VERSION}/${path}/${params}?api_key=${API_KEY}`
            )
            .then((response) => {
                if (response) {
                    return Promise.resolve(
                        response.data.results.map((movie) => {
                            movie.container = path;
                            return movie;
                        })
                    );
                } else {
                    return Promise.reject(`${path} is not found`);
                }
            });
    }
}

export default DataSource;
