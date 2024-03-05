import { Component } from '../core/heropy.js';

export default class TheHeader extends Component {
  constructor() {
    super({
      tagName: 'header',
      state: {
        menus: [
          {
            name: 'Search',
            href: '#/',
          },
          {
            name: 'Movie',
            href: '#/movie?id=tt4520988',
          },
          {
            name: 'About',
            href: '#/about',
          },
        ],
      },
    });
  }
  render() {
    this.el.classList.add('header');
    this.el.innerHTML = /*HTML*/ `
    <a hre='#/' class='logo'><span>OMDBAPI</span>.COM</a>
    <nav>
      <ul>
        ${this.state.menus.map((menu) => {
          return `<li><a href='${menu.href}'>${menu.name}</a></li>`.join('');
        })}
         
  </ul>
  <a href='#/about' class='user'>
    <img src='https://avatars.githubusercontent.com/u/136865653?v=4' alt='User' />
  </a>
  </nav>
    `;
  }
}
