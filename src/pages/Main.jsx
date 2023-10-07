import React from 'react'
import Header from 'components/Header';
import "styleComponents/Main.css"
import MainContent from 'components/Maincontent';
import AnimatedPage from 'components/Animated';
import CategoryButton from 'components/CategoryButton';
import Task from 'components/Task';
import 'styleComponents/MainPage.css'



const Main = () => {
  return (
   
    <div className="App">
      <div className="main-page">
        <div className={"main-page__inner container"}>
          <Header burger={true}/>
          <MainContent contentClassName={"main-page"}>
            <h1 className='type-auth'>Hello, sign in or register!</h1>
            <div className='categories'>
              <div className='section-name'>Categories</div>
              <div className="categories__inner">
                <CategoryButton inner="kek" header="lol"/>
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