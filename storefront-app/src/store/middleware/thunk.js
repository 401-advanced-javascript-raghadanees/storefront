// instead npm i redux-thunk
// and no need to add this manually created middleware

// we can either use this small manul version or install redux-thunk
export default store => next => action => {
    console.log("action >>> ",action)
    typeof action == 'function' 
    ? action(store.dispatch, store.getState)
    : next(action);
}