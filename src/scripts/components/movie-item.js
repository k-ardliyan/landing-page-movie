import { IMAGE_PATH } from '../services/services';
import {
    convertDateToYear,
    convertRoundNumber,
    limitText,
} from '../utils/utils';

class MovieItem extends HTMLElement {
    set movie(movie) {
        this._movie = movie;
        this.render();
    }

    render() {
        const {
            id,
            poster_path,
            title,
            release_date,
            vote_average,
            overview,
            container,
        } = this._movie;

        this.innerHTML = `
            <div class="cursor-pointer space-y-4 button-modal" data-modal-target="${id}-${container}-modal" data-modal-toggle="${id}-${container}-modal" data-movie="${id}">
                <img class="object-cover shadow-md hover:shadow-xl rounded-lg"
                    src="${IMAGE_PATH}/${poster_path}"
                    alt="${title} Poster" />
                <div class="flex justify-between px-4 py-2 flex-col md:flex-row gap-2">
                    <div class="leading-6 font-medium space-y-1">
                        <h3 class="font-bold text-gray-800 text-md md:text-lg">
                            ${limitText(title)}
                        </h3>
                        <p class="text-base">
                            ${convertDateToYear(release_date)}
                        </p>
                    </div>
                    <div class="flex items-center flex-row md:flex-col md:justify-center">
                        <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path
                                d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                        <p class="text-sm font-bold text-gray-900 dark:text-white">${convertRoundNumber(
                            vote_average
                        )}</p>
                    </div>
                </div>
            </div>
            <div id="${id}-${container}-modal" tabindex="-1" aria-hidden="true" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                <div class="relative p-4 w-full max-w-2xl max-h-full">
                    <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                                Detail Movie
                            </h3>
                            <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="${id}-${container}-modal">
                                <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span class="sr-only">Close modal</span>
                            </button>
                        </div>
                        <!-- Modal body -->
                        <div class="p-4 md:p-5 space-y-4">
                            <div class="flex flex-col md:flex-row">
                                <img class="h-auto w-48 rounded-lg self-center justify-self-center"
                                    src="${IMAGE_PATH}/${poster_path}"
                                    alt="">
                                <div class="flex flex-col p-4 leading-normal">
                                    <h3 class="mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        ${title}
                                        <span class="text-sm font-normal text-gray-500 dark:text-gray-400">(${convertDateToYear(
                                            release_date
                                        )})</span>
                                    </h3>
                                    <div class="mb-2 flex items-center gap-2">
                                        <span class="inline-flex items-center">
                                            <svg class="w-4 h-4 text-yellow-300 me-1" aria-hidden="true"
                                                xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                <path
                                                    d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                            </svg>
                                            <p class="text-sm font-bold text-gray-900 dark:text-white">${convertRoundNumber(
                                                vote_average
                                            )}</p>
                                        </span>
                                        <span
                                            class="inline-flex items-center text-xs font-medium before:bg-slate-800 before:h-2 before:w-2 before:rounded-full before:mr-2">
                                            ${release_date}
                                        </span>
                                    </div>
                                    <div class="font-normal">
                                        <h4 class="font-bold">Overview</h4>
                                        <p class="mb-3 text-gray-700 dark:text-gray-400">
                                            ${overview}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Modal footer -->
                        <div class="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                            <button data-modal-hide="${id}-${container}-modal" type="button" class="ms-auto text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('movie-item', MovieItem);
