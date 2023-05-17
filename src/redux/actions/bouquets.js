import axios from "axios";



export const setLoaded = (payload) => ({
    type: "SET_LOADED",
    payload,
})

export const fetchBouquets = (sortBy, category)  => (dispatch) => { // async acttion
    dispatch({
        type: 'SET_LOADED',
        payload: false,
       });
    axios
        .get(
            `/bouquets?${
                category !== null ? `category=${category}`: ''}&_sort=${sortBy}&_order=asc=desc`).then(({ data }) => {
       dispatch(setBouquets(data))
      });
}
 export const setBouquets = (items) => ({
    type: 'SET_BOUQUETS',
    payload: items,
});


