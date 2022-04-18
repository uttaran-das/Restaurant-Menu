import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi'
import MenuCard from './MenuCard'
import NavBar from './NavBar'

const uniqueCategories = ["All",...new Set(Menu.map((curElem) => {return curElem.category;})),];
console.log(uniqueCategories);

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList] = useState(uniqueCategories);

    const filterItem = (category) => {
        if(category==='All') setMenuData(Menu);
        else{
            const updatedList = Menu.filter((curElem) => {return curElem.category===category;});
            setMenuData(updatedList);
        }
    }

  return (
    <>
        <NavBar filterItem={filterItem} menuList={menuList}/>
        <MenuCard menuData={menuData}/>
    </>
  )
}

export default Restaurant