import React from 'react';
import { persistStore } from 'redux-persist';
import { ConnectedRouter } from 'connected-react-router';
import Provider from 'react-redux/es/components/Provider';
import { PersistGate } from 'redux-persist/es/integration/react';
import { ThemeProvider } from '@material-ui/core/styles';

import { configureStore, history } from 'configureStore';
import AppRoutes from 'navigation';
import theme from './theme';

export const store = configureStore();
const persistor = persistStore(store);

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ConnectedRouter history={history}>
            <AppRoutes />
          </ConnectedRouter>
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
};

export default App;
