import React, { useState } from "react";
import Header from "components/Header";
import MainContent from "components/Maincontent";
import Button from "components/Button";

import { ReactComponent as Account } from "images/account.svg";
import { ReactComponent as Search } from "images/search.svg";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "store/slice/auth";
import TodoList from "components/todo/TodoList";
import Categories from "components/category/Categories";

import "styleComponents/MainPage.css";
import "styleComponents/Main.css";
import TaskModal from "components/todo/TaskModal";
const Main = () => {
  const user = useSelector(selectCurrentUser);

  return (
    <div className="main-page">
      <div className={"main-page__inner container"}>
        <Header burger={true}>
          <div className="header-inner__profile">
            <Button buttonClassName={"profile__search"}>
              {/* <img alt="#" src={search} /> */}
              <Search />
            </Button>
            <Button buttonClassName={"profile__account"}>
              {/* <img alt="#" src={account} /> */}
              <Account />
            </Button>
          </div>
        </Header>
        <MainContent contentClassName={"main-page"} addTask={true}>
          <h1 className="content-header content-header_gradient">
            {"Hello," + user}
          </h1>
          <Categories />
          <TodoList />
          <TaskModal />
        </MainContent>
      </div>
    </div>
  );
};
export default Main;
