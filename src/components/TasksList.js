import { useState } from "react";
import Task from "./Task";

function TasksList(){
  const taskItemsList = [
      "Follow Edukashon.ph on Facebook",
      "Follow AWS Siklab Pilipinas on Facebook",
      "Follow Zuitt Coding Bootcamp on Instagram"
  ];

  const [taskValue, setTaskValue] = useState("Just another task");
  console.log("taskValue: ", taskValue);
  const inputChangeHandler = (e) => {
  	setTaskValue(e.target.value)
  };

  return (
    <>
      <input 
      	className="task-input" 
      	placeholder="Create a new Task"
      	onChange={inputChangeHandler}
      />
      <ul>
          {taskItemsList.map((task, index) => {
            //console.log(task, index);
            return <Task key={index} taskName={task} />
          })}
      </ul>
    </>
    
  )
}

export default TasksList;