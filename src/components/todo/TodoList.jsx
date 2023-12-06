import Task from "components/todo/Task";
import React, { useId } from "react";
import { useSelector } from "react-redux";
import { getTodos } from "store/slice/todos";
import Button from "components/Button";
const TodoList = () => {
  const todos = useSelector(getTodos) || [];
  const taskId = useId();
  return (
    <div className="tasks">
      <div className="section-name">Tasks</div>
      {todos.map((value, index) => {
        return (
          <Task
            key={`${taskId}-${index}`}
            title={value.title}
            idTask={value.id}
          >
            {value.description}
          </Task>
        );
      })}
    </div>
  );
};

export default TodoList;
