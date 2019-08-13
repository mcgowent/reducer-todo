// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React, { useReducer } from 'react';

import { initialState, theReducer } from '../../reducers/reducers'

import Todo from './Todo';
import TodoForm from './TodoForm';


const TodoList = props => {
    const [state, dispatch] = useReducer(theReducer, initialState);
    console.log(state)
    return (
        <div className="task-list">
            {state.todoItems.map(item => (
                <Todo key={item.id} item={item} />
            ))}
            <div className="sameLine">
                <TodoForm addItem={props.addItem} />

                <button className="clear-btn" onClick={props.clearFinished}>
                    Clear Finished
      </button>
            </div>
        </div>
    );
};

export default TodoList;
