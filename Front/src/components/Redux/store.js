import { applyMiddleware, compose, createStore } from 'redux';
import reducer from './reducer';
import thunkMiddleware from 'redux-thunk';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;     // Esta linea es para conectar con la extensión del navegador => REDUX DEVTOOOLS

const store = createStore(
    reducer,
    composeEnhancer(applyMiddleware(thunkMiddleware))       // Esta linea es para poder hacer peticiones a un server
);


export default store;