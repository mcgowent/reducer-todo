import React, { useState } from 'react'

import TodoList from './components/ToDoComponents/TodoList'
// import TodoForm from './components/TodoComponents/TodoForm'

import "./App.css";


const App = () => {


  const [toDoList, setToDoList] = useState([{
    task: 'Sameple Task_2',
    id: 1528817084358,
    completed: false
  }])

  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  const toggleItem = id => {
    setToDoList({
      toDoList: toDoList.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          }
        } else {
          return item
        }
      })
    })
  }

  const addItem = itemTask => {
    const newItem = {
      task: itemTask,
      id: Date.now(),
      completed: false
    }
    setToDoList({
      toDoList: [...toDoList, newItem], todo: ""
    })
  }

  const clearFinished = () => {
    setToDoList({
      toDoList: toDoList.filter(item => !item.completed)
    })
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
          toggleItem={toggleItem}
          addItem={addItem}
        />

      </div>
    </div>
  );
}

export default App;