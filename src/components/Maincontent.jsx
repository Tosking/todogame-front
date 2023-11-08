import React from "react";

const MainContent = ({ children, contentClassName, addTask }) => {
  return (
    <div
      className={
        "content " + (!!contentClassName ? contentClassName + "-content" : "")
      }
    >
      <div className="content__inner container">{children}</div>
    </div>
  );
};

export default MainContent;
