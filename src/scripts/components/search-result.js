import './movie-item';

class SearchResult extends HTMLElement {
    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    renderError(message) {
        this.innerHTML = `
            <div class="text-center">
                <p class="text-2xl font-semibold">${message}</p>
            </div>
        `;
    }

    render() {
        this.innerHTML = '';
        this._movies.forEach((movie) => {
            const movieItemElement = document.createElement('movie-item');
            movieItemElement.className =
                'flex-none w-2/6 md:w-1/6 mr-8 md:pb-4 rounded-lg';
            movieItemElement.movie = movie;
            this.appendChild(movieItemElement);
        });
    }
}

customElements.define('search-result', SearchResult);
