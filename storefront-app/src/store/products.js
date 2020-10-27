let initialState = {
    products: [
        { name: 'TV', category: 'electronics', price: '699.00$' },
        { name: 'Radio', category: 'electronics', price: '99.00$' },
        { name: 'Shirt', category: 'clothing', price: '9.00$' },
        { name: 'Socks', category: 'clothing', price: '12.00$' },
        { name: 'Dipiro', category: 'books', price: '10.99$ '},
        { name: 'Katzung', category: 'books', price: '15.99$' },
        { name: 'Eggs', category: 'food', price: '1.99$' },
        { name: 'Bread', category: 'food', price: '2.39$'},
    ],
    results: [],
}

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'choose':
            let products = state.products;
            let results = state.products.filter((item,idx)=> {
                console.log('payload >>', payload);
                return item.category === payload.name;
            });
            console.log('results >>',results);
            return { results, products };

        default:
            return state;
    }
}

// action 
export const chooseList = (clicked) => {
    return {
        type: 'choose',
        payload: clicked
    }
}