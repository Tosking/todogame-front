import React, { useState } from "react";
import { Checkbox } from "pretty-checkbox-react";
import "pretty-checkbox/dist/pretty-checkbox.css";
import "styleComponents/Subtask.css";
import { ReactComponent as EditTask } from "images/edittask.svg";
import { ReactComponent as Add } from "images/add.svg";
import { ReactComponent as Remove } from "images/remove.svg";

const Task = ({ children, title }) => {
  const [open, setOpen] = useState(false);

  const setVisibleInfoTask = () => {
    setOpen((value) => !value);
  };
  return (
    <div className="task">
      <div className="task__inner">
        <Checkbox
          style={{ fontSize: "30px", marginRight: "10px" }}
          shape="round"
          color="success"
          animation="pulse"
        />
        <div className="task__content" onClick={setVisibleInfoTask}>
          <div className="task-content__text">
            <span className="task-content__name">{title}</span>
            {open && <div className="task-content__about"> {children}</div>}
          </div>
        </div>
        <svg
          style={open ? { transform: "rotate(180deg)" } : {}}
          width="30"
          height="30"
          viewBox="0 0 30 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M22 10C22 10 17.56 18 14.5 18C11.4411 18 7 10 7 10"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      {open && (
        <>
          <div className="subtasks">
            <div className="subtasks__inner">
              <div className="subtask">
                <Checkbox
                  style={{ fontSize: "15px", marginRight: "10px" }}
                  shape="round"
                  color="success"
                  animation="pulse"
                />
                <span>Name Subtask</span>
              </div>
              <div className="subtask">
                <Checkbox
                  style={{ fontSize: "15px", marginRight: "10px" }}
                  shape="round"
                  color="success"
                  animation="pulse"
                />
                <span>Name Subtask</span>
              </div>
            </div>
          </div>

          <div className="task-settings">
            <div className="settings__inner">
              <EditTask />
              <Add />
              <Remove />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Task;
