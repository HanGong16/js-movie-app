import { Store } from '../core/heropy.js';
import config from '../apikey.js';

const API_KEY = config.API_KEY;
const store = new Store({
  searchText: '',
  page: 1,
  movies: [],
});

export default store;

export const searchMovies = async (page) => {
  if (page === 1) {
    store.state.page = 1;
    store.state.movies = [];
  }
  const res = await fetch(
    `https://www.omdbapi.com/?apikey=${API_KEY}&s=${store.state.searchText}&page=${page}`
  );
  const { Search } = await res.json();
  console.log(Search);
  store.state.movies = [...store.state.movies, ...Search];
};
