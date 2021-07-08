import React from 'react';

import Todo from './Todo';
import TodoForm from './TodoForm';

const TodoList = ({ dispatch, state }) => {
    return (
        <div className="task-list">
            {state.todoItems.map(item => (
                <Todo key={item.id} item={item} dispatch={dispatch} />
            ))}
            <div className="sameLine">
                <TodoForm dispatch={dispatch} />

                <button className="clear-btn" onClick={() => dispatch({ type: 'CLEAR_TODO' })}>
                    Clear Finished
      </button>
            </div>
        </div>
    );
};

export default TodoList;
