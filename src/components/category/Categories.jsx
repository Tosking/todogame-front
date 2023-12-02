import React from "react";
import Category from "./Category";
import { useSelector } from "react-redux";
import { getCategories } from "store/slice/category";
import { useId } from "react";
import CreateCategory from "./CreateCategory";
const Categories = () => {
  const categories = useSelector(getCategories);
  const id = useId();
  return (
    <div className="categories">
      <div className="section-name">Categories</div>
      <div className="categories__inner">
        {categories.map((category, index) => {
          return (
            <Category
              key={`${id}-${index}`}
              title={category.title}
              description={category.description}
            />
          );
        })}
        <CreateCategory />
      </div>
    </div>
  );
};
export default Categories;
