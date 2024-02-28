import { Component } from '../core/heropy.js';
import movieStore, { searchMovies } from '../store/movie.js';

export default class Search extends Component {
  render() {
    this.el.classList.add('search');
    this.el.innerHTML = /*HTML*/ `
    <input placeholer="Enter the movie title to search!"/>
    <button class='btn btn-primary'>Search!</button>
    `;

    const inputEl = this.el.querySelector('input');
    inputEl.addEventListener('input', (e) => {
      movieStore.state.searchText = inputEl.value;
    });
    inputEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && movieStore.state.searchText.trim()) {
        searchMovies(1);
      }
    });

    const btnEl = this.el.querySelector('button');
    btnEl.addEventListener('click', () => {
      if (movieStore.state.searchText.trim()) {
        searchMovies(1);
      }
    });
  }
}
