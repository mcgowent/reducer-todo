import React, { useReducer } from 'react'
import TodoList from './components/ToDoComponents/TodoList'

import { initialState, theReducer } from './reducers/reducers'
import "./App.css";


const App = () => {
  const [state, dispatch] = useReducer(theReducer, initialState);
  return (
    <div className="app">
      <div className="text">
        <h2>Track your Todo's!</h2>
        <p>Made with useReducer for State</p>
      </div>
      <div className='test'>
        <TodoList
          toDoList={state.toDoList}
          state={state}
          dispatch={dispatch}
        />

      </div>
    </div>
  );
}

export default App;