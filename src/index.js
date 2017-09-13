import { AppContainer } from 'react-hot-loader';
import App from '~/page/temp1/app';

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );
}

render(App);

if (module.hot) {
  module.hot.accept('~/page/temp1/app', () => {
    render(App);
  })
}
