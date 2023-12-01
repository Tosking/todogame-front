import React from "react";
import Category from "./Category";
import { useSelector } from "react-redux";
import { getCategories } from "store/slice/category";
import { useId } from "react";

const Categories = () => {
  const categories = useSelector(getCategories);
  const categoryId = useId();
  return (
    <div className="categories">
      <div className="section-name">Categories</div>
      <div className="categories__inner">
        {categories.map((category) => {
          return (
            <Category
              key={categoryId}
              title={category.title}
              description={category.description}
            />
          );
        })}
      </div>
    </div>
  );
};
export default Categories;
