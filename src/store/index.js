import {createStore, combineReducers} from 'redux';

import categoryReducer from '../store/reducers/category.reducer';
import productReducer from '../store/reducers/product.reducer';

const rootReducer = combineReducers({
  cateories: categoryReducer,
  products: productReducer,
});

export default createStore(rootReducer);
