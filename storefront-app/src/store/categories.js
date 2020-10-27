let initialState = {
    categories: [
        { name: 'electronics', displayName: 'Elecronics', discription: 'here is the discription for electronnics' },
        { name: 'clothing', displayName: 'Clothing', discription: 'here is the discription for clothing' },
        { name: 'books', displayName: 'Books', discription: 'here is the discription for books' },
        { name: 'food', displayName: 'Food', discription: 'here is the discription for food' },

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
        case 'SELECT':
            let activeCategory = payload;
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

