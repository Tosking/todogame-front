import React from "react";
import Button from "components/Button";

const Category = ({ title, description, onClick, children }) => {
  return (
    <Button buttonClassName={"category__button"} onClick={onClick}>
      {children ? (
        children
      ) : (
        <>
          <div className="category-button__header">{title}</div>
          <div className="category-button__inner">{description}</div>
        </>
      )}
    </Button>
  );
};
export default Category;
