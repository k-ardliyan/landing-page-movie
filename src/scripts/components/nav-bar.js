class NavigationBar extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set submitEvent(event) {
        this._submitEvent = event;
        this.render();
    }

    emptyInput() {
        this.querySelector('#inputSearchMovie').value = '';
    }

    get value() {
        return this.querySelector('#inputSearchMovie').value;
    }

    render() {
        this.innerHTML = `
            <nav class="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
                <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" class="flex items-center space-x-3">
                        <img src="mymovielist-logo.png" class="h-8" alt="MyMovieList Logo" />
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">MyMovieList</span>
                    </a>
                    <div class="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <button id="searchButtonNav" type="button" data-collapse-toggle="navbar-search" aria-controls="navbar-search"
                            aria-expanded="false"
                            class="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                            <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                            <span class="sr-only">Search Movie</span>
                        </button>
                    </div>
                    <div class="items-center justify-between hidden w-full md:order-2" id="navbar-search">
                        <form id="formSearchMovie" class="relative mt-3">   
                            <label for="inputSearchMovie" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                            <div class="relative">
                                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                                <input type="search" id="inputSearchMovie" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-teal-500 focus:border-teal-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-teal-500 dark:focus:border-teal-500" placeholder="Search your movie..." required>
                                <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-teal-700 hover:bg-teal-800 focus:ring-4 focus:outline-none focus:ring-teal-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-teal-600 dark:hover:bg-teal-700 dark:focus:ring-teal-800">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        `;

        this.querySelector('#formSearchMovie').addEventListener(
            'submit',
            this._submitEvent
        );
    }
}

customElements.define('nav-bar', NavigationBar);
