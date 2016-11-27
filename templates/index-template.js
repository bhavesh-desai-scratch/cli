const {slug, camel} = require('to-case');

module.exports = {
  routeTemplate(name) {
    const container = `${name}Container`;

    return `import {injectReducer} from 'store/reducers';
import { NotificationsConnected } from '../../containers/Notifications/Notifications';

export const ${name} = (store) => {
  return {
    path: '${slug(name)}',
    getComponent: (nextState, cb) => {

      //Lazy-load module
      require.ensure([], (require) => {
        const ${container} = require('./components/${container}').${container};

        const reducer = require('./reducer').reducer;
        injectReducer(store, { key: '${camel(name)}', reducer: reducer });

        cb(null, { main: ${name}, sidebar: NotificationsConnected });
      }, '${slug(name)}');
    }
  };
};`
  }
};

