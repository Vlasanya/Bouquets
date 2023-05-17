export const addBouquetToCart = (bouquetObj) => ({
    type: 'ADD_BOUQUET_CART',
    payload: bouquetObj,
});

export const clearCart = () => ({
    type: 'CLEAR_CART',
});
export const removeCartItem = (id) => ({
    type: 'REMOVE_CART_ITEM',
    payload: id,
});
export const plusItem = (id) => ({
    type: 'PLUS_ITEM',
    payload: id,
});
export const minusItem = (id) => ({
    type: 'MINUS_ITEM',
    payload: id,
})
