import React from 'react'
import Navbar from '../components/Navbar'
import FilteredItems from '../components/FilteredItems'
import MyFooter from '../components/MyFooter'

const Item = () => {
  return (
    <div>
      <Navbar/>
      <FilteredItems/>
      <MyFooter/>
    </div>
  )
}

export default Item