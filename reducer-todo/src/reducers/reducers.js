// this is the initial State that is the object
//that they want us to use
export const initialState = {
    todoItems: [
        {
            item: 'Enter a New ToDo!',
            completed: false,
            id: 38929889
        },
        {
            item: 'Click a ToDo to finish',
            completed: true,
            id: 389889
        },
    ]
}

// Empty reducer
export const theReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_ITEM":
            const toggleTodo = state.todoItems.map(todo => {
                if (todo.id === action.payload.id) {
                    return { ...todo, completed: !todo.completed }
                } else {
                    return todo;
                }
            })

            return {
                ...state,
                todoItems: toggleTodo

            }
        case "ADD_ITEM":
            return {
                ...state,
                todoItems: [...state.todoItems, {
                    item: action.payload,
                    id: Date.now(),
                    completed: false
                }]
            }
        case 'CLEAR_TODO':
            const clearTodos = state.todoItems.filter(todo => todo.completed !== true);

            return {
                ...state,
                todoItems: clearTodos,
            };
        default:
            return state;
    }
}
