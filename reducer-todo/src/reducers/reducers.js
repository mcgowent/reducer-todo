// this is the initial State that is the object
//that they want us to use
export const initialState = {
    todoItems: [
        {
            item: 'Learn',
            completed: false,
            id: 38929889
        },
        {
            item: 'Learn about',
            completed: false,
            id: 32987589
        },
        {
            item: 'Learn about reducers',
            completed: false,
            id: 389298789
        }
    ]
}

// Empty reducer
export const theReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_ITEM":
            return {
                ...state,
                completed: !state.completed

            }
        case "ADD_ITEM":
            return {
                ...state,
                todoItems: [...state.todoItems, action.payload]
            }
        default:
            return state;
    }
}
