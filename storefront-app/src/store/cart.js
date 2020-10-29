// import superagent from 'superagent';

let initialState = {
    cartContent: [],
    // count: 0
}

///reducer
export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        // case 'GET-CART':

        //     console.log('payloaaaad--GET', payload)

        //     return { ...state.cartContent }

        case 'ADD-CART':

           let updated = state.cartContent.push(payload);
            return { ...state, updated };

        case 'REMOVE-CART':
            state.cartContent.splice(state.cartContent.indexOf(payload), 1);
            // state.cartContent.splice(payload, 1);
            return { ...state };

        default:
            return state;
    }
}







// export const getCart = (items) => {
//     return {
//         type: 'GET-CART',
//         payload: items
//     }
// }
export const addToCart = (item) => {
    return {
        type: 'ADD-CART',
        payload: item
    }
}

export const removeFromCart = (item) => {
    return {
        type: 'REMOVE-CART',
        payload: item
    }
}