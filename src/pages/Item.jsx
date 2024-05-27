import React from 'react'
import Navbar from '../components/Navbar'
import FilteredItems from '../components/FilteredItems'
import MyFooter from '../components/MyFooter'
import { Route } from 'react-router-dom'

const Item = () => {

  // console.log(props)
  return (
    <div>
      {/* <Navbar/> */}
     <FilteredItems/>
      {/* <MyFooter/> */}
    </div>
  )
}

export default Item