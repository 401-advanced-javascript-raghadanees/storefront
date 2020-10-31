
import superagent from 'superagent';

// https://as-app-server.herokuapp.com/api/v1/products

let initialState ={
    products: [],
    results: [],
}
// eslint-disable-next-line
export default (state = initialState, action) => {
    let { type, payload } = action;

    switch (type) {
        case 'GET-PROD':
            return payload;
            // return {...state, products: payload};

        // case 'CHOOSE':
        //     // let products = state.products;
        //     let results = state.products.results.filter((item)=> {
        //         console.log('payload products <=======>', payload);
        //         return item.category === payload.name;
        //     });
        //     console.log('results >>',results);
        //     // return { results, products };
        //     return {...state, results};

        case 'DEC-Stock':
            state.results.forEach((item) => {
                if (item.name === payload.name) item.inStock--;
            });
            return { ...state };

        case 'INC-Stock':
            state.results.forEach((item) => {
                if (item.name === payload.name) item.inStock++;
            });
            return { ...state };

        default:
            return state;
    }
}


// let api = 'https://as-app-server.herokuapp.com/api/v1/products'

// action creator is a function that returns an object ====>>> in normal cases
// return a function from my action creator
export const getProductData = () => (dispatch) => {
    var api = 'https://todos-api1.herokuapp.com/api/v1/products'
    // return a fucntion that will call superagent API
    return superagent.get(api).then(data=> {
        // call my action after getting the API response.
        dispatch(getAction(data.body));
    });
}

// action creator function 
const getAction = payload => {
    return {
        type: 'GET-PROD',
        payload: payload
    }
}

export const decreaseInStock = (name) => {
    return {
        type: 'DEC-Stock',
        payload: name
    }
}

export const increaseInStock = (name) => {
    return {
        type: 'INC-Stock',
        payload: name
    }
}

//// action 
// export const chooseList = (clicked) => {
//     return {
//         type: 'CHOOSE',
//         payload: clicked
//     }
// }

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
