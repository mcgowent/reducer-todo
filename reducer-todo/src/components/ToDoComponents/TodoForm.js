import React, { useState } from 'react';

const TodoForm = (props) => {
    const [newToDo, setNewToDo] = useState('')

    const handleChanges = e => {
        setNewToDo(e.target.value);
    };

    const submitItem = e => {
        e.preventDefault();
        if (newToDo !== '') {
            props.dispatch({ type: 'ADD_ITEM', payload: newToDo })
            setNewToDo('')
        }
    };

    return (
        <form className="sameLine" onSubmit={submitItem}>
            <input
                type="text"
                value={newToDo}
                name="item"
                onChange={handleChanges}
            />
            <button>Add</button>
        </form>
    );
}


export default TodoForm;
