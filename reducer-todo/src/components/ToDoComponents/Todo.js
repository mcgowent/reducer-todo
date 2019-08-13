import React, { useReducer } from 'react'

import { initialState, theReducer } from '../../reducers/reducers'




const Todo = props => {
    const [state, dispatch] = useReducer(theReducer, initialState);

    // props.toggleItem(props.item.id)

    return (
        <div
            className={`item${state.completed ? ' completed' : ''}`}
            onClick={() => dispatch({ type: 'TOGGLE_ITEM' })}
        >
            <p>{props.item.item}</p>
        </div>
    );
};

export default Todo;
