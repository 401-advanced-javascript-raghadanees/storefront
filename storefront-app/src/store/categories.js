import superagent from 'superagent' ;

let initialState = {
    categories: [],
    activeCategory: 'Electronics',
};

// reducer
export default (state = initialState, action) => {
    // update the state based on an action
    // select
    let { type, payload } = action;
console.log('payload---------',payload);
    switch (type) {
        case 'GET-CATEG':
            return { ...state, categories: payload };

        case 'SELECT':
            // let activeCategory = payload;
            //  state.activeCategory = payload;
            // return {...state };
            // console.log('activeCategory,,,,,,',activeCategory);
            // return the updated state.
            return { ...state, activeCategory: payload };
            
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

let api = 'https://as-app-server.herokuapp.com/api/v1/categories'
// action creator is a function that returns an object ====>>> in normal cases
// return a function from my action creator
export const getCategoriesData = () => (dispatch) => {
    // return a fucntion that will call superagent API
    return superagent.get(api).then(data=> {
        // call my action after getting the API response.
        dispatch(getAction(data.body.results));
    });
}

// action creator function 
const getAction = payload => {
    console.log('payloaaaaaaddddd-GET-CATEG',payload)
    return {
        type: 'GET-CATEG',
        payload: payload
    }
}

// categories: [
//     // { name: 'electronics', displayName: 'Elecronics', discription: 'here is the discription for electronnics' },
//     // { name: 'clothing', displayName: 'Clothing', discription: 'here is the discription for clothing' },
//     // { name: 'books', displayName: 'Books', discription: 'here is the discription for books' },
//     // { name: 'food', displayName: 'Food', discription: 'here is the discription for food' },
// ],