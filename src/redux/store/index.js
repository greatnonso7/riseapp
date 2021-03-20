import { init } from '@rematch/core';
import logger from 'redux-logger';

export default init({
  redux: {
    middlewares: [logger],
  },
  devtoolOptions: {},
  rootReducers: { RESET_APP: () => undefined },
});
