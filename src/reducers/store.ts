import { AsyncStorage } from 'react-native';
import { applyMiddleware, compose, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { persistReducer, persistStore } from 'redux-persist';
import rootEpics from '../epics/rootEpics';
import rootReducer from './rootReducer';

const epicMiddleware = createEpicMiddleware();

const persistConfig: any = {
    storage: AsyncStorage,
    key: 'root',
    whitelist: ['contactReducer']
};

const reducer = persistReducer(persistConfig, rootReducer());

const epics = rootEpics();

export const configureStore = () => {
    const store = createStore(reducer, {}, compose(applyMiddleware(epicMiddleware)));
    epicMiddleware.run(epics);
    const persistor = persistStore(store);
    return { store, persistor };
};
