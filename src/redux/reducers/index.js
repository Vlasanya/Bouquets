
import bouquetsReducer from './bouquets';
import filterReducer from './filters';
import cartReducer from './cart';


const rootReducer = {
    filters: filterReducer, 
    bouquets: bouquetsReducer,
    cart: cartReducer,
};

export default rootReducer;