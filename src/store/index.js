import {combineReducers, createStore} from 'redux';

import categoryReducer from '../store/reducers/category.reducer';
import productReducer from '../store/reducers/product.reducer';

const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productReducer,
});

export default createStore(rootReducer);
