import React from 'react'
import Header from 'components/Header';
import "styleComponents/Main.css"
import MainContent from 'components/Maincontent';

import Task from 'components/Task';
import 'styleComponents/MainPage.css'
import Button from 'components/Button';


const Main = () => {
  return (
   
    <div className="App">
      <div className="main-page">
        <div className={"main-page__inner container"}>
          <Header burger={true}/>
          <MainContent contentClassName={"main-page"} addTask={true}>
            
            <h1 className='content-header content-header_gradient'>Hello, sign in or register!</h1>
            <div className='categories'>
              <div className='section-name'>Categories</div>
              <div className="categories__inner">
                <Button buttonClassName={"category__button"}>
                    <div className="category-button__header">
                        {"lol"}
                    </div>
                    <div className="category-button__inner">
                        {"kek"}
                    </div>
                </Button>
      
              </div>
            </div>
            <div className="tasks">
              <div className='section-name'>Tasks</div>
              <Task>Mem</Task>
              <Task>Ya</Task>
              <Task>Zaebalsya</Task>
              <Task>Test</Task>
              <Task>Кто прочитал тот лох</Task>
            </div>
            </MainContent>
          
        </div>
     
      </div>
     
    </div>
  )
}
export default Main;