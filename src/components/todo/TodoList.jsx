import Task from "components/todo/Task";
import React from "react";
import { useSelector } from "react-redux";
import { getTodos } from "store/slice/todos";

const TodoList = () => {
  const todos = useSelector(getTodos) || [];
  return (
    <div className="tasks">
      <div className="section-name">Tasks</div>
      {todos.map((value) => {
        return (
          <Task key={value.title} title={value.title}>
            {value.description}
          </Task>
        );
      })}
    </div>
  );
};

export default TodoList;
