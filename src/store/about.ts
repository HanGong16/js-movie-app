import { Store } from '../core/heropy';

interface State{
  photo: string;
  name: string;
  email: string;
  notion: string;
  github: string;
  repository: string;
}

export default new Store<State>({
  photo: 'https://avatars.githubusercontent.com/u/136865653?v=4',
  name: 'HEROPY / KIMHANGYEONG',
  email: 'hgim96715@gmail.com',
  notion:
    'https://www.notion.so/invite/83becc02c3c4f404e16a13966c71594cd5ec4573',
  github: 'https://github.com/HanGong16',
  repository: 'https://github.com/HanGong16/js-movie-app.git',
});
