import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

export const applyMiddlewares = [ReduxThunk];
const createStoreWithMiddleWare = applyMiddleware(...applyMiddlewares)(createStore);


export default createStoreWithMiddleWare(rootReducer);
