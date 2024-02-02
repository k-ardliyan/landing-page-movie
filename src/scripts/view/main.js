import DataSource from '../datas/data-source';
import '../components/nav-bar';
import '../components/search-result';
import '../components/movie-list';

const navbarElement = document.querySelector('nav-bar');
const navbarSearchElement = document.querySelector('#navbar-search');
const formSearchElement = document.querySelector('#formSearchMovie');
const inputSearchElement = document.querySelector('#inputSearchMovie');
const searchButtonNavElement = document.querySelector('#searchButtonNav');
const searchButtonHeroElement = document.querySelector('#searchButtonHero');
const searchSectionElement = document.querySelector('#searchSection');
const movieResultElement = document.querySelector('#movieResult');
const movieTrendingElement = document.querySelector('#movieTrending');

const fecthMovieTrending = async () => {
    try {
        const result = await DataSource.fecthData('trending', 'movie/day');
        movieTrendingElement.movies = result;
    } catch (e) {
        console.log(e);
    }
};

const showSearchResult = (query) => {
    searchSectionElement.classList.remove('hidden');
    searchSectionElement.scrollIntoView({ behavior: 'smooth' });
    searchSectionElement.querySelector(
        'h2'
    ).textContent = `Result for "${query}"`;
    navbarElement.emptyInput();
};

const fallbackSearchResult = (message) => {
    searchSectionElement.classList.remove('hidden');
    searchSectionElement.scrollIntoView({ behavior: 'smooth' });
    movieResultElement.renderError(message);
};

const submitSearchForm = async (e) => {
    try {
        e.preventDefault();
        const query = inputSearchElement.value;
        if (query) {
            const result = await DataSource.searchMovie(query);
            if (result.length > 0) {
                showSearchResult(query);
                searchSectionElement.scrollIntoView({ behavior: 'smooth' });
                movieResultElement.movies = result;
            } else {
                showSearchResult(query);
                searchSectionElement.scrollIntoView({ behavior: 'smooth' });
                fallbackSearchResult('No movie found');
            }
            navbarSearchElement.classList.add('hidden');
            inputSearchElement.value = '';
            searchButtonNavElement.setAttribute('aria-expanded', 'false');
        }
    } catch (e) {
        console.log(e);
    }
};

formSearchElement.addEventListener('submit', submitSearchForm);

searchButtonHeroElement.addEventListener('click', () => {
    navbarSearchElement.classList.toggle('hidden');
    inputSearchElement.focus();
});

searchButtonNavElement.addEventListener('click', () => {
    navbarSearchElement.classList.toggle('hidden');
    inputSearchElement.focus();
});

const ViewData = () => {
    fecthMovieTrending();
};

export default ViewData;
