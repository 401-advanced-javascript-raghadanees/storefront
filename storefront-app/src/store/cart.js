
let initialState = {
    cart: [],
    count: 0
}
///reducer
export default (state = initialState, action) => {
    let { type, payload } = action;
    let count = state.count;
    let cart = state.cart;

    switch (type) {
        case 'cart':
            let length = state.cart.length;
            payload = { ...payload, id: length + 1 } 

            count = state.count + 1;
            return { cart: [...state.cart, payload], count }

        case 'removeFromCart':

            cart = cart.filter(item => {
                if (item.id !== payload.id) {
                    return item;
                }
            });

            count = state.count - 1;
            return {  cart, count };

        default:
            return state;
    }

}


export const addToCart = (add) => {
    return {
        type: 'cart',
        payload: add
    }
}


export const removeFromCart = (remove) => {
    return {
        type: 'removeFromCart',
        payload: remove
    }
}