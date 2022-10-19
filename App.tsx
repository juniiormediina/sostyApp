import React from 'react';
import {Provider} from 'react-redux';
import {Routes} from './src/routes/index.routes';
import {Store} from './src/store/store';

const App = () => {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
};

export default App;
