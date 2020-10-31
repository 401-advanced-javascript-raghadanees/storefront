import superagent from 'superagent';

let initialState = {
    cartItem: [],
    // count: 0
}

///reducer
// eslint-disable-next-line
export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'GET-CART':

            console.log('payloaaaad--GET cart', payload)
            payload.results.forEach(element => {
                console.log('element >',element);
                if(state.cartItem.length < 3){
                state.cartItem.push(element)
                }
              });
            // return { ...state.cartItem }
            return { ...state}

        case 'ADD-CART':

         state.cartItem.push(payload);
            return { ...state };

        case 'REMOVE-CART':
            // state.cartItem.splice(state.cartItem.indexOf(payload), 1);
            state.cartItem.splice(payload, 1);
            return { ...state };

        default:
            return state;
    }
}



let api = 'https://todos-api1.herokuapp.com/api/v1/carts';

export const getCartAPI = () => dispatch => {
  return superagent.get(api)
    .then(data => {
      dispatch(getCart(data.body))
    });
}

export const createCart = (cartData) => dispatch => {
  console.log('cartData ===>',cartData);
  return superagent.post(api).send(cartData).then()
}


export const updateRemoteCart = (cartData) => async dispatch => {
  console.log('cartData,,,,,,,', cartData);
  await superagent.put(`${api}/${cartData[0]._id}`).send(cartData);
}



export const getCart = (items) => {
    return {
        type: 'GET-CART',
        payload: items
    }
}
export const addToCart = (AddedItem) => {
    return {
        type: 'ADD-CART',
        payload: AddedItem
    }
}

export const removeFromCart = (removedItem) => {
    return {
        type: 'REMOVE-CART',
        payload: removedItem
    }
}