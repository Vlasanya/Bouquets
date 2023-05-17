const initialState = {
    items: {},
    totalPrice: 0,
    totalCount: 0,
}

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const _get = (obj, path) => {
    const [firstKey, ...keys] = path.split('.');
    return keys.reduce((val, key) => {
        return val[key];
}, obj[firstKey]);
};

const getTotalSum = (obj, path) => {
    return Object.values(obj).reduce((sum, obj) => {
        const value = _get(obj, path);
        return sum + value;
    }, 0)
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_BOUQUET_CART':{
            const currentBouquetItems = !state.items[action.payload.id] 
                                        ? [action.payload] 
                                        : [...state.items[action.payload.id].items, action.payload];

            const newItems = {
                ...state.items,
                    [action.payload.id]: 
                    {
                        items: currentBouquetItems, 
                        totalPrice: getTotalPrice(currentBouquetItems),  
                    }
            }
            // const items =  Object.values(newItems).map((obj) => obj.items);
            // const allBouquets = [].concat.apply([], items);
            const totalPrice = getTotalSum(newItems, 'totalPrice');
            const totalCount = getTotalSum(newItems, 'items.length');
            
            return {...state,
                items: newItems,
                totalCount,
                totalPrice,
            };
        };
        case 'CLEAR_CART':
            return {
                totalCount: 0,
                totalPrice: 0,
                items: {},
            };
        case 'PLUS_ITEM':{
            const newObjItems = [
                ...state.items[action.payload].items,
                state.items[action.payload].items[0]
            ];

            const newItems = { 
                ...state.items,
                [action.payload]: {
                    items: newObjItems, 
                    totalPrice: getTotalPrice(newObjItems),  
                },

            };
            const totalPrice = getTotalSum(newItems, 'totalPrice');
            const totalCount = getTotalSum(newItems, 'items.length');
            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };}


        case 'MINUS_ITEM':{
            const oldItems = state.items[action.payload].items;
            const newObjItems = oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;

            const newItems = { 
                ...state.items,
                [action.payload]: {
                    items: newObjItems, 
                    totalPrice: getTotalPrice(newObjItems),  
                },

            };
            const totalPrice = getTotalSum(newItems, 'totalPrice');
            const totalCount = getTotalSum(newItems, 'items.length');
            return {
                ...state,
                items: newItems,
                totalCount,
                totalPrice,
            };}
        case 'REMOVE_CART_ITEM':{
            const newItems = {
                ...state.items
            };
            const currentTotalPrice = newItems[action.payload].totalPrice;
            const currentTotalCount = newItems[action.payload].items.length;
            delete newItems[action.payload];
                return {
                    ...state,
                    items: newItems,
                    totalPrice: state.totalPrice - currentTotalPrice,
                    totalCount: state.totalCount - currentTotalCount,
                };
            }

          
        default: 
            return  state;
    }
};

export default cart;