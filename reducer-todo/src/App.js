import React, { useState, useReducer } from 'react'
import TodoList from './components/ToDoComponents/TodoList'

import { initialState, theReducer } from './reducers/reducers'
import "./App.css";


const App = () => {

  const [state, dispatch] = useReducer(theReducer, initialState);

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state


  const addItem = itemTask => {
    dispatch({ type: 'ADD_ITEM', payload: itemTask })
  }

  const clearFinished = () => {
    setToDoList(toDoList.filter(item => !item.completed))
  }

  return (
    <div className="app">
      <div className="text">
        <h2>Track your Todo's!</h2>
        <p>Click to Finish a Task</p>
      </div>
      <div className='test'>
        <TodoList
          clearFinished={clearFinished}
          toDoList={toDoList}
          addItem={addItem}
        />

      </div>
    </div>
  );
}

export default App;