import { useState, useEffect } from 'react';
import users from './users.json';

function Child () {

  
    const [tasks, setTasks] = useState(() => {
        const savedTasks = localStorage.getItem('tasks');
        return savedTasks ? JSON.parse(savedTasks) : users;
    });
    
    const [ newTask, setNewTask ] = useState('');
    const [ editaskId, setEditTaskId ] = useState(null);

    useEffect (() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
     },[tasks]);


    const handleAdd = () => {

        if(editaskId !== null ){
            const editedTasks = tasks.map((task) =>{
                return task.id === editaskId ? {...task, name: newTask} : task;
                 }
            );
            setTasks(editedTasks);
            setNewTask('');
            setEditTaskId(null);
            return;

        }
        setTasks([...tasks, {id:Date.now(), name:newTask}]);
        setNewTask('');
    }
    const handleDelete = (id) => {
        const newUpdatedTasks = tasks.filter((task) => id !== task.id);
        setTasks(newUpdatedTasks);

    }

    const handleEdit = (task) => {
        setEditTaskId(task.id);
        setNewTask(task.name);
    }

    return (
        <>
        <input type="text" value={newTask} placeholder="Enter new task" onChange = {(e)=> setNewTask(e.target.value)} ></input>
        <button onClick={handleAdd}> {editaskId === null ? "Add Task" : "Edit Task"}</button>
        <ul>
            {tasks.map((task) => 
               <li key={task.id}>{task.name}
               <span>
               <button onClick = {()=> handleDelete(task.id)}>Delete task</button>
               <button onClick = {()=> handleEdit(task)}>Edit task</button>
               </span>
               </li>
            )}
        </ul>
        </>
    );




}

export default Child;