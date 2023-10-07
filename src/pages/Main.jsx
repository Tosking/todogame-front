import React from 'react'
import Header from 'components/Header';
import "styleComponents/Main.css"
import MainContent from 'components/Maincontent';
import AnimatedPage from 'components/Animated';
import CategoryButton from 'components/CategoryButton';
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
            </MainContent>
          
        </div>
     
      </div>
     
    </div>
  )
}
export default Main;