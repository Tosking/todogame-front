import React, { useState } from "react";
import Header from "components/Header";
import MainContent from "components/Maincontent";
import Button from "components/Button";

import "styleComponents/MainPage.css";
import "styleComponents/Main.css";
import { ReactComponent as Account } from "images/account.svg";
import { ReactComponent as Search } from "images/search.svg";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "store/slice/auth";
import NewTask from "components/todo/NewTask";
import TodoList from "components/todo/TodoList";

const Main = () => {
  const user = useSelector(selectCurrentUser);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
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
          <div className="categories">
            <div className="section-name">Categories</div>
            <div className="categories__inner">
              <Button buttonClassName={"category__button"}>
                <div className="category-button__header">{"lol"}</div>
                <div className="category-button__inner">{"kek"}</div>
              </Button>
            </div>
          </div>
          <TodoList />

          <NewTask setOpen={setOpen} open={open} />
          <Button onClick={handleOpen} buttonClassName={"content-create-task"}>
            <span></span>
            <span></span>
          </Button>
        </MainContent>
      </div>
    </div>
  );
};
export default Main;
