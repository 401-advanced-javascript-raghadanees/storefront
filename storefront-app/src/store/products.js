// let initialState = {
//     products: [
//         { name: 'TV', category: 'electronics', price: '699.00$',image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqYR-5CA7dk93vGvc4CdvXEI9xffTStrqbkQ&usqp=CAU' },
//         { name: 'IPhone', category: 'electronics', price: '99.00$', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjRlOPQ_IcdqUQVcO1B74DZDu4102fpDDTVw&usqp=CAU' },
//         { name: 'Jaket', category: 'clothing', price: '12.00$',image: '' },
//         { name: 'Shirt', category: 'clothing', price: '10.00$',image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQt-x83Hz_sxOeBMHAyyOdR812g9uiM2N1K7w&usqp=CAU' },
//         { name: 'Dipiro', category: 'books', price: '10.99$ ',image: ''},
//         { name: 'Katzung', category: 'books', price: '15.99$',image: 'https://i.pinimg.com/originals/9d/3b/56/9d3b56be29e108f4b63a348cd7c4549b.png' },
//         { name: 'olivs', category: 'food', price: '1.99$',image: '' },
//         { name: 'Bread', category: 'food', price: '2.39$',image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQcBJKXZzRsx38eCCZtvE_JAY6xjXm-FLRJRg&usqp=CAU'},
//     ],
//     results: [],
// }

import superagent from 'superagent';
// {
//     "_id": "5f985ae8b473c50024f77ea7",
//     "name": "Apple AirPods ",
//     "category": "Electronics",
//     "description": "Apple AirPods with Charging Case (Wired)",
//     "price": 154.92,
//     "inStock": 14,
//     "__v": 0
//     }
// https://as-app-server.herokuapp.com/api/v1/products

let initialState ={
    products: [],
    results: [],
}

export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'GET':
            return payload;

        case 'CHOOSE':
            let products = state.products;
            let results = state.products.filter((item,idx)=> {
                console.log('payload <=======>', payload);
                return item.category === payload.name;
            });
            console.log('results >>',results);
            return { results, products };

        default:
            return state;
    }
}

let api = 'https://as-app-server.herokuapp.com/api/v1/products'
// action creator is a function that returns an object ====>>> in normal cases
// return a function from my action creator
export const getRemoteData = () => (dispatch) => {
    // return a fucntion that will call superagent API
    return superagent.get(api).then(data=> {
        // call my action after getting the API response.
        dispatch(getAction(data.body));
    });
}

// action creator function 
const getAction = payload => {
    return {
        type: 'GET',
        payload: payload
    }
}

// action 
export const chooseList = (clicked) => {
    return {
        type: 'CHOOSE',
        payload: clicked
    }
}

