import * as React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Routes from './Routes';
import { configureStore } from './reducers/store';

const { store, persistor } = configureStore();

export const App = () => (
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <Routes />
        </PersistGate>
    </Provider>
);
