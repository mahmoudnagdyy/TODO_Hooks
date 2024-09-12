import React, { useState } from 'react';
import './App.css';
import Form from './components/Form/Form';
import Task from './components/Task/Task';

function App() {
  
  const [tasks, setTasks] = useState([]);
  
  
  const inputHandler = (task) => {
    setTasks([...tasks, task])
  }
  
  const taskDelete = (index) => {
    const newTasks = tasks.filter((el, i) => i !== index);
    setTasks(newTasks)
  }
  
  
  const tasksDisplay = tasks.map(({task}, index)=>{
    return <Task task={task} taskDelete = {taskDelete} index = {index} key={index} />
  })
  
  
  return (
    <div className="App">
      
      <h1 className='focus-in-contract-bck mt-24 text-center capitalize text-5xl font-bold todo'>to do list</h1>
      
      <Form inputHandler = {inputHandler} />
      {tasksDisplay}
    </div>
  );
}

export default App;
