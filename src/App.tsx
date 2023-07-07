import { useContext, useState } from 'react';
import Header from './components/Header';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { v4 } from 'uuid';
import Search from './components/Search';
import {TextContext} from './context/ColorContext';



const App = () => {

 const {color, changeColor} = useContext(TextContext);
  const [search, setSearch] = useState('');
  const [tasklist, setTask] = useState([

    {
   
    title: 'Humber',
   
    tasks: ['Task 1', 'Task 2', 'Task 3'],
   
    id: 1,
   
    },
   
    {
   
    title: 'MERN',
   
    tasks: ['Lab', 'Project', 'Quiz'],
   
    id: 2,
   
    },
   
    {
   
    title: 'Java',
   
    tasks: ['Group Discussion', 'Exam', 'Assignment'],
   
    id: 3,
   
    },
   
    ]
  )

  const totalTask = tasklist.reduce((acc, current) => acc + current.tasks.length, 0);
  function handleDelete(id: number)
  {
      setTask((prev) => prev.filter((g) => g.id !== id))
  }

  function addTasks(title:string, tasks:string[])
  {
   
    setTask((prevState) => [...prevState,{title: title, tasks: tasks , id: v4()},])
  }

  function searchTask(title: string)
  {
    if(title)
    {
      setSearch(title)
    }
  }

  return (

    

    <div>
      <TaskForm onAddTask={addTasks}/>
     <Search onSearch={searchTask}/>
     <button onClick={changeColor}>Change Header Color</button>
     <div className={`Header ${color}`}>
      <Header title={'Task List'} totalTasks={totalTask} />
      </div>
      {tasklist.filter((t) => t.title.toLowerCase().includes(search.toLowerCase()) || 
      t.tasks.some((task) => task.toLowerCase().includes(search.toLowerCase())))
      .map((g) => (
        <TaskList title={g.title} tasks={g.tasks} id={g.id
        } key={g.id.toString()} onDelete={handleDelete} />

      ))}
    </div>

  )
}

export default App