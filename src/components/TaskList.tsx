import Task from "./Task";

type taskListProps ={
  title: string;
  tasks: string[];
  id: number;
  onDelete: (id: number) => void;
 
}

const TaskList = ({title,tasks, id, onDelete}: taskListProps ) => {
   
    return (
      <div className="taskContainer">
        <button  className='btn-tasklist' onClick={() => onDelete(id)}>X</button>
        <span className="title"><b>{title}</b></span>
        <Task  task  ={tasks}/>
      </div>
    );
  };

  export default TaskList;