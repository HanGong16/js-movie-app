import { Component } from '../core/heropy';
import aboutStore from '../store/about';

export default class TheFooter extends Component {
  constructor() {
    super({
      tagName: 'footer',
    });
  }
  render() {
    const { repository, github } = aboutStore.state;
    this.el.innerHTML = /*HTML*/ `
    <div><a href='${repository}'>Github Repository</a></div>
    <div>
     <a href='${github}'>
     ${new Date().getFullYear()} HEROPY
     </a>
    </div>
    `;
  }
}
