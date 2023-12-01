import React from "react";
import Button from "components/Button";
const Category = ({ title, description }) => {
  return (
    <Button buttonClassName={"category__button"}>
      <div className="category-button__header">{title}</div>
      <div className="category-button__inner">{description}</div>
    </Button>
  );
};
export default Category;
