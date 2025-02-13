import React, { useState } from "react";

export default function ToDoList() {
  const [tasks, setTask] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  function handleTaskAdd() {
    const newTask = document.getElementById("input-task").value;
    if(newTask!=="") {
      if(editIndex!==null){
        const updatedTasks=[...tasks];
        updatedTasks[editIndex]=newTask;
        setTask(updatedTasks);
        setEditIndex(null); 
      }
      else{
        setTask(t => [...t, newTask]);
      }
      document.getElementById("input-task").value="";
    }
  }

  function handleTaskEdit(index) {
    document.getElementById("input-task").value=tasks[index];
    setEditIndex(index);
    
  }
  // To be re-Finalized for delete, edit, check
  function handleTaskRemove(index) {
    setTask(tasks.filter((_,i) => i!==index));
  }

  return (
    <>
      <div className="container">
        <h1 className="title">Create your ToDo List</h1>
        <div className="input-box">
          <input type="text" id="input-task" placeholder="What are your tasks for today?" />
          <button className="add-task-btn" onClick={handleTaskAdd}>
            Add
          </button>
          <br />
        </div>
        <ul className="task-ul-list">
          {tasks.map((task, index) => (
            <li key={index} className='task-li-list'>
              <div className="task-item">
              

                {task}
              </div>

              <div className="task-list-btn">
              <input type="checkbox" id={index} />
                <button className="list-btn edit-btn" 
                      onClick={() => handleTaskEdit(index)}>Edit</button>
                <button className="list-btn delete-btn" 
                      onClick={() => handleTaskRemove(index)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
