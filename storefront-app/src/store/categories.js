import superagent from 'superagent' ;

let initialState = {
    categories: [
        // { name: 'electronics', displayName: 'Elecronics', discription: 'here is the discription for electronnics' },
        // { name: 'clothing', displayName: 'Clothing', discription: 'here is the discription for clothing' },
        // { name: 'books', displayName: 'Books', discription: 'here is the discription for books' },
        // { name: 'food', displayName: 'Food', discription: 'here is the discription for food' },
    ],
    activeCategory: '',
};

// reducer
export default (state = initialState, action) => {
    // update the state based on an action
    // select
    let { type, payload } = action;
console.log('payload---------',payload);
    switch (type) {
        case 'GETCATEG':
            return payload;

        case 'SELECT':
            let activeCategory = payload;
            //  state.activeCategory = payload;
            // return {...state };

            console.log('activeCategory,,,,,,',activeCategory)
            let categories = state.categories.map((item,idx) => {
                if (item.name === payload) {
                    return { name: item.name, displayName : item.displayName ,
                        desciption: item.desciption }
                } 
                    return item;
            });
            // return the updated state.
            return { categories, activeCategory };
            
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
        type: 'GETCATEG',
        payload: payload
    }
}
