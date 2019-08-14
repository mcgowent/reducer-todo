import React, { useReducer } from 'react'


const Todo = ({ item, dispatch }) => {
    return (

        <div
            className={`item${item.completed ? ' completed' : ''}`}
            onClick={() => dispatch({ type: 'TOGGLE_ITEM', payload: item })}
        >
            <p>{item.item}</p>
        </div>
    );
};

export default Todo;
