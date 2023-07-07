import React from 'react'
import { useState } from 'react';



type AddTaskFormProps = {
    onAddTask: (title:string,tasks:string[]) => void;
}

 const TaskForm = ({onAddTask}:AddTaskFormProps) => {

    const[title, setTitle]=useState('');

    const[tasks, setTasks] = useState<string[]>([]);

    const handleSubmit =(e:React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        onAddTask(title, tasks);
        setTitle('');
        setTasks([]);
    }

  return (
    <div>
        <form className='form' onSubmit={handleSubmit}>
            <label> Enter Title </label>
            <input type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} ></input>
            &nbsp; &nbsp;


            <label> Add Tasks </label>
            <input type="text" placeholder='Enter Taks' value={tasks} onChange={(e) => setTasks(e.target.value.split(','))} ></input>
            &nbsp;
            <button className='btn-tf'> Add Tasks </button>

        </form>
    </div>
  )
}

export default TaskForm;
