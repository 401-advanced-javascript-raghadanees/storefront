import superagent from 'superagent' ;

let initialState = {
    results: [],
    activeCategory: 'Electronics',
};

// reducer
// eslint-disable-next-line
export default (state = initialState, action) => {
    // update the state based on an action
    // select
    let { type, payload } = action;
console.log('payload---------',payload);

    switch (type) {
        case 'GET-CATEGORIES':
            // return { ...state, categories: payload };
            return payload;
        case 'SELECT':
           
            state.activeCategory = payload;
            return {...state };
            
        default : return state;
    }
}

// actions
export const select = (name) => {
    return {
        type: 'SELECT',
        payload: name
    }
}


// let api = 'https://as-app-server.herokuapp.com/api/v1/categories'
// action creator is a function that returns an object ====>>> in normal cases
// return a function from my action creator
export const getCategoriesData = () => (dispatch) => {
    var api = 'https://todos-api1.herokuapp.com/api/v1/categories';
    // return a fucntion that will call superagent API
    return superagent.get(api).then(data=> {
        // call my action after getting the API response.
        // dispatch(getAction(data.body.results));
        dispatch(getAction(data.body));

    });
}

// action creator function 
const getAction = payload => {
    console.log('payloaaaaaaddddd-GET-CATEGORIES',payload)
    return {
        type: 'GET-CATEGORIES',
        payload: payload
    }
}

// categories: [
//     // { name: 'electronics', displayName: 'Elecronics', discription: 'here is the discription for electronnics' },
//     // { name: 'clothing', displayName: 'Clothing', discription: 'here is the discription for clothing' },
//     // { name: 'books', displayName: 'Books', discription: 'here is the discription for books' },
//     // { name: 'food', displayName: 'Food', discription: 'here is the discription for food' },
// ],