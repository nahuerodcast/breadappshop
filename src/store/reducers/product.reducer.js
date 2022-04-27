import {PRODUCTS} from '../../constants/products';

const initialState = {
  products: PRODUCTS,
  filteredProducts: [],
  selectedProducty: null,
};

const productReducer = (state = initialState, action) => {
  return state;
};

export default productReducer;
