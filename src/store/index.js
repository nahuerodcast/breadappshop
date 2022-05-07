import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import categoryReducer from '../store/reducers/category.reducer';
import productReducer from '../store/reducers/product.reducer';

const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
