

// this is the initial State that is the object
//that they want us to use
export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
}

// Empty reducer
export const theReducer = (state, action) => {
    switch ("") {
        case "":
            return {
                ...state,
                "": ""
            }
        default:
            return state;
    }
}
