import React from 'react'
import Header from 'components/Header';
import "styleComponents/Main.css"
import MainContent from 'components/Maincontent';
import AnimatedPage from 'components/Animated';



const Main = () => {
  return (
   
    <div className="App">
      <div className="main-page">
        <AnimatedPage className={"main-page__inner container"}>
          <Header burger={true}/>
          <MainContent contentClassName={"main-page"}><h1 className='type-auth'>Hello, sign in or register!</h1></MainContent>
        </AnimatedPage>
      </div>
     
    </div>
  )
}
export default Main;