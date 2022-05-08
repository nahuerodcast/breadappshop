import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

//reducers
import categoryReducer from '../store/reducers/category.reducer';
import productReducer from '../store/reducers/product.reducer';
import cartReducer from '../store/reducers/cart.reducer';

const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
