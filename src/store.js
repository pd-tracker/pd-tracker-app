import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const initialState = {

};

const middleware = applyMiddleware(
    thunk,
    logger,
);

export default store = createStore(
    rootReducer,
    initialState,
    middleware
);
