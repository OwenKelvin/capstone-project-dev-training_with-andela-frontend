import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/root.reducer';

const configureStore = (initialState = {}) => {
    return createStore(rootReducer, initialState, applyMiddleware(thunk));
}

export default configureStore;
