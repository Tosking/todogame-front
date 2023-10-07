import React from 'react'
import Header from '../../components/Header';
import CategoryButton from './CategoryButton';
import '../../styleComponents/MainPage.css'

const Main = () => {
  return (
    <div className="App">
      <Header burger={true}/>
      <div className='categories'>
        <div className='section-name'>Categories</div>
        <div className="categories__inner">
          <CategoryButton inner="kek" header="lol"/>
        </div>
      </div>

    </div>
  )
}
export default Main;