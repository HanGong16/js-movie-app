import { Store } from '../core/heropy.js';
import config from '../apikey.js';

const API_KEY = config.API_KEY;
const store = new Store({
  searchText: '',
  page: 1,
  pageMax: 1,
  movies: [],
  loading: false,
});

export default store;

export const searchMovies = async (page) => {
  store.state.page = page;
  store.state.loading = true;
  if (page === 1) {
    store.state.movies = [];
  }
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${store.state.searchText}&page=${page}`
  );
  const { Search, totalResults } = await res.json();

  store.state.movies = [...store.state.movies, ...Search];

  store.state.pageMax = Math.ceil(Number(totalResults) / 10);
  store.state.loading = false;
};
