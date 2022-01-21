import { useState } from "react";
import Task from "./Task";

function TasksList(){
  const [taskItemsList, setTaskItemsList] = useState([
        "Follow Edukashon.ph on Facebook",
        "Follow AWS Siklab Pilipinas on Facebook",
        "Follow Zuitt Coding Bootcamp on Instagram"
    ]);

  const [taskValue, setTaskValue] = useState("");

  // console.log("taskValue: ", taskValue);

  const inputChangeHandler = (e) => {
  	setTaskValue(e.target.value)
  };

  const addTaskHandler = () => {
  	setTaskItemsList([taskValue, ...taskItemsList]);
  	setTaskValue("");
  }

  return (
    <>
      <input 
      	className="task-input" 
      	placeholder="Create a new Task"
      	onChange={inputChangeHandler}
      	onBlur = {addTaskHandler}
      	value = {taskValue}
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