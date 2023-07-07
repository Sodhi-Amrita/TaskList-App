

type QuantityProps ={
    task:string[];
    
} 


const Quantity = ({task}: QuantityProps) => {

    

  return (
    
      <div className="taskContainer">
        <ul className="t1">
                {task.map((i) => (
                    <li>{i}</li>
                ))}
                </ul>
      </div>
   
  )
}

export default Quantity
