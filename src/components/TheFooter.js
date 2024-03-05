import { Component } from '../core/heropy.js';

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer',
    });
  }
  render() {
    this.el.innerHTML = /*HTML*/ `
    <div><a href='https://github.com/HanGong16/js-movie-app.git'>Github Repository</a></div>
    <div>
     <a href='https://github.com/HanGong16'>
     ${new Date().getFullYear()} HEROPY
     </a>
    </div>
    `;
  }
}
