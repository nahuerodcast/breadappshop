import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

//reducers
import categoryReducer from '../store/reducers/category.reducer';
import productReducer from '../store/reducers/product.reducer';
import cartReducer from '../store/reducers/cart.reducer';
import authReducer from '../store/reducers/auth.reducer';
import orderReducer from '../store/reducers/order.reducer';

const rootReducer = combineReducers({
  categories: categoryReducer,
  products: productReducer,
  cart: cartReducer,
  auth: authReducer,
  order: orderReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
