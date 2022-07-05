import React,{useState} from 'react';

import Menu from './components/Menu';

import Catogories from './components/Catogories';

import courses from './data';

const allCategories = [...new Set(courses.map((course) => course.category))];
allCategories.unshift('All');
// to add it in a an array or you can use spread and add allCategories = ['All',...courses.map((course) => course.category)]
const App = () => {
  const [menuItems,setMenuItems] = useState(courses);
  const [categories,setCategories] = useState(allCategories)
const filterItems = (category)=>{
  if (category === 'All'){
    setMenuItems(courses);
    return;
  }else{
    const newCourses = courses.filter((course) =>{
      return course.category === category;
    });
    setMenuItems(newCourses);
  }
  
  }
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>My Courses</h2>
          <div className="underline"></div>
        </div>
        <Catogories categories={categories} menuItems = {menuItems} filterItems = {filterItems}/>
        <Menu menuItems = {menuItems}/>
      </section>
    </main>
  )
}

export default App
