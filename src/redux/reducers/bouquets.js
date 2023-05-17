const initialState = {
    items: [],
    isLoaded: false, 
}
const bouquets = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_BOUQUETS':
            return {...state,
            items: action.payload,
            isLoaded: true,};
          
        case 'SET_LOADED':
            return {
                ...state,
                isLoaded: action.payload,
            }
          
        default: return  state;
    }
};

export default bouquets;