import React, { useEffect } from "react";
import Header from "components/Header";
import MainContent from "components/Maincontent";
import Button from "components/Button";

import { ReactComponent as Account } from "images/account.svg";
import { ReactComponent as Search } from "images/search.svg";
import { useDispatch } from "react-redux";

import TodoList from "components/todo/TodoList";
import Categories from "components/category/Categories";

import "styleComponents/MainPage.css";
import "styleComponents/Main.css";
import TaskModal from "components/todo/TaskModal";
import { getTodos } from "store/slice/todos";
import { useGetTodosMutation } from "store/slice/todos/todosSlice";
import { setTodos } from "store/slice/todos";
import { setCategories } from "store/slice/category";
import { useAuth } from "utils/hook";
import Loader from "components/loader/Loader";

const Main = () => {
  const [getTodoss, isLoading] = useGetTodosMutation();
  const dispatch = useDispatch();
  const todos = dispatch(getTodos);
  const { token, user } = useAuth();
  useEffect(() => {
    (async () => {
      try {
        if (!todos) {
          const getTodosFromServer = await getTodoss().unwrap();
          dispatch(setTodos(getTodosFromServer));
          dispatch(setCategories(getTodosFromServer));
        }
      } catch (err) {
        console.log(err);
      }
    })();
  }, [todos, token]);
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
          {!isLoading.isLoading ? (
            <>
              <Categories />
              <TodoList />
              <TaskModal />
            </>
          ) : (
            <Loader />
          )}
        </MainContent>
      </div>
    </div>
  );
};
export default Main;
