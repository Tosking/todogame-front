import React from "react";
import Header from "components/Header";
import MainContent from "components/Maincontent";
import Button from "components/Button";
import Task from "components/Task";

import "styleComponents/MainPage.css";
import "styleComponents/Main.css";

import account from "images/account.svg";
import search from "images/search.svg";
import { useSelector } from "react-redux";

const Main = () => {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="main-page">
      <div className={"main-page__inner container"}>
        <Header burger={true}>
          <div className="header-inner__profile">
            <Button buttonClassName={"profile__search"}>
              <img alt="#" src={search} />
            </Button>
            <Button buttonClassName={"profile__account"}>
              <img alt="#" src={account} />
            </Button>
          </div>
        </Header>
        <MainContent contentClassName={"main-page"} addTask={true}>
          <h1 className="content-header content-header_gradient">
            {"Hello," + user.login}
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
          <div className="tasks">
            <div className="section-name">Tasks</div>
            <Task>Eugene</Task>
            <Task>Danil</Task>
            <Task>Rodion</Task>
            <Task>Nastya</Task>
            <Task>Vova</Task>
          </div>
        </MainContent>
      </div>
    </div>
  );
};
export default Main;
