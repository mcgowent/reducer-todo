import React, { useState } from 'react';

const TodoForm = (props) => {
    const [state, setState] = useState({ item: '' })

    const handleChanges = e => {
        setState({
            [e.target.name]: e.target.value
        });
    };

    const submitItem = e => {
        e.preventDefault();
        props.addItem(state.item);
        setState({
            item: ''
        })
    };

    return (
        <form className="sameLine" onSubmit={submitItem}>
            <input
                type="text"
                value={state.item}
                name="item"
                onChange={handleChanges}
            />
            <button>Add</button>
        </form>
    );
}


export default TodoForm;
