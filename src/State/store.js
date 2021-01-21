import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import { reducers, sagas } from './Features';

export default function configureStore(initialState) {
    const sagaMiddleware = createSagaMiddleware();
    const middlewares = [sagaMiddleware];

    const composeEnhancers = composeWithDevTools({});
    const store = createStore(
        reducers,
        initialState,
        composeEnhancers(
            applyMiddleware(
                ...middlewares,
            ),
        ),
    );

    let sagaTask = sagaMiddleware.run(sagas);
    if (module.hot) {
        // Enable Webpack hot module replacement for reducers
        module.hot.accept('./Features', () => {
          /* eslint-disable-next-line */
          const { reducers, sagas } = require('./Features');
    
          store.replaceReducer(reducers);
          sagaTask.cancel();
          sagaTask.done.then(() => {
            sagaTask = sagaMiddleware.run(sagas);
          });
        });
      }
      return store;
}