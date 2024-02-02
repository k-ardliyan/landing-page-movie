import './movie-item';

class MovieList extends HTMLElement {
    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    render() {
        this._movies.forEach((movie) => {
            const movieItemElement = document.createElement('movie-item');
            movieItemElement.className =
                'flex-none w-2/6 md:w-1/6 mr-8 md:pb-4 rounded-lg';
            movieItemElement.movie = movie;
            this.appendChild(movieItemElement);
        });
    }
}

customElements.define('movie-list', MovieList);
